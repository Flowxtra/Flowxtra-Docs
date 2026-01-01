import type { Locale } from '../config';
import { en } from './en';
import { de } from './de';

export const translations = {
  en,
  de,
} as const;

export function getTranslation(locale: Locale) {
  return translations[locale] || translations.en;
}
