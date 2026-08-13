#!/usr/bin/env node

import { createHash } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { contentFingerprint, postContentFingerprint } from "./normalize.mjs";

const ORIGIN = "https://tgrall.github.io";
const SITEMAP_URL = `${ORIGIN}/sitemap.xml`;
const FIXTURE_DIR = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "../../tests/fixtures/production-baseline",
);
const FIXTURE_PATH = resolve(FIXTURE_DIR, "baseline.json");
const REPORT_PATH = resolve(FIXTURE_DIR, "report.md");
const ARGUMENTS = process.argv.slice(2);
const UPDATE = ARGUMENTS.includes("--update");

const EXTRA_ROUTES = [
  "/blog/rss.xml",
  "/blog/atom.xml",
  "/__production-baseline-404__",
  "/copilot-blog",
  "/blog/2024/12/24/quarkus-uploading-image-to-the-cloud",
  "/docs/tutorial-basics/congratulations",
  "/docs/tutorial-basics/create-a-blog-post",
  "/docs/tutorial-basics/create-a-document",
  "/docs/tutorial-basics/create-a-page",
  "/docs/tutorial-basics/deploy-your-site",
  "/docs/tutorial-basics/markdown-features",
  "/docs/tutorial-extras/manage-docs-versions",
  "/docs/tutorial-extras/translate-your-site",
  "/markdown-page",
];

const FEED_ROUTES = new Set(["/blog/rss.xml", "/blog/atom.xml"]);
const USER_AGENT =
  "tgrall.github.io production-baseline capture (Astro migration verification)";
const CONCURRENCY = 8;
const MAX_REDIRECTS = 10;
const LEGACY_QUARKUS_ALIAS = "/blog/2024/12/24/quarkus-uploading-image-to-the-cloud";

function usage() {
  console.log(`Usage: node scripts/production-baseline/capture.mjs [--update]

Without --update, production is captured in memory and compared with the
committed fixture. --update is required to create or replace the fixture.`);
}

