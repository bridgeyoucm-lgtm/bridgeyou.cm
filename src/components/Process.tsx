import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';
import Icon, { type IconName } from './Icon';

interface Step {
  n: string;
  key: string;
  icon: IconName;
}

const steps: Step[] = [
  { n: '01', key: 'step_1', icon: 'search' },
  { n: '02', key: 'step_2', icon: 'sparkle' },
  { n: '03', key: 'step_3', icon: 'zap' },
  { n: '04', key: 'step_4', icon: 'arrowUp' },
];

export default function Process() {
  const { t } = useTranslation();
  return (
    <section className="section-y relative overflow-hidden text-white" style={{ background: '#101828' }}>
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: -200, right: -200, width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(255,145,77,0.22), transparent 70%)',
        }}
      />
      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <EyebrowTag tone="orange">{t('process.eyebrow')}</EyebrowTag>
            <h2
              className="font-display font-medium mt-4"
              style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
            >
              <Trans
                i18nKey="process.heading_rich"
                components={{
                  italic: <span className="italic" style={{ color: '#FF914D' }} />,
                  br: <br />,
                }}
              />
            </h2>
          </div>
          <p className="text-[16px] leading-relaxed max-w-lg md:justify-self-end" style={{ color: '#8A94A6' }}>
            {t('process.subtitle')}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-5 relative">
          <div
            className="hidden md:block absolute"
            style={{ top: 26, left: '8%', right: '8%', height: 1, borderTop: '1px dashed #1F2836' }}
          />
          {steps.map((s) => (
            <div key={s.n} className="relative z-10">
              <div
                className="flex items-center justify-center mb-5"
                style={{
                  width: 52, height: 52, borderRadius: 26,
                  background: '#121822', border: '1px solid #1F2836', color: '#FF914D',
                }}
              >
                <Icon name={s.icon} size={22} sw={1.6} />
              </div>
              <div className="font-mono text-[11px] mb-1.5" style={{ color: '#FF914D', letterSpacing: '0.05em' }}>
                {s.n}
              </div>
              <div
                className="font-display font-medium mb-2"
                style={{ fontSize: 26, letterSpacing: '-0.02em' }}
              >
                {t(`process.${s.key}.title`)}
              </div>
              <div className="text-[14px] leading-relaxed" style={{ color: '#8A94A6' }}>
                {t(`process.${s.key}.description`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
