# SAVE INN - Car Repair Shop Website

Professional static website for SAVE INN, a car repair shop in Hamburg, Germany.

## Live Site
- **Production**: https://progorovics.github.io/SaveInn2026/
- **Repository**: https://github.com/progorovics/SaveInn2026

## Tech Stack
- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS v3
- **Deployment**: GitHub Pages
- **Language**: German

## Quick Start

```sh
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```text
/
├── public/              # Static assets (logo, images)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/          # Routes (index, kontakt, impressum, datenschutz)
│   ├── scripts/        # Client-side JavaScript (cookie consent)
│   ├── styles/         # Global CSS and Tailwind config
│   └── config.ts       # Site configuration
└── astro.config.mjs    # Astro configuration
```

## Features
- Responsive design with mobile-first approach
- Cookie consent with localStorage
- Professional brand colors (Reifenmeister)
- SEO optimized static pages
- Fast loading times
- GitHub Pages deployment with automated workflows

## Development Notes
- Base path configured for GitHub Pages (`/SaveInn2026/`)
- Tailwind CSS v3 for styling
- No appointment booking system (by design)
- Contact via phone/email only
