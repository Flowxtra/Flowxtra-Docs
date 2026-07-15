# SEO Content Guidelines — docs.flowxtra.com

Checklist for anyone adding or editing a page in `docs/`. Follow this before publishing to avoid the issues found in the July 2026 SEO audit (duplicate content, thin descriptions, unmodified boilerplate).

## Before writing a new page

- [ ] **Search first.** Check `docs/` for an existing page covering the same topic, in *any* category (a "Google Jobs" guide could plausibly live under `best-practices/` or `user-guide/job-posting/` — check both). Duplicate topics in two categories is exactly how `best-practices/google-jobs` and `user-guide/job-posting/publishing-google` ended up as two identical 2000-word pages, which hurt indexing for both.
- [ ] If a topic could belong in more than one category, put the full content in ONE place and link to it from the other — never copy-paste the same content into two files.

## Title (`title` frontmatter)

- Formula: `{Task or Feature} | Flowxtra Help Center` (the `| Flowxtra Help Center` suffix is automatic — only write the first part).
- 50-60 characters for the first part. Google truncates around there.
- Put the most important word/phrase first, not buried at the end.
- Must be unique across the entire site. Before publishing, grep the `docs/` folder for the exact title string to confirm nothing else uses it.
- No keyword stuffing — write it the way a person would say it.

## Description (`description` frontmatter)

- **Target 140-160 characters.** Short descriptions (under ~70 chars) waste the SERP snippet space Google gives you — Google will otherwise auto-generate a snippet from page content, which you don't control.
- Don't just restate the title. Add a concrete detail the title doesn't have (a number, a specific capability, a benefit) — e.g. not "API for jobs" but "Create, update, publish, and manage job postings — list, create, update status, and retrieve job details."
- Use action verbs (Create, Manage, Track, Configure) instead of "This page explains...".
- Write it close to how a real user would phrase their search ("how to authenticate", "manage team permissions") — Google bolds matching terms in the snippet, which improves click-through.
- Must be unique across the entire site — same duplication risk as titles.

## Before merging/publishing

- [ ] `npm run build` locally — the config has `onBrokenLinks: 'throw'` and `onDuplicateRoutes: 'throw'`, so a clean build already catches broken internal links and duplicate routes. Don't skip this.
- [ ] If you deleted or moved a page that was previously live, add a redirect in `docusaurus.config.js` under the `@docusaurus/plugin-client-redirects` plugin config (`from` → `to`), so old indexed URLs and external links don't 404.
- [ ] Don't leave placeholder/example content in `docs/` or `src/pages/` (e.g. the default Docusaurus "Markdown page example" — already removed once, don't reintroduce it or leave similar stubs from scaffolding).

## Reference

See [`SEO-INDEXING-AUDIT.md`](../SEO-INDEXING-AUDIT.md) (July 2026 audit) for the specific issues these rules were written to prevent.
