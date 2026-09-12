# Plastocore

Plastocore is a manufacturing website and product catalogue for wire harnesses, cables, connectors, and mobile accessories. The repository contains a React frontend and a FastAPI backend with MongoDB persistence and optional Resend email notifications.

## Repository Structure

```text
frontend/   React application and product catalogue UI
backend/    FastAPI API, MongoDB integration, and contact-form email delivery
tests/      Backend test package
memory/     Product and project planning documentation
```

## Prerequisites

- Node.js and npm
- Python 3.9 or newer
- A running MongoDB instance
- A Resend account and API key for contact-form email notifications (optional)

## Quick Start

### Start the backend

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env with your MongoDB settings and optional Resend key.
uvicorn server:app --reload --port 8000
```

The API is available at `http://localhost:8000/api`.

### Start the frontend

In a second terminal:

```bash
cd frontend
npm install
npm start
```

The website opens at `http://localhost:3000`.

The contact form uses `http://localhost:8000` locally by default. To use another backend URL, create `frontend/.env.local`:

```env
REACT_APP_BACKEND_URL=https://api.example.com
```

## Main API Endpoints

| Method | Endpoint       | Description                                               |
| ------ | -------------- | --------------------------------------------------------- |
| `GET`  | `/api/`        | API health response                                       |
| `GET`  | `/api/status`  | List status checks                                        |
| `POST` | `/api/status`  | Create a status check                                     |
| `POST` | `/api/contact` | Store a contact request and send an email when configured |

Interactive API documentation is available at `http://localhost:8000/docs` while the backend is running.

## Security

Never commit `.env` files, API keys, database credentials, or other secrets. Use local environment files and rotate any credential that has been exposed.

## Further Documentation

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)
- [Product requirements](memory/PRD.md)
