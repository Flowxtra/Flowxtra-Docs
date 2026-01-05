'use client';

import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { i18n, languageLabels, languageFlags, type Locale } from '@/i18n/config';

// Only show languages that have actual translations available
const availableLanguages: Locale[] = ['en', 'de'];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const params = useParams();
  const currentLang = (params?.lang as Locale) || i18n.defaultLanguage;

  const getLocalizedPath = (lang: Locale) => {
    if (!pathname) return `/${lang}`;

    // Remove the current language from the path
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '');

    // Add the new language
    return `/${lang}${pathWithoutLang}`;
  };

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-fd-accent transition-colors text-sm"
        aria-label="Change language"
      >
        <span className="font-medium">{languageLabels[currentLang]}</span>
      </button>

      <div className="absolute right-0 mt-2 w-40 py-1 bg-fd-popover border border-fd-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {availableLanguages.map((lang) => (
          <Link
            key={lang}
            href={getLocalizedPath(lang)}
            className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-fd-accent transition-colors ${
              currentLang === lang ? 'bg-fd-accent font-medium' : ''
            }`}
          >
            <span className="text-base">{languageFlags[lang]}</span>
            <span>{languageLabels[lang]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
