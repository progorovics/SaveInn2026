# Design & Implementation Prompt - Car Repair Shop Website

## Project Context
Static website for a car repair shop in Hamburg, Germany, built with Astro.

## Design Philosophy
**Clean, Professional, Non-Fancy**
- Prioritize functionality and clarity over decoration
- Professional appearance that builds trust
- Simple, straightforward user experience
- No unnecessary animations or effects in first draft

---

## Visual Design Specifications

### Color Scheme
```
Primary Colors:
- Background: White (#FFFFFF)
- Text: Black/Dark Gray (#000000, #333333)
- Borders/Lines: Light Gray (#E5E5E5, #CCCCCC)

Accent Color (Minimal Use):
- To be determined based on shop branding
- Use sparingly for CTAs and highlights
- Suggest: Professional blue or automotive red if no branding exists

Approach:
- High contrast for readability
- Black and white foundation
- Minimal color usage
- Professional and trustworthy aesthetic
```

### Typography
```
Font Stack (Suggestions):
- Headings: System fonts or 'Inter', 'Helvetica Neue', sans-serif
- Body: System fonts or 'Inter', 'Roboto', sans-serif

Hierarchy:
- H1 (Hero): 2.5rem - 3rem, bold
- H2 (Section Titles): 2rem - 2.5rem, bold
- H3 (Service Titles): 1.25rem - 1.5rem, semi-bold
- Body: 1rem, regular
- Small/Caption: 0.875rem, regular

Line Height: 1.5 - 1.6 for readability
```

### Layout & Spacing
```
Container Max-Width: 1200px
Grid System: CSS Grid or Flexbox
Spacing Scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem
Responsive Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
```

---

## Page Structure

### 1. Header (Sticky/Fixed)
**Components:**
- Logo (left-aligned)
- Navigation menu (center or right)
  - Home
  - Leistungen (Services)
  - Über uns (About)
  - Kontakt (Contact)
- Contact button/phone number (right, highlighted)

**Design:**
- White background
- Subtle shadow or border-bottom
- Mobile: Hamburger menu
- Clean, minimal design

---

### 2. Hero Section
**Components:**
- Main headline (H1): Clear value proposition
  - Example: "Ihre Werkstatt in Hamburg"
  - Example: "Professionelle Autoreparatur & Service"
- Subtitle (P): Brief description of services/USP
  - Example: "Zuverlässige Reparaturen, faire Preise, schneller Service"
- Primary CTA button: "Termin vereinbaren"
- Optional: Secondary CTA: "Leistungen ansehen"

**Design:**
- Clean, spacious layout
- Large, readable text
- White or very light gray background
- Optional: Subtle background image (workshop/car) with overlay
- No animations or carousels in first draft

---

### 3. Services Section ("Unsere Leistungen")
**Structure:**
- Section heading (H2): "Unsere Serviceleistungen im Überblick"
- Grid layout of service cards (3-4 columns on desktop, 1-2 on mobile)

**Service Cards:**
Each card contains:
- Icon (simple, monochromatic)
- Service title (H3)
- Brief description (2-3 sentences)

**Suggested Services (adjust based on actual offerings):**
1. Inspektion & Wartung
2. Reparaturen & Diagnose
3. TÜV & AU (Hauptuntersuchung)
4. Reifenservice
5. Bremsenservice
6. Klimaanlagenservice
7. Ölwechsel
8. Karosserie & Lackierung

**Design:**
- Card: White background, subtle border or shadow
- Icon: Black/dark gray, simple line icons
- Consistent padding and spacing
- Hover effect: Subtle (optional border color change)
- NO rotation, NO complex animations

---

### 4. Why Choose Us Section (Optional)
**Components:**
- Heading (H2): "Warum uns wählen?"
- 3-4 key benefits with icons
  - Example: Erfahrung, Faire Preise, Schneller Service, Qualität

**Design:**
- Simple icon + text layout
- Horizontal layout on desktop, stacked on mobile

---

### 5. Contact/CTA Section
**Components:**
- Heading: "Termin vereinbaren"
- Subtext: "Kontaktieren Sie uns für einen Termin"
- Contact options:
  - Phone number (clickable tel: link)
  - Email (clickable mailto: link)
  - Optional: Contact form
