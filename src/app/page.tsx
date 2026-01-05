import { redirect } from 'next/navigation';

/**
 * Root page - redirects to default language
 * This prevents redirect loops and ensures Google can properly index the site
 */
export default function RootPage() {
  redirect('/en');
}
