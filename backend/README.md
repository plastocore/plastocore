# Plastocore Backend

FastAPI service for the Plastocore website. It stores contact requests and status checks in MongoDB and can send contact notifications through Resend.

## Setup

From this directory:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

Edit `.env` with values for your local environment:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=plastocore
RESEND_API_KEY=
```

`RESEND_API_KEY` is optional. Without it, contact requests are still stored in MongoDB but email delivery is skipped. Never commit `.env` or place real credentials in documentation.

## Run the API

```bash
uvicorn server:app --reload --port 8000
```

- API base URL: `http://localhost:8000/api`
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Endpoints

| Method | Endpoint       | Description                                        |
| ------ | -------------- | -------------------------------------------------- |
| `GET`  | `/api/`        | Return a basic API response                        |
| `GET`  | `/api/status`  | Return up to 1,000 status checks                   |
| `POST` | `/api/status`  | Create a status check                              |
| `POST` | `/api/contact` | Store a contact request and attempt email delivery |

Example status request:

```bash
curl -X POST http://localhost:8000/api/status \
  -H 'Content-Type: application/json' \
  -d '{"client_name":"local development"}'
```

## Contact Request Fields

`POST /api/contact` accepts JSON with these fields:

```json
{
  "name": "Example Company",
  "email": "contact@example.com",
  "phone": "+91 00000 00000",
  "company": "Example Company",
  "productInterest": "Wire Harness",
  "message": "Please share a quotation."
}
```

The request is saved in the `contact_requests` MongoDB collection. When Resend is configured, the service attempts to notify `info@plastocore.com`.

## Development Notes

- The application loads environment variables from `backend/.env`.
- CORS is currently open to all origins for development and should be restricted before production deployment.
- Keep API keys and MongoDB credentials outside version control.