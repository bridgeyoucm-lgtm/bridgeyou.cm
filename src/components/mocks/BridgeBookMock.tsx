interface BridgeBookMockProps {
  w?: number;
  h?: number;
  className?: string;
}

export default function BridgeBookMock({ w = 520, h = 360, className = '' }: BridgeBookMockProps) {
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

  const sidebarItems = ['Today', 'Calendar', 'Clients', 'Staff', 'Services', 'Payments'];

  return (
    <div
      className={`font-sans overflow-hidden flex flex-col ${className}`}
      style={{
        width: w,
        height: h,
        borderRadius: 16,
        background: WHITE,
        border: `1px solid ${LINE}`,
        boxShadow: '0 20px 48px rgba(16,24,40,0.10), 0 6px 16px rgba(16,24,40,0.05)',
      }}
    >
      <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ borderBottom: `1px solid ${LINE2}` }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
        <div className="flex-1" />
        <div className="font-mono text-[11px]" style={{ color: MUTED }}>
          bridgebook.app/clinique-aurore
        </div>
      </div>

      <div className="flex flex-1">
        <div className="py-3.5 px-2.5" style={{ width: 150, borderRight: `1px solid ${LINE2}`, background: CANVAS }}>
          <div
            className="font-display font-semibold text-sm mb-3.5 pl-1.5"
            style={{ color: INK, letterSpacing: '-0.01em' }}
          >
            BridgeBook
          </div>
          {sidebarItems.map((item, idx) => (
            <div
              key={item}
              className="flex items-center gap-2 mb-0.5"
              style={{
                padding: '7px 8px',
                borderRadius: 7,
                background: idx === 1 ? WHITE : 'transparent',
                border: idx === 1 ? `1px solid ${LINE}` : '1px solid transparent',
                color: idx === 1 ? INK : MUTED,
                fontSize: 12,
                fontWeight: idx === 1 ? 500 : 400,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: idx === 1 ? ORANGE : MUTED2 }}
              />
              {item}
            </div>
          ))}
        </div>

        <div className="flex-1 p-3.5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[11px]" style={{ color: MUTED }}>Wednesday</div>
              <div className="font-display font-semibold text-lg" style={{ color: INK, letterSpacing: '-0.01em' }}>
                April 22
              </div>
            </div>
            <div className="flex gap-1.5">
              <div
                className="text-[11px]"
                style={{ padding: '4px 10px', color: MUTED, border: `1px solid ${LINE}`, borderRadius: 7 }}
              >Day</div>
              <div
                className="text-[11px] text-white"
                style={{ padding: '4px 10px', background: INK, borderRadius: 7 }}
              >Week</div>
            </div>
          </div>

          <div
            className="grid gap-1 text-[10px]"
            style={{ gridTemplateColumns: '32px repeat(5, 1fr)', color: MUTED }}
          >
            <div />
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d) => (
              <div key={d} className="text-center font-medium pb-1">{d}</div>
            ))}
          </div>

          <div className="relative mt-0.5" style={{ height: 210 }}>
            {['9', '10', '11', '12', '1'].map((h, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 flex items-start gap-1"
                style={{ top: i * 42 }}
              >
                <div className="text-right" style={{ width: 28, fontSize: 9, color: MUTED2 }}>{h}</div>
                <div className="flex-1" style={{ height: 1, background: LINE2 }} />
              </div>
            ))}
            <div
              className="absolute"
              style={{
                left: 32, top: 4, width: 'calc((100% - 32px)/5 - 3px)', height: 34,
                background: `${ORANGE}1f`, borderLeft: `3px solid ${ORANGE}`, borderRadius: 5, padding: '4px 6px',
              }}
            >
              <div className="text-[10px] font-semibold" style={{ color: INK }}>Consultation</div>
              <div className="text-[9px]" style={{ color: MUTED }}>Mme Ngo · 9:00</div>
            </div>
            <div
              className="absolute"
              style={{
                left: `calc(32px + ((100% - 32px)/5)*2)`, top: 48, width: 'calc((100% - 32px)/5 - 3px)', height: 50,
                background: `${GREEN}25`, borderLeft: `3px solid ${GREEN}`, borderRadius: 5, padding: '4px 6px',
              }}
            >
              <div className="text-[10px] font-semibold" style={{ color: INK }}>Follow-up</div>
              <div className="text-[9px]" style={{ color: MUTED }}>K. Mbarga · 10:30</div>
            </div>
            <div
              className="absolute"
              style={{
                left: `calc(32px + ((100% - 32px)/5)*3)`, top: 20, width: 'calc((100% - 32px)/5 - 3px)', height: 70,
                background: `${YELLOW}30`, borderLeft: `3px solid ${YELLOW}`, borderRadius: 5, padding: '4px 6px',
              }}
            >
              <div className="text-[10px] font-semibold" style={{ color: INK }}>Dental clean</div>
              <div className="text-[9px]" style={{ color: MUTED }}>A. Fouda · 9:30</div>
            </div>
            <div
              className="absolute"
              style={{
                left: `calc(32px + ((100% - 32px)/5)*4)`, top: 90, width: 'calc((100% - 32px)/5 - 3px)', height: 40,
                background: `${ORANGE}1f`, borderLeft: `3px solid ${ORANGE}`, borderRadius: 5, padding: '4px 6px',
              }}
            >
              <div className="text-[10px] font-semibold" style={{ color: INK }}>Consultation</div>
              <div className="text-[9px]" style={{ color: MUTED }}>J. Tchoua</div>
            </div>
            <div
              className="absolute"
              style={{
                left: `calc(32px + ((100% - 32px)/5)*1)`, top: 120, width: 'calc((100% - 32px)/5 - 3px)', height: 36,
                background: `${INK}10`, borderLeft: `3px solid ${INK}`, borderRadius: 5, padding: '4px 6px',
              }}
            >
              <div className="text-[10px] font-semibold" style={{ color: INK }}>Staff sync</div>
              <div className="text-[9px]" style={{ color: MUTED }}>Team · 12:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
