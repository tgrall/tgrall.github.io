#!/usr/bin/env node

import { existsSync } from "node:fs";
import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, extname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  attributes,
  contentFingerprint,
  decodeEntities,
  normalizeText,
  postContentFingerprint,
} from "./normalize.mjs";

const ORIGIN = "https://tgrall.github.io";
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const BASELINE_PATH = resolve(SCRIPT_DIR, "../../tests/fixtures/production-baseline/baseline.json");
const DIST_DIR = resolve(process.cwd(), process.argv[2] ?? "dist");
const LEGACY_QUARKUS_ALIAS = "/blog/2024/12/24/quarkus-uploading-image-to-the-cloud";
const LEGACY_QUARKUS_TARGET = "/blog/2023/12/24/quarkus-uploading-image-to-the-cloud";
const COPILOT_BLOG_TARGET = "/blog/tags/coding-with-copilot";

// Reviewed exceptions are limited to content rendering, never routes, links, assets, or metadata.
const CONTENT_ALLOWLIST = new Map([
  [
    "/blog/2012/11/05/couchbase-create-a-large-dataset-using-twitter-and-java",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2013/02/13/introduction-to-collated-views-with-couchbase-2-dot-0",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2013/03/06/easy-application-development-with-couchbase-angular-and-node",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2013/04/29/screencast-fun-with-couchbase-mapreduce-and-twitter",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2013/10/01/pagination-with-couchbase",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2015/01/12/how-to-create-a-pub-slash-sub-application-with-mongodb-introduction",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2015/12/10/using-apache-drill-rest-api-to-build-ascii-dashboard-with-node",
    "The migration vendors the post's embedded Gist instead of executing GitHub's Gist shell.",
  ],
  [
    "/blog/2026/05/02/copilot-cli-customize-statusline",
    "The migration intentionally redesigns the interactive status-line component.",
  ],
]);

const failures = new Map();
const allowances = [];
const htmlCache = new Map();

function fail(category, message) {
  if (!failures.has(category)) failures.set(category, []);
  failures.get(category).push(message);
}

function normalizedRoute(value) {
  try {
    const url = new URL(value, ORIGIN);
    let path = `${url.pathname}${url.search}`;
    if (path.length > 1) path = path.replace(/\/+$/, "");
    return path;
  } catch {
    return value;
  }
}

function safeDecodedPath(pathname) {
  try {
    return decodeURIComponent(pathname);
  } catch {
    return pathname;
  }
}

function routeCandidates(pathname) {
  const decoded = safeDecodedPath(pathname);
  const local = decoded.replace(/^\/+/, "");
  if (!local) return [join(DIST_DIR, "index.html")];
  const exact = join(DIST_DIR, local);
  const candidates = [exact];
  if (pathname.endsWith("/")) candidates.push(join(exact, "index.html"));
  else {
    candidates.push(join(exact, "index.html"));
    if (!extname(local)) candidates.push(`${exact}.html`);
  }
  return [...new Set(candidates)];
}

async function regularFileForRoute(route) {
  for (const candidate of routeCandidates(new URL(route, ORIGIN).pathname)) {
    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Candidate does not exist.
    }
  }
  return "";
}

async function htmlForRoute(route) {
  const key = normalizedRoute(route);
  if (htmlCache.has(key)) return htmlCache.get(key);
  const file = await regularFileForRoute(key);
  if (!file || !file.endsWith(".html")) {
    htmlCache.set(key, null);
    return null;
  }
  const value = { file, html: await readFile(file, "utf8") };
  htmlCache.set(key, value);
  return value;
}

