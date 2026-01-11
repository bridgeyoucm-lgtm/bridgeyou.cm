project:
  name: "BridgeYou"
  domain: "bridgeyou.cm"
  goal: "High-converting agency site that generates leads (WhatsApp + form) and supports always-on Google Ads landing pages."
  style_reference: "Clean, airy, modern agency layout with soft gradients, rounded cards, subtle shadows, generous whitespace."

brand_tokens:
  # Extracted from your logo (approx.)
  colors:
    primary: "#FF914D"     # orange
    neutral_dark: "#545354" # gray
    accent_green: "#7ED957"
    accent_red: "#FF5657"
    accent_yellow: "#FFBD59"
    background: "#F6F8FB"
    surface: "#FFFFFF"
    text: "#101828"
    text_muted: "#667085"
    border: "rgba(16,24,40,0.08)"
  gradients:
    card_soft_1: "linear-gradient(135deg, rgba(255,145,77,0.12), rgba(126,217,87,0.10))"
    card_soft_2: "linear-gradient(135deg, rgba(255,189,89,0.14), rgba(255,86,87,0.10))"
    hero_bg: "radial-gradient(60% 60% at 50% 20%, rgba(255,145,77,0.14) 0%, rgba(246,248,251,0) 60%)"
  radius:
    card: 18
    button: 14
  shadow:
    soft: "0 18px 60px rgba(16, 24, 40, 0.10)"
    card: "0 10px 30px rgba(16, 24, 40, 0.08)"
  typography:
    font_primary: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial"
    font_display: "Sora, Inter, system-ui"
    scale:
      h1: "52px"
      h2: "34px"
      h3: "22px"
      body: "16px"
      small: "14px"

ux_requirements:
  - "Bilingual EN/FR: auto-select based on browser language; allow manual toggle in header."
  - "Primary CTA always visible: 'Contact' + WhatsApp."
  - "Fast loading, Core Web Vitals friendly. Minimal animations."
  - "Landing-page friendly: allow /ads/* routes with simplified nav (for Google Ads)."
  - "All forms should submit to Netlify Forms OR a Netlify Function endpoint."
  - "Include conversion-friendly sections: proof, process, FAQs, strong CTA blocks."

site_map:
  pages:
    - "/": "Home"
    - "/services": "Services"
    - "/work": "Work / Portfolio"
    - "/team": "Team"
    - "/blog": "Blog (optional, can be added later)"
    - "/contact": "Contact"
  ad_landing_pages:
    - "/ads/google-ads": "Google Ads Landing Page"
    - "/ads/website": "Website Landing Page"
    - "/ads/seo": "SEO Landing Page"

navigation:
  header_links:
    - key: "nav.services"
      href: "/services"
    - key: "nav.work"
      href: "/work"
    - key: "nav.team"
      href: "/team"
    - key: "nav.blog"
      href: "/blog"
  cta_button:
    key: "nav.contact"
    href: "/contact"
  language_toggle:
    enabled: true
    options: ["en", "fr"]
