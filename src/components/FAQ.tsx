import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';
import Icon from './Icon';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-y bg-canvas">
      <div className="container-custom">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 lg:gap-14 max-w-5xl mx-auto">
          <div className="md:sticky md:top-24 md:self-start">
            <EyebrowTag tone="orange">{t('faq.eyebrow')}</EyebrowTag>
            <h2
              className="font-display font-medium text-ink mt-4 mb-3"
              style={{ fontSize: 'clamp(32px, 4.5vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
            >
              <Trans
                i18nKey="faq.heading_rich"
                components={{
                  italic: <span className="italic text-muted" style={{ fontWeight: 500 }} />,
                  br: <br />,
                }}
              />
            </h2>
            <p className="text-[14px] text-muted leading-relaxed">
              <Trans
                i18nKey="faq.ask"
                components={{
                  link: <span className="text-ink font-medium" />,
                }}
              />
            </p>
          </div>
          <div>
            {faqKeys.map((k, i) => {
              const open = openIndex === i;
              return (
                <button
                  key={k}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full text-left block"
                  style={{ padding: '24px 0', borderBottom: '1px solid #EAECF0' }}
                >
                  <div className="flex items-center justify-between gap-5">
                    <div
                      className="font-display font-medium text-ink"
                      style={{ fontSize: 22, letterSpacing: '-0.01em' }}
                    >
                      {t(`faq.${k}.question`)}
                    </div>
                    <div
                      className="flex items-center justify-center flex-shrink-0 transition-transform"
                      style={{
                        width: 32, height: 32, borderRadius: 16,
                        background: open ? '#101828' : '#F6F8FB',
                        color: open ? '#FFFFFF' : '#101828',
                        transform: open ? 'rotate(45deg)' : 'none',
                      }}
                    >
                      <Icon name="plus" size={14} sw={2.2} />
                    </div>
                  </div>
                  {open && (
                    <div
                      className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted"
                    >
                      {t(`faq.${k}.answer`)}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
