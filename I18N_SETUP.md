# 🌍 Multi-Language Setup Guide (i18n)

This documentation site now supports **English (🇬🇧)** and **German (🇩🇪)**.

## 📁 Project Structure

```
src/
├── app/
│   ├── [lang]/                    # Language-specific routes
│   │   ├── page.tsx              # Homepage with translations
│   │   ├── layout.tsx            # Root layout with metadata per language
│   │   ├── global.css           # Styles
│   │   └── docs/
│   │       ├── layout.tsx        # Docs layout
│   │       └── [[...slug]]/
│   │           └── page.tsx      # Dynamic docs pages
│   ├── (home)/                   # Old homepage (will be redirected)
│   ├── docs/                     # Old docs (will be redirected)
│   └── layout.tsx               # Original layout
├── i18n/
│   ├── config.ts                # Language configuration
│   └── translations/
│       ├── en.ts                # English translations
│       ├── de.ts                # German translations
│       └── index.ts             # Translation exports
├── components/
│   └── language-switcher.tsx    # Language switcher component
├── lib/
│   ├── source.ts                # Updated for i18n support
│   └── layout.shared.tsx        # Shared layout with language support
└── middleware.ts                # Redirects to default language
```

## 🚀 How It Works

### 1. **URL Structure**
- English: `/en` → `/en/docs/user-guide`
- German: `/de` → `/de/docs/user-guide`
- Root `/` → Redirects to `/en` (default language)

### 2. **Language Switcher**
Located in the navigation bar. Click to switch between languages while preserving the current page path.

### 3. **Middleware**
Automatically redirects users from `/` to `/en` (default language).

## 📝 Adding a New Language

### Step 1: Update Configuration
Edit `src/i18n/config.ts`:

```typescript
export const i18n = {
  defaultLanguage: 'en',
  languages: ['en', 'de', 'fr'], // Add 'fr' for French
} as const;

export const languageLabels: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français', // Add French label
};

export const languageFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  fr: '🇫🇷', // Add French flag
};
```

### Step 2: Create Translation File
Create `src/i18n/translations/fr.ts`:

```typescript
import type { Translation } from './en';

export const fr: Translation = {
  home: {
    hero: {
      title: 'Documentation Flowxtra',
      description: 'Tout ce dont vous avez besoin...',
      // ... rest of translations
    },
    // ... complete all translations
  },
};
```

### Step 3: Export Translations
Update `src/i18n/translations/index.ts`:

```typescript
import { fr } from './fr';

export const translations = {
  en,
  de,
  fr, // Add French
} as const;
```

### Step 4: Update Layout Metadata
Edit `src/app/[lang]/layout.tsx` to add French metadata:

```typescript
const metadata: Record<Locale, Metadata> = {
  // ... existing en, de
  fr: {
    title: {
      default: 'Documentation Flowxtra',
      template: '%s | Flowxtra Docs',
    },
    // ... rest of French metadata
  },
};
```

### Step 5: Update generateStaticParams
Edit `src/app/[lang]/docs/[[...slug]]/page.tsx`:

```typescript
export async function generateStaticParams() {
  const sources = await Promise.all([
    getSource('en').generateParams(),
    getSource('de').generateParams(),
    getSource('fr').generateParams(), // Add French
  ]);

  return sources.flatMap((params, index) =>
    params.map((param) => ({
      lang: index === 0 ? 'en' : index === 1 ? 'de' : 'fr',
      slug: param.slug,
    }))
  );
}
```

## 🎨 Customizing Translations

### Homepage Translations
Edit files in `src/i18n/translations/`:
- `en.ts` for English
- `de.ts` for German

### Navigation Links
Edit `src/lib/layout.shared.tsx` to update:
- Navigation title
- Link texts
- Add language-specific links

## 🔧 Technical Details

### Source Configuration
The `createI18nSource` in `src/lib/source.ts` handles:
- Multi-language content loading
- Page tree generation per language
- Dynamic routing for each language

### Language Detection
The middleware checks the URL path and:
1. If no language prefix exists, redirects to `/en`
2. If language prefix exists, serves the appropriate content

### Static Generation
Each language generates its own static pages:
- English: 85+ pages
- German: 85+ pages (same structure)

## 📊 Current Status

✅ **Implemented:**
- English (default)
- German
- Language switcher in navigation
- Homepage fully translated
- Metadata per language
- Automatic redirection

⏳ **Pending:**
- MDX content translation (currently all in English)
- Search functionality localization
- Date/time formatting per locale

## 🌐 URLs

- **Homepage (EN):** `http://localhost:3000/en`
- **Homepage (DE):** `http://localhost:3000/de`
- **Docs (EN):** `http://localhost:3000/en/docs/user-guide`
- **Docs (DE):** `http://localhost:3000/de/docs/user-guide`

## 🚀 Build & Deploy

```bash
# Development
npm run dev

# Build (generates static pages for all languages)
npm run build

# Preview production build
npm run start
```

## 📚 Resources

- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [fumadocs i18n](https://fumadocs.dev/docs/headless/internationalization)
