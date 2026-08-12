import {mkdir, readFile, readdir, unlink, writeFile} from 'node:fs/promises';
import {basename} from 'node:path';

const blogDirectory = new URL('../blog/', import.meta.url);
const outputDirectory = new URL('../src/data/gists/', import.meta.url);
const componentImport = "import GistEmbed from '../src/components/content/GistEmbed.astro';";
const gistPattern = /<Gist\s+id=["']([^"']+)["'](?:\s+file=["']([^"']+)["'])?\s*\/>/gs;

const files = (await readdir(blogDirectory)).filter((file) => file.endsWith('.md'));
const posts = [];
const gistIds = new Set();

for (const file of files) {
  const url = new URL(file, blogDirectory);
  const source = await readFile(url, 'utf8');
  if (!source.includes("import Gist from 'react-gist';")) continue;

  const matches = [...source.matchAll(gistPattern)];
  if (!matches.length) throw new Error(`No Gist embeds found in ${file}`);
  matches.forEach((match) => gistIds.add(match[1]));

  const migrated = source
    .replace("import Gist from 'react-gist';", componentImport)
    .replace(gistPattern, (_, id, selectedFile) =>
      `<GistEmbed id="${id}"${selectedFile ? ` file="${selectedFile}"` : ''} />`,
    );
  const destination = new URL(file.replace(/\.md$/, '.mdx'), blogDirectory);
  await writeFile(destination, migrated);
  await unlink(url);
  posts.push({from: file, to: basename(destination.pathname)});
}

await mkdir(outputDirectory, {recursive: true});
for (const id of [...gistIds].sort()) {
  const response = await fetch(`https://api.github.com/gists/${id}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'tgrall.github.io Astro migration',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!response.ok) throw new Error(`Unable to fetch Gist ${id}: ${response.status}`);
  const gist = await response.json();
  const files = Object.fromEntries(Object.entries(gist.files).map(([name, file]) => [
    name,
    {
      filename: file.filename,
      language: file.language,
      content: file.content,
      truncated: file.truncated,
      rawUrl: file.raw_url,
    },
  ]));
  await writeFile(
    new URL(`${id}.json`, outputDirectory),
    `${JSON.stringify({id, url: gist.html_url, description: gist.description, files}, null, 2)}\n`,
  );
}

console.log(JSON.stringify({posts, gists: [...gistIds].sort()}, null, 2));
