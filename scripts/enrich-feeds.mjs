#!/usr/bin/env node

import {readFile, readdir, writeFile} from 'node:fs/promises';
import {join} from 'node:path';

const DIST = new URL('../dist/', import.meta.url);
const POSTS = new URL('../dist/blog/', import.meta.url);

async function walk(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  return (await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }))).flat();
}

const postFiles = (await walk(POSTS.pathname))
  .filter((file) => /\/blog\/\d{4}\/\d{2}\/\d{2}\/[^/]+\/index\.html$/.test(file));
const posts = [];

for (const file of postFiles) {
  const html = await readFile(file, 'utf8');
  const content = html.match(/<!-- feed-content-start -->([\s\S]*?)<!-- feed-content-end -->/)?.[1];
  if (content === undefined) continue;
  const route = `/${file.slice(DIST.pathname.length).replace(/\/index\.html$/, '')}`;
  const date = route.match(/^\/blog\/(\d{4})\/(\d{2})\/(\d{2})\//);
  const time = html.match(/<time datetime="([^"]+)"/)?.[1] ?? `${date[1]}-${date[2]}-${date[3]}T00:00:00.000Z`;
  posts.push({route, time: new Date(time).getTime(), content});
}

posts.sort((a, b) => b.time - a.time || a.route.localeCompare(b.route));
if (posts.length !== 275) throw new Error(`Expected 275 feed posts, found ${posts.length}`);

const escaped = posts.map(
  (post) => `<![CDATA[${post.content.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`,
);
for (const relativePath of ['blog/rss.xml', 'blog/atom.xml']) {
  const file = new URL(relativePath, DIST);
  let xml = await readFile(file, 'utf8');
  escaped.forEach((content, index) => {
    const token = `__FEED_CONTENT_${index}__`;
    if (!xml.includes(token)) throw new Error(`${relativePath} does not contain ${token}`);
    const wrappedToken = `<![CDATA[${token}]]>`;
    xml = xml.replace(xml.includes(wrappedToken) ? wrappedToken : token, content);
  });
  if (/__FEED_CONTENT_\d+__/.test(xml)) throw new Error(`Unresolved feed token in ${relativePath}`);
  await writeFile(file, xml);
}

console.log(`Embedded complete article content in RSS and Atom for ${posts.length} posts.`);
