import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './i18n/config';
import { isMarkdownPreferred } from 'fumadocs-core/negotiation';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = i18n.languages.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Handle AI/LLM requests with Accept header negotiation
  if (pathnameHasLocale && isMarkdownPreferred(request)) {
    const docsPathMatch = pathname.match(/^\/([^/]+)\/docs\/(.*)$/);
    if (docsPathMatch) {
      const [, lang, path] = docsPathMatch;
      const newUrl = new URL(`/${lang}/llms.mdx/${path}`, request.nextUrl);
      return NextResponse.rewrite(newUrl);
    }
  }

  if (pathnameHasLocale) return;

  // Redirect to default locale if no locale is present
  const locale = i18n.defaultLanguage;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*|_next).*)',
  ],
};
