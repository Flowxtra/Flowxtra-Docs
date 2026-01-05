import './global.css';
import type { ReactNode } from 'react';

// Root layout - just passes through to [lang] layout
// This is required by Next.js but the actual HTML structure is in [lang]/layout.tsx
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
