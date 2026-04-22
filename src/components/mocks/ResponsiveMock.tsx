import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ResponsiveMockProps {
  width: number;
  height: number;
  children: ReactNode;
  maxScale?: number;
  className?: string;
}

export default function ResponsiveMock({ width, height, children, maxScale = 1, className = '' }: ResponsiveMockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const parentWidth = el.clientWidth;
      if (parentWidth === 0) return;
      const next = Math.min(maxScale, parentWidth / width);
      setScale(next);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, maxScale]);

  return (
    <div ref={ref} className={`relative w-full ${className}`} style={{ height: height * scale }}>
      <div
        className="absolute left-1/2 top-0"
        style={{
          width,
          height,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {children}
      </div>
    </div>
  );
}
