import { useTranslation } from 'react-i18next';

const cases = [
  {
    key: 'case_1',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    tag: 'E-commerce',
    color: 'bg-primary',
  },
  {
    key: 'case_2',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tag: 'Healthcare',
    color: 'bg-accent-green',
  },
  {
    key: 'case_3',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    tag: 'Real Estate',
    color: 'bg-accent-yellow',
  },
];

export default function CaseStudies() {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-heading-1 text-text mb-4">
            {t('featured.title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('featured.subtitle')}
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div key={caseItem.key} className="group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[3/2]">
                <img
                  src={caseItem.image}
                  alt={t(`featured.${caseItem.key}.title`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`absolute top-4 left-4 px-3 py-1 ${caseItem.color} text-white text-body-sm font-medium rounded-full`}>
                  {caseItem.tag}
                </span>
              </div>

              {/* Content */}
              <div className="text-body-sm text-primary font-medium mb-2">
                {t(`featured.${caseItem.key}.client`)}
              </div>
              <h3 className="text-heading-3 text-text mb-2">
                {t(`featured.${caseItem.key}.title`)}
              </h3>
              <p className="text-body text-text-muted mb-4">
                {t(`featured.${caseItem.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

