# Raven Strata — Landing Page 

## Deploy to Vercel

1. Unzip this project
2. Push to a GitHub repo
3. Connect the repo to Vercel
4. Vercel auto-detects Next.js and deploys

Or use Vercel CLI:
```bash
npm install
npx vercel
```

## Local Development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Custom Domain (ravenstrata.com)
1. In Vercel dashboard → Settings → Domains → Add `ravenstrata.com`
2. In Squarespace Domains → DNS → Add records Vercel provides
3. Vercel handles SSL automatically

## Files
- `app/page.js` — All page sections (Hero, Features, Letter, Contact, Footer)
- `app/globals.css` — Tailwind + custom animations + fonts
- `app/layout.js` — Root layout with metadata
- `tailwind.config.js` — Brand colors and custom animations

## Brand Colors
- Slate: #1e293b (backgrounds)
- Safety Orange: #ea580c (buttons, accents)
- Slate 950: #0a0f1a (deepest background)

## Contact Form
Currently uses mailto: as fallback. For production, integrate with:
- Formspree.io (free tier)
- Resend.com (free tier)
- Or a Next.js API route → email service
