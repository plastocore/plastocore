from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Initialize Resend
resend.api_key = os.environ.get('RESEND_API_KEY', '')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: str = ""
    productInterest: str = ""
    message: str

class ContactResponse(BaseModel):
    id: str
    success: bool
    message: str


# Email sending function using Resend
async def send_email_resend(subject: str, html_body: str, to_email: str):
    """Send email using Resend API"""
    try:
        if not resend.api_key or resend.api_key == '':
            logging.warning("Resend API key not configured")
            return False
            
        params = {
            "from": "Plastocore <onboarding@resend.dev>",  # Free tier sender
            "to": [to_email],
            "subject": subject,
            "html": html_body,
        }
        
        email = resend.Emails.send(params)
        logging.info(f"Email sent successfully: {email}")
        return True
    except Exception as e:
        logging.error(f"Resend email failed: {str(e)}")
        return False


# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactRequest):
    """Handle contact form submissions and send email"""
    try:
        # Store in database
        contact_dict = contact.dict()
        contact_dict['id'] = str(uuid.uuid4())
        contact_dict['timestamp'] = datetime.now(timezone.utc)
        contact_dict['status'] = 'new'
        
        await db.contact_requests.insert_one(contact_dict)
        
        # Prepare email content
        email_body = f"""
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
                .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
                .header {{ background: linear-gradient(135deg, #2872af 0%, #2872af 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
                .logo {{ font-size: 28px; font-weight: bold; margin: 0; }}
                .subtitle {{ margin: 5px 0 0 0; opacity: 0.9; font-size: 14px; }}
                .content {{ background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }}
                .field {{ margin-bottom: 20px; }}
                .label {{ font-weight: bold; color: #ea580c; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }}
                .value {{ margin-top: 8px; padding: 15px; background: white; border-left: 4px solid #ea580c; border-radius: 4px; }}
                .footer {{ margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 12px; text-align: center; }}
                .badge {{ display: inline-block; background: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">🔔 New Quote Request</div>
                    <div class="subtitle">Plastocore Website Inquiry</div>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">👤 Customer Name</div>
                        <div class="value">{contact.name}</div>
                    </div>
                    
                    <div class="field">
                        <div class="label">📧 Email Address</div>
                        <div class="value"><a href="mailto:{contact.email}" style="color: #ea580c; text-decoration: none;">{contact.email}</a></div>
                    </div>
                    
                    <div class="field">
                        <div class="label">📞 Phone Number</div>
                        <div class="value"><a href="tel:{contact.phone}" style="color: #ea580c; text-decoration: none;">{contact.phone}</a></div>
                    </div>
                    
                    {f'<div class="field"><div class="label">🏢 Company Name</div><div class="value">{contact.company}</div></div>' if contact.company else ''}
                    
                    {f'<div class="field"><div class="label">📦 Product Interest</div><div class="value"><span class="badge">{contact.productInterest}</span></div></div>' if contact.productInterest else ''}
                    
                    <div class="field">
                        <div class="label">💬 Customer Message</div>
                        <div class="value">{contact.message}</div>
                    </div>
                    
                    <div class="footer">
                        <p><strong>Submission Time:</strong> {datetime.now(timezone.utc).strftime('%d %B %Y, %I:%M %p UTC')}</p>
                        <p><strong>Request ID:</strong> {contact_dict['id']}</p>
                        <p style="margin-top: 20px; color: #9ca3af;">This is an automated notification from your Plastocore website contact form.</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Send email using Resend
        email_sent = await send_email_resend(
            subject=f"🔔 New Quote Request from {contact.name} - Plastocore",
            html_body=email_body,
            to_email="info@plastocore.com"
        )
        
        if not email_sent:
            logging.warning("Email sending failed, but request stored in database")
        
        return ContactResponse(
            id=contact_dict['id'],
            success=True,
            message="Thank you for your inquiry! We will contact you shortly."
        )
        
    except Exception as e:
        logging.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to process contact request")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
