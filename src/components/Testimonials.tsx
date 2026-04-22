import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';

type Tone = 'warm' | 'green' | 'blush';
type Accent = '#FF914D' | '#7ED957' | '#FFBD59';

interface TItem {
  key: string;
  tone: Tone;
  accent: Accent;
}

const testimonials: TItem[] = [
  { key: 'testimonial_1', tone: 'warm', accent: '#FF914D' },
  { key: 'testimonial_2', tone: 'green', accent: '#7ED957' },
  { key: 'testimonial_3', tone: 'blush', accent: '#FFBD59' },
];

const tonePalettes: Record<Tone, string> = {
  warm: 'linear-gradient(135deg, #FFD7B5 0%, #FFBD59 50%, #FF914D 100%)',
  green: 'linear-gradient(135deg, #D4F5C6 0%, #9FE87E 50%, #7ED957 100%)',
  blush: 'linear-gradient(135deg, #FFE0CC 0%, #FFC9A3 100%)',
};

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <section className="section-y bg-white">
      <div className="container-custom">
        <div className="text-center mb-11">
          <EyebrowTag tone="green">{t('testimonials.eyebrow')}</EyebrowTag>
          <h2
            className="font-display font-medium text-ink mt-4 mx-auto max-w-2xl"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            <Trans
              i18nKey="testimonials.heading_rich"
              components={{
                italic: <span className="italic" style={{ color: '#FF914D' }} />,
                br: <br />,
              }}
            />
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((it) => (
            <div
              key={it.key}
              className="flex flex-col gap-5"
              style={{
                background: '#FFFFFF', border: '1px solid #EAECF0',
                borderRadius: 20, padding: 28,
              }}
            >
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" aria-hidden="true">
                <path
                  d="M0 22V13C0 6 3 1 10 0L12 3C8 5 7 8 7 11H12V22H0ZM18 22V13C18 6 21 1 28 0L30 3C26 5 25 8 25 11H30V22H18Z"
                  fill={it.accent}
                />
              </svg>
              <div
                className="font-display flex-1"
                style={{
                  fontSize: 21, lineHeight: 1.4, letterSpacing: '-0.01em',
                  color: '#101828',
                }}
              >
                "{t(`testimonials.${it.key}.quote`)}"
              </div>
              <div className="flex items-center gap-3 pt-2" style={{ borderTop: '1px solid #F2F4F7' }}>
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 22,
                    background: tonePalettes[it.tone],
                  }}
                />
                <div>
                  <div className="text-[14px] font-semibold text-ink">
                    {t(`testimonials.${it.key}.author`)}
                  </div>
                  <div className="text-[12px] text-muted">
                    {t(`testimonials.${it.key}.role`)} · {t(`testimonials.${it.key}.company`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
