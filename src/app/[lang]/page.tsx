import Link from 'next/link';
import { BookOpen, Rocket, Code, Users, Zap, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { i18n, type Locale } from '@/i18n/config';
import { getTranslation } from '@/i18n/translations';

export async function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getTranslation(lang as Locale);

  // Build canonical URL - use /en for default language
  const canonicalUrl = lang === 'en'
    ? 'https://docs.flowxtra.com/en'
    : `https://docs.flowxtra.com/${lang}`;

  return {
    title: `${t.home.hero.title} -Free Recruiting Software`,
    description: t.home.hero.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: t.home.hero.title,
      description: t.home.features.description,
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const t = getTranslation(lang as Locale);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-fd-secondary/50 to-background py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
              {t.home.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t.home.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/docs`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary hover:bg-fd-primary/90 text-fd-primary-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                {t.home.hero.getStarted}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${lang}/docs/api-reference`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                {t.home.hero.apiReference}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.home.features.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.home.features.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <BookOpen className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.home.features.userGuide.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.home.features.userGuide.description}
              </p>
              <Link href={`/${lang}/docs/user-guide`} className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                {t.home.features.userGuide.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Code className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.home.features.apiRef.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.home.features.apiRef.description}
              </p>
              <Link href={`/${lang}/docs/api-reference`} className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                {t.home.features.apiRef.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Zap className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.home.features.quickStart.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.home.features.quickStart.description}
              </p>
              <Link href={`/${lang}/docs/user-guide/getting-started/quick-start`} className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                {t.home.features.quickStart.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Rocket className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.home.features.bestPractices.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.home.features.bestPractices.description}
              </p>
              <Link href={`/${lang}/docs/best-practices`} className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                {t.home.features.bestPractices.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 5 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Users className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.home.features.mcp.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.home.features.mcp.description}
              </p>
              <Link href={`/${lang}/docs/mcp`} className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                {t.home.features.mcp.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 6 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <BookOpen className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">{t.home.features.advanced.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {t.home.features.advanced.description}
              </p>
              <Link href={`/${lang}/docs/user-guide/advanced`} className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                {t.home.features.advanced.link} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-fd-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.home.cta.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.home.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${lang}/docs/user-guide/getting-started/introduction`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary hover:bg-fd-primary/90 text-fd-primary-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                {t.home.cta.readDocs}
              </Link>
              <a
                href="https://flowxtra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                {t.home.cta.visitWebsite}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