if (ARGUMENTS.some((argument) => !["--update", "--help", "-h"].includes(argument))) {
  usage();
  process.exit(2);
}
if (ARGUMENTS.includes("--help") || ARGUMENTS.includes("-h")) {
  usage();
  process.exit(0);
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function decodeEntities(value = "") {
  const named = {
    amp: "&",
    apos: "'",
    gt: ">",
    hellip: "…",
    laquo: "«",
    ldquo: "“",
    lsquo: "‘",
    lt: "<",
    mdash: "—",
    nbsp: " ",
    ndash: "–",
    quot: '"',
    raquo: "»",
    rdquo: "”",
    rsquo: "’",
  };
  return value.replace(
    /&(#x[\da-f]+|#\d+|[a-z][\da-z]+);/gi,
    (entity, key) => {
      if (key[0] === "#") {
        const hexadecimal = key[1].toLowerCase() === "x";
        const number = Number.parseInt(key.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
        return Number.isFinite(number) ? String.fromCodePoint(number) : entity;
      }
      return named[key.toLowerCase()] ?? entity;
    },
  );
}

function normalizeText(value = "") {
  return decodeEntities(value).replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function attributes(tag) {
  const result = {};
  const body = tag.replace(/^<[^\s>]+|\/?>$/g, "");
  const pattern = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of body.matchAll(pattern)) {
    result[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}

function stripXmlWrapper(value = "") {
  return value
    .replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/i, "$1")
    .trim();
}

function xmlValue(xml, names) {
  for (const name of names) {
    const escaped = name.replace(":", "\\:");
    const match = xml.match(new RegExp(`<${escaped}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escaped}>`, "i"));
    if (match) return stripXmlWrapper(match[1]);
  }
  return "";
}

function xmlBlocks(xml, name) {
  const pattern = new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, "gi");
  return [...xml.matchAll(pattern)].map((match) => match[1]);
}

function extractElement(html, tagName) {
  const tokenPattern = new RegExp(`<\\/?${tagName}\\b[^>]*>`, "gi");
  const first = tokenPattern.exec(html);
  if (!first || first[0].startsWith("</")) return "";

  const contentStart = tokenPattern.lastIndex;
  let depth = 1;
  let token;
  while ((token = tokenPattern.exec(html))) {
    if (token[0].startsWith("</")) depth -= 1;
    else if (!token[0].endsWith("/>")) depth += 1;
    if (depth === 0) return html.slice(contentStart, token.index);
  }
  return html.slice(contentStart);
}

function isFrameworkOnly(tagName, attrs) {
  if (["nav", "footer", "aside", "script", "style", "svg", "noscript", "template"].includes(tagName)) {
    return true;
  }
  const markers = `${attrs.class ?? ""} ${attrs.id ?? ""} ${attrs["data-theme"] ?? ""}`.toLowerCase();
  return [
    "breadcrumbs",
    "pagination-nav",
    "table-of-contents",
    "theme-doc-toc",
    "theme-doc-footer",
    "theme-blog-post-footer",
    "theme-edit-this-page",
    "toccollapsible",
  ].some((marker) => markers.includes(marker));
}

function normalizedSemantic(html) {
  const main = extractElement(html, "main");
  const article = main ? "" : extractElement(html, "article");
  const element = main ? "main" : article ? "article" : "document";
  const scope = main || article || html;
  const tokens = scope.match(/<!--[\s\S]*?-->|<![^>]*>|<\/?[a-z][^>]*>|[^<]+/gi) ?? [];
  const skipped = [];
  const text = [];

  for (const token of tokens) {
    if (!token.startsWith("<")) {
      if (skipped.length === 0) text.push(token);
      continue;
    }
    if (/^<!--|^<![^-]/.test(token)) continue;
    const closing = /^<\//.test(token);
    const name = token.match(/^<\/?\s*([a-z\d-]+)/i)?.[1].toLowerCase();
    if (!name) continue;

    if (closing) {
      if (skipped.at(-1) === name) skipped.pop();
      continue;
    }
    if (skipped.length > 0) {
      if (!/\/>$/.test(token) && !["br", "hr", "img", "input", "meta", "link"].includes(name)) {
        skipped.push(name);
      }
      continue;
    }
    if (isFrameworkOnly(name, attributes(token))) {
      if (!/\/>$/.test(token) && !["img", "meta", "link"].includes(name)) skipped.push(name);
      continue;
    }
    if (["br", "hr", "p", "div", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6"].includes(name)) {
      text.push(" ");
    }
  }
  return { element, text: normalizeText(text.join("")) };
}

function normalizedSemanticText(html) {
  return normalizedSemantic(html).text;
}

function documentWithoutCode(html) {
  return html.replace(
    /<!--[\s\S]*?-->|<(script|style|svg|noscript|template)\b[^>]*>[\s\S]*?<\/\1\s*>/gi,
    "",
  );
}

function normalizeUrl(value, baseUrl) {
  if (!value) return "";
  try {
    const url = new URL(value, baseUrl);
    if (!["http:", "https:"].includes(url.protocol)) return "";
    return url.origin === ORIGIN ? `${url.pathname}${url.search}${url.hash}` : url.href;
  } catch {
    return "";
  }
}

function internalLinks(html, baseUrl) {
  const links = new Set();
  for (const tag of documentWithoutCode(html).match(/<a\b[^>]*>/gi) ?? []) {
    const href = attributes(tag).href;
    if (!href) continue;
    try {
      const url = new URL(href, baseUrl);
      if (url.origin === ORIGIN && ["http:", "https:"].includes(url.protocol)) {
        links.add(`${url.pathname}${url.search}${url.hash}`);
      }
    } catch {
      // Invalid authored links are not part of the navigable baseline.
    }
  }
  return [...links].sort();
}

function images(html, baseUrl) {
  const result = new Map();
  for (const tag of documentWithoutCode(html).match(/<img\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    let src = attrs.src ?? "";
    if (src.startsWith("data:")) src = `data:sha256:${sha256(src)}`;
    else src = normalizeUrl(src, baseUrl);
    if (!src) continue;
    const image = { src, alt: normalizeText(attrs.alt ?? "") };
    result.set(JSON.stringify(image), image);
  }
  return [...result.values()].sort(
    (left, right) => left.src.localeCompare(right.src) || left.alt.localeCompare(right.alt),
  );
}

function metadata(html, baseUrl) {
  const clean = documentWithoutCode(html);
  const titleMatch = clean.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  let description = "";
  const openGraph = {};
  for (const tag of clean.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    const key = (attrs.property || attrs.name || "").toLowerCase();
    if (key === "description") description = normalizeText(attrs.content);
    if (key.startsWith("og:")) {
      const value = key === "og:url" || key === "og:image"
        ? normalizeUrl(attrs.content, baseUrl)
        : normalizeText(attrs.content);
      if (value) openGraph[key] = value;
    }
  }

  let canonical = "";
  for (const tag of clean.match(/<link\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    if ((attrs.rel ?? "").toLowerCase().split(/\s+/).includes("canonical")) {
      canonical = normalizeUrl(attrs.href, baseUrl);
      break;
    }
  }

  return {
    canonical,
    title: normalizeText(titleMatch?.[1] ?? ""),
    description,
    openGraph: Object.fromEntries(Object.entries(openGraph).sort(([left], [right]) => left.localeCompare(right))),
  };
}

function pageRecord(response, route) {
  const semantic = normalizedSemantic(response.body);
  const record = {
    status: response.status,
    finalUrl: normalizeUrl(response.finalUrl, response.finalUrl),
    redirects: response.redirects.map(({ type, status, from, to }) => ({
      type,
      status,
      from: normalizeUrl(from, from),
      to: normalizeUrl(to, from),
    })),
    contentType: response.contentType,
    metadata: metadata(response.body, response.finalUrl),
    semanticText: {
      element: semantic.element,
      length: semantic.text.length,
      sha256: sha256(semantic.text),
    },
    internalLinks: internalLinks(response.body, response.finalUrl),
    images: images(response.body, response.finalUrl),
  };
  if (
    /^\/blog\/\d{4}\/\d{2}\/\d{2}\//.test(route) &&
    route !== LEGACY_QUARKUS_ALIAS
  ) {
    record.articleContent = postContentFingerprint(response.body);
  }
  return record;
}

function feedEntry(block, type) {
  const atomLink = block.match(/<link\b[^>]*\bhref=(?:"([^"]+)"|'([^']+)')[^>]*\/?>/i);
  const content = type === "rss"
    ? xmlValue(block, ["content:encoded", "description"])
    : xmlValue(block, ["content", "summary"]);
  const normalizedContent = normalizedSemanticText(content);
  return {
    id: normalizeText(xmlValue(block, type === "rss" ? ["guid", "link"] : ["id"])),
    link: normalizeText(type === "rss" ? xmlValue(block, ["link"]) : atomLink?.[1] ?? atomLink?.[2] ?? ""),
    title: normalizeText(xmlValue(block, ["title"])),
    published: normalizeText(xmlValue(block, type === "rss" ? ["pubDate"] : ["published", "updated"])),
    updated: normalizeText(xmlValue(block, type === "rss" ? [] : ["updated"])),
    summary: normalizeText(xmlValue(block, type === "rss" ? ["description"] : ["summary"])),
    content: {
      length: normalizedContent.length,
      sha256: sha256(normalizedContent),
    },
    portableContent: contentFingerprint(content),
  };
}

function feedRecord(response, type) {
  const blockName = type === "rss" ? "item" : "entry";
  const entries = xmlBlocks(response.body, blockName).map((block) => feedEntry(block, type));
  return {
    status: response.status,
    finalUrl: normalizeUrl(response.finalUrl, response.finalUrl),
    redirects: response.redirects.map(({ type, status, from, to }) => ({
      type,
      status,
      from: normalizeUrl(from, from),
      to: normalizeUrl(to, from),
    })),
    contentType: response.contentType,
    metadata: {
      title: normalizeText(xmlValue(response.body, ["title"])),
      id: normalizeText(xmlValue(response.body, type === "rss" ? ["link"] : ["id"])),
      updated: normalizeText(xmlValue(response.body, type === "rss" ? ["lastBuildDate"] : ["updated"])),
    },
    entries,
  };
}

async function fetchOnce(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);
  try {
    return await fetch(url, {
      redirect: "manual",
      headers: { "user-agent": USER_AGENT, accept: "text/html,application/xml;q=0.9,*/*;q=0.8" },
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeout);
  }
}

function metaRefreshTarget(html, baseUrl) {
  for (const tag of html.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs = attributes(tag);
    if ((attrs["http-equiv"] ?? "").toLowerCase() !== "refresh") continue;
    const match = (attrs.content ?? "").match(/^\s*\d+(?:\.\d+)?\s*;\s*url\s*=\s*(.+?)\s*$/i);
    if (!match) continue;
    const value = match[1].replace(/^(['"])([\s\S]*)\1$/, "$2");
    try {
      return new URL(value, baseUrl).href;
    } catch {
      return "";
    }
  }
  return "";
}

async function fetchWithRedirects(initialUrl) {
  let current = initialUrl;
  const redirects = [];
  for (let count = 0; count <= MAX_REDIRECTS; count += 1) {
    let response;
    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        response = await fetchOnce(current);
        if (response.status < 500 || attempt === 3) break;
      } catch (error) {
        if (attempt === 3) throw error;
      }
      await new Promise((resolveDelay) => setTimeout(resolveDelay, attempt * 300));
    }

    if (response.status >= 300 && response.status < 400 && response.headers.has("location")) {
      const next = new URL(response.headers.get("location"), current).href;
      redirects.push({ type: "http", status: response.status, from: current, to: next });
      current = next;
      continue;
    }
    const body = await response.text();
    const next = response.headers.get("content-type")?.toLowerCase().includes("text/html")
      ? metaRefreshTarget(body, current)
      : "";
    if (next && next !== current) {
      redirects.push({ type: "meta-refresh", status: response.status, from: current, to: next });
      current = next;
      continue;
    }
    return {
      status: response.status,
      finalUrl: current,
      redirects,
      contentType: (response.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase(),
      body,
    };
  }
  throw new Error(`More than ${MAX_REDIRECTS} redirects while fetching ${initialUrl}`);
}

async function mapConcurrent(values, worker) {
  const result = new Array(values.length);
  let next = 0;
  async function run() {
    while (next < values.length) {
      const index = next;
      next += 1;
      result[index] = await worker(values[index], index);
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, values.length) }, run));
  return result;
}

function sitemapLocations(xml) {
  return [...xml.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/gi)]
    .map((match) => decodeEntities(match[1].trim()))
    .filter((url) => {
      try {
        return new URL(url).origin === ORIGIN;
      } catch {
        return false;
      }
    });
}

function pathFor(url) {
  const parsed = new URL(url, ORIGIN);
  return `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

function buildReport(fixture) {
  const pages = Object.entries(fixture.pages);
  const statuses = new Map();
  for (const [, page] of pages) statuses.set(page.status, (statuses.get(page.status) ?? 0) + 1);
  const redirects = pages.filter(([, page]) => page.redirects.length > 0);
  const missingCanonical = pages.filter(([, page]) => !page.metadata.canonical);

  const lines = [
    "# Production baseline report",
    "",
    `- Origin: ${fixture.origin}`,
    `- Sitemap URLs: ${fixture.sitemap.urlCount}`,
    `- Captured HTML pages: ${pages.length}`,
    `- RSS entries: ${fixture.feeds.rss.entries.length}`,
    `- Atom entries: ${fixture.feeds.atom.entries.length}`,
    `- HTTP statuses: ${[...statuses].sort(([left], [right]) => left - right).map(([status, count]) => `\`${status}\`: ${count}`).join(", ")}`,
    `- Pages with redirects: ${redirects.length}`,
    `- Pages without a canonical URL: ${missingCanonical.length}`,
    "",
    "## Redirects",
    "",
  ];
  if (redirects.length === 0) lines.push("None.");
  for (const [route, page] of redirects) {
    lines.push(`- \`${route}\`: ${page.redirects.map((redirect) => `${redirect.type} ${redirect.status} → \`${redirect.to}\``).join(", ")}`);
  }
  lines.push("", "## Non-200 responses", "");
  const non200 = pages.filter(([, page]) => page.status !== 200);
  if (non200.length === 0) lines.push("None.");
  for (const [route, page] of non200) lines.push(`- \`${route}\`: ${page.status}`);
  lines.push("");
  return `${lines.join("\n")}\n`;
}

async function capture() {
  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  const sitemapResponse = await fetchWithRedirects(SITEMAP_URL);
  if (sitemapResponse.status !== 200) {
    throw new Error(`Sitemap returned HTTP ${sitemapResponse.status}`);
  }

  const sitemapUrls = [...new Set(sitemapLocations(sitemapResponse.body))].sort();
  const routes = [...new Set([...sitemapUrls.map(pathFor), ...EXTRA_ROUTES])].sort();
  const pageRoutes = routes.filter((route) => !FEED_ROUTES.has(route));
  console.log(`Capturing ${pageRoutes.length} pages and ${FEED_ROUTES.size} feeds...`);

  const records = await mapConcurrent(pageRoutes, async (route, index) => {
    if ((index + 1) % 50 === 0 || index + 1 === pageRoutes.length) {
      console.log(`  ${index + 1}/${pageRoutes.length}`);
    }
    return [route, pageRecord(await fetchWithRedirects(new URL(route, ORIGIN).href), route)];
  });
  const rssResponse = await fetchWithRedirects(`${ORIGIN}/blog/rss.xml`);
  const atomResponse = await fetchWithRedirects(`${ORIGIN}/blog/atom.xml`);

  return {
    schemaVersion: 1,
    origin: ORIGIN,
    sitemap: {
      status: sitemapResponse.status,
      finalUrl: normalizeUrl(sitemapResponse.finalUrl, sitemapResponse.finalUrl),
      redirects: sitemapResponse.redirects.map((redirect) => ({
        ...redirect,
        from: normalizeUrl(redirect.from, redirect.from),
        to: normalizeUrl(redirect.to, redirect.from),
      })),
      urlCount: sitemapUrls.length,
      urlsSha256: sha256(sitemapUrls.join("\n")),
      paths: sitemapUrls.map(pathFor).sort(),
    },
    pages: Object.fromEntries(records),
    feeds: {
      rss: feedRecord(rssResponse, "rss"),
      atom: feedRecord(atomResponse, "atom"),
    },
  };
}

async function atomicWrite(path, content) {
  const pending = `${path}.new`;
  await writeFile(pending, content);
  await rename(pending, path);
}

try {
  const fixture = await capture();
  const serialized = `${JSON.stringify(fixture, null, 2)}\n`;
  const report = buildReport(fixture);

  if (UPDATE) {
    await mkdir(FIXTURE_DIR, { recursive: true });
    await atomicWrite(FIXTURE_PATH, serialized);
    await atomicWrite(REPORT_PATH, report);
    console.log(`Updated ${FIXTURE_PATH}`);
    console.log(report);
  } else {
    let expected;
    let expectedReport;
    try {
      [expected, expectedReport] = await Promise.all([
        readFile(FIXTURE_PATH, "utf8"),
        readFile(REPORT_PATH, "utf8"),
      ]);
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("No committed fixture exists. Run with --update to create it.");
      }
      throw error;
    }
    if (expected !== serialized || expectedReport !== report) {
      throw new Error(
        "Production differs from the committed baseline. Review production, then run with --update to accept it.",
      );
    }
    console.log(report);
    console.log("Production matches the committed baseline.");
  }
} catch (error) {
  console.error(`Production baseline capture failed: ${error.message}`);
  process.exitCode = 1;
}
