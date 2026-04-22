import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  const cols = [
    {
      heading: t('footer.col_services'),
      links: [
        { label: t('solutions.websites.title'), to: '/solutions#websites' },
        { label: t('solutions.booking.title'), to: '/solutions#booking' },
        { label: t('solutions.crm.title'), to: '/solutions#crm' },
        { label: t('solutions.ecommerce.title'), to: '/solutions#ecommerce' },
        { label: t('solutions.automations.title'), to: '/solutions#automations' },
        { label: t('solutions.ads.title'), to: '/solutions#ads' },
      ],
    },
    {
      heading: t('footer.col_products'),
      links: [
        { label: 'BridgeBook', to: '/products#bridgebook' },
        { label: 'BridgeShop', to: '/products#bridgeshop' },
        { label: 'BridgeCRM', to: '/products#bridgecrm' },
        { label: 'BridgeFlow', to: '/products#bridgeflow' },
        { label: 'BridgeForms', to: '/products#bridgeforms' },
        { label: 'BridgeChat', to: '/products#bridgechat' },
      ],
    },
    {
      heading: t('footer.col_company'),
      links: [
        { label: t('footer.about'), to: '/company' },
        { label: t('footer.contact'), to: '/contact' },
      ],
    },
    {
      heading: t('footer.col_legal'),
      links: [
        { label: t('footer.privacy'), to: '#' },
        { label: t('footer.terms'), to: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-line">
      <div className="container-custom pt-12 md:pt-16 pb-9">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)] gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-1">
            <Logo size={22} />
            <p className="mt-4 text-[14px] leading-relaxed text-muted max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-2 mt-5">
              {['in', 'tw', 'ig', 'yt'].map((s) => (
                <div
                  key={s}
                  className="flex items-center justify-center text-muted text-[11px] font-semibold"
                  style={{
                    width: 34, height: 34, borderRadius: 17,
                    border: '1px solid #EAECF0', letterSpacing: '0.02em',
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.heading}>
              <div className="mono-caption mb-3.5">{c.heading}</div>
              <div className="flex flex-col gap-2">
                {c.links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="text-[14px] text-ink-2 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-line">
          <div className="font-mono text-[11px] text-muted mb-2">{t('footer.legal_line')}</div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-[12px] text-muted">{t('footer.copyright')}</div>
            <div className="text-[12px] italic text-muted">{t('footer.bilingual_note')}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
