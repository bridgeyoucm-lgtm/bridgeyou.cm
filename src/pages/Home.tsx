import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ProofRow from '../components/ProofRow';
import ServiceCards from '../components/ServiceCards';
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
      title: 'BridgeYou - Business Software & Growth Systems',
      description: 'We build business software and growth systems that help modern businesses automate work and get customers. Custom websites, CRM, booking systems, and more.',
    },
    fr: {
      title: 'BridgeYou - Logiciels d\'Entreprise & Systèmes de Croissance',
      description: 'Nous développons des logiciels d\'entreprise et des systèmes de croissance qui aident les entreprises modernes à automatiser leur travail et à acquérir des clients.',
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
        <meta property="og:image" content="https://bridgeyou.cm/assets/logo.PNG" />
      </Helmet>

      <Hero />
      <ProofRow />
      <ServiceCards />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTA />
      <FAQ />
    </>
  );
}

