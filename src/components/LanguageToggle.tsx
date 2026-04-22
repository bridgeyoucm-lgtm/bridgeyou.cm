import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith('fr') ? 'FR' : 'EN';

  const setLang = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('bridgeyou-language', lang);
  };

  return (
    <div className="flex items-center gap-0.5 p-0.5 rounded-full border border-line bg-white text-[12px] font-medium">
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          current === 'EN' ? 'bg-canvas text-ink' : 'text-muted hover:text-ink'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang('fr')}
        className={`px-2.5 py-1 rounded-full transition-colors ${
          current === 'FR' ? 'bg-canvas text-ink' : 'text-muted hover:text-ink'
        }`}
        aria-label="Français"
      >
        FR
      </button>
    </div>
  );
}
