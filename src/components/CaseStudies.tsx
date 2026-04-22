import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';
import Icon from './Icon';

type Accent = '#FF914D' | '#7ED957' | '#FFBD59';

interface CaseItem {
  key: string;
  accent: Accent;
}

const cases: CaseItem[] = [
  { key: 'case_1', accent: '#FF914D' },
  { key: 'case_2', accent: '#7ED957' },
  { key: 'case_3', accent: '#FFBD59' },
];

export default function CaseStudies() {
  const { t } = useTranslation();
  return (
    <section className="section-y bg-canvas">
      <div className="container-custom">
        <div className="mb-11">
          <EyebrowTag tone="ink">{t('featured.eyebrow')}</EyebrowTag>
          <h2
            className="font-display font-medium text-ink mt-4 max-w-2xl"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', letterSpacing: '-0.03em', lineHeight: 1.02 }}
          >
            <Trans
              i18nKey="featured.heading_rich"
              components={{
                italic: <span className="italic text-muted" style={{ fontWeight: 500 }} />,
              }}
            />
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c) => {
            const client = t(`featured.${c.key}.client`);
            return (
              <div
                key={c.key}
                className="bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{ border: '1px solid #EAECF0' }}
              >
                <div style={{ padding: '22px 24px 0' }}>
                  <div className="mono-caption mb-3.5">{t(`featured.${c.key}.tag`)}</div>
                  <div
                    className="font-display font-medium"
                    style={{
                      fontSize: 'clamp(40px, 6vw, 52px)',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                      color: '#101828',
                    }}
                  >
                    {t(`featured.${c.key}.metric`)}
                  </div>
                </div>
                <div className="flex-1 px-6 pt-4 text-[14px] leading-[1.5]" style={{ color: '#1D2939' }}>
                  "{t(`featured.${c.key}.quote`)}"
                </div>
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex items-center justify-center font-display font-semibold"
                      style={{
                        width: 32, height: 32, borderRadius: 8,
                        background: `${c.accent}1f`, color: c.accent, fontSize: 14,
                      }}
                    >
                      {client.charAt(0)}
                    </div>
                    <div className="text-[13px] font-medium text-ink">{client}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[12px] font-medium text-ink">
                    {t('featured.read_case')} <Icon name="arrow" size={12} sw={2} />
                  </div>
                </div>
                <div style={{ height: 6, background: c.accent }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
