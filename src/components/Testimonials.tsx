import { useTranslation } from 'react-i18next';

const testimonials = [
  { key: 'testimonial_1', avatar: 'MK' },
  { key: 'testimonial_2', avatar: 'JP' },
  { key: 'testimonial_3', avatar: 'SN' },
];

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-heading-1 text-text mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.key}
              className="card bg-gradient-soft-1 border border-white/50"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <p className="text-body text-text leading-relaxed mb-6">
                "{t(`testimonials.${testimonial.key}.quote`)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-cta rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-text">
                    {t(`testimonials.${testimonial.key}.author`)}
                  </div>
                  <div className="text-body-sm text-text-muted">
                    {t(`testimonials.${testimonial.key}.role`)}, {t(`testimonials.${testimonial.key}.company`)}
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

