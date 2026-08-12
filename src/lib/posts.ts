import type {CollectionEntry} from 'astro:content';
import {getLegacyMetadata} from './legacy-metadata';

export const POSTS_PER_PAGE = 10;

export type BlogPost = CollectionEntry<'blog'>;

const POST_ID = /^(\d{4})-(\d{2})-(\d{2})-(.+)$/;

export function getRouteParts(post: BlogPost) {
  const match = post.id.match(POST_ID);
  if (!match) {
    throw new Error(`Blog filename does not define a historical route: ${post.id}`);
  }

  const [, year, month, day, slug] = match;
  return {year, month, day, slug};
}

export function getPostPath(post: BlogPost) {
  const {year, month, day, slug} = getRouteParts(post);
  return `/blog/${year}/${month}/${day}/${slug}`;
}

export function getPublishedDate(post: BlogPost) {
  if (post.data.date instanceof Date) return post.data.date;
  if (post.data.date) {
    const value = post.data.date;
    const hasTimeZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(value);
    return new Date(hasTimeZone ? value : `${value}Z`);
  }
  const {year, month, day} = getRouteParts(post);
  return new Date(`${year}-${month}-${day}T00:00:00Z`);
}

export function sortPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    const dateDifference = getPublishedDate(b).getTime() - getPublishedDate(a).getTime();
    return dateDifference || getPostPath(a).localeCompare(getPostPath(b));
  });
}

export function normalizeTag(tag: string) {
  return tag
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Za-z])(\d)/g, '$1-$2')
    .replace(/(\d)([A-Za-z])/g, '$1-$2')
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function collectTags(posts: BlogPost[]) {
  const tags = new Map<string, {label: string; posts: BlogPost[]}>();

  for (const post of posts) {
    for (const label of post.data.tags ?? []) {
      const slug = normalizeTag(label);
      const current = tags.get(slug) ?? {label, posts: []};
      current.posts.push(post);
      tags.set(slug, current);
    }
  }

  return new Map(
    [...tags.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([slug, value]) => [slug, {...value, posts: sortPosts(value.posts)}]),
  );
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function getDescription(post: BlogPost) {
  return post.data.description
    ?? getLegacyMetadata(getPostPath(post))?.description
    ?? `Read ${post.data.title} on Tug's Site.`;
}
