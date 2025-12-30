import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Book, Code, Lightbulb, Zap } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Flowxtra Documentation',
      url: '/',
    },
    links: [
      {
        text: 'User Guide',
        url: '/docs/user-guide',
        icon: <Book className="size-4" />,
      },
      {
        text: 'API Reference',
        url: '/docs/api-reference',
        icon: <Code className="size-4" />,
      },
      {
        text: 'MCP',
        url: '/docs/mcp',
        icon: <Zap className="size-4" />,
      },
      {
        text: 'Best Practices',
        url: '/docs/best-practices',
        icon: <Lightbulb className="size-4" />,
      },
    ],
    githubUrl: 'https://github.com/flowxtra',
  };
}
