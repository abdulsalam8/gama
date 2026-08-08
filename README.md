# ABU MUNIFA APPLE CARE +

Frontend-only iPhone repair & parts website for Lagos. Customers pick parts with pictures, enter name + phone, and checkout opens **WhatsApp** with a pre-filled order message.

No backend — orders live in WhatsApp. A local admin dashboard (optional) stores copies in the browser.

## Quick start

```bash
npm install
cp .env.example .env   # optional — edit site URL & admin PIN
npm run dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173)

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy (Netlify or Vercel)

### Netlify
- Connect repo → build command: `npm run build` → publish: `dist`
- `netlify.toml` and `public/_redirects` handle SPA routing

### Vercel
- Import repo → Vercel auto-detects Vite
- `vercel.json` handles SPA routing

### Environment variables (optional)

| Variable | Purpose |
|----------|---------|
| `VITE_SITE_URL` | Public URL for SEO (e.g. `https://abumunifa.com`) |
| `VITE_ADMIN_PIN` | Staff dashboard PIN (frontend only — not secure) |

Copy `.env.example` to `.env` before building for production.

### After deploy
1. Point custom domain (e.g. `abumunifa.com`) to your host
2. Update `public/sitemap.xml` and `index.html` OG URLs if domain differs
3. Update shop address in `src/data/content.ts` when you have exact location
4. Submit sitemap in Google Search Console

## How orders work

1. Customer uses **Parts** wizard → **Request** page (name + phone)
2. WhatsApp opens with full order details — customer taps **Send**
3. Optionally saved to `localStorage` for admin on **that device only**

## Admin dashboard

- URL: `/admin` (not linked on public site)
- PIN: set in `VITE_ADMIN_PIN` or default in `.env.example`
- **Local only** — does not sync across phones/computers

## Edit business info

`src/data/content.ts` — phone, WhatsApp, address, hours, products, TikTok

Part images: `public/parts/`  
Shop images: `public/products/`

## Features

- Mobile bottom tab navigation
- Simple parts picker (XR → 17 Pro Max)
- WhatsApp checkout
- PWA manifest (add to home screen)
- OG / Twitter meta for link previews
- 404 page, robots.txt, sitemap
- TikTok work gallery

## Stack

Vite 5 · React 18 · TypeScript · Tailwind CSS · React Router 6
# gama
