import whatsappIcon from '../assets/WhatsApp_icon.png';

interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

export default function WhatsAppIcon({ size = 18, className = '' }: WhatsAppIconProps) {
  return (
    <img
      src={whatsappIcon}
      alt=""
      aria-hidden="true"
      className={`inline-block ${className}`}
      style={{ width: size, height: size, objectFit: 'contain' }}
    />
  );
}
