import {readdirSync, readFileSync} from 'node:fs';
import {describe, expect, it} from 'vitest';
import {normalizeTag} from '../src/lib/posts';

const blogFiles = readdirSync(new URL('../blog/', import.meta.url)).filter((file) => /\.mdx?$/.test(file));

describe('blog content contract', () => {
  it('contains every published post with a unique historical filename route', () => {
    expect(blogFiles).toHaveLength(275);
    expect(new Set(blogFiles.map((file) => file.replace(/\.mdx?$/, ''))).size).toBe(275);
    for (const file of blogFiles) {
      expect(file).toMatch(/^\d{4}-\d{2}-\d{2}-.+\.mdx?$/);
    }
  });

  it('does not depend on Docusaurus content components', () => {
    for (const file of blogFiles) {
      const source = readFileSync(new URL(`../blog/${file}`, import.meta.url), 'utf8');
      expect(source).not.toMatch(/@docusaurus|@theme\/|react-gist/);
    }
  });

  it('preserves Docusaurus-compatible tag slugs', () => {
    expect(normalizeTag('DevOps')).toBe('dev-ops');
    expect(normalizeTag('GitHub')).toBe('git-hub');
    expect(normalizeTag('JavaEE')).toBe('java-ee');
    expect(normalizeTag('OC4J')).toBe('oc-4-j');
    expect(normalizeTag('S3')).toBe('s-3');
    expect(normalizeTag('coding with copilot')).toBe('coding-with-copilot');
  });

  it('vendors every Gist referenced by migrated posts', () => {
    const gistFiles = readdirSync(new URL('../src/data/gists/', import.meta.url)).filter((file) => file.endsWith('.json'));
    expect(gistFiles).toHaveLength(20);
    for (const file of gistFiles) {
      const gist = JSON.parse(readFileSync(new URL(`../src/data/gists/${file}`, import.meta.url), 'utf8'));
      expect(gist.id).toBe(file.replace('.json', ''));
      expect(Object.keys(gist.files).length).toBeGreaterThan(0);
      for (const entry of Object.values<{content: string}>(gist.files)) {
        expect(entry.content.length).toBeGreaterThan(0);
      }
    }
  });
});
