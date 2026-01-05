import { i18n } from '@/lib/i18n';

export const { defaultLanguage, languages } = i18n;
export type Locale = (typeof languages)[number];

export const languageLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ar: 'العربية',
  zh: '中文',
};

export const languageFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷',
  es: '🇪🇸',
  it: '🇮🇹',
  pt: '🇵🇹',
  ar: '🇸🇦',
  zh: '🇨🇳',
};

// Re-export for backward compatibility
export { i18n };
