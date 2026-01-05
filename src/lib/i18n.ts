import { defineI18n } from 'fumadocs-core/i18n';

/**
 * Internationalization (i18n) Configuration using Fumadocs
 * 
 * Official Fumadocs i18n setup supporting 8 languages
 */

export const i18n = defineI18n({
    defaultLanguage: 'en',
    languages: ['en', 'de', 'fr', 'es', 'it', 'pt', 'ar', 'zh'],
    hideLocale: 'default-locale', // Hide /en prefix, show /de, /fr, etc.
    fallbackLanguage: 'en', // Fallback to English if translation missing
});

// Export for backward compatibility
export const defaultLanguage = i18n.defaultLanguage;
export const languages = i18n.languages;
export type LanguageCode = typeof i18n.languages[number];
