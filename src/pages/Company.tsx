import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import CTA from '../components/CTA';

const values = [
  {
    id: 'value_1',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'value_2',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'value_3',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'value_4',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const whyUs = ['why_1', 'why_2', 'why_3', 'why_4', 'why_5'];

export default function Company() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'About Us - BridgeYou',
      description: 'Learn about BridgeYou, our mission, values, and why businesses choose us for their software needs.',
    },
    fr: {
      title: 'À Propos - BridgeYou',
      description: 'Découvrez BridgeYou, notre mission, nos valeurs et pourquoi les entreprises nous choisissent pour leurs besoins logiciels.',
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
      </Helmet>

      {/* Hero */}
      <section className="section bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-display-1 text-text mb-6">
              {t('company.title')}
            </h1>
            <p className="text-xl text-text-muted">
              {t('company.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div className="card bg-gradient-soft-1 border border-white/50">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h2 className="text-heading-2 text-text mb-4">
                {t('company.mission_title')}
              </h2>
              <p className="text-body text-text-muted leading-relaxed">
                {t('company.mission_text')}
              </p>
            </div>

            {/* Story */}
            <div className="card bg-gradient-soft-2 border border-white/50">
              <div className="w-14 h-14 bg-accent-yellow/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-heading-2 text-text mb-4">
                {t('company.story_title')}
              </h2>
              <p className="text-body text-text-muted leading-relaxed">
                {t('company.story_text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-heading-1 text-text">
              {t('company.values_title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.id} className="card card-hover text-center">
                <div className="w-14 h-14 bg-gradient-cta rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <span className="text-white">{value.icon}</span>
                </div>
                <h3 className="text-heading-3 text-text mb-2">
                  {t(`company.${value.id}.title`)}
                </h3>
                <p className="text-body text-text-muted">
                  {t(`company.${value.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BridgeYou */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-heading-1 text-text text-center mb-12">
              {t('company.why_title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whyUs.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                >
                  <div className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-body font-medium text-text">
                    {t(`company.${item}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-heading-1 text-text">
              {t('company.leader_title')}
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="card card-hover text-center">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-heading-2 text-text mb-1">
                {t('company.leader_name')}
              </h3>
              <p className="text-body text-text-muted mb-4">
                BridgeYou
              </p>
              <p className="text-body-sm text-text-muted">
                {t('company.leader_bio')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