function metaRefresh(html, baseRoute) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    if ((attrs["http-equiv"] ?? "").toLowerCase() !== "refresh") continue;
    const match = (attrs.content ?? "").match(/^\s*\d+(?:\.\d+)?\s*;\s*url\s*=\s*(.+?)\s*$/i);
    if (!match) continue;
    const target = match[1].replace(/^(['"])([\s\S]*)\1$/, "$2");
    return normalizedRoute(new URL(target, new URL(`${baseRoute.replace(/\/?$/, "/")}`, ORIGIN)).href);
  }
  return "";
}

async function checkRedirect(route, target) {
  const document = await htmlForRoute(route);
  if (!document) {
    fail("redirects", `${route}: redirect document is missing`);
    return;
  }
  const actual = metaRefresh(document.html, route);
  if (actual !== normalizedRoute(target)) {
    fail("redirects", `${route}: expected redirect to ${target}, found ${actual || "none"}`);
  }
}

function stripMarkup(value) {
  return normalizeText(value.replace(/<[^>]*>/g, " "));
}

function pageMetadata(html) {
  const title = stripMarkup(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  let description = "";
  let canonical = "";
  const openGraph = {};
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    const key = (attrs.property || attrs.name || "").toLowerCase();
    if (key === "description") description = normalizeText(attrs.content);
    if (key.startsWith("og:")) {
      openGraph[key] = key === "og:url" || key === "og:image"
        ? normalizedRoute(attrs.content)
        : normalizeText(attrs.content);
    }
  }
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    if ((attrs.rel ?? "").toLowerCase().split(/\s+/).includes("canonical")) {
      canonical = normalizedRoute(attrs.href);
      break;
    }
  }
  return { title, description, canonical, openGraph };
}

function compareMetadata(route, expected, actual) {
  for (const key of ["title", "description", "canonical"]) {
    const expectedValue = key === "canonical"
      ? normalizedRoute(expected[key])
      : normalizeText(expected[key]);
    const actualValue = key === "canonical"
      ? normalizedRoute(actual[key])
      : normalizeText(actual[key]);
    if (expectedValue !== actualValue) {
      fail("metadata", `${route}: ${key} expected ${JSON.stringify(expectedValue)}, found ${JSON.stringify(actualValue)}`);
    }
  }
  for (const [key, value] of Object.entries(expected.openGraph)) {
    const expectedValue = key === "og:url" || key === "og:image"
      ? normalizedRoute(value)
      : normalizeText(value);
    const actualValue = actual.openGraph[key] ?? "";
    if (expectedValue !== actualValue) {
      fail("metadata", `${route}: ${key} expected ${JSON.stringify(expectedValue)}, found ${JSON.stringify(actualValue)}`);
    }
  }
}

function baseUrlForRoute(route) {
  const pathname = new URL(route, ORIGIN).pathname;
  return new URL(pathname.endsWith("/") || extname(pathname) ? pathname : `${pathname}/`, ORIGIN);
}

function internalUrl(value, route) {
  if (!value || /^(?:data|mailto|tel|javascript):/i.test(value)) return null;
  try {
    const url = new URL(decodeEntities(value), baseUrlForRoute(route));
    return url.origin === ORIGIN ? url : null;
  } catch {
    return null;
  }
}

