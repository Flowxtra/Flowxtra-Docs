import { getSource } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { Locale } from '@/i18n/config';
import type { ReactNode } from 'react';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;
  const source = getSource(lang as Locale);

  return (
    <DocsLayout tree={source.pageTree} {...baseOptions(lang as Locale)}>
      {children}
    </DocsLayout>
  );
}
