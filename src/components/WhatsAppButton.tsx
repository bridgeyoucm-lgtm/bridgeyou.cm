import { useTranslation } from 'react-i18next';
import WhatsAppIcon from './WhatsAppIcon';

const WHATSAPP_NUMBER = '237676858216';
const WHATSAPP_MESSAGE = 'Hello! I would like to learn more about BridgeYou services.';

export default function WhatsAppButton() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 group"
      aria-label={t('whatsapp.tooltip')}
    >
      <span
        className="hidden md:inline-flex bg-white text-ink text-[13px] font-medium px-3.5 py-2 rounded-full border border-line"
        style={{ boxShadow: '0 8px 24px rgba(16,24,40,0.07), 0 2px 6px rgba(16,24,40,0.04)' }}
      >
        {t('whatsapp.prompt')}
      </span>
      <div
        className="transition-transform group-hover:scale-105"
        style={{ filter: 'drop-shadow(0 12px 28px rgba(37,211,102,0.35))' }}
      >
        <WhatsAppIcon size={60} />
      </div>
    </a>
  );
}
