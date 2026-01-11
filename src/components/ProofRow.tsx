import { useTranslation } from 'react-i18next';

export default function ProofRow() {
  const { t } = useTranslation();

  const chips = [
    { key: 'chip_websites', icon: '🌐' },
    { key: 'chip_automation', icon: '⚡' },
    { key: 'chip_crm', icon: '📊' },
    { key: 'chip_ecommerce', icon: '🛒' },
  ];

  return (
    <section className="py-12 bg-white border-y border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <p className="text-body text-text-muted font-medium">
            {t('proof.title')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {chips.map((chip) => (
              <div
                key={chip.key}
                className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-body-sm font-medium text-text"
              >
                <span>{chip.icon}</span>
                {t(`proof.${chip.key}`)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

