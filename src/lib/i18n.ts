/**
 * Internationalization (i18n) Configuration
 * 
 * This file defines the supported languages and locale settings for Flowxtra documentation.
 * Currently supports English as the primary language, with structure ready for Arabic and German.
 */

export const languages = {
    en: {
        code: 'en',
        name: 'English',
        dir: 'ltr',
    },
    // Future languages - uncomment when ready to add translations
    // ar: {
    //   code: 'ar',
    //   name: 'العربية',
    //   dir: 'rtl',
    // },
    // de: {
    //   code: 'de',
    //   name: 'Deutsch',
    //   dir: 'ltr',
    // },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = 'en';

export const supportedLanguages = Object.keys(languages) as LanguageCode[];

/**
 * Get language configuration by code
 */
export function getLanguage(code: string) {
    return languages[code as LanguageCode] || languages[defaultLanguage];
}

/**
 * Check if a language code is supported
 */
export function isLanguageSupported(code: string): code is LanguageCode {
    return code in languages;
}