- Button: "Jetzt anrufen" or "Kontaktformular"

**Design:**
- Centered content
- Light gray or white background
- Clear, prominent CTA button

---

### 6. Footer
**Structure (Multi-column layout):**

**Column 1: About**
- Shop name/logo
- Brief description (1-2 sentences)
- Social media icons (if applicable)

**Column 2: Quick Links**
- Home
- Leistungen
- Über uns
- Kontakt

**Column 3: Kontakt**
- Address
- Phone
- Email
- Opening hours

**Column 4: Legal**
- Impressum
- Datenschutz
- AGB (if needed)

**Design:**
- Dark background (#1a1a1a or #2a2a2a)
- Light text (#ffffff or #e5e5e5)
- Mobile: Stacked columns
- Desktop: 3-4 columns
- Copyright notice at bottom center

---

## Technical Implementation Guidelines

### Astro Components Structure
```
src/
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── ServiceCard.astro
│   ├── ServicesGrid.astro
│   ├── CTASection.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   ├── index.astro
│   ├── leistungen.astro (optional separate page)
│   └── kontakt.astro
└── styles/
    └── global.css
```

### CSS Approach
- **Use vanilla CSS or minimal Tailwind**
- CSS custom properties for colors and spacing
- Mobile-first responsive design
- Semantic HTML5 elements

### Performance Considerations
- Optimize images (WebP format, lazy loading)
- Minimal JavaScript (Astro's zero-JS default)
- Fast loading times
- SEO-optimized meta tags

---

## Icon Sources (Suggestions)
- **Heroicons** (free, MIT license)
- **Lucide Icons** (free, ISC license)
- **Iconoir** (free, MIT license)
- Keep icons simple, monochromatic

---

## Content Placeholders

### German Language Content
```
Hero Headline: "Ihre Werkstatt in Hamburg"
Hero Subtitle: "Professionelle Autoreparatur & Service seit [Jahr]"

Services Section Heading: "Unsere Serviceleistungen im Überblick"

CTA Button Text: "Termin vereinbaren"
CTA Section: "Kontaktieren Sie uns noch heute"

Footer Copyright: "© 2026 [Shop Name]. Alle Rechte vorbehalten."
```

---

## Implementation Phases

### Phase 1: Basic Structure (First Draft)
- Create Layout.astro with Header and Footer
- Build Hero section
- Implement Services grid with placeholder content
- Add basic CTA section
- Basic responsive CSS
- **NO animations, NO complex interactions**

### Phase 2: Content Integration
- Replace placeholder text with actual content
- Add real service descriptions
- Add contact information
- Add shop logo/branding

### Phase 3: Polish (After Customer Feedback)
- Refine colors based on branding
- Optimize images
- Add subtle hover effects (if desired)
- Fine-tune spacing and typography

### Phase 4: Additional Features (If Needed)
- Contact form integration
- Google Maps embed
- Customer testimonials
- Photo gallery

---

## Testing Checklist
- [ ] Mobile responsiveness (test on various screen sizes)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Accessibility (semantic HTML, alt texts, ARIA labels)
- [ ] Fast loading times (Lighthouse score)
- [ ] SEO basics (meta tags, headings hierarchy)
- [ ] All links functional
- [ ] Contact information correct and clickable

---

## Reference Website Analysis
**Source:** https://www.mein-autozentrum.de/wartung-reparatur/

**What to Keep:**
- Clean black and white color scheme
- Icon-based service cards
- Clear navigation
- Professional appearance
- Grid layout for services
- Prominent CTA buttons

**What to Simplify:**
- Reduce any unnecessary animations
- Simpler navigation (fewer levels if possible)
- Streamlined footer
- Focus on essential content only

---

## Notes for Implementation
1. Start with mobile design first (mobile-first approach)
2. Use semantic HTML5 elements (header, nav, main, section, footer)
3. Keep accessibility in mind (proper heading hierarchy, alt texts)
4. Test frequently on different screen sizes
5. Commit changes regularly to Git
6. Update claude.md with progress and decisions

---

**Remember:** The goal is a clean, professional, fast-loading website that helps customers find information and contact the shop easily. Simplicity and clarity are key.
