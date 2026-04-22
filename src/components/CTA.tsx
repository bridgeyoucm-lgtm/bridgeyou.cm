import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '237676858216';
const WHATSAPP_MESSAGE = 'Hello! I would like to learn more about BridgeYou services.';
const EMAIL = 'bridgeyoucm@gmail.com';
const PHONE = '+237 676 858 216';

export default function CTA() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const rows = [
    { k: t('cta_banner.call'), v: PHONE, i: 'phone' as const },
    { k: t('cta_banner.email'), v: EMAIL, i: 'mail' as const },
    { k: t('cta_banner.visit'), v: t('cta_banner.address'), i: 'pin' as const },
  ];

  return (
    <section className="relative overflow-hidden text-white" style={{ background: '#101828' }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 100%, rgba(255,145,77,0.24) 0%, transparent 50%), radial-gradient(ellipse at 10% 0%, rgba(126,217,87,0.16) 0%, transparent 50%)',
        }}
      />
      <div className="container-custom relative py-16 md:py-24">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12 items-center">
          <div>
            <h2
              className="font-display font-medium"
              style={{ fontSize: 'clamp(40px, 6vw, 68px)', letterSpacing: '-0.035em', lineHeight: 1.02 }}
            >
              <Trans
                i18nKey="cta_banner.heading_rich"
                components={{
                  italic: <span className="italic" style={{ color: '#FF914D' }} />,
                  br: <br />,
                }}
              />
            </h2>
            <p className="text-[17px] leading-relaxed max-w-xl mt-5 mb-8" style={{ color: '#8A94A6' }}>
              {t('cta_banner.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                {t('cta_banner.cta_primary')}
                <Icon name="arrow" size={16} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[14px] font-medium transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto"
                style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.18)' }}
              >
                <WhatsAppIcon size={18} />
                {t('cta_banner.cta_whatsapp')}
              </a>
            </div>
          </div>
          <div
            className="rounded-2xl p-6 md:p-7"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="rounded-full"
                style={{
                  width: 8, height: 8, background: '#7ED957',
                  boxShadow: '0 0 0 4px rgba(126,217,87,0.22)',
                }}
              />
              <div className="text-[13px]" style={{ color: '#8A94A6' }}>
                <Trans
                  i18nKey="cta_banner.reply_note"
                  components={{
                    strong: <span className="text-white font-medium" />,
                  }}
                />
              </div>
            </div>
            {rows.map((r) => (
              <div
                key={r.k}
                className="flex items-center gap-3 py-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'rgba(255,145,77,0.14)', color: '#FF914D',
                  }}
                >
                  <Icon name={r.i} size={16} sw={1.8} />
                </div>
                <div>
                  <div className="text-[11px]" style={{ color: '#8A94A6' }}>{r.k}</div>
                  <div className="text-[14px] text-white font-medium">{r.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
