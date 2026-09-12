# Email Setup Guide for Plastocore Website

## Current Status
✅ Email recipient changed to: **info@plastocore.com**
✅ Logo added as favicon (browser tab icon)
✅ Form submissions are stored in MongoDB database
⏳ Email notifications need API key setup

---

## How to Enable Email Notifications

### Option 1: Resend.com (RECOMMENDED - Free & Easy)

**Why Resend?**
- ✅ Free tier: 100 emails/day, 3,000/month
- ✅ No credit card required for free tier
- ✅ Simple setup (2 minutes)
- ✅ Reliable delivery
- ✅ Works with any email address

**Setup Steps:**

1. **Sign up for Resend**
   - Go to: https://resend.com/signup
   - Sign up with your email
   - Verify your email

2. **Get API Key**
   - After login, go to: https://resend.com/api-keys
   - Click "Create API Key"
   - Name it: "Plastocore Website"
   - Copy the API key (starts with `re_`)

3. **Add API Key to Website**
   - Send me the API key
   - Or add it yourself to: `/app/backend/.env`
   - Add line: `RESEND_API_KEY=re_your_key_here`
   - Restart backend: `sudo supervisorctl restart backend`

4. **Test Email**
   - Fill out contact form on website
   - Email will be sent to info@plastocore.com

**Note:** Free tier uses "onboarding@resend.dev" as sender. To use "info@plastocore.com" as sender, you need to verify your domain (optional, free).

---

### Option 2: Gmail App Password (More Complex)

If you prefer using Gmail to send emails:

1. **Enable 2-Step Verification**
   - Go to: https://myaccount.google.com/security
   - Find "2-Step Verification" and turn it ON
   - Follow the setup wizard

2. **Create App Password**
   - After 2FA is enabled, go to: https://myaccount.google.com/apppasswords
   - Or search for "App Passwords" in Google Account settings
   - Select "Mail" and "Other (Custom name)"
   - Name it: "Plastocore Website"
   - Click "Generate"
   - Copy the 16-character password (no spaces)

3. **Add Credentials**
   - Add to `/app/backend/.env`:
   ```
   SMTP_USERNAME=your-gmail@gmail.com
   SMTP_PASSWORD=xxxx xxxx xxxx xxxx
   ```

**Note:** If you don't see "App Passwords" option:
- Make sure 2-Step Verification is ON
- Wait 5-10 minutes after enabling 2FA
- Try using a different browser
- Ensure you're using a personal Gmail (not workspace/organization account)

---

## Current Form Functionality

**What works NOW without email:**
✅ Form submissions are saved to database
✅ User sees success message
✅ All form data is stored with timestamp
✅ You can view submissions in database

**What happens when email is configured:**
✅ You'll receive instant email notifications at info@plastocore.com
✅ Beautiful HTML email with all customer details
✅ Clickable phone number and email links
✅ Request ID for tracking

---

## Testing the Contact Form

1. Go to: https://plastocore-mfg.preview.emergentagent.com
2. Scroll to "Request a Quote" section
3. Fill in all fields
4. Click "Send Request"
5. You should see: "Thank you for your inquiry!"

**To check submissions in database:**
```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/test_database

# View all contact requests
db.contact_requests.find().pretty()
```

---

## Quick Setup (Recommended)

1. **Get Resend API Key** (2 minutes)
   - Visit: https://resend.com/signup
   - Get free API key
   
2. **Send me the API key or add it yourself**
   - I'll configure it for you
   - Or edit: `/app/backend/.env`
   - Add: `RESEND_API_KEY=re_your_key_here`
   - Restart: `sudo supervisorctl restart backend`

3. **Test** 
   - Submit contact form
   - Check info@plastocore.com for email

---

## Support

If you need help:
- I can set up everything if you provide the Resend API key
- Or I can help troubleshoot Gmail App Password issues
- Alternative: I can build an admin dashboard to view form submissions

**Current email destination:** info@plastocore.com ✅
**Form storage:** Working ✅
**Email sending:** Needs API key ⏳
