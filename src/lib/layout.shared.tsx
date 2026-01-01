import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Book, Code, Lightbulb, Zap } from 'lucide-react';
import type { Locale } from '@/i18n/config';

export function baseOptions(lang: Locale = 'en'): BaseLayoutProps {
  return {
    nav: {
      title: lang === 'de' ? 'Flowxtra Dokumentation' : 'Flowxtra Documentation',
      url: `/${lang}`,
    },
    links: [
      {
        text: lang === 'de' ? 'Benutzerhandbuch' : 'User Guide',
        url: `/${lang}/docs/user-guide`,
        icon: <Book className="size-4" />,
      },
      {
        text: lang === 'de' ? 'API-Referenz' : 'API Reference',
        url: `/${lang}/docs/api-reference`,
        icon: <Code className="size-4" />,
      },
      {
        text: 'MCP',
        url: `/${lang}/docs/mcp`,
        icon: <Zap className="size-4" />,
      },
      {
        text: lang === 'de' ? 'Best Practices' : 'Best Practices',
        url: `/${lang}/docs/best-practices`,
        icon: <Lightbulb className="size-4" />,
      },
    ],
    githubUrl: 'https://github.com/flowxtra',
  };
}
