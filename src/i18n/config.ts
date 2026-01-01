export const i18n = {
  defaultLanguage: 'en',
  languages: ['en', 'de'],
} as const;

export type Locale = (typeof i18n.languages)[number];

export const languageLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
};

export const languageFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
};
