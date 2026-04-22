import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';
import Icon from './Icon';

export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/solutions', label: t('nav.solutions') },
    { href: '/products', label: t('nav.products') },
    { href: '/company', label: t('nav.company') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="sticky top-0 z-50 border-b border-line"
      style={{ background: 'rgba(246,248,251,0.72)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          <div className="flex items-center gap-10">
            <Link to="/" aria-label="BridgeYou home" className="flex items-center">
              <Logo size={20} />
            </Link>
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-[14px] font-medium transition-colors ${
                    isActive(link.href) ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3.5">
            <LanguageToggle />
            <Link to="/contact" className="btn-ink">
              {t('nav.book_consult')}
              <Icon name="arrow" size={14} />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-line2 transition-colors"
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={22} stroke="#101828" sw={1.8} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-line animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive(link.href) ? 'bg-primary/10 text-primary' : 'text-muted hover:bg-line2 hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 flex items-center justify-between">
                <span className="text-[13px] text-muted">Language</span>
                <LanguageToggle />
              </div>
              <div className="px-4 pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-ink w-full justify-center"
                >
                  {t('nav.book_consult')}
                  <Icon name="arrow" size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
