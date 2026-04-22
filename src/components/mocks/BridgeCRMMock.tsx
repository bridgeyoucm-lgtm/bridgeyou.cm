import Icon from '../Icon';

interface BridgeCRMMockProps {
  w?: number;
  h?: number;
  className?: string;
}

export default function BridgeCRMMock({ w = 380, h = 280, className = '' }: BridgeCRMMockProps) {
  const ORANGE = '#FF914D';
  const GREEN = '#7ED957';
  const YELLOW = '#FFBD59';
  const INK = '#101828';
  const MUTED = '#667085';
  const MUTED2 = '#98A2B3';
  const LINE = '#EAECF0';
  const LINE2 = '#F2F4F7';
  const CANVAS = '#F6F8FB';
  const WHITE = '#FFFFFF';

  const stages = [
    { name: 'New', color: MUTED2, count: 12, deals: [{ n: 'Boulangerie Ella', v: '450 k' }, { n: 'Aurore Clinic', v: '1.2 M' }] },
    { name: 'Qualified', color: YELLOW, count: 8, deals: [{ n: 'Marché Mokolo Retail', v: '890 k' }] },
    { name: 'Won', color: GREEN, count: 5, deals: [{ n: 'Résidence Bonanjo', v: '3.4 M' }] },
  ];

  return (
    <div
      className={`font-sans overflow-hidden flex flex-col ${className}`}
      style={{
        width: w, height: h,
        borderRadius: 16, background: WHITE,
        border: `1px solid ${LINE}`,
        boxShadow: '0 20px 48px rgba(16,24,40,0.10), 0 6px 16px rgba(16,24,40,0.05)',
      }}
    >
      <div className="flex items-center justify-between" style={{ padding: '12px 14px', borderBottom: `1px solid ${LINE2}` }}>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center justify-center"
            style={{ width: 22, height: 22, borderRadius: 6, background: INK }}
          >
            <Icon name="crm" size={13} stroke={ORANGE} sw={2} />
          </div>
          <div className="font-display font-semibold" style={{ fontSize: 13, color: INK, letterSpacing: '-0.01em' }}>
            BridgeCRM
          </div>
        </div>
        <div className="font-mono text-[10px]" style={{ color: MUTED }}>Pipeline · Q2</div>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1" style={{ padding: 12 }}>
        {stages.map((s) => (
          <div
            key={s.name}
            className="flex flex-col gap-1.5"
            style={{ background: CANVAS, borderRadius: 10, padding: 8 }}
          >
            <div className="flex items-center justify-between mb-0.5">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: INK }}>
                <span className="rounded-full" style={{ width: 5, height: 5, background: s.color }} />
                {s.name}
              </div>
              <div className="font-mono text-[9px]" style={{ color: MUTED }}>{s.count}</div>
            </div>
            {s.deals.map((d) => (
              <div key={d.n} style={{ background: WHITE, border: `1px solid ${LINE}`, padding: '6px 7px', borderRadius: 7 }}>
                <div className="font-medium" style={{ fontSize: 9.5, color: INK, marginBottom: 1 }}>{d.n}</div>
                <div className="font-mono" style={{ fontSize: 8.5, color: MUTED }}>{d.v} FCFA</div>
              </div>
            ))}
            <div
              className="text-center text-[9px]"
              style={{ border: `1px dashed ${LINE}`, borderRadius: 7, padding: 6, color: MUTED2 }}
            >
              + Add deal
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
