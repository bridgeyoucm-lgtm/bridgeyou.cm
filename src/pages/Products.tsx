import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import CTA from '../components/CTA';
import EyebrowTag from '../components/EyebrowTag';
import Icon, { type IconName } from '../components/Icon';

type Accent = '#FF914D' | '#7ED957' | '#FFBD59';

interface ProductEntry {
  id: string;
  icon: IconName;
  accent: Accent;
  status: 'live' | 'coming';
}

const products: ProductEntry[] = [
  { id: 'bridgebook', icon: 'book', accent: '#FF914D', status: 'live' },
  { id: 'bridgeshop', icon: 'shop', accent: '#FFBD59', status: 'live' },
  { id: 'bridgecrm', icon: 'crm', accent: '#7ED957', status: 'live' },
  { id: 'bridgeflow', icon: 'flow', accent: '#FF914D', status: 'coming' },
  { id: 'bridgeforms', icon: 'form', accent: '#7ED957', status: 'live' },
  { id: 'bridgechat', icon: 'chat', accent: '#FFBD59', status: 'coming' },
];

export default function Products() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const meta = {
    en: {
      title: 'Products — BridgeYou',
      description: 'A suite of business software built for how African teams actually run — bookings, CRM, e-commerce, automations.',
    },
    fr: {
      title: 'Produits — BridgeYou',
      description: 'Une suite logicielle conçue pour la façon dont les équipes africaines travaillent — réservation, CRM, e-commerce, automatisations.',
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
          <EyebrowTag tone="orange">{t('products.page_eyebrow')}</EyebrowTag>
          <h1
            className="font-display font-medium text-ink mt-4 mb-5 max-w-4xl"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)', letterSpacing: '-0.035em', lineHeight: 0.96 }}
          >
            <Trans
              i18nKey="products.page_heading_rich"
              components={{
                italic: <span className="italic" style={{ color: '#FF914D' }} />,
                br: <br />,
              }}
            />
          </h1>
          <p className="text-[19px] text-muted max-w-2xl leading-relaxed">
            {t('products.page_subtitle')}
          </p>
        </div>
      </section>

      <section className="section-y bg-canvas">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => {
              const features = (t(`products.items.${p.id}.features`, { returnObjects: true }) as string[]) || [];
              const isLive = p.status === 'live';
              return (
                <div
                  key={p.id}
                  id={p.id}
                  className="relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                  style={{ background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: 20, padding: 28 }}
                >
                  <div
                    className="absolute top-0 right-0 pointer-events-none"
                    style={{
                      width: 180, height: 180,
                      background: `radial-gradient(circle at top right, ${p.accent}18, transparent 70%)`,
                    }}
                  />
                  <div className="flex items-start justify-between mb-5 relative">
                    <div
                      className="flex items-center justify-center"
                      style={{ width: 48, height: 48, borderRadius: 12, background: '#101828', color: p.accent }}
                    >
                      <Icon name={p.icon} size={24} sw={1.6} />
                    </div>
                    <div
                      className="font-semibold"
                      style={{
                        padding: '3px 9px', borderRadius: 999,
                        background: isLive ? 'rgba(126,217,87,0.10)' : 'rgba(255,189,89,0.14)',
                        color: isLive ? '#2E7D32' : '#A86C00',
                        border: `1px solid ${isLive ? 'rgba(126,217,87,0.20)' : 'rgba(255,189,89,0.20)'}`,
                        fontSize: 11, letterSpacing: '0.02em',
                      }}
                    >
                      {isLive ? t('products.badge_live') : t('products.badge_coming')}
                    </div>
                  </div>
                  <div
                    className="font-display font-medium text-ink"
                    style={{ fontSize: 30, letterSpacing: '-0.02em' }}
                  >
                    {t(`products.items.${p.id}.name`)}
                  </div>
                  <div className="text-[13px] font-medium mt-1" style={{ color: p.accent }}>
                    {t(`products.items.${p.id}.tagline`)}
                  </div>
                  <p className="text-[14px] text-muted leading-relaxed mt-3">
                    {t(`products.items.${p.id}.desc`)}
                  </p>
                  {features.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-[13px] text-ink-2">
                          <Icon name="check" size={14} stroke={p.accent} sw={2.2} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    to="/contact"
                    className={`btn-ink mt-6 w-full justify-center ${!isLive ? 'opacity-60' : ''}`}
                  >
                    {isLive ? t('products.get_started') : t('products.join_waitlist')}
                    <Icon name="arrow" size={14} />
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
