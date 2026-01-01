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

  const MDX = page.data.body;

  const markdownUrl = `${page.url}.mdx`;
  const githubUrl = `https://github.com/flowxtra/flowxtra-docs/blob/main/content/docs/${slug?.join('/') || 'index'}.mdx`;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
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
    params.map((param) => ({
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

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
