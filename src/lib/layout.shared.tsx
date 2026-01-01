import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { Locale } from '@/i18n/config';
import Image from 'next/image';

export function baseOptions(lang: Locale = 'en'): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image
            src="/images/logos/MainLogoIconcolored.png"
            alt="Flowxtra"
            width={15}
            height={15}
            className="dark:hidden"
          />
          <Image
            src="/images/logos/MainLogoIcon-White.png"
            alt="Flowxtra"
            width={15}
            height={15}
            className="hidden dark:block"
          />
          <span>Flowxtra Docs</span>
        </div>
      ),
      url: `/${lang}`,
    },
    githubUrl: 'https://github.com/flowxtra',
  };
}
