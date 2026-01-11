# BridgeYou Website

A bilingual (EN/FR) marketing website for BridgeYou, a software company that builds business software and growth systems.

## Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: TailwindCSS
- **Routing**: react-router-dom
- **i18n**: i18next + react-i18next + i18next-browser-languagedetector
- **Forms**: Netlify Forms + Netlify Functions
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs at `http://localhost:5173`

## Project Structure

```
/src
  /assets          # Static assets (logo, images)
  /components      # Reusable UI components
  /i18n            # Translation files (en.json, fr.json)
  /pages           # Page components
  /styles          # Global styles (Tailwind)

/netlify
  /functions       # Serverless functions (lead.ts)

/public            # Public static files
```

## Features

### Bilingual Support
- Auto-detects browser language (French if browser starts with "fr", otherwise English)
- Language toggle in navbar
- User preference saved in localStorage

### Pages
1. **Home** (`/`) - Hero, services, case studies, process, testimonials, FAQ
2. **Solutions** (`/solutions`) - Detailed service offerings
3. **Products** (`/products`) - Product catalog
4. **Company** (`/company`) - About, mission, values
5. **Contact** (`/contact`) - Contact form + WhatsApp

### Contact Form
- Netlify Forms integration
- Serverless function for lead processing (`/api/lead`)
- Form validation
- Success state

### Design System
- Primary Orange: `#FF914D`
- Accent Green: `#7ED957`
- Accent Yellow: `#FFBD59`
- Accent Red: `#FF5657`
- Background: `#F6F8FB`
- Custom typography with Sora (display) and Inter (body)

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Functions directory: `netlify/functions`

The `netlify.toml` file is pre-configured for:
- SPA routing
- API redirects
- Security headers

### Sitemap Generation

For SEO, generate a sitemap using a tool like `vite-plugin-sitemap` or create a static `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://bridgeyou.cm/</loc></url>
  <url><loc>https://bridgeyou.cm/solutions</loc></url>
  <url><loc>https://bridgeyou.cm/products</loc></url>
  <url><loc>https://bridgeyou.cm/company</loc></url>
  <url><loc>https://bridgeyou.cm/contact</loc></url>
</urlset>
```

Place in `/public/sitemap.xml`

## Environment Variables

No environment variables are required for basic functionality. For production email integration in the lead function, add:

```env
# Optional: Email service configuration
SENDGRID_API_KEY=your_key
NOTIFICATION_EMAIL=your@email.com
```

## Customization

### WhatsApp Number
Update the phone number in:
- `src/components/WhatsAppButton.tsx`
- `src/components/Hero.tsx`
- `src/components/CTA.tsx`
- `src/pages/Contact.tsx`

### Contact Email
Update in `src/pages/Contact.tsx`

### Translations
Edit translation files in `/src/i18n/`:
- `en.json` - English
- `fr.json` - French

## License

Private - All rights reserved.

