import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';
import Icon, { type IconName } from './Icon';

type Accent = '#FF914D' | '#7ED957' | '#FFBD59';

interface ServiceItem {
  icon: IconName;
  key: string;
  accent: Accent;
  featured?: boolean;
}

const services: ServiceItem[] = [
  { icon: 'globe', key: 'websites', accent: '#FF914D' },
  { icon: 'calendar', key: 'booking', accent: '#FF914D', featured: true },
  { icon: 'crm', key: 'crm', accent: '#7ED957' },
  { icon: 'cart', key: 'ecommerce', accent: '#FFBD59' },
  { icon: 'flow', key: 'automations', accent: '#FF914D' },
  { icon: 'zap', key: 'ads', accent: '#7ED957' },
];

function ServiceCard({ item }: { item: ServiceItem }) {
  const { t } = useTranslation();
  const { featured, accent } = item;
  const features = (t(`solutions.${item.key}.features`, { returnObjects: true }) as string[]) || [];
  const bg = featured ? '#101828' : '#FFFFFF';
  const shadow = featured ? '0 24px 60px rgba(16,24,40,0.2)' : '0 1px 2px rgba(16,24,40,0.04)';
  return (
    <div
      className="rounded-2xl flex flex-col min-h-[280px] transition-all duration-300 hover:-translate-y-1"
      style={{
        background: bg,
        color: featured ? '#E6EAF2' : '#101828',
        padding: 28,
        border: featured ? 'none' : '1px solid #EAECF0',
        boxShadow: shadow,
      }}
    >
      <div
        className="flex items-center justify-center"
        style={{
          width: 44, height: 44, borderRadius: 11,
          background: featured ? 'rgba(255,145,77,0.18)' : `${accent}14`,
          color: accent,
          border: `1px solid ${accent}30`,
          marginBottom: 18,
        }}
      >
        <Icon name={item.icon} size={22} sw={1.6} />
      </div>
      <div
        className="font-display font-medium"
        style={{
          fontSize: 22, letterSpacing: '-0.02em', marginBottom: 8,
          color: featured ? '#FFFFFF' : '#101828',
        }}
      >
        {t(`solutions.${item.key}.title`)}
      </div>
      <div
        className="leading-relaxed mb-4"
        style={{ fontSize: 14, color: featured ? '#8A94A6' : '#667085' }}
      >
        {t(`solutions.${item.key}.description`)}
      </div>
      {features.length > 0 && (
        <div className="mt-auto flex flex-col gap-1.5">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2"
              style={{ fontSize: 12.5, color: featured ? '#8A94A6' : '#1D2939' }}
            >
              <Icon name="check" size={13} stroke={accent} sw={2.2} />
              {f}
            </div>
          ))}
        </div>
      )}
      <div
        className="mt-5 pt-3.5 flex items-center justify-between text-[13px] font-medium"
        style={{
          borderTop: `1px solid ${featured ? 'rgba(255,255,255,0.08)' : '#F2F4F7'}`,
          color: featured ? accent : '#101828',
        }}
      >
        {t('solutions.learn_more')}
        <Icon name="arrow" size={14} sw={2} />
      </div>
    </div>
  );
}

export default function ServiceCards() {
  const { t } = useTranslation();
  const top = services.slice(0, 3);
  const bottom = services.slice(3);
  return (
    <section className="section-y bg-canvas">
      <div className="container-custom">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 items-end mb-12">
          <div>
            <EyebrowTag tone="green">{t('solutions.eyebrow')}</EyebrowTag>
            <h2
              className="font-display font-medium text-ink mt-4"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
            >
              <Trans
                i18nKey="solutions.heading_rich"
                components={{
                  italic: <span className="italic text-muted" style={{ fontWeight: 500 }} />,
                  br: <br />,
                }}
              />
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed text-muted max-w-lg md:justify-self-end">
            {t('solutions.subtitle')}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          {top.map((s) => (
            <ServiceCard key={s.key} item={s} />
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {bottom.map((s) => (
            <ServiceCard key={s.key} item={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
