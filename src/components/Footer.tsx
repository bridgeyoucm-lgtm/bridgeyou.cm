import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.PNG';

export default function Footer() {
  const { t } = useTranslation();

  const solutionLinks = [
    { label: t('solutions.websites.title'), href: '/solutions#websites' },
    { label: t('solutions.booking.title'), href: '/solutions#booking' },
    { label: t('solutions.crm.title'), href: '/solutions#crm' },
    { label: t('solutions.ecommerce.title'), href: '/solutions#ecommerce' },
    { label: t('solutions.automations.title'), href: '/solutions#automations' },
  ];

  const companyLinks = [
    { label: t('footer.about'), href: '/company' },
    { label: t('footer.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-border">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="BridgeYou" className="h-10 w-auto" />
            </Link>
            <p className="text-body-sm text-text-muted leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-body font-semibold text-text mb-4">
              {t('footer.solutions')}
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-body font-semibold text-text mb-4">
              {t('footer.company')}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-body-sm text-text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-body font-semibold text-text mb-4">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-body-sm text-text-muted hover:text-primary transition-colors"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-body-sm text-text-muted hover:text-primary transition-colors"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-body-sm text-text-muted text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

