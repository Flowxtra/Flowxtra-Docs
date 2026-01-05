import { loader, type InferPageType } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import type { Locale } from '@/i18n/config';

// Import collections directly from the generated files
import { docsEn, docsDe } from 'fumadocs-mdx:collections/server';

// Create sources for each language
export const sourceEn = loader({
  baseUrl: '/docs',
  source: docsEn.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

export const sourceDe = loader({
  baseUrl: '/docs',
  source: docsDe.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

// Map locales to their sources
const sources: Record<Locale, any> = {
  en: sourceEn,
  de: sourceDe,
  // Other languages will fallback to English until we create their collections
  fr: sourceEn,
  es: sourceEn,
  it: sourceEn,
  pt: sourceEn,
  ar: sourceEn,
  zh: sourceEn,
};

export function getSource(locale: Locale) {
  return sources[locale] || sourceEn;
}

// For default export (used by some utilities)
export const source = sourceEn;

export function getPageImage(page: any) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}

export async function getLLMText(page: any) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}
