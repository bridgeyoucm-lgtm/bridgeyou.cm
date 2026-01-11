import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTA from '../components/CTA';

const solutions = [
  {
    id: 'websites',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: 'primary',
    features: ['Responsive design', 'SEO optimized', 'Fast loading', 'Lead capture forms', 'Analytics integration', 'Content management'],
  },
  {
    id: 'booking',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'accent-green',
    features: ['Online booking page', 'Calendar sync', 'SMS/WhatsApp reminders', 'Payment collection', 'Staff scheduling', 'Client database'],
  },
  {
    id: 'crm',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'accent-yellow',
    features: ['Lead tracking', 'Pipeline management', 'Email integration', 'Task automation', 'Reporting', 'Team collaboration'],
  },
  {
    id: 'ecommerce',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'accent-red',
    features: ['Product catalog', 'Mobile Money', 'Order management', 'Inventory tracking', 'Customer accounts', 'Shipping integration'],
  },
  {
    id: 'automations',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'primary',
    features: ['WhatsApp automation', 'Email sequences', 'Payment integration', 'API connections', 'Workflow automation', 'Data sync'],
  },
];

export default function Solutions() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'Solutions - BridgeYou',
      description: 'Custom software solutions for modern businesses. Websites, booking systems, CRM, e-commerce, and automations.',
    },
    fr: {
      title: 'Solutions - BridgeYou',
      description: 'Solutions logicielles sur mesure pour les entreprises modernes. Sites web, systèmes de réservation, CRM, e-commerce et automatisations.',
    },
  };

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    'primary': { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
    'accent-green': { bg: 'bg-accent-green/10', text: 'text-accent-green', border: 'border-accent-green/20' },
    'accent-yellow': { bg: 'bg-accent-yellow/10', text: 'text-accent-yellow', border: 'border-accent-yellow/20' },
    'accent-red': { bg: 'bg-accent-red/10', text: 'text-accent-red', border: 'border-accent-red/20' },
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
        <meta property="og:title" content={meta[lang].title} />
        <meta property="og:description" content={meta[lang].description} />
      </Helmet>

      {/* Hero */}
      <section className="section bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-display-1 text-text mb-6">
              {t('solutions.title')}
            </h1>
            <p className="text-xl text-text-muted">
              {t('solutions.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {solutions.map((solution, index) => {
              const colors = colorClasses[solution.color];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={solution.id}
                  id={solution.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                >
                  {/* Icon/Visual side */}
                  <div className="w-full lg:w-1/3">
                    <div className={`aspect-square max-w-sm mx-auto ${colors.bg} rounded-3xl flex items-center justify-center`}>
                      <div className={`w-24 h-24 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text}`}>
                        {solution.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="w-full lg:w-2/3">
                    <h2 className="font-display text-heading-1 text-text mb-4">
                      {t(`solutions.${solution.id}.title`)}
                    </h2>
                    <p className="text-lg text-text-muted mb-6">
                      {t(`solutions.${solution.id}.description`)}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
                      {solution.features.map((feature) => (
                        <div
                          key={feature}
                          className={`flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-lg`}
                        >
                          <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body-sm text-text">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      className="btn-primary"
                    >
                      {t('hero.cta_primary')}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

