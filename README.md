# DsquaredDigital Agency Website

Premium digital marketing agency website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling with custom design tokens)
- **Lucide React** (icons)
- **Formspree** (contact form backend)
- **TidyCal** (booking embed)
- **Google Analytics** (GA4)

## Getting Started

```bash
npm install
npm run dev
```

## Setup Required

### 1. Contact Form (Formspree)
Sign up at [formspree.io](https://formspree.io), create a new form, and replace `YOUR_FORM_ID` in:
- `src/pages/Contact.tsx`
- `src/components/Footer.tsx`

### 2. Hero Video
The hero video (`hero1.mp4`) is excluded from Git due to its file size (~6MB). Host it on a CDN (Cloudflare Stream, Bunny.net, or similar) and update the `src` in `src/pages/Home.tsx`.

### 3. TidyCal Booking
Update the `data-path` in `src/pages/Contact.tsx` to match your actual TidyCal booking URL path.

### 4. Social Media Links
Update social media hrefs in `src/components/Footer.tsx` with your real profile URLs.

## Design Tokens

| Token | Value | Use |
|-------|-------|-----|
| `charcoal-ink` | `#0F1419` | Primary dark / backgrounds |
| `ivory-mist` | `#F9F8F5` | Page background / light text |
| `brass-accent` | `#BFA46F` | Brand accent / CTAs |
| `signal-white` | `#FFFFFF` | Cards / pure white |

## Project Structure

```
src/
  components/     # Header, Footer
  pages/          # Home, About, Services, Pricing, Blog, Contact, Policies
  pages/services/ # Individual service sub-pages
  index.css       # Global styles and design system
  App.tsx         # Root component and navigation state
  main.tsx        # React entry point
public/           # Static assets (logo, favicon)
```

## Deployment

Deploy to Vercel or Netlify with zero configuration. Both support SPA routing out of the box with a `_redirects` or `vercel.json` config if needed.
