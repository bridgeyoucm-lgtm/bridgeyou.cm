import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const WHATSAPP_NUMBER = '237676858216';
const WHATSAPP_MESSAGE = 'Hello! I would like to learn more about BridgeYou services.';

export default function Hero() {
  const { t } = useTranslation();
  
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-green/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h1 className="font-display text-display-1 text-text mb-6 animate-fade-in-up text-balance">
              {t('hero.headline')}
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up text-balance" style={{ animationDelay: '0.1s' }}>
              {t('hero.subheadline')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {t('hero.cta_primary')}
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('hero.cta_whatsapp')}
              </a>
            </div>
          </div>

          {/* Floating Mini Cards */}
          <div className="hidden lg:block">
            {/* Left card */}
            <div className="mini-card left-[5%] top-1/4" style={{ animationDelay: '0.3s' }}>
              <div className="w-10 h-10 bg-gradient-soft-1 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-body-sm font-medium text-text">{t('hero.mini_card_automation')}</span>
            </div>

            {/* Right card */}
            <div className="mini-card right-[5%] top-1/3 animate-float-delayed">
              <div className="w-10 h-10 bg-gradient-soft-2 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-body-sm font-medium text-text">{t('hero.mini_card_growth')}</span>
            </div>

            {/* Bottom card */}
            <div className="mini-card right-[15%] bottom-1/4" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-body-sm font-medium text-text">{t('hero.mini_card_support')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

