# Orbit 369 Media — Website

A production-quality marketing website for **Orbit 369 Media Pvt Ltd**, a boutique digital media & creative agency. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom brand design system
- **Framer Motion** for animation (with full `prefers-reduced-motion` fallbacks)
- **next/font** (Cormorant Garamond + Inter) and **next/image**
- SEO via the Metadata API, `sitemap.ts`, `robots.ts`, and JSON-LD

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project Structure

```
app/                    # App Router pages + API routes
  layout.tsx            # Root layout (fonts, cosmic bg, header, footer, JSON-LD)
  page.tsx              # Home
  services/             # Services + FAQ
  work/                 # Case studies (filterable grid + modal)
  about/                # Studio story, values, founder
  careers/              # Open roles + general application
  contact/              # Contact form + details + map block
  api/contact/route.ts  # Placeholder contact handler
  sitemap.ts            # sitemap.xml
  robots.ts             # robots.txt
components/
  layout/               # Header, Footer, CosmicBackground, CursorGlow, etc.
  sections/             # Home page sections (Hero, ServicesPreview, etc.)
  ui/                   # Reusable primitives (OrbitRing, GlassCard, Reveal, etc.)
  widgets/              # ContactForm, ChatWidget, WorkGrid, NewsletterCapture
  seo/                  # JsonLd, Breadcrumbs
lib/
  data/                 # All editable content (services, case studies, etc.)
  utils/                # cn(), motion variants
public/                 # Optimized logos, favicon, OG image, manifest
```

## Editing Content

All copy and data live in `lib/data/` so non-developers can edit without touching components:

| File | Contents |
|------|----------|
| `site.ts` | Site name, contact details, nav, social links, regions |
| `services.ts` | 8 services (title, description, deliverables, ideal-for) |
| `caseStudies.ts` | 5 case studies (client, industry, result, narrative) |
| `testimonials.ts` | 3 testimonials |
| `careers.ts` | Open roles |
| `faq.ts` | 6 FAQ items (rendered + FAQPage JSON-LD) |
| `clients.ts` | Client wordmarks + home stats |
| `process.ts` | 5 process steps |

---

## ⚠️ PLACEHOLDER CONTENT — Replace Before Launch

This is a real but early-stage startup site. The following are **fictional placeholders** and must be swapped for real content before going live:

### Contact Details (`lib/data/site.ts`)
- **Email:** `hello@orbit369media.com` — replace with the real inbox
- **Phone:** `+91 00000 00000` — replace with the real number
- **Social links** — LinkedIn / Instagram / X / Behance URLs are placeholders

### Case Studies (`lib/data/caseStudies.ts`)
- All 5 clients (Meridian Foods, Northgate Realty, Vireo Health, Kessler & Finch, Lumen Studios) are **fictional**
- All result stats are illustrative, not measured
- Replace with real engagements and verified metrics

### Testimonials (`lib/data/testimonials.ts`)
- All 3 testimonials are **fictional** — attributed to first-name-only fictional people
- Replace with real, permission-cleared client quotes

### Client Wordmarks (`lib/data/clients.ts`)
- All 8 company names are **invented** — none are real brands
- Replace with real client logos/wordmarks where permission exists

### Careers (`lib/data/careers.ts`)
- All 3 roles are **placeholder descriptions**
- Replace with real openings; update the Apply links to a real ATS/process

### Founder (`app/about/page.tsx`)
- `[Founder Name]` is a placeholder — add the real founder name, role, and photo
- The photo slot is a gradient silhouette placeholder

### Contact Form Backend (`app/api/contact/route.ts`)
- Currently `console.log`s submissions and returns success
- **Wire up a real provider** (Resend, SendGrid, ConvertKit, a CRM webhook) before launch
- Recommended env vars: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`

### Newsletter (`components/widgets/NewsletterCapture.tsx`)
- Currently `console.log`s the email
- **Wire up a real provider** (ConvertKit, Mailchimp, Resend Audiences)

### Chat Widget (`components/widgets/ChatWidget.tsx`)
- UI-only — opens a static panel with a canned message
- **Wire up a real provider** (Intercom, Crisp, Tawk.to) before launch

---

## Design System

Defined centrally in `tailwind.config.ts` and `app/globals.css`:

- **Colors:** void `#07080B`, surface `#111318`, gold `#C9A05C→#E8C077`, ember `#FF7A33→#FFB25C`, ink `#F5F3EF` / muted `#A8ACB4`
- **Fonts:** Cormorant Garamond (serif headings), Inter (sans body)
- **Keyframes:** `orbit-spin`, `fade-up`, `twinkle`, `float`, `gradient-sheen`, `pulse-glow` — all paused under `prefers-reduced-motion`
- **The OrbitRing SVG** (`components/ui/OrbitRing.tsx`) recreates the logo motif crisply at any size

## Accessibility

- WCAG 2.2 AA color contrast targets (gold-on-black, gray-on-black checked)
- Keyboard-navigable nav with branded gold focus-visible rings
- `aria-label`s on all icon-only buttons
- Reduced-motion fallbacks for every animation
- Semantic HTML (`<nav>`, `<main>`, `<footer>`, heading hierarchy, alt text)

## SEO

- Per-route Metadata (title, description, canonical, OpenGraph, Twitter)
- `sitemap.xml` and `robots.txt` via Next file conventions
- JSON-LD: `Organization` + `WebSite` (sitewide), `Service` + `FAQPage` (services), `BreadcrumbList` (inner pages)

## Performance

- Hero uses CSS/SVG (no heavy video), logos served as optimized WebP via `next/image`
- Starfield canvas is capped at ~140 points and pauses under reduced motion
- No layout-shifting animations; `whileInView` reveals use transform/opacity only

## License

© Orbit 369 Media Pvt Ltd. All rights reserved.