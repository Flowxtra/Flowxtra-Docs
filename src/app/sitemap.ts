import { MetadataRoute } from 'next';
import { sourceEn } from '@/lib/source';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://docs.flowxtra.com';

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add home page
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  // Add all English documentation pages
  const pages = sourceEn.getPages();

  for (const page of pages) {
    sitemapEntries.push({
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  return sitemapEntries;
}