function documentIds(html) {
  const ids = new Set();
  for (const tag of html.match(/<[a-z][^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    if (attrs.id) ids.add(attrs.id);
    if (attrs.name) ids.add(attrs.name);
  }
  return ids;
}

async function checkInternalReference(route, rawValue, kind) {
  const url = internalUrl(rawValue, route);
  if (!url) return;
  const targetRoute = `${url.pathname}${url.search}`;
  const targetFile = await regularFileForRoute(targetRoute);
  if (!targetFile) {
    fail(kind === "link" ? "links" : "assets", `${route}: ${kind} ${rawValue} does not resolve in dist`);
    return;
  }
  if (
    kind === "link" &&
    url.hash.length > 1 &&
    !url.hash.startsWith("#:~:text=") &&
    targetFile.endsWith(".html")
  ) {
    const target = await htmlForRoute(targetRoute);
    let fragment;
    try {
      fragment = decodeURIComponent(url.hash.slice(1));
    } catch {
      fragment = url.hash.slice(1);
    }
    if (target && !documentIds(target.html).has(fragment)) {
      fail("fragments", `${route}: fragment ${url.pathname}${url.hash} has no matching id or name`);
    }
  }
}

async function checkDocumentReferences(route, html) {
  for (const tag of html.match(/<[a-z][^>]*>/gi) ?? []) {
    const name = tag.match(/^<([a-z][\w:-]*)/i)?.[1].toLowerCase();
    const attrs = attributes(tag);
    if (name === "a" && attrs.href) await checkInternalReference(route, attrs.href, "link");
    const assetValues = [];
    if (["img", "script", "iframe", "audio", "video", "source"].includes(name) && attrs.src) {
      assetValues.push(attrs.src);
    }
    if (name === "video" && attrs.poster) assetValues.push(attrs.poster);
    if (name === "object" && attrs.data) assetValues.push(attrs.data);
    if (name === "link" && attrs.href && /\b(?:stylesheet|icon|preload|modulepreload)\b/i.test(attrs.rel ?? "")) {
      assetValues.push(attrs.href);
    }
    if (name === "meta" && (attrs.property ?? "").toLowerCase() === "og:image" && attrs.content) {
      assetValues.push(attrs.content);
    }
    if (attrs.srcset) {
      assetValues.push(...attrs.srcset.split(",").map((part) => part.trim().split(/\s+/)[0]));
    }
    for (const value of assetValues) await checkInternalReference(route, value, "asset");
  }
}

async function allFiles(root) {
  const files = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) await walk(path);
      else files.push(path);
    }
  }
  await walk(root);
  return files;
}

async function checkCssAssets() {
  for (const file of (await allFiles(DIST_DIR)).filter((path) => path.endsWith(".css"))) {
    const css = await readFile(file, "utf8");
    const route = `/${relative(DIST_DIR, file).split(sep).join("/")}`;
    for (const match of css.matchAll(/url\(\s*(?:"([^"]+)"|'([^']+)'|([^)'"\s]+))\s*\)/gi)) {
      const value = match[1] ?? match[2] ?? match[3];
      await checkInternalReference(route, value, "asset");
    }
  }
}

function xmlBlocks(xml, name) {
  return [...xml.matchAll(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "gi"))]
    .map((match) => match[1]);
}

function xmlValue(xml, names) {
  for (const name of names) {
    const escaped = name.replace(":", "\\:");
    const match = xml.match(new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, "i"));
    if (!match) continue;
    const value = match[1].trim();
    const cdata = value.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/i);
    return cdata ? cdata[1] : decodeEntities(value);
  }
  return "";
}

function normalizedDate(value) {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp) ? normalizeText(value) : new Date(timestamp).toISOString();
}

function feedEntries(xml, type) {
  return xmlBlocks(xml, type === "rss" ? "item" : "entry").map((block) => {
    const atomLink = block.match(/<link\b[^>]*\bhref=(?:"([^"]+)"|'([^']+)')[^>]*\/?>/i);
    const content = type === "rss"
      ? xmlValue(block, ["content:encoded"])
      : xmlValue(block, ["content"]);
    const id = type === "rss"
      ? xmlValue(block, ["guid", "link"])
      : xmlValue(block, ["id"]);
    return {
      id: normalizeText(stripMarkup(id)),
      link: normalizeText(type === "rss"
        ? stripMarkup(xmlValue(block, ["link"]))
        : atomLink?.[1] ?? atomLink?.[2] ?? ""),
      title: stripMarkup(xmlValue(block, ["title"])),
      date: normalizedDate(xmlValue(block, type === "rss" ? ["pubDate"] : ["published", "updated"])),
      description: stripMarkup(xmlValue(block, type === "rss" ? ["description"] : ["summary"])),
      content: content ? contentFingerprint(content) : null,
    };
  });
}

function expectedFeedEntry(entry, type) {
  return {
    id: normalizeText(entry.id || entry.link),
    link: normalizeText(entry.link),
    title: normalizeText(entry.title),
    date: normalizedDate(type === "rss" ? entry.published : entry.updated || entry.published),
    description: normalizeText(entry.summary),
    content: entry.portableContent,
  };
}

