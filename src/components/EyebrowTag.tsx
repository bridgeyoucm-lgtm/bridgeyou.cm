import type { ReactNode } from 'react';

type Tone = 'orange' | 'green' | 'yellow' | 'ink';

interface EyebrowTagProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}

const colorMap: Record<Tone, { bg: string; border: string; text: string; dot: string }> = {
  orange: { bg: 'rgba(255,145,77,0.08)', border: 'rgba(255,145,77,0.22)', text: '#FF914D', dot: '#FF914D' },
  green: { bg: 'rgba(126,217,87,0.10)', border: 'rgba(126,217,87,0.28)', text: '#4A9A2F', dot: '#7ED957' },
  yellow: { bg: 'rgba(255,189,89,0.14)', border: 'rgba(255,189,89,0.32)', text: '#A86C00', dot: '#FFBD59' },
  ink: { bg: 'rgba(16,24,40,0.06)', border: 'rgba(16,24,40,0.12)', text: '#1D2939', dot: '#101828' },
};

export default function EyebrowTag({ children, tone = 'orange', className = '' }: EyebrowTagProps) {
  const c = colorMap[tone];
  return (
    <div
      className={`eyebrow ${className}`}
      style={{ background: c.bg, borderColor: c.border, color: c.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.dot }} />
      {children}
    </div>
  );
}
