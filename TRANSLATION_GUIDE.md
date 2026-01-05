# Flowxtra Documentation - Translation Guide

## 📋 Overview

This guide explains how to translate documentation pages in the Flowxtra documentation system using Fumadocs i18n.

---

## 🌍 Supported Languages

Currently configured languages:
- 🇬🇧 English (en) - Default
- 🇩🇪 German (de)
- 🇫🇷 French (fr)
- 🇪🇸 Spanish (es)
- 🇮🇹 Italian (it)
- 🇵🇹 Portuguese (pt)
- 🇸🇦 Arabic (ar)
- 🇨🇳 Chinese (zh)

---

## 📁 Directory Structure

```
content/docs/
├── en/                    # English (default language)
│   ├── meta.json         # English sidebar configuration
│   ├── index.mdx         # English homepage
│   └── user-guide/
│       ├── meta.json     # English section titles
│       ├── account/
│       │   ├── meta.json
│       │   └── creating-account.mdx
│       └── job-posting/
│           ├── meta.json
│           ├── create-job.mdx
│           └── managing-jobs.mdx
│
└── de/                    # German translations
    ├── meta.json         # German sidebar configuration
    ├── index.mdx         # German homepage
    └── user-guide/
        ├── meta.json     # German section titles
        ├── account/
        │   ├── meta.json
        │   └── creating-account.mdx
        └── job-posting/
            ├── meta.json
            ├── create-job.mdx
            └── managing-jobs.mdx
```

---

## ✅ Translation Workflow

### Step 1: Translate Page Content (.mdx files)

Each page has **TWO parts** that need translation:

#### A. Frontmatter (Metadata)

At the top of each `.mdx` file:

```mdx
---
title: Creating an Account          # ← Translate this
description: Step-by-step guide...  # ← Translate this
icon: UserPlus                      # ← Keep as is
---
```

**German Example:**
```mdx
---
title: Ein Konto erstellen
description: Schritt-für-Schritt-Anleitung zur Erstellung Ihres Flowxtra-Kontos
icon: UserPlus
---
```

#### B. Page Content

Translate all the markdown content below the frontmatter:

```mdx
# Creating an Account              # ← Translate headings
Get started with Flowxtra...       # ← Translate paragraphs
```

**German Example:**
```mdx
# Ein Konto erstellen
Beginnen Sie mit Flowxtra...
```

---

### Step 2: Translate Sidebar Titles (meta.json files)

Each directory has a `meta.json` file that controls the sidebar navigation.

**English (`content/docs/en/user-guide/meta.json`):**
```json
{
    "title": "User Guide",
    "icon": "Book",
    "pages": [
        "getting-started",
        "account",
        "job-posting",
        "applications"
    ]
}
```

**German (`content/docs/de/user-guide/meta.json`):**
```json
{
    "title": "Benutzerhandbuch",
    "icon": "Book",
    "pages": [
        "getting-started",
        "account",
        "job-posting",
        "applications"
    ]
}
```

**Important Notes:**
- ✅ **DO translate**: `title` field
- ❌ **DON'T translate**: `icon` field
- ❌ **DON'T translate**: `pages` array (these are file/folder names)

---

## 🔄 Complete Translation Process

### For a New Language (e.g., French)

#### 1. Add Language to Configuration

**File:** `source.config.ts`

```typescript
export const docsFr = defineDocs({
  dir: 'content/docs/fr',
  docs: {
    schema: customFrontmatterSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});
```

#### 2. Update Source Mapping

**File:** `src/lib/source.ts`

```typescript
import { docsEn, docsDe, docsFr } from 'fumadocs-mdx:collections/server';

export const sourceFr = loader({
  baseUrl: '/docs',
  source: docsFr.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

const sources: Record<Locale, ReturnType<typeof loader>> = {
  en: sourceEn,
  de: sourceDe,
  fr: sourceFr,  // ← Add this
  // ...
};
```

#### 3. Create Content Directory

```powershell
# Copy English content as base
Copy-Item "content/docs/en" "content/docs/fr" -Recurse
```

#### 4. Translate All Files

Go through each file in `content/docs/fr/` and translate:
- ✅ Frontmatter (`title`, `description`)
- ✅ Page content (headings, paragraphs, lists)
- ✅ `meta.json` titles

---

## 📝 Translation Checklist

For each page, ensure you translate:

### In `.mdx` Files:
- [ ] `title` in frontmatter
- [ ] `description` in frontmatter
- [ ] All headings (`#`, `##`, `###`)
- [ ] All paragraphs
- [ ] All list items
- [ ] All callout messages
- [ ] All button/link text
- [ ] All code comments (if applicable)

