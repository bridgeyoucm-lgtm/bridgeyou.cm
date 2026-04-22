import type { SVGProps } from 'react';

export type IconName =
  | 'globe' | 'calendar' | 'users' | 'cart' | 'zap' | 'spark'
  | 'book' | 'shop' | 'crm' | 'flow' | 'form' | 'chat'
  | 'check' | 'arrow' | 'arrowUp' | 'plus' | 'chevDown'
  | 'whatsapp' | 'sparkle' | 'play' | 'dot' | 'pin'
  | 'mail' | 'phone' | 'menu' | 'close' | 'star'
  | 'search' | 'lock' | 'moon' | 'sun';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  sw?: number;
}

export default function Icon({ name, size = 20, sw = 1.6, stroke = 'currentColor', ...rest }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: sw,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    ...rest,
  };
  const paths: Record<IconName, JSX.Element> = {
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
    users: <><circle cx="9" cy="9" r="3.2" /><path d="M3 20c.8-3.4 3.2-5 6-5s5.2 1.6 6 5" /><circle cx="17" cy="8" r="2.6" /><path d="M17 12c2.4 0 4 1.2 4.6 3.5" /></>,
    cart: <><path d="M3 4h2.2l2.2 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.5L21 8H6" /><circle cx="10" cy="21" r="1.2" /><circle cx="17" cy="21" r="1.2" /></>,
    zap: <path d="M13 3 4.5 14H11l-1 7 8.5-11H12l1-7Z" />,
    spark: <><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5Z" /><path d="M4 19a2 2 0 0 0 2 2h12" /><path d="M8 7h7M8 11h7" /></>,
    shop: <><path d="M4 8h16l-1 12H5L4 8Z" /><path d="M8 8V6a4 4 0 1 1 8 0v2" /></>,
    crm: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 14h5M7 17h8" /></>,
    flow: <><rect x="3" y="4" width="6" height="6" rx="1.2" /><rect x="15" y="4" width="6" height="6" rx="1.2" /><rect x="9" y="14" width="6" height="6" rx="1.2" /><path d="M9 7h6M12 10v4M6 10v4h6M18 10v4h-6" /></>,
    form: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
    chat: <><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V6Z" /></>,
    check: <path d="M4 12.5 9 17.5 20 6.5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUp: <path d="M7 17 17 7M9 7h8v8" />,
    plus: <path d="M12 5v14M5 12h14" />,
    chevDown: <path d="M6 9l6 6 6-6" />,
    whatsapp: <><path d="M20.5 12a8.5 8.5 0 1 1-15.9-4.2L4 20l4.4-.9A8.5 8.5 0 0 0 20.5 12Z" /><path d="M8.6 9.8c.1 1.6.9 3.1 2.2 4.3 1.2 1.2 2.6 2 4.2 2.2.5 0 1-.2 1.3-.6l.4-.5c.2-.2.2-.5 0-.7l-1.5-1.2a.6.6 0 0 0-.8 0l-.4.5a.5.5 0 0 1-.6.2 5.6 5.6 0 0 1-2.7-2.7.5.5 0 0 1 .2-.6l.5-.4a.6.6 0 0 0 0-.8L9.8 8a.5.5 0 0 0-.7 0l-.5.4a1.7 1.7 0 0 0-.6 1.3Z" /></>,
    sparkle: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" /><path d="M19 16l.7 2 2 .7-2 .7L19 22l-.7-2-2-.7 2-.7.7-2Z" /></>,
    play: <path d="M7 5v14l12-7L7 5Z" />,
    dot: <circle cx="12" cy="12" r="3" />,
    pin: <><path d="M12 22s7-7.5 7-12a7 7 0 0 0-14 0c0 4.5 7 12 7 12Z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    star: <path d="M12 3l2.7 5.8 6.3.9-4.6 4.5 1.1 6.3L12 17.5 6.5 20.5l1.1-6.3L3 9.7l6.3-.9L12 3Z" />,
    search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    moon: <path d="M20 14A8 8 0 1 1 10 4a7 7 0 0 0 10 10Z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" /></>,
  };
  return <svg {...common}>{paths[name]}</svg>;
}
