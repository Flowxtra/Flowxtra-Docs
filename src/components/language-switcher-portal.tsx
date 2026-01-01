'use client';

import { LanguageSwitcher } from './language-switcher';
import { ThemeToggleCustom } from './theme-toggle-custom';
import { Linkedin, Globe } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { type Locale } from '@/i18n/config';

export function LanguageSwitcherPortal() {
  const params = useParams();
  const currentLang = (params?.lang as Locale) || 'en';
  return (
    <div
      className="navbar-actions-custom"
      style={{
        position: 'fixed',
        top: '1rem',
        right: '5rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      <Link
        href="https://flowxtra.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-fd-accent transition-colors text-sm"
        aria-label="Flowxtra Website"
      >
        <Globe className="w-4 h-4" />
      </Link>
      <Link
        href="https://www.linkedin.com/company/flowxtra"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-fd-accent transition-colors text-sm"
        aria-label="LinkedIn - Flowxtra"
      >
        <Linkedin className="w-4 h-4" />
      </Link>
      <LanguageSwitcher />
      <ThemeToggleCustom />
      <Link
        href="https://my.flowxtra.com/login"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-md hover:bg-fd-accent transition-colors text-sm font-medium"
      >
        {currentLang === 'de' ? 'Anmelden' : 'Login'}
      </Link>
      <Link
        href="https://my.flowxtra.com/registration"
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1.5 rounded-md bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/90 transition-colors text-sm font-medium"
      >
        {currentLang === 'de' ? 'Registrieren' : 'Sign Up'}
      </Link>
    </div>
  );
}
