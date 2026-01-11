import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const services = [
  {
    key: 'websites',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    gradient: 'from-primary/10 to-accent-yellow/10',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    key: 'booking',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-accent-green/10 to-primary/10',
    iconBg: 'bg-accent-green/10',
    iconColor: 'text-accent-green',
  },
  {
    key: 'crm',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'from-accent-yellow/10 to-accent-green/10',
    iconBg: 'bg-accent-yellow/10',
    iconColor: 'text-accent-yellow',
  },
  {
    key: 'ecommerce',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    gradient: 'from-accent-red/10 to-accent-yellow/10',
    iconBg: 'bg-accent-red/10',
    iconColor: 'text-accent-red',
  },
  {
    key: 'automations',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-primary/10 to-accent-green/10',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
];

export default function ServiceCards() {
  const { t } = useTranslation();

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-heading-1 text-text mb-4">
            {t('solutions.title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.key}
              className={`card card-hover bg-gradient-to-br ${service.gradient} border border-white/50`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                <span className={service.iconColor}>{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-heading-3 text-text mb-3">
                {t(`solutions.${service.key}.title`)}
              </h3>
              <p className="text-body text-text-muted mb-5 leading-relaxed">
                {t(`solutions.${service.key}.description`)}
              </p>

              {/* CTA */}
              <Link
                to={`/solutions#${service.key}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                {t('solutions.cta')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