async function checkFeed(type, expectedFeed) {
  const route = type === "rss" ? "/blog/rss.xml" : "/blog/atom.xml";
  const file = await regularFileForRoute(route);
  if (!file) {
    fail("feeds", `${route}: missing`);
    return;
  }
  const xml = await readFile(file, "utf8");
  const actual = feedEntries(xml, type);
  const expected = expectedFeed.entries.map((entry) => expectedFeedEntry(entry, type));
  const actualMetadata = {
    title: stripMarkup(xmlValue(xml, ["title"])),
    id: type === "rss"
      ? stripMarkup(xmlValue(xml, ["link"]))
      : stripMarkup(xmlValue(xml, ["id"])),
    updated: normalizedDate(xmlValue(xml, type === "rss" ? ["lastBuildDate"] : ["updated"])),
  };
  const expectedMetadata = {
    title: normalizeText(expectedFeed.metadata.title),
    id: normalizeText(expectedFeed.metadata.id),
    updated: normalizedDate(expectedFeed.metadata.updated),
  };
  for (const key of ["title", "id", "updated"]) {
    if (actualMetadata[key] !== expectedMetadata[key]) {
      fail("feeds", `${route}: channel ${key} expected ${JSON.stringify(expectedMetadata[key])}, found ${JSON.stringify(actualMetadata[key])}`);
    }
  }
  if (actual.length !== 275) fail("feeds", `${route}: expected 275 entries, found ${actual.length}`);
  if (expected.length !== 275) fail("baseline", `${route}: committed baseline has ${expected.length}, expected 275`);

  for (let index = 0; index < Math.min(actual.length, expected.length); index += 1) {
    const left = expected[index];
    const right = actual[index];
    const routeId = normalizedRoute(left.id);
    for (const key of ["id", "link", "title", "date", "description"]) {
      if (left[key] !== right[key]) {
        fail("feeds", `${route} entry ${index + 1} (${routeId}): ${key} expected ${JSON.stringify(left[key])}, found ${JSON.stringify(right[key])}`);
      }
    }
    if (!right.content) {
      if (CONTENT_ALLOWLIST.has(routeId)) {
        allowances.push(`${route} ${routeId}: feed content omitted; ${CONTENT_ALLOWLIST.get(routeId)}`);
      } else {
        fail("feed content", `${route} entry ${routeId}: content is missing`);
      }
    } else if (left.content?.sha256 !== right.content.sha256) {
      if (CONTENT_ALLOWLIST.has(routeId)) {
        allowances.push(`${route} ${routeId}: normalized content differs; ${CONTENT_ALLOWLIST.get(routeId)}`);
      } else {
        fail("feed content", `${route} entry ${routeId}: normalized content hash differs`);
      }
    }
  }
}

