# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sitio web profesional para **Clínica de Rehabilitación del Valle S.A.S**, una clínica especializada en servicios de rehabilitación integral ubicada en Tuluá, Valle del Cauca, Colombia.

## Technology Stack

- **Framework:** Next.js 14+ (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** DigitalOcean App Platform (static site export)

## Project Structure

```
crv-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with metadata
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   └── styles/
│       └── globals.css   # Global styles with Tailwind
├── public/
│   ├── images/           # Logo and images
│   └── videos/           # Promotional videos
├── media/                # Original media files (source)
└── .do/
    └── app.yaml          # DigitalOcean App Platform config
```

## Client Information

**Clínica de Rehabilitación del Valle S.A.S**

- **Servicios:** Fisioterapia, Fonoaudiología, Medicina Física y Rehabilitación, Psicología
- **Ubicación Principal:** Cra. 33A # 24-75, Tuluá, Valle del Cauca
- **Sede 2:** Calle 27 No. 36-24 Victoria, Tuluá
- **Teléfonos:** 602 225 1432, 2352811, 2352809
- **WhatsApp:** 316 324 2696
- **Email:** admisionesclirehavalle@gmail.com
- **Seguros:** Allianz, Coomeva

## Common Development Commands

### Development
```bash
npm install              # Install dependencies
npm run dev             # Start development server (http://localhost:3000)
```

### Build & Deploy
```bash
npm run build           # Build for production (static export to /out)
npm run lint            # Run ESLint
```

### Testing Locally
After building, you can serve the static site:
```bash
npx serve out           # Serve the static build locally
```

## Deployment

The site is configured for deployment on **DigitalOcean App Platform** as a static site.

### Deployment Configuration
- Configuration file: `.do/app.yaml`
- Build command: `npm run build`
- Output directory: `out`
- Auto-deploy: Enabled on push to `main` branch

### Deploy Steps
1. Push changes to the `main` branch on GitHub
2. DigitalOcean App Platform automatically builds and deploys
3. Static files are served from the `/out` directory

## Design Colors

Based on the clinic's branding:
- **Primary Blue:** #003DA5
- **Light Blue:** #00A8E8

These colors are configured in `tailwind.config.ts` and `globals.css`.

## Media Files

Original media files provided by the client are in the `/media` directory:
- Logo files (PNG and JPG versions)
- Promotional video
- Model of medical assistance diagram

Public assets are copied to `/public` directory for use in the website.

## Notes

- The site uses Next.js static export (`output: 'export'`) to generate a fully static site
- Images are set to `unoptimized: true` for static hosting compatibility
- All pages use Spanish language (`lang="es"`)
- SEO metadata is configured in the root layout
