import type {APIRoute} from 'astro';
import {SITE} from '../config/site';

export const GET: APIRoute = () => new Response(
  `User-agent: *\nAllow: /\nSitemap: ${SITE.url}/sitemap-index.xml\n`,
  {headers: {'Content-Type': 'text/plain; charset=utf-8'}},
);
