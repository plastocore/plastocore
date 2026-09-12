# Plastocore Frontend

React frontend for the Plastocore manufacturing catalogue and contact workflow. It uses Create React App through CRACO, React Router, Tailwind CSS, Radix UI components, and locally defined product data.

## Setup

```bash
npm install
npm start
```

The development server runs at `http://localhost:3000`.

The contact form sends requests to `http://localhost:8000` when the browser is running on localhost. To point it at another backend, create `.env.local` in this directory:

```env
REACT_APP_BACKEND_URL=https://api.example.com
```

Restart the development server after changing environment variables.

## Scripts

| Command         | Description                           |
| --------------- | ------------------------------------- |
| `npm start`     | Start the development server          |
| `npm test`      | Run the test runner                   |
| `npm run build` | Create a production build in `build/` |

## Routes

- `/` - Company landing page and contact form
- `/products/:categorySlug` - Products within a category
- `/product/:productId` - Product details and customization flow

## Key Directories

```text
src/components/   Page sections, product views, and shared UI components
src/data/         Product catalogue data
src/hooks/        Reusable React hooks
src/lib/          Shared utilities
public/           Static assets
```

## Backend Dependency

Run the backend separately using [backend/README.md](../backend/README.md). The frontend currently uses the backend for the contact form at `POST /api/contact`.