async function main() {
  if (!existsSync(DIST_DIR)) throw new Error(`Dist directory does not exist: ${DIST_DIR}`);
  const baseline = JSON.parse(await readFile(BASELINE_PATH, "utf8"));
  const sitemapRoutes = baseline.sitemap.paths;
  const docsRoutes = sitemapRoutes.filter((route) => route.startsWith("/docs/"));
  const tagRoutes = sitemapRoutes.filter((route) => route.startsWith("/blog/tags/"));
  const publishedRoutes = baseline.feeds.rss.entries.map((entry) => normalizedRoute(entry.id || entry.link));
  const uniquePosts = new Set(publishedRoutes);

  if (sitemapRoutes.length !== baseline.sitemap.urlCount) {
    fail("baseline", `sitemap count is ${baseline.sitemap.urlCount}, but ${sitemapRoutes.length} paths are stored`);
  }
  if (docsRoutes.length !== 9) fail("baseline", `expected nine docs routes, found ${docsRoutes.length}`);
  if (tagRoutes.length !== 105) fail("baseline", `expected 105 published tag and pagination routes, found ${tagRoutes.length}`);
  if (publishedRoutes.length !== 275 || uniquePosts.size !== 275) {
    fail("baseline", `expected 275 unique published post routes, found ${uniquePosts.size}`);
  }
  if (CONTENT_ALLOWLIST.size !== 8) {
    fail("baseline", `expected eight reviewed semantic exceptions, found ${CONTENT_ALLOWLIST.size}`);
  }
  for (const route of CONTENT_ALLOWLIST.keys()) {
    if (!uniquePosts.has(route)) fail("baseline", `reviewed semantic exception is not a published post: ${route}`);
  }

  for (const route of new Set([...sitemapRoutes, ...publishedRoutes])) {
    if (!(await regularFileForRoute(route))) fail("routes", `${route}: no generated file`);
  }
  for (const route of docsRoutes) await checkRedirect(route, "/");
  await checkRedirect("/markdown-page", "/");
  await checkRedirect("/copilot-blog", COPILOT_BLOG_TARGET);
  await checkRedirect(LEGACY_QUARKUS_ALIAS, LEGACY_QUARKUS_TARGET);

  for (const route of publishedRoutes) {
    const document = await htmlForRoute(route);
    if (!document) continue;
    const actual = postContentFingerprint(document.html);
    const expected = baseline.pages[route]?.articleContent;
    if (!expected) {
      fail("baseline", `${route}: no normalized article fingerprint in the baseline`);
      continue;
    }
    if (!actual || (actual.length === 0 && expected.length !== 0)) {
      fail("article content", `${route}: semantic article content is missing`);
      continue;
    }
    if (actual.sha256 !== expected.sha256) {
      if (CONTENT_ALLOWLIST.has(route)) {
        allowances.push(`${route}: normalized article differs; ${CONTENT_ALLOWLIST.get(route)}`);
      } else {
        fail("article content", `${route}: normalized article hash differs (expected length ${expected.length}, found ${actual.length})`);
      }
    }
  }

  const redirectRoutes = new Set([...docsRoutes, "/markdown-page", "/copilot-blog", LEGACY_QUARKUS_ALIAS]);
  for (const route of sitemapRoutes) {
    if (redirectRoutes.has(route)) continue;
    const document = await htmlForRoute(route);
    if (!document) continue;
    compareMetadata(route, baseline.pages[route].metadata, pageMetadata(document.html));
    await checkDocumentReferences(route, document.html);
  }
  for (const route of redirectRoutes) {
    const document = await htmlForRoute(route);
    if (document) await checkDocumentReferences(route, document.html);
  }
  await checkCssAssets();
  await checkFeed("rss", baseline.feeds.rss);
  await checkFeed("atom", baseline.feeds.atom);

  const allowanceSet = [...new Set(allowances)].sort();
  console.log(`Checked ${publishedRoutes.length} posts, ${sitemapRoutes.length} sitemap routes, ${tagRoutes.length} tag routes, and two feeds.`);
  if (allowanceSet.length > 0) {
    console.log(`Reviewed content allowances used: ${allowanceSet.length}`);
    for (const allowance of allowanceSet) console.log(`  ALLOW ${allowance}`);
  }
  if (failures.size === 0) {
    console.log("Astro dist matches the committed production baseline.");
    return;
  }
  let count = 0;
  for (const values of failures.values()) count += values.length;
  console.error(`Astro dist validation failed with ${count} mismatch(es) in ${failures.size} category/categories.`);
  for (const [category, values] of failures) {
    console.error(`\n${category} (${values.length})`);
    for (const value of values.slice(0, 20)) console.error(`  - ${value}`);
    if (values.length > 20) console.error(`  - … ${values.length - 20} more`);
  }
  process.exitCode = 1;
}

main().catch((error) => {
  console.error(`Astro dist validation failed: ${error.stack ?? error.message}`);
  process.exitCode = 1;
});
