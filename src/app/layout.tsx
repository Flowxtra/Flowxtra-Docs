import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
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
};

import { Analytics } from "@vercel/analytics/next";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  );
}
