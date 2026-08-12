import {getCollection} from 'astro:content';
import {SITE} from '../../config/site';
import {getDescription, getPostPath, getPublishedDate, sortPosts} from '../../lib/posts';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function cdata(value: string) {
  return `<![CDATA[${value.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`;
}

export async function GET() {
  const posts = sortPosts(await getCollection('blog'));
  const latest = posts.length ? getPublishedDate(posts[0]).toISOString() : new Date(0).toISOString();
  const entries = posts.map((post, index) => {
    const url = `${SITE.url}${getPostPath(post)}`;
    return `<entry>
  <title type="html">${cdata(post.data.title)}</title>
  <id>${escapeXml(url)}</id>
  <link href="${escapeXml(url)}"/>
  <updated>${getPublishedDate(post).toISOString()}</updated>
  <summary type="html">${cdata(getDescription(post))}</summary>
  <content type="html">${cdata(`__FEED_CONTENT_${index}__`)}</content>
</entry>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <id>${SITE.url}/blog</id>
  <title>${escapeXml(`${SITE.title} Blog`)}</title>
  <updated>${latest}</updated>
  <link rel="alternate" href="${SITE.url}/blog"/>
  <subtitle>${escapeXml(`${SITE.title} Blog`)}</subtitle>
  <icon>${SITE.url}/img/favicon.ico</icon>
${entries}
</feed>`;

  return new Response(body, {headers: {'Content-Type': 'application/atom+xml; charset=utf-8'}});
}
