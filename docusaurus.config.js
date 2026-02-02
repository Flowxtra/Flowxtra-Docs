// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flowxtra Help Center',
  tagline: 'User guides, API references, and best practices for the Flowxtra ATS.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.flowxtra.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'flowxtra', // Usually your GitHub org/user name.
  projectName: 'flowxtra-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  trailingSlash: false,

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  headTags: [
    // Google Site Verification
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'googled95d0ac79d9e77e4',
      },
    },
    // Default Open Graph
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: 'Flowxtra Help Center',
      },
    },
    // Twitter Card
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      de: {
        label: 'Deutsch',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Serve docs at root URL
        },
        blog: false, // Disable blog for now as it wasn't requested, or keep if desired. I'll disable to focus on docs.
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Flowxtra social card for link sharing
      image: 'img/flowxtra-social-card.png',
      metadata: [
        { name: 'keywords', content: 'flowxtra, job posting, recruitment, ATS, hiring, applicant tracking system, HR software' },
        { name: 'author', content: 'Flowxtra' },
        { name: 'robots', content: 'index, follow' },
      ],
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Flowxtra Logo',
          src: 'img/Signature-colerd.png',
          srcDark: 'img/MainLogo-W.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'user-guide/index',
            position: 'left',
            label: 'User Guide',
            className: 'navbar-icon-user-guide',
          },
          {
            type: 'doc',
            docId: 'api-reference/index',
            position: 'left',
            label: 'API Reference',
            className: 'navbar-icon-api',
          },
          {
            type: 'doc',
            docId: 'mcp/index',
            position: 'left',
            label: 'MCP',
            className: 'navbar-icon-mcp',
          },
          {
            type: 'doc',
            docId: 'best-practices/index',
            position: 'left',
            label: 'Best Practices',
            className: 'navbar-icon-best-practices',
          },
          // External links
          {
            href: 'https://flowxtra.com',
            position: 'right',
            className: 'navbar-icon-website',
            'aria-label': 'Flowxtra Website',
            html: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
          },
          {
            href: 'https://www.linkedin.com/company/flowxtra',
            position: 'right',
            className: 'navbar-icon-linkedin',
            'aria-label': 'Flowxtra LinkedIn',
            html: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            className: 'navbar-locale-dropdown',
          },
          {
            href: 'https://my.flowxtra.com/login',
            label: 'Login',
            position: 'right',
            className: 'navbar-btn-login',
          },
          {
            href: 'https://my.flowxtra.com/registration',
            label: 'Sign Up',
            position: 'right',
            className: 'navbar-btn-signup',
          },
        ],
      },
      // Footer removed as per user request
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
