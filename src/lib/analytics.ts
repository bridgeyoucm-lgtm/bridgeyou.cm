declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const LEAD_CONVERSION_ID = 'AW-18111403268/lkpFCPjV0aAcEISqmLxD';

export function trackLeadConversion(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: LEAD_CONVERSION_ID,
    value: 1.0,
    currency: 'USD',
  });
}

export {};
