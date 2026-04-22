import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';
import Icon, { type IconName } from './Icon';

type Accent = '#FF914D' | '#7ED957' | '#FFBD59';

interface ProductItem {
  key: string;
  icon: IconName;
  accent: Accent;
  status: 'live' | 'coming';
  big?: boolean;
}

const products: ProductItem[] = [
  { key: 'bridgebook', icon: 'book', accent: '#FF914D', status: 'live', big: true },
  { key: 'bridgeshop', icon: 'shop', accent: '#FFBD59', status: 'live' },
  { key: 'bridgecrm', icon: 'crm', accent: '#7ED957', status: 'live' },
  { key: 'bridgeflow', icon: 'flow', accent: '#FF914D', status: 'coming' },
  { key: 'bridgeforms', icon: 'form', accent: '#7ED957', status: 'live' },
  { key: 'bridgechat', icon: 'chat', accent: '#FFBD59', status: 'coming' },
];

function ProductCard({ item }: { item: ProductItem }) {
  const { t } = useTranslation();
  const { big, accent, status } = item;
  return (
    <div
      className="relative overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
      style={{
        background: '#FFFFFF', border: '1px solid #EAECF0', borderRadius: 20,
        padding: big ? 28 : 22,
        gridColumn: big ? 'span 2' : 'auto',
        gridRow: big ? 'span 2' : 'auto',
      }}
    >
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: 140, height: 140,
          background: `radial-gradient(circle at top right, ${accent}18, transparent 70%)`,
        }}
      />
      <div className="flex items-center justify-between relative" style={{ marginBottom: big ? 18 : 14 }}>
        <div
          className="flex items-center justify-center"
          style={{
            width: big ? 48 : 40, height: big ? 48 : 40, borderRadius: 12,
            background: '#101828', color: accent,
          }}
        >
          <Icon name={item.icon} size={big ? 24 : 20} sw={1.6} />
        </div>
        <div
          className="font-semibold"
          style={{
            padding: '3px 9px', borderRadius: 999,
            background: status === 'live' ? 'rgba(126,217,87,0.10)' : 'rgba(255,189,89,0.14)',
            color: status === 'live' ? '#2E7D32' : '#A86C00',
            border: `1px solid ${status === 'live' ? 'rgba(126,217,87,0.20)' : 'rgba(255,189,89,0.20)'}`,
            fontSize: 11, letterSpacing: '0.02em',
          }}
        >
          {status === 'live' ? t('products.badge_live') : t('products.badge_coming')}
        </div>
      </div>
      <div
        className="font-display font-medium"
        style={{
          fontSize: big ? 30 : 22, letterSpacing: '-0.02em', color: '#101828', marginBottom: 6,
        }}
      >
        {t(`products.items.${item.key}.name`)}
      </div>
      <div className="font-medium" style={{ fontSize: 13, color: accent, marginBottom: big ? 10 : 8 }}>
        {t(`products.items.${item.key}.tagline`)}
      </div>
      <div className="leading-relaxed mb-4" style={{ fontSize: big ? 15 : 13, color: '#667085' }}>
        {t(`products.items.${item.key}.desc`)}
      </div>
      <div className="mt-auto flex items-center gap-1.5 text-[12px] font-medium text-ink">
        {t('products.explore')}
        <Icon name="arrow" size={13} sw={2} />
      </div>
    </div>
  );
}

export default function ProductsShowcase() {
  const { t } = useTranslation();
  return (
    <section className="section-y bg-white border-t border-line">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-11">
          <div>
            <EyebrowTag tone="orange">{t('products.eyebrow')}</EyebrowTag>
            <h2
              className="font-display font-medium text-ink mt-4 max-w-2xl"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
            >
              <Trans
                i18nKey="products.heading_rich"
                components={{
                  italic: <span className="italic" style={{ color: '#FF914D' }} />,
                  br: <br />,
                }}
              />
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-2 text-[14px] font-medium text-ink"
          >
            {t('products.view_all')}
            <Icon name="arrow" size={14} sw={2} />
          </Link>
        </div>
        <div
          className="hidden md:grid gap-4"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '220px' }}
        >
          {products.map((p) => (
            <div key={p.key} style={{ gridColumn: p.big ? 'span 2' : 'auto', gridRow: p.big ? 'span 2' : 'auto' }}>
              <ProductCard item={p} />
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((p) => (
            <ProductCard key={p.key} item={{ ...p, big: false }} />
          ))}
        </div>
        <Link
          to="/products"
          className="mt-8 md:hidden inline-flex items-center gap-2 text-[14px] font-medium text-ink"
        >
          {t('products.view_all')}
          <Icon name="arrow" size={14} sw={2} />
        </Link>
      </div>
    </section>
  );
}
