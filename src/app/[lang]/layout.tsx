import '../global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n/config';
import { Analytics } from '@vercel/analytics/next';
import { LanguageSwitcherPortal } from '@/components/language-switcher-portal';
// import { AISearchTrigger } from '@/components/search';

const inter = Inter({
  subsets: ['latin'],
});

export async function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const metadata: Record<Locale, Metadata> = {
    en: {
      title: {
        default: 'Flowxtra Documentation',
        template: '%s | Flowxtra Docs',
      },
      description: 'Comprehensive documentation for Flowxtra - The modern job posting and recruitment platform. Learn how to post jobs, manage applications, integrate APIs, and optimize your hiring process.',
      keywords: ['Flowxtra', 'documentation', 'job posting', 'recruitment', 'API', 'hiring', 'ATS'],
      authors: [{ name: 'Dpro GmbH' }],
      metadataBase: new URL('https://docs.flowxtra.com'),
      openGraph: {
        title: 'Flowxtra Documentation',
        description: 'Comprehensive documentation for Flowxtra - The modern job posting and recruitment platform',
        url: 'https://docs.flowxtra.com',
        siteName: 'Flowxtra Documentation',
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Flowxtra Documentation',
        description: 'Comprehensive documentation for Flowxtra - The modern job posting and recruitment platform',
      },
    },
    de: {
      title: {
        default: 'Flowxtra Dokumentation',
        template: '%s | Flowxtra Docs',
      },
      description: 'Umfassende Dokumentation für Flowxtra - Die moderne Stellenausschreibungs- und Recruiting-Plattform. Lernen Sie, wie Sie Jobs posten, Bewerbungen verwalten, APIs integrieren und Ihren Einstellungsprozess optimieren.',
      keywords: ['Flowxtra', 'Dokumentation', 'Stellenausschreibung', 'Recruiting', 'API', 'Einstellung', 'ATS'],
      authors: [{ name: 'Dpro GmbH' }],
      metadataBase: new URL('https://docs.flowxtra.com'),
      openGraph: {
        title: 'Flowxtra Dokumentation',
        description: 'Umfassende Dokumentation für Flowxtra - Die moderne Stellenausschreibungs- und Recruiting-Plattform',
        url: 'https://docs.flowxtra.com',
        siteName: 'Flowxtra Dokumentation',
        locale: 'de_DE',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Flowxtra Dokumentation',
        description: 'Umfassende Dokumentation für Flowxtra - Die moderne Stellenausschreibungs- und Recruiting-Plattform',
      },
    },
  };

  return metadata[lang as Locale] || metadata.en;
}

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <LanguageSwitcherPortal />
        {/* <AISearchTrigger /> */}
        <Analytics />
      </body>
    </html>
  );
}
