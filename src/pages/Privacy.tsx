import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import EyebrowTag from '../components/EyebrowTag';

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'Privacy Policy — BridgeYou',
      description: 'How BridgeYou Innovations SARL collects, uses and protects your personal information.',
    },
    fr: {
      title: 'Politique de confidentialité — BridgeYou',
      description: "Comment BridgeYou Innovations SARL collecte, utilise et protège vos informations personnelles.",
    },
  };

  const sections = (t('privacy.sections', { returnObjects: true }) as { heading: string; body: string }[]) || [];

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
      </Helmet>

      <section className="bg-canvas border-b border-line">
        <div className="container-custom py-16 md:py-20">
          <EyebrowTag tone="ink">{t('privacy.eyebrow')}</EyebrowTag>
          <h1
            className="font-display font-medium text-ink mt-4 mb-4"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)', letterSpacing: '-0.035em', lineHeight: 1 }}
          >
            {t('privacy.title')}
          </h1>
          <p className="text-[16px] text-muted max-w-2xl leading-relaxed">
            {t('privacy.updated')}
          </p>
        </div>
      </section>

      <section className="bg-white section-y">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-[17px] text-ink-2 leading-relaxed mb-10">
              {t('privacy.intro')}
            </p>
            {sections.map((s, i) => (
              <div key={i} className="mb-10">
                <h2
                  className="font-display font-medium text-ink mb-3"
                  style={{ fontSize: 24, letterSpacing: '-0.01em' }}
                >
                  {s.heading}
                </h2>
                <p className="text-[16px] text-muted leading-relaxed whitespace-pre-line">{s.body}</p>
              </div>
            ))}
            <div className="pt-8 border-t border-line">
              <div className="mono-caption mb-2">{t('privacy.contact_label')}</div>
              <p className="text-[15px] text-ink-2">{t('privacy.contact_body')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
