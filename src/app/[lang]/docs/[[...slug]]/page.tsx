import { getPageImage, getSource } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import type { Locale } from '@/i18n/config';
import { LLMCopyButton, ViewOptions } from '@/components/page-actions';

export const dynamic = 'force-dynamic';
export const dynamicParams = true;

export default async function Page(props: {
  params: Promise<{
    lang: string;
    slug?: string[];
  }>;
}) {
  const params = await props.params;
  const { lang, slug } = params;
  const source = getSource(lang as Locale);
  const page = source.getPage(slug);

  if (!page) notFound();

  const pageData = page.data as any;

  // The MDX component is in _exports.default in fumadocs-mdx v14
  const MDX = pageData._exports?.default;

  if (!MDX) {
    console.error('MDX component not found. pageData keys:', Object.keys(pageData));
    console.error('pageData._exports:', pageData._exports);
    throw new Error('MDX component not found');
  }

  const markdownUrl = `${page.url}.mdx`;
  const githubUrl = `https://github.com/flowxtra/flowxtra-docs/blob/main/content/docs/${slug?.join('/') || 'index'}.mdx`;

  return (
    <DocsPage toc={pageData.toc} full={pageData.full}>
      <DocsTitle>{pageData.title}</DocsTitle>
      <DocsDescription>{pageData.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={markdownUrl} />
        <ViewOptions markdownUrl={markdownUrl} githubUrl={githubUrl} />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const sources = await Promise.all([
    getSource('en').generateParams(),
    getSource('de').generateParams(),
  ]);

  return sources.flatMap((params, index) =>
    params.map((param: any) => ({
      lang: index === 0 ? 'en' : 'de',
      slug: param.slug,
    }))
  );
}

export async function generateMetadata(props: {
  params: Promise<{
    lang: string;
    slug?: string[];
  }>;
}): Promise<Metadata> {
  const params = await props.params;
  const { lang, slug } = params;
  const source = getSource(lang as Locale);
  const page = source.getPage(slug);

  if (!page) notFound();

  const pageData = page.data as any;

  // Build the canonical URL
  const canonicalUrl = `https://docs.flowxtra.com${page.url}`;

  return {
    title: pageData.title,
    description: pageData.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      images: getPageImage(page).url,
      url: canonicalUrl,
    },
  };
}
