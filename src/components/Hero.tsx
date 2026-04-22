import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import EyebrowTag from './EyebrowTag';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';
import BridgeBookMock from './mocks/BridgeBookMock';
import BridgeCRMMock from './mocks/BridgeCRMMock';
import BridgeMetric from './mocks/BridgeMetric';
import ResponsiveMock from './mocks/ResponsiveMock';

const WHATSAPP_NUMBER = '237676858216';
const WHATSAPP_MESSAGE = 'Hello! I would like to learn more about BridgeYou services.';

export default function Hero() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="relative overflow-hidden bg-canvas border-b border-line">
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: -120, right: -120, width: 520, height: 520,
          background: 'radial-gradient(circle, rgba(255,145,77,0.22) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          bottom: -140, left: 60, width: 420, height: 420,
          background: 'radial-gradient(circle, rgba(126,217,87,0.18) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 md:gap-10 lg:gap-12 items-center py-14 md:py-20 lg:py-24">
          <div className="max-w-2xl">
            <EyebrowTag tone="orange">{t('hero.eyebrow')}</EyebrowTag>
            <h1
              className="font-display font-medium text-ink mt-5 mb-5 md:mb-6 text-balance"
              style={{
                fontSize: 'clamp(40px, 9vw, 88px)',
                lineHeight: 0.98,
                letterSpacing: '-0.035em',
              }}
            >
              <Trans
                i18nKey="hero.headline_rich"
                components={{
                  italic: <span style={{ fontStyle: 'italic', color: '#FF914D', fontWeight: 400 }} />,
                  br: <br />,
                }}
              />
            </h1>
            <p className="text-base md:text-[19px] text-muted leading-relaxed max-w-xl mb-7 md:mb-8">
              {t('hero.subheadline')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link to="/contact" className="btn-ink w-full sm:w-auto">
                {t('hero.cta_primary')}
                <Icon name="arrow" size={16} />
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full sm:w-auto">
                <WhatsAppIcon size={18} />
                {t('hero.cta_whatsapp')}
              </a>
            </div>
            <div className="mt-5 md:mt-6 flex items-center gap-2 text-[12px] md:text-[13px] text-muted">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#7ED957', boxShadow: '0 0 0 4px rgba(126,217,87,0.22)' }}
              />
              <span className="truncate">{t('hero.note')}</span>
            </div>
          </div>

          <div className="relative hidden lg:block" style={{ height: 480 }}>
            <div className="absolute right-0 top-5">
              <BridgeBookMock w={520} h={360} />
            </div>
            <div className="absolute" style={{ left: -24, top: 150, transform: 'rotate(-2deg)' }}>
              <BridgeCRMMock w={300} h={230} />
            </div>
            <div className="absolute" style={{ right: -12, bottom: 0 }}>
              <BridgeMetric w={200} label={t('hero.metric_label')} value="1,284" delta="+214%" />
            </div>
          </div>

          <div className="lg:hidden w-full pointer-events-none">
            <ResponsiveMock width={520} height={360}>
              <BridgeBookMock w={520} h={360} />
            </ResponsiveMock>
          </div>
        </div>
      </div>
    </section>
  );
}