### In `meta.json` Files:
- [ ] `title` field
- [ ] Keep `icon` unchanged
- [ ] Keep `pages` array unchanged

---

## 🎯 Translation Examples

### Example 1: Account Page

**English:**
```mdx
---
title: Creating an Account
description: Step-by-step guide to creating your Flowxtra account
icon: UserPlus
---

# Creating an Account

Get started with Flowxtra by creating your account.

## Prerequisites

Before creating your account, make sure you have:
- A valid business email address
- Basic information about your company
```

**German:**
```mdx
---
title: Ein Konto erstellen
description: Schritt-für-Schritt-Anleitung zur Erstellung Ihres Flowxtra-Kontos
icon: UserPlus
---

# Ein Konto erstellen

Beginnen Sie mit Flowxtra, indem Sie Ihr Konto erstellen.

## Voraussetzungen

Bevor Sie Ihr Konto erstellen, stellen Sie sicher, dass Sie Folgendes haben:
- Eine gültige Geschäfts-E-Mail-Adresse
- Grundlegende Informationen über Ihr Unternehmen
```

### Example 2: meta.json

**English (`user-guide/job-posting/meta.json`):**
```json
{
    "title": "Job Posting",
    "icon": "Briefcase",
    "pages": [
        "create-job",
        "managing-jobs"
    ]
}
```

**German (`user-guide/job-posting/meta.json`):**
```json
{
    "title": "Stellenanzeigen",
    "icon": "Briefcase",
    "pages": [
        "create-job",
        "managing-jobs"
    ]
}
```

---

## 🚀 Testing Translations

### 1. Start Development Server

```powershell
npm run dev
```

### 2. Access Translated Pages

- **English:** `http://localhost:3000/docs/user-guide/account/creating-account`
- **German:** `http://localhost:3000/de/docs/user-guide/account/creating-account`
- **French:** `http://localhost:3000/fr/docs/user-guide/account/creating-account`

### 3. Check Sidebar

Navigate to the docs and verify:
- ✅ Sidebar titles are translated
- ✅ Page titles in search are translated
- ✅ Page content is translated

---

## ⚠️ Common Mistakes to Avoid

### ❌ DON'T Translate:

1. **File/folder names:**
   ```
   ❌ creating-account.mdx → konto-erstellen.mdx
   ✅ Keep as: creating-account.mdx
   ```

2. **Icon names:**
   ```json
   ❌ "icon": "Buch"
   ✅ "icon": "Book"
   ```

3. **Pages array in meta.json:**
   ```json
   ❌ "pages": ["konto-erstellen", "einstellungen"]
   ✅ "pages": ["creating-account", "settings"]
   ```

4. **Import statements:**
   ```mdx
   ❌ import { Schritt, Schritte } from 'fumadocs-ui/components/steps';
   ✅ import { Step, Steps } from 'fumadocs-ui/components/steps';
   ```

5. **Component names:**
   ```mdx
   ❌ <Hinweis type="info">
   ✅ <Callout type="info">
   ```

### ✅ DO Translate:

1. **Frontmatter title and description**
2. **All visible text content**
3. **Callout messages**
4. **List items**
5. **Table content**
6. **meta.json titles**

---

## 📊 Translation Progress Tracking

Create a checklist for each language:

### German (de) - In Progress
- [x] Root meta.json
- [x] User Guide meta.json
- [x] Account section meta.json
- [x] Job Posting section meta.json
- [x] Applications section meta.json
- [x] creating-account.mdx
- [ ] create-job.mdx
- [ ] managing-jobs.mdx
- [ ] viewing.mdx
- [ ] settings.mdx
- [ ] company-profile.mdx
- [ ] team-permissions.mdx

### French (fr) - Not Started
- [ ] All files

---

## 🛠️ Quick Commands

### Copy English to New Language
```powershell
Copy-Item "content/docs/en" "content/docs/fr" -Recurse
```

### Find All meta.json Files
```powershell
Get-ChildItem "content/docs/de" -Recurse -Filter "meta.json"
```

### Count Translated Pages
```powershell
(Get-ChildItem "content/docs/de" -Recurse -Filter "*.mdx").Count
```

---

## 📞 Need Help?

If you have questions about translation:
1. Check this guide first
2. Review existing German translations as examples
3. Contact the documentation team

---

## 🎉 Best Practices

1. **Consistency:** Use the same terminology throughout all pages
2. **Natural Language:** Don't translate word-by-word; use natural phrasing
3. **Technical Terms:** Keep technical terms in English when appropriate (e.g., "API", "URL")
4. **Test Everything:** Always test your translations in the browser
5. **Update Both:** When updating English, remember to update translations too

---

**Last Updated:** January 3, 2026
**Maintained By:** Flowxtra Documentation Team
