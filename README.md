# DsquaredDigital Agency Website

Premium digital marketing agency website built with React, TypeScript, Vite, and Tailwind CSS.
Hosted on **Cloudflare Pages**.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (custom design tokens)
- **Lucide React** (icons)
- **Web3Forms** (contact form — works on Cloudflare Pages)
- **TidyCal** (booking embed)
- **Google Analytics** (GA4)

## Getting Started

```bash
npm install
npm run dev
```

## Setup Required

### 1. Contact Form (Web3Forms)
1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address to receive your free access key
3. Replace `YOUR_WEB3FORMS_KEY` in:
   - `src/pages/Contact.tsx`
   - `src/components/Footer.tsx`

Free tier: 250 submissions/month. No account or credit card needed.

### 2. Hero Video
The hero video (`hero1.mp4`) is excluded from Git due to file size. Host it on a CDN
(Cloudflare Stream, Bunny.net, or R2) and update the `src` in `src/pages/Home.tsx`.

### 3. TidyCal Booking
Update `data-path` in `src/pages/Contact.tsx` with your actual TidyCal booking URL path.

### 4. Social Media Links
Update social media `href` values in `src/components/Footer.tsx` with your real URLs.

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
  App.tsx         # Root app and navigation state
  main.tsx        # React entry point
public/
  _redirects      # Cloudflare Pages SPA routing fix
  dsquaredlogo.png
  2.png           # Favicon
```

## Deployment (Cloudflare Pages)

1. Connect your GitHub repo in the Cloudflare Pages dashboard
2. Build command: `npm run build`
3. Output directory: `dist`
4. The `public/_redirects` file handles SPA routing automatically
