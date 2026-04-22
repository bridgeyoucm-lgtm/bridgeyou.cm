import { useTranslation } from 'react-i18next';

type LogoStyle = 'serif' | 'caps' | 'serif-italic' | 'lower';

interface LogoItem {
  name: string;
  style: LogoStyle;
}

const logos: LogoItem[] = [
  { name: 'VDEMA LTD', style: 'caps' },
  { name: 'Primeselar', style: 'serif' },
  { name: "Beverly's Lounge", style: 'serif-italic' },
  { name: 'JEMO', style: 'caps' },
];

export default function ProofRow() {
  const { t } = useTranslation();
  return (
    <div className="bg-white border-b border-line">
      <div className="container-custom py-12 md:py-14">
        <div className="mono-caption text-center mb-7">{t('proof.title')}</div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 md:gap-x-16 gap-y-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-muted"
              style={{
                fontFamily: logo.style.includes('serif') ? 'Fraunces, serif' : 'Inter, sans-serif',
                fontStyle: logo.style === 'serif-italic' ? 'italic' : 'normal',
                fontSize: logo.style === 'caps' ? 13 : 19,
                fontWeight: logo.style === 'caps' ? 700 : 500,
                letterSpacing: logo.style === 'caps' ? '0.14em' : '-0.01em',
                opacity: 0.7,
              }}
            >
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
