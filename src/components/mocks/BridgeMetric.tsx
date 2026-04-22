import Icon from '../Icon';

interface BridgeMetricProps {
  w?: number;
  className?: string;
  label?: string;
  value?: string;
  delta?: string;
}

export default function BridgeMetric({
  w = 220,
  className = '',
  label = 'Bookings · 30d',
  value = '1,284',
  delta = '+214%',
}: BridgeMetricProps) {
  const ORANGE = '#FF914D';
  const GREEN = '#7ED957';
  const INK = '#101828';
  const MUTED = '#667085';
  const LINE = '#EAECF0';
  const WHITE = '#FFFFFF';

  return (
    <div
      className={`font-sans ${className}`}
      style={{
        width: w, background: WHITE, borderRadius: 12,
        border: `1px solid ${LINE}`,
        boxShadow: '0 8px 24px rgba(16,24,40,0.07), 0 2px 6px rgba(16,24,40,0.04)',
        padding: 14,
      }}
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="text-[11px]" style={{ color: MUTED }}>{label}</div>
        <div className="flex items-center gap-1 text-[10px] font-semibold" style={{ color: GREEN }}>
          <Icon name="arrowUp" size={11} sw={2.2} />
          {delta}
        </div>
      </div>
      <div
        className="font-display font-semibold"
        style={{ fontSize: 28, color: INK, letterSpacing: '-0.02em' }}
      >
        {value}
      </div>
      <svg width="100%" height="28" viewBox="0 0 200 28" style={{ marginTop: 4 }} aria-hidden="true">
        <path
          d="M0 20 L20 18 L40 19 L60 14 L80 15 L100 10 L120 12 L140 6 L160 8 L180 3 L200 4"
          fill="none"
          stroke={ORANGE}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0 20 L20 18 L40 19 L60 14 L80 15 L100 10 L120 12 L140 6 L160 8 L180 3 L200 4 L200 28 L0 28 Z"
          fill={`${ORANGE}18`}
        />
      </svg>
    </div>
  );
}
