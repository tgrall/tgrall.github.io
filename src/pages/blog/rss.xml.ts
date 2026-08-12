import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import {SITE} from '../../config/site';
import {getDescription, getPostPath, getPublishedDate, sortPosts} from '../../lib/posts';

export async function GET(context: {site: URL}) {
  const posts = sortPosts(await getCollection('blog'));
  const lastBuildDate = posts.length ? getPublishedDate(posts[0]).toUTCString() : new Date(0).toUTCString();
  return rss({
    title: `${SITE.title} Blog`,
    description: `${SITE.title} Blog`,
    site: new URL('/blog', context.site),
    trailingSlash: false,
    customData: `<lastBuildDate>${lastBuildDate}</lastBuildDate><language>en</language>`,
    items: posts.map((post, index) => ({
      title: post.data.title,
      description: getDescription(post),
      pubDate: getPublishedDate(post),
      link: getPostPath(post),
      content: `__FEED_CONTENT_${index}__`,
    })),
  });
}
