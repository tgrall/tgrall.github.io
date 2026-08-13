# Production baseline capture

This dependency-free Node script records the public Docusaurus site behavior used
to verify the Astro migration.

## Commands

```sh
# Capture production and compare it with the committed fixture (read-only)
node scripts/production-baseline/capture.mjs

# Explicitly create or replace the committed fixture and report
node scripts/production-baseline/capture.mjs --update

# Validate a generated Astro site (defaults to ./dist)
node scripts/production-baseline/validate-dist.mjs

# Validate a dist directory at another path
node scripts/production-baseline/validate-dist.mjs path/to/dist
```

The default command never writes fixtures. A fixture is created or replaced only
when `--update` is present. Writes use a sibling `.new` file followed by an
atomic rename, so interrupted updates do not leave a partial baseline.

## What is captured

The script reads `https://tgrall.github.io/sitemap.xml`, captures every listed
page, and adds the RSS and Atom feeds, a deliberately missing URL (the real 404
response), `/copilot-blog`, the Quarkus image-upload post, nine representative
docs routes, and `/markdown-page`.

For pages, it stores status, final URL, each HTTP or HTML meta-refresh redirect
hop, metadata, internal links (fragments included), and image URLs with alt
text. Page body HTML is not stored. Instead, the semantic `main` (falling back
to `article`, then the document) is represented by its element name, normalized
text length, and SHA-256. Feed entries retain stable metadata and a normalized
content length and SHA-256, not full feed content.

## Normalization

- HTML entities and non-breaking spaces are decoded, then whitespace is
  collapsed deterministically.
- Curly and straight quotation marks, and Unicode versus three-dot ellipses,
  are treated as equivalent renderer typography.
- Scripts, styles, SVG, templates, comments, navigation, footers, asides, table
  of contents, breadcrumbs, pagination, edit controls, and other
  Docusaurus-only wrappers are excluded from semantic text.
- Internal absolute URLs are represented as path, query, and fragment; external
  image URLs remain absolute.
- Duplicate links and images are removed and all unordered collections are
  sorted.
- Feed entries are sorted by stable ID (or link), and their HTML content is
  reduced with the same semantic text normalization before hashing.

The generated `tests/fixtures/production-baseline/report.md` summarizes statuses,
redirects, feed counts, and missing canonicals for human review.

## Astro dist validation

`validate-dist.mjs` verifies the committed route inventory, all 275 post pages,
the docs and legacy redirects, all published tag and pagination routes, local
links, fragments, and assets. It compares page metadata, framework-independent
post text, and stable RSS/Atom entry fields and content fingerprints.

The only semantic-content exceptions are an explicit reviewed list in the
validator: seven posts whose embedded GitHub Gists are vendored by the
migration, and the redesigned 2026 status-line component. These exceptions do
not relax route, link, fragment, asset, or metadata checks, and empty article
content always fails.
