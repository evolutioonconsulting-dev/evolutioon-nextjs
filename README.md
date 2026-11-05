# EvoluTioon Strategic Group — Next.js 15 Website

A full server-rendered rebuild of the EvoluTioon site on **Next.js 15 (App
Router)**, preserving the premium forest-green / gold design language, with
SEO built in at the framework level.

## What's included

**Pages (all server components, statically/dynamically rendered):**
- `/` — Home
- `/about` — About
- `/team` — Team
- `/services` — Services overview (9 service lines)
- `/services/leadership-executive-coaching` — Coaching detail page
- `/insights` — Insights listing
- `/insights/[slug]` — 6 dynamic article pages, each with unique metadata + JSON-LD
- `/events` — Events (upcoming + past)
- `/contact` — Contact page with working form
- `/privacy`, `/terms` — legal pages

**SEO:**
- Every page exports unique `<title>` + `<meta description>` via `generateMetadata`/`export const metadata`
- `app/sitemap.ts` → generates `/sitemap.xml` with all page + article URLs
- `app/robots.ts` → generates `/robots.txt` pointing at the sitemap
- JSON-LD structured data: `ProfessionalService` (Organization) on every page, `Article` + `BreadcrumbList` on each insight
- Canonical URLs + Open Graph/Twitter cards on every page

**Interactivity (client components, rest is server-rendered):**
- `Navbar` — sticky, active-link aware, mobile menu
- `TestimonialCarousel`
- `Faq` accordion
- `ContactForm` — client-side validation, POSTs to `/api/contact`

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Wiring up the contact form

`app/api/contact/route.ts` currently logs submissions to the console. Swap
in your email provider (Resend, Postmark, SES) or CRM webhook — the
commented-out example uses Resend.

## Before going live

1. **Update `site.url`** in `lib/data.ts` to your real domain — this feeds
   every canonical URL, sitemap entry, and JSON-LD block.
2. **Replace placeholder image blocks** (the gradient `<div>` panels) with
   real photography — drop files in `/public` and swap in `next/image`.
3. **Connect the contact form** to a real email/CRM endpoint.
4. **Deploy** (Vercel is the path of least resistance for Next.js 15).
5. **Submit `sitemap.xml`** to Google Search Console once the domain is live.
6. Consider an admin panel if content (insights/events) needs to be
   editable without a code deploy — right now everything lives in
   `lib/data.ts` for simplicity and fast SSR.

## Design tokens

Defined in `tailwind.config.ts`:
- `forest` — deep green (`#122A22`, gradient to `#1D4033`)
- `cream` — warm off-white background (`#F4ECD8`)
- `gold` — accent (`#C39B4E`)
- Display font: Fraunces (serif) · Body font: Inter (sans)
