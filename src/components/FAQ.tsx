import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5'];

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-heading-1 text-text mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqKeys.map((key, index) => (
            <div
              key={key}
              className="card bg-white border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-heading-3 text-text pr-4">
                  {t(`faq.${key}.question`)}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-text-muted'} transition-colors`}>
                  <svg
                    className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-body text-text-muted leading-relaxed">
                  {t(`faq.${key}.answer`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

