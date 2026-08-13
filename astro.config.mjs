import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tgrall.github.io',
  output: 'static',
  publicDir: './static',
  trailingSlash: 'never',
  redirects: {
    '/copilot-blog': '/blog/tags/coding-with-copilot',
    '/blog/2024/12/24/quarkus-uploading-image-to-the-cloud': '/blog/2023/12/24/quarkus-uploading-image-to-the-cloud',
    '/markdown-page': '/',
    '/docs/intro': '/',
    '/docs/tutorial-basics/congratulations': '/',
    '/docs/tutorial-basics/create-a-blog-post': '/',
    '/docs/tutorial-basics/create-a-document': '/',
    '/docs/tutorial-basics/create-a-page': '/',
    '/docs/tutorial-basics/deploy-your-site': '/',
    '/docs/tutorial-basics/markdown-features': '/',
    '/docs/tutorial-extras/manage-docs-versions': '/',
    '/docs/tutorial-extras/translate-your-site': '/',
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light-high-contrast',
        dark: 'github-dark-high-contrast',
      },
    },
  },
});
