import { createHash } from "node:crypto";

const BLOCK_ELEMENTS = new Set([
  "address", "article", "aside", "blockquote", "br", "dd", "div", "dl", "dt",
  "figcaption", "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6",
  "header", "hr", "li", "main", "ol", "p", "pre", "section", "table", "tbody",
  "td", "tfoot", "th", "thead", "tr", "ul",
]);
const VOID_ELEMENTS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function decodeEntities(value = "") {
  const named = {
    amp: "&",
    apos: "'",
    copy: "©",
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
    reg: "®",
    rsquo: "’",
    trade: "™",
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

export function normalizeText(value = "") {
  return decodeEntities(value)
    .normalize("NFC")
    .replace(/[\u00a0\u200b\ufeff]/g, " ")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "--")
    .replace(/\u2026/g, "...")
    .replace(/\*\*/g, "")
    .replace(/(^|\s)[*_](?=\p{L})/gu, "$1")
    .replace(/(?<=\p{N})_(?=\p{L})/gu, "")
    .replace(/(?<=\p{L})[*_](?=[\s.,;:!?/()[\]{}])/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function attributes(tag) {
  const result = {};
  const body = tag.replace(/^<[^\s>]+|\/?>$/g, "");
  const pattern = /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  for (const match of body.matchAll(pattern)) {
    result[match[1].toLowerCase()] = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return result;
}

function extractElementMatching(html, predicate) {
  const tokenPattern = /<\/?([a-z][\w:-]*)\b[^>]*>/gi;
  let opening;
  while ((opening = tokenPattern.exec(html))) {
    if (opening[0].startsWith("</") || !predicate(opening[1].toLowerCase(), attributes(opening[0]))) {
      continue;
    }
    const tagName = opening[1].toLowerCase();
    const contentStart = tokenPattern.lastIndex;
    let depth = 1;
    let token;
    while ((token = tokenPattern.exec(html))) {
      if (token[1].toLowerCase() !== tagName) continue;
      if (token[0].startsWith("</")) depth -= 1;
      else if (!token[0].endsWith("/>")) depth += 1;
      if (depth === 0) return html.slice(contentStart, token.index);
    }
    return html.slice(contentStart);
  }
  return "";
}

export function postContentHtml(html) {
  return (
    extractElementMatching(html, (_tag, attrs) => attrs.id === "__blog-post-container") ||
    extractElementMatching(html, (_tag, attrs) =>
      (attrs.class ?? "").split(/\s+/).includes("prose")) ||
    ""
  );
}

function excludedElement(tagName, attrs) {
  if (["script", "style", "svg", "noscript", "template", "button", "nav", "footer", "aside"].includes(tagName)) {
    return true;
  }
  if ((attrs["aria-hidden"] ?? "").toLowerCase() === "true") return true;
  const markers = `${attrs.class ?? ""} ${attrs.id ?? ""}`.toLowerCase();
  return [
    "anchor-link",
    "hash-link",
    "heading-link",
    "table-of-contents",
    "theme-doc-toc",
    "toc-sidebar",
    "tag-chip",
    "tags",
  ].some((marker) => markers.includes(marker));
}

export function normalizedContentText(html) {
  const tokens = html.match(/<!--[\s\S]*?-->|<![^>]*>|<\/?[a-z][^>]*>|[^<]+/gi) ?? [];
  const stack = [];
  let skippedDepth = 0;
  const text = [];

  for (const token of tokens) {
    if (!token.startsWith("<")) {
      if (skippedDepth === 0) text.push(token);
      continue;
    }
    if (/^<!--|^<![^-]/.test(token)) continue;
    const closing = /^<\//.test(token);
    const name = token.match(/^<\/?\s*([a-z][\w:-]*)/i)?.[1].toLowerCase();
    if (!name) continue;

    if (closing) {
      let frame;
      do {
        frame = stack.pop();
        if (frame?.skipped) skippedDepth -= 1;
      } while (frame && frame.name !== name);
      if (skippedDepth === 0 && BLOCK_ELEMENTS.has(name)) text.push(" ");
      continue;
    }

    const skipped = skippedDepth > 0 || excludedElement(name, attributes(token));
    if (!VOID_ELEMENTS.has(name) && !token.endsWith("/>")) {
      stack.push({ name, skipped });
      if (skipped) skippedDepth += 1;
    }
    if (!skipped && BLOCK_ELEMENTS.has(name)) text.push(" ");
  }
  return normalizeText(text.join(""));
}

export function contentFingerprint(html) {
  const text = normalizedContentText(html);
  return { length: text.length, sha256: sha256(text) };
}

export function postContentFingerprint(html) {
  const content = postContentHtml(html);
  if (!content) return null;
  return contentFingerprint(content);
}
