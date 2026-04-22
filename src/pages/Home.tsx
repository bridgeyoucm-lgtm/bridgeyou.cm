import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ProofRow from '../components/ProofRow';
import ServiceCards from '../components/ServiceCards';
import ProductsShowcase from '../components/ProductsShowcase';
import CaseStudies from '../components/CaseStudies';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';

export default function Home() {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'BridgeYou — Build Software. Grow Faster.',
      description:
        'A software and growth studio for modern African businesses. We build the websites, systems and automations that power clinics, retailers, real estate and service businesses.',
    },
    fr: {
      title: 'BridgeYou — Construisez. Grandissez plus vite.',
      description:
        "Un studio logiciel pour les entreprises africaines modernes. Nous concevons les sites, systèmes et automatisations qui font tourner cliniques, commerces, immobilier et services.",
    },
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
        <meta property="og:title" content={meta[lang].title} />
        <meta property="og:description" content={meta[lang].description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bridgeyou.cm" />
        <meta property="og:image" content="https://bridgeyou.cm/assets/BridgeYou_Logo.png" />
      </Helmet>

      <Hero />
      <ProofRow />
      <ServiceCards />
      <ProductsShowcase />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
