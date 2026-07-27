# Orbit Portfolio

Personal portfolio built with Next.js, Tailwind, and a Turso-backed guestbook.

## Getting started

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Guestbook database (Turso)

Local SQLite works for development, but **Vercel needs a remote DB**. This project uses [Turso](https://turso.tech) (hosted libSQL / SQLite-compatible).

### 1. Create a free Turso database

1. Sign up at [https://app.turso.tech](https://app.turso.tech)
2. Create a database (e.g. `orbit-portfolio`)
3. Open **Connect** and copy:
   - **URL** → `TURSO_DATABASE_URL` (starts with `libsql://`)
   - **Auth token** → `TURSO_AUTH_TOKEN`

### 2. Configure local env

Put both values in `.env`:

```env
DATABASE_URL="file:./dev.db"
TURSO_DATABASE_URL="libsql://your-db-name-your-org.turso.io"
TURSO_AUTH_TOKEN="your-token"
```

### 3. Create the Message table on Turso

```bash
npm run db:turso
```

### 4. Configure Vercel

In the Vercel project → **Settings → Environment Variables**, add:

| Name | Value |
|------|--------|
| `TURSO_DATABASE_URL` | your `libsql://...` URL |
| `TURSO_AUTH_TOKEN` | your Turso auth token |
| `DATABASE_URL` | `file:./dev.db` (used at build/generate time) |

Redeploy after saving.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run db:turso` | Apply guestbook schema to Turso |

## Deploy

Push to `main` on GitHub; Vercel deploys automatically when the project is linked.
