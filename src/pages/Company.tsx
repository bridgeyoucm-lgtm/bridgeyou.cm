import { Helmet } from 'react-helmet-async';
import { useTranslation, Trans } from 'react-i18next';
import CTA from '../components/CTA';
import EyebrowTag from '../components/EyebrowTag';
import Icon, { type IconName } from '../components/Icon';
import nfonJosephPhoto from '../assets/nfon-joseph.jpeg';

interface Value {
  id: string;
  icon: IconName;
  accent: string;
}

const values: Value[] = [
  { id: 'value_1', icon: 'spark', accent: '#FF914D' },
  { id: 'value_2', icon: 'arrowUp', accent: '#7ED957' },
  { id: 'value_3', icon: 'users', accent: '#FFBD59' },
  { id: 'value_4', icon: 'sparkle', accent: '#FF914D' },
];

const whyItems = ['why_1', 'why_2', 'why_3', 'why_4', 'why_5'];

interface MetricItem {
  k: string;
  v: string;
  c: string;
}

const metrics: MetricItem[] = [
  { k: 'Douala', v: 'metric_based', c: '#FF914D' },
  { k: 'Africa', v: 'metric_coverage', c: '#7ED957' },
  { k: '24h', v: 'metric_reply', c: '#FFBD59' },
  { k: 'EN/FR', v: 'metric_bilingual', c: '#101828' },
];


export default function Company() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'Company — BridgeYou',
      description: 'A Douala-based software studio serving clients across Africa — building the tools modern businesses actually need.',
    },
    fr: {
      title: 'Société — BridgeYou',
      description: "Un studio logiciel basé à Douala au service de clients partout en Afrique — construisant les outils dont les entreprises modernes ont réellement besoin.",
    },
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{meta[lang].title}</title>
        <meta name="description" content={meta[lang].description} />
      </Helmet>

      <section className="bg-canvas border-b border-line">
        <div className="container-custom py-20 md:py-24">
          <EyebrowTag tone="green">{t('company.page_eyebrow')}</EyebrowTag>
          <h1
            className="font-display font-medium text-ink mt-4 mb-5 max-w-4xl"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '-0.035em', lineHeight: 0.96 }}
          >
            <Trans
              i18nKey="company.page_heading_rich"
              components={{
                italic: <span className="italic" style={{ color: '#FF914D' }} />,
                br: <br />,
              }}
            />
          </h1>
          <p className="text-[19px] text-muted max-w-2xl leading-relaxed">
            {t('company.page_subtitle')}
          </p>
        </div>
      </section>

      <section className="bg-white border-t border-line">
        <div className="container-custom py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((m) => (
              <div key={m.v}>
                <div
                  className="font-display font-medium"
                  style={{
                    fontSize: 'clamp(40px, 7vw, 64px)',
                    color: m.c,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {m.k}
                </div>
                <div className="text-[13px] md:text-[14px] text-muted mt-2">{t(`company.${m.v}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white border-t border-line">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div>
              <EyebrowTag tone="green">{t('company.registered_eyebrow')}</EyebrowTag>
              <h2
                className="font-display font-medium text-ink mt-4 mb-5"
                style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
              >
                {t('company.registered_title')}
              </h2>
              <p className="text-[16px] text-muted leading-relaxed max-w-lg">
                {t('company.registered_intro')}
              </p>
            </div>
            <div
              className="bg-canvas p-6 sm:p-7"
              style={{ border: '1px solid #EAECF0', borderRadius: 20 }}
            >
              {[
                { l: 'registered_name_label', v: 'registered_name_value' },
                { l: 'registered_rccm_label', v: 'registered_rccm_value' },
                { l: 'registered_date_label', v: 'registered_date_value' },
                { l: 'registered_activity_label', v: 'registered_activity_value' },
              ].map((row, idx) => (
                <div
                  key={row.l}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-3.5"
                  style={{ borderTop: idx === 0 ? 'none' : '1px solid #EAECF0' }}
                >
                  <div className="mono-caption">{t(`company.${row.l}`)}</div>
                  <div className="text-[14px] text-ink font-medium sm:text-right">{t(`company.${row.v}`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-canvas border-t border-line">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
            <div>
              <EyebrowTag tone="orange">{t('company.mission_eyebrow')}</EyebrowTag>
              <h2
                className="font-display font-medium text-ink mt-4"
                style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
              >
                {t('company.mission_title')}
              </h2>
            </div>
            <p className="text-[17px] leading-relaxed text-muted">
              {t('company.mission_text')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.id}
                className="bg-white p-7"
                style={{ border: '1px solid #EAECF0', borderRadius: 20 }}
              >
                <div
                  className="flex items-center justify-center mb-5"
                  style={{
                    width: 44, height: 44, borderRadius: 11,
                    background: `${v.accent}14`, color: v.accent, border: `1px solid ${v.accent}30`,
                  }}
                >
                  <Icon name={v.icon} size={22} sw={1.6} />
                </div>
                <div
                  className="font-display font-medium text-ink mb-2"
                  style={{ fontSize: 20, letterSpacing: '-0.01em' }}
                >
                  {t(`company.${v.id}.title`)}
                </div>
                <p className="text-[14px] text-muted leading-relaxed">
                  {t(`company.${v.id}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white border-t border-line">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <EyebrowTag tone="ink">{t('company.why_eyebrow')}</EyebrowTag>
            <h2
              className="font-display font-medium text-ink mt-4"
              style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              {t('company.why_title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {whyItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 py-4 px-5"
                style={{ background: '#F6F8FB', borderRadius: 14, border: '1px solid #EAECF0' }}
              >
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(126,217,87,0.14)', color: '#4A9A2F' }}
                >
                  <Icon name="check" size={16} sw={2.2} />
                </div>
                <span className="text-[15px] font-medium text-ink">{t(`company.${item}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-canvas border-t border-line">
        <div className="container-custom">
          <EyebrowTag tone="orange">{t('company.leader_eyebrow')}</EyebrowTag>
          <h2
            className="font-display font-medium text-ink mt-4 mb-8"
            style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', letterSpacing: '-0.03em' }}
          >
            {t('company.leader_title')}
          </h2>
          <div className="grid md:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start max-w-4xl">
            <div
              className="bg-white overflow-hidden"
              style={{ border: '1px solid #EAECF0', borderRadius: 20 }}
            >
              <img
                src={nfonJosephPhoto}
                alt={t('company.founder.name')}
                className="block w-full object-cover"
                style={{ aspectRatio: '1 / 1' }}
              />
              <div className="p-5">
                <div
                  className="font-display font-medium text-ink"
                  style={{ fontSize: 22, letterSpacing: '-0.01em' }}
                >
                  {t('company.founder.name')}
                </div>
                <div className="text-[13px] text-muted mt-1">
                  {t('company.founder.role')}
                </div>
              </div>
            </div>
            <div>
              <div className="mono-caption mb-3">{t('company.founder.credentials_label')}</div>
              <p
                className="font-display font-medium text-ink mb-6"
                style={{ fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}
              >
                {t('company.founder.credentials')}
              </p>
              <p className="text-[16px] text-muted leading-relaxed">
                {t('company.founder.bio')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
