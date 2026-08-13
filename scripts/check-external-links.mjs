#!/usr/bin/env node

import {readFile, readdir, writeFile} from 'node:fs/promises';
import {join, relative} from 'node:path';

const DIST = new URL('../dist/', import.meta.url);
const ALLOWLIST = new URL('../tests/fixtures/external-link-allowlist.json', import.meta.url);
const REPORT = new URL('../external-links-report.json', import.meta.url);
const CONCURRENCY = 8;
const TIMEOUT_MS = 15_000;

async function walk(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  return (await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }))).flat();
}

const allowlist = JSON.parse(await readFile(ALLOWLIST, 'utf8'));
const allowed = new Map(allowlist.map((entry) => [entry.url, entry]));
const htmlFiles = (await walk(DIST.pathname)).filter((file) => file.endsWith('.html'));
const sources = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/\bhref=(?:"([^"]+)"|'([^']+)')/gi)) {
    const value = match[1] ?? match[2];
    if (!/^https?:\/\//i.test(value) || value.startsWith('https://tgrall.github.io')) continue;
    const url = new URL(value);
    url.hash = '';
    const normalized = url.href;
    const pages = sources.get(normalized) ?? [];
    pages.push(`/${relative(DIST.pathname, file).replace(/index\.html$/, '').replace(/\.html$/, '')}`);
    sources.set(normalized, pages);
  }
}

async function check(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: {'User-Agent': 'tgrall.github.io link health check'},
    });
    if ([403, 405].includes(response.status)) {
      response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: {'User-Agent': 'tgrall.github.io link health check'},
      });
    }
    return {status: response.status, finalUrl: response.url, ok: response.ok};
  } catch (error) {
    return {status: null, finalUrl: null, ok: false, error: error instanceof Error ? error.message : String(error)};
  } finally {
    clearTimeout(timer);
  }
}

const urls = [...sources.keys()].sort();
const results = [];
for (let index = 0; index < urls.length; index += CONCURRENCY) {
  const batch = urls.slice(index, index + CONCURRENCY);
  results.push(...await Promise.all(batch.map(async (url) => ({
    url,
    sources: [...new Set(sources.get(url))].sort(),
    allowlisted: allowed.get(url) ?? null,
    ...await check(url),
  }))));
}

const report = {
  generatedAt: new Date().toISOString(),
  checked: results.length,
  failures: results.filter((result) => !result.ok && !result.allowlisted).length,
  allowlistedFailures: results.filter((result) => !result.ok && result.allowlisted).length,
  results,
};
await writeFile(REPORT, `${JSON.stringify(report, null, 2)}\n`);
console.log(`Checked ${report.checked} external links: ${report.failures} failures, ${report.allowlistedFailures} allowlisted failures.`);
