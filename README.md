# Madina Lucky Bar B.Q & Fast Food — Landing Page

A premium, static, dark-themed landing page built to drive WhatsApp orders.

## Stack
React 19 · Vite · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide React · shadcn/ui-style components

No backend, database, or API — 100% static.

## Getting started

```bash
npm install
npm run dev      # local development at http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

Upload the contents of `dist/` to your hosting after building.

## What to edit

- **`src/config.ts`** — phone number, WhatsApp number, address, hours, Google Maps link, Facebook/Instagram URLs. Every component reads from this one file.
- **`src/data/deals.ts`** — the 4 Featured Deals cards (title, price, image).
- **`src/data/menu.ts`** — the Menu Gallery poster cards + the "popular picks" quick-price strip.
- **`src/data/reviews.ts`** — customer review cards (currently placeholder reviews).
- **`public/deals/`, `public/menu/`, `public/gallery/`** — replace these with your own photos any time; keep the same filenames or update the paths in the data files above.
- **`public/favicon.svg`, `public/og-image.jpg`** — swap for your real logo/share image when ready.

## WhatsApp ordering

Every "Order Now" / WhatsApp button links to:
`https://wa.me/923232638002?text=...` (built in `src/config.ts` via `whatsappOrderUrl()`).
Update the `whatsapp` field in `config.ts` to change the number sitewide.

## Notes

- Fonts (Oswald, Inter, JetBrains Mono) are self-hosted via `@fontsource` — no external font CDN calls at runtime.
- The Google Map in the Location section is an embed pointed at "Sector 5A1 North Karachi" — replace `googleMapsEmbed` in `config.ts` with your exact Google Maps place embed URL for a pinpoint match.
- Menu Gallery shows your real menu poster photos with a lightbox; the "popular picks" strip above it is editable text/price data for quick scanning without opening a poster.
