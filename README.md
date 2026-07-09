# Studio Moire — Wix Headless site

A fashion photography studio in Casablanca, Morocco, built as a **Wix Headless** site (Astro).
The whole identity is built around one detail: *every garment is photographed beside its fabric
samples before the model steps in* — true colour, weave, and weight on record before a shoot.

**Live:** https://studio-moi-c05bb3b9-netanelc.wix-site-host.com/

## Features

- **Portfolio** — CMS-driven grid of 10 projects with pricing, timing, availability, and a client-side filter (`@wix/data`).
- **Book a shoot** — real Wix Bookings flow: service catalog → availability calendar → schema-driven booking form → cart/checkout → confirmation (`@wix/bookings`, `@wix/forms`, `@wix/redirects`, ecom Cart V2).
- **Ask a question** — inquiry form that creates CRM contacts (`@wix/forms`).
- **Members area** — sign in and save shoot preferences (`@wix/members` + `@wix/data`).
- **Proof** — testimonials + FAQ (CMS), with `ProfessionalService` / `ItemList` / `FAQPage` JSON-LD.
- Mobile-first, accessible (visible focus, 44px targets, reduced-motion), warm Moroccan design system, hero photoshoot slideshow.

## Tech

Astro (SSR) · Tailwind v4 · Wix Headless SDK (`@wix/data`, `@wix/bookings`, `@wix/forms`, `@wix/members`, `@wix/essentials`) · Cormorant Garamond + Albert Sans.

## Develop

```bash
npm install
npx @wix/cli@latest login          # authenticate with Wix
npx @wix/cli@latest env pull --json
npm run dev                         # http://localhost:4321
```

## Build & deploy

```bash
npx @wix/cli@latest build
npx @wix/cli@latest release
```

## Notes

- `.env.local` (Wix client secret) is gitignored — pull it with `wix env pull`.
- Wix Headless skill tooling (`.agents/`) is gitignored; reinstall with `wix skills add`.
- Booking availability comes from the studio's working hours configured in the Wix dashboard.
