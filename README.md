# LinkForge (Frontend only)

This repository contains a React + Vite + Tailwind frontend demo for a freelancer marketplace (clients can buy services from freelancers).

## Features (UI only)
- Landing page with hero and popular services
- Services listing, filtering, and search
- Service detail with buy flow (checkout + invoice)
- Auth UI (login/register/forgot password) — uses seeded mock users and localStorage for auth
- Dashboards for clients and freelancers (UI only)
- Profile management for freelancers/clients
- Post project form (UI-only)
- Orders listing, Messaging UI, Admin panel placeholder, About/Contact/FAQ/Terms pages
- Payment form (dummy — no real payment integration)


## Quick start
```bash
cd freelance-marketplace-frontend
npm install
npm run dev
```

If you see missing-package errors (e.g. `@vitejs/plugin-react`), run:
```bash
npm install -D @vitejs/plugin-react
```

Tailwind is configured and injected through PostCSS + Vite. Replace mock data in `src/data/mock.js` with real API calls to connect a backend.
