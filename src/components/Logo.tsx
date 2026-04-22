import logoImg from '../assets/BridgeYou_Logo.png';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 22, className = '' }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="BridgeYou"
      className={`w-auto block ${className}`}
      style={{ height: size + 10 }}
    />
  );
}
