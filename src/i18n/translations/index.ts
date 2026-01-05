import type { Locale } from '../config';
import { en } from './en';
import { de } from './de';

export const translations = {
  en,
  de,
  fr: en, // Fallback to English for languages without translations
  es: en,
  it: en,
  pt: en,
  ar: en,
  zh: en,
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale as keyof typeof translations] || translations.en;
}
