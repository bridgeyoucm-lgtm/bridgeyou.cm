import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import CTA from '../components/CTA';
import EyebrowTag from '../components/EyebrowTag';
import Icon, { type IconName } from '../components/Icon';
import BridgeBookMock from '../components/mocks/BridgeBookMock';
import BridgeCRMMock from '../components/mocks/BridgeCRMMock';
import ResponsiveMock from '../components/mocks/ResponsiveMock';

type Accent = '#FF914D' | '#7ED957' | '#FFBD59';

interface SolutionEntry {
  id: string;
  n: string;
  icon: IconName;
  accent: Accent;
  metrics: { k: string; v: string }[];
}

const solutions: SolutionEntry[] = [
  {
    id: 'websites', n: '01', icon: 'globe', accent: '#FF914D',
    metrics: [{ k: '<1.5s', v: 'load time' }, { k: '3×', v: 'conversion' }, { k: '2-4wk', v: 'avg build' }],
  },
  {
    id: 'booking', n: '02', icon: 'calendar', accent: '#FF914D',
    metrics: [{ k: '3×', v: 'appointments' }, { k: '-47%', v: 'no-shows' }, { k: '6wk', v: 'avg build' }],
  },
  {
    id: 'crm', n: '03', icon: 'crm', accent: '#7ED957',
    metrics: [{ k: '-60%', v: 'lead response' }, { k: '100%', v: 'WhatsApp sync' }, { k: '4-6wk', v: 'avg build' }],
  },
  {
    id: 'ecommerce', n: '04', icon: 'cart', accent: '#FFBD59',
    metrics: [{ k: 'MoMo', v: 'first' }, { k: '+214%', v: 'avg uplift' }, { k: '6-10wk', v: 'avg build' }],
  },
  {
    id: 'automations', n: '05', icon: 'flow', accent: '#FF914D',
    metrics: [{ k: '10+hr', v: 'saved/wk' }, { k: 'API', v: 'native' }, { k: '2-6wk', v: 'avg build' }],
  },
  {
    id: 'ads', n: '06', icon: 'zap', accent: '#7ED957',
    metrics: [{ k: 'Google', v: 'Search + Display' }, { k: 'Meta', v: 'FB + Instagram' }, { k: 'Weekly', v: 'reporting' }],
  },
];

export default function Solutions() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'Solutions — BridgeYou',
      description: 'Custom websites, booking systems, CRM, e-commerce, and automations for modern African businesses.',
    },
    fr: {
      title: 'Solutions — BridgeYou',
      description: 'Sites web, réservation, CRM, e-commerce et automatisations pour les entreprises africaines modernes.',
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
          <EyebrowTag tone="orange">{t('solutions.page_eyebrow')}</EyebrowTag>
          <h1
            className="font-display font-medium text-ink mt-4 mb-5 max-w-3xl"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '-0.035em', lineHeight: 0.96 }}
          >
            <Trans
              i18nKey="solutions.page_heading_rich"
              components={{
                italic: <span className="italic" style={{ color: '#FF914D' }} />,
                br: <br />,
              }}
            />
          </h1>
          <p className="text-[19px] text-muted max-w-2xl leading-relaxed">
            {t('solutions.page_subtitle')}
          </p>
        </div>
      </section>

      {solutions.map((s, i) => {
        const even = i % 2 === 0;
        const showMock = s.id === 'booking';
        const showCRMMock = s.id === 'crm';
        const bg = even ? '#FFFFFF' : '#F6F8FB';
        return (
          <section key={s.id} id={s.id} className="border-t border-line" style={{ background: bg }}>
            <div className="container-custom py-16 md:py-20">
              <div className={`grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center ${even ? '' : 'lg:[&>*:first-child]:order-2'}`}>
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: 44, height: 44, borderRadius: 11,
                        background: `${s.accent}14`, color: s.accent, border: `1px solid ${s.accent}30`,
                      }}
                    >
                      <Icon name={s.icon} size={22} />
                    </div>
                    <div className="mono-caption">{s.n} · {t(`solutions.${s.id}.title`)}</div>
                  </div>
                  <h2
                    className="font-display font-medium text-ink mb-5"
                    style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
                  >
                    <Trans
                      i18nKey={`solutions.${s.id}.heading_rich`}
                      components={{
                        italic: <span className="italic" style={{ color: s.accent }} />,
                        br: <br />,
                      }}
                    />
                  </h2>
                  <p className="text-[16px] text-muted leading-relaxed mb-6">
                    {t(`solutions.${s.id}.description`)}
                  </p>
                  <div className="flex gap-4 py-4 border-y border-line mb-6">
                    {s.metrics.map((m) => (
                      <div key={m.k} className="flex-1">
                        <div
                          className="font-display font-medium text-ink"
                          style={{ fontSize: 32, letterSpacing: '-0.02em' }}
                        >
                          {m.k}
                        </div>
                        <div className="text-[12px] text-muted">{m.v}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-ink">
                    {t('solutions.cta_consult')}
                    <Icon name="arrow" size={14} />
                  </Link>
                </div>
                <div className="w-full min-w-0">
                  {showMock ? (
                    <ResponsiveMock width={520} height={380}>
                      <BridgeBookMock w={520} h={380} />
                    </ResponsiveMock>
                  ) : showCRMMock ? (
                    <ResponsiveMock width={440} height={320}>
                      <BridgeCRMMock w={440} h={320} />
                    </ResponsiveMock>
                  ) : (
                    <div
                      className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${s.accent}22, ${s.accent}08)`,
                        border: `1px solid ${s.accent}33`,
                      }}
                    >
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ color: s.accent }}
                      >
                        <Icon name={s.icon} size={120} sw={1} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTA />
    </>
  );
}
