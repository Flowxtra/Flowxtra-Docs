import Link from 'next/link';
import { BookOpen, Rocket, Code, Users, Zap, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flowxtra Documentation - Complete Guide & API Reference',
  description: 'Comprehensive documentation for Flowxtra recruitment platform. Learn how to post jobs, manage applications, integrate APIs, and optimize your hiring process.',
  openGraph: {
    title: 'Flowxtra Documentation',
    description: 'Everything you need to build, launch, and scale your recruitment platform',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-fd-secondary/50 to-background py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-fd-primary to-fd-primary/60 bg-clip-text text-transparent">
              Flowxtra Documentation
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Everything you need to build, launch, and scale your recruitment platform.
              Comprehensive guides, API references, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary hover:bg-fd-primary/90 text-fd-primary-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/docs/api-reference"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive documentation to help you succeed with Flowxtra
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <BookOpen className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">User Guide</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Step-by-step tutorials to help you get started, create jobs, and manage applications.
              </p>
              <Link href="/docs/user-guide" className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Code className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">API Reference</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Complete API documentation with authentication, endpoints, and integration examples.
              </p>
              <Link href="/docs/api-reference" className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                Explore API <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Zap className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quick Start</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get up and running in minutes with our guided quick start tutorial.
              </p>
              <Link href="/docs/user-guide/getting-started/quick-start" className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                Start now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 4 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Rocket className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">Best Practices</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Learn industry best practices for job posting, SEO, and candidate management.
              </p>
              <Link href="/docs/best-practices" className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                Read more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 5 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <Users className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">MCP Integration</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Connect Flowxtra with AI assistants like Claude using Model Context Protocol.
              </p>
              <Link href="/docs/mcp" className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                Learn MCP <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Feature 6 */}
            <div className="group relative rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-fd-primary/10">
                  <BookOpen className="w-6 h-6 text-fd-primary" />
                </div>
                <h3 className="text-xl font-semibold">Advanced Features</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Custom domains, analytics, job widgets, and more advanced capabilities.
              </p>
              <Link href="/docs/user-guide/advanced" className="text-fd-primary hover:text-fd-primary/80 font-medium inline-flex items-center gap-1">
                Discover <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-fd-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of companies using Flowxtra to streamline their hiring process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/user-guide/getting-started/introduction"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-fd-primary hover:bg-fd-primary/90 text-fd-primary-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                Read Documentation
              </Link>
              <a
                href="https://flowxtra.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground px-8 py-3 text-base font-semibold transition-colors"
              >
                Visit Flowxtra.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
