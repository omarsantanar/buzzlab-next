
# BuzzLab (Next.js on Vercel)

## Setup
```bash
npm install
cp .env.example .env
# for dev, sqlite is fine
npx prisma migrate dev --name init
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel
- Push this repo to GitHub
- Import in Vercel
- Set env var: `DATABASE_URL` (SQLite works; for prod use Postgres like Neon)
- Build and deploy

## Embeds
Give this snippet to third-parties:
```html
<div id="buzzlab-embed" data-slug="cafecito"></div>
<script src="https://YOUR-DOMAIN/loader.js" async></script>
```
