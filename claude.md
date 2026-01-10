# Car Repair Shop Website - Hamburg, Germany

## Project Overview
- **Type**: Static website
- **Client**: Car repair shop in Hamburg, Germany
- **Location**: Hamburg, Germany
- **Date Started**: 2026-01-10

## Project Goals
- Create a professional static website for a car repair shop
- Target audience: Local customers in Hamburg area

## Discussion Notes

### Session 1 - Planning & Implementation (2026-01-10)
- Project initiated
- Static website approach confirmed
- Location: Hamburg, Germany
- Discussed tech stack options (Astro, Vite, Plain HTML)
- Considered security and dependency concerns
- **Decision: Selected Astro framework**
- Initialized Astro project with minimal template
- Project structure created in workspace
- Git repository initialized
- GitHub repository created: https://github.com/progorovics/SaveInn2026
- Initial commit pushed to GitHub
- Analyzed reference website (mein-autozentrum.de)
- Created comprehensive design brief and implementation prompt
- **Feature decisions:** No appointment booking, cookie consent required
- Collected all business information from current website
- Updated contact email to info@save-inn.de
- New responsible person: Felix Koch
- Added Reifenmeister logo and extracted brand colors
- **IMPLEMENTATION COMPLETE:**
  - Created all Astro components (Header, Hero, Services, CTA, Footer, CookieConsent)
  - Built homepage with all sections
  - Created Kontakt, Impressum, and Datenschutz pages
  - Implemented responsive design with brand colors
  - Cookie consent with localStorage functionality
  - Fully functional website ready for deployment

## Decisions Made
- **Tech Stack: Astro** (2026-01-10)
  - Open source (MIT License)
  - Modern static site generator
  - Outputs pure HTML/CSS/JS
  - Fast performance and great SEO
  - Minimal JavaScript shipped to browser
  - Easy deployment options

- **Design Reference** (2026-01-10)
  - Reference website: https://www.mein-autozentrum.de/wartung-reparatur/
  - Approach: Similar structure but not identical
  - Philosophy: Clean, professional, non-fancy
  - Focus: Functionality over decoration

- **Feature Decisions** (2026-01-10)
  - NO appointment booking system
  - Cookie consent popup required (show once, save preference)
  - Contact via phone/email only (no booking forms)

- **Branding & Design** (2026-01-10)
  - Logo: Reifenmeister logo (saved as /public/logo.png)
  - Brand colors from logo:
    - Primary Red: #D32F2F (for CTAs, highlights)
    - Primary Blue: #0D47A1 (for links, icons, accents)
    - Alternative Red: #C62828 (hover states)
    - Alternative Blue: #1565C0 (lighter accents)
  - Color usage: Strategic, professional, not overused
  - Maintains clean white background with colored accents

## Repository
- **GitHub**: https://github.com/progorovics/SaveInn2026

## Next Steps
- Discuss website requirements and features
- Plan site structure and pages
- Gather content requirements (services, about, contact, etc.)
- Design and implement website layout
- Set up deployment (GitHub Pages, Netlify, or Vercel)

## Design Brief

### Visual Design (Based on Reference Analysis)
**Color Scheme:**
- Primary: Black and white foundation
- Accent: Minimal use of color (to be determined with branding)
- Approach: High contrast, professional, trustworthy

**Typography:**
- Clean, legible sans-serif fonts
- Clear hierarchy: Large headings, readable body text
- Professional and modern

**Layout Structure:**
1. **Header**
   - Logo placement
   - Simple navigation menu
   - Contact information (phone, location)

2. **Hero Section**
   - Clear headline
   - Descriptive subtitle
   - Call-to-action button (Contact/Call, NOT appointment booking)

3. **Services Section**
   - Grid/card layout
   - Icon-based service representation
   - Brief descriptions for each service
   - Clean, scannable format

4. **Footer**
   - Multi-column layout
   - Contact information
   - Quick links
   - Legal links (Impressum, Datenschutz)
   - Social media (optional)

**Key Principles:**
- NO fancy animations or rotating elements in first draft
- NO excessive colors or gradients
- Focus on clarity and usability
- Professional, trustworthy appearance
- Mobile-responsive design
- Fast loading times

### Content Organization
- Services presented in scannable card/grid format
- Consistent iconography
- Clear call-to-action elements
- Easy-to-find contact information

## Business Information (Collected 2026-01-10)

### Shop Details
- **Name:** SAVE INN
- **Previous Owner:** Dirk Eckermann
- **New Owner:** Felix Koch (responsible person)
- **Location:** Hamburg, Germany

### Contact Information
- **Address:** Küchgarten 21, 21073 Hamburg
- **Phone:** 040-773192
- **Fax:** 040-7659918
- **Email:** info@save-inn.de (NEW - changed from saveinn-harburg@t-online.de)

### Opening Hours
- **Monday - Friday:** 08:00 - 18:00 Uhr
- **Main Inspection (HU):** Wednesday & Thursday by appointment

### Services Offered (Leistungen)
1. **Achsvermessung** (Wheel Alignment)
2. **Fahrzeugdiagnose** (Vehicle Diagnostics)
3. **Inspektion** (Inspection)
4. **Klimaservice** (Air Conditioning Service)
5. **Reifenservice** (Tire Service)
6. **Unfallservice** (Accident Service)
7. **Anhängerreparatur** (Trailer Repair)

Additional mentions:
- Ölwechsel (Oil Changes)
- Reparaturen (Repairs)
- TÜV/HU (Main Inspection)

### Website Details
- **Current Website:** https://www.save-inn-hamburg.de/
- **Language:** German only
