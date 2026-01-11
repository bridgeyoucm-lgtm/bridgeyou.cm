import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTA from '../components/CTA';

const products = [
  {
    id: 'product_1',
    color: 'primary',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    available: true,
  },
  {
    id: 'product_2',
    color: 'accent-green',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    available: true,
  },
  {
    id: 'product_3',
    color: 'accent-yellow',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    available: true,
  },
  {
    id: 'product_4',
    color: 'accent-red',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    available: false,
  },
  {
    id: 'product_5',
    color: 'primary',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    available: false,
  },
  {
    id: 'product_6',
    color: 'accent-green',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    available: false,
  },
];

export default function Products() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'Products - BridgeYou',
      description: 'Ready-to-deploy software products for African businesses. Booking systems, e-commerce, CRM, and more.',
    },
    fr: {
      title: 'Produits - BridgeYou',
      description: 'Produits logiciels prêts à déployer pour les entreprises africaines. Systèmes de réservation, e-commerce, CRM et plus.',
    },
  };

  const colorClasses: Record<string, { bg: string; text: string; gradient: string }> = {
    'primary': { bg: 'bg-primary/10', text: 'text-primary', gradient: 'from-primary/10 to-accent-yellow/5' },
    'accent-green': { bg: 'bg-accent-green/10', text: 'text-accent-green', gradient: 'from-accent-green/10 to-primary/5' },
    'accent-yellow': { bg: 'bg-accent-yellow/10', text: 'text-accent-yellow', gradient: 'from-accent-yellow/10 to-accent-green/5' },
    'accent-red': { bg: 'bg-accent-red/10', text: 'text-accent-red', gradient: 'from-accent-red/10 to-accent-yellow/5' },
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
              {t('products.title')}
            </h1>
            <p className="text-xl text-text-muted">
              {t('products.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const colors = colorClasses[product.color];
              const features = t(`products.${product.id}.features`, { returnObjects: true }) as string[];

              return (
                <div
                  key={product.id}
                  className={`card card-hover bg-gradient-to-br ${colors.gradient} border border-white/50 flex flex-col`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text}`}>
                      {product.icon}
                    </div>
                    {!product.available && (
                      <span className="px-3 py-1 bg-gray-100 text-text-muted text-body-sm font-medium rounded-full">
                        {t('products.coming_soon')}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-heading-2 text-text mb-2">
                    {t(`products.${product.id}.title`)}
                  </h3>
                  <p className="text-body text-text-muted mb-6">
                    {t(`products.${product.id}.summary`)}
                  </p>

                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <div className="text-body-sm font-semibold text-text mb-3">
                      {t('products.features')}:
                    </div>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-body-sm text-text-muted">
                          <svg className={`w-4 h-4 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className={`btn-primary w-full ${!product.available ? 'opacity-50 pointer-events-none' : ''}`}
                  >
                    {t('products.get_started')}
                  </Link>
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

