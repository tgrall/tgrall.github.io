# Tug's Site

Personal website and technical blog built with [Astro](https://astro.build/) and deployed as a static site to GitHub Pages.

## Requirements

- Node.js 24 or newer
- npm

## Local development

```console
npm ci
npm run dev
```

The development server is available at `http://localhost:4321`.

## Content

Blog posts live in `blog/` and use the historical filename convention:

```text
YYYY-MM-DD-post-slug.md
```

The filename defines the permanent public route:

```text
/blog/YYYY/MM/DD/post-slug
```

Changing a post's frontmatter date does not change its URL. Frontmatter is validated by the collection schema in `src/content.config.ts`.

Supported frontmatter includes:

- `title` (required)
- `description`
- `date`
- `image`
- `tags`
- `keywords`
- legacy `categories`, retained as metadata without generating public category pages

Static assets remain in `static/` and are published from the site root.

## Validation

```console
# Content and utility tests
npm test

# Type-check and build all static routes
npm run build

# Compare generated routes and content with the captured production contract
node scripts/production-baseline/validate-dist.mjs

# Desktop/mobile smoke, accessibility, and visual regression tests
npm run test:browser
```

Browser tests require Chromium:

```console
npx playwright install chromium
```

### Production baseline

The committed fixture under `tests/fixtures/production-baseline/` records the live Docusaurus site's routes, semantic content hashes, metadata, links, images, redirects, and RSS/Atom entries.

Normal validation is read-only:

```console
node scripts/production-baseline/capture.mjs
```

Refreshing the baseline is an explicit, reviewable operation:

```console
node scripts/production-baseline/capture.mjs --update
```

Never refresh the baseline merely to make a migration test pass. Review and explain every production difference first.

### External links

Historical external links are reported separately and do not block deployment:

```console
node scripts/check-external-links.mjs
```

Reviewed historical failures can be documented in `tests/fixtures/external-link-allowlist.json`.

## Deployment

`.github/workflows/publish.yml` validates the full site and deploys the resulting `dist/` artifact with GitHub's official Pages actions after changes reach `main`.

The scheduled content-health workflow reports:

- drift between the live site and the committed production baseline
- unavailable external links
