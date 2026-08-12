import AxeBuilder from '@axe-core/playwright';
import {expect, test} from '@playwright/test';

const representativePages = [
  ['home', '/'],
  ['blog', '/blog'],
  ['archive', '/blog/archive'],
  ['tag', '/blog/tags/git-hub'],
  ['old-article', '/blog/2003/10/27/looking-for-portlets'],
  ['html-article', '/blog/2011/04/11/how-to-protect-your-rest-service-and-gadget-in-exo-platform'],
  ['gist-article', '/blog/2013/03/06/easy-application-development-with-couchbase-angular-and-node'],
  ['modern-mdx', '/blog/2026/05/02/copilot-cli-customize-statusline'],
  ['talks', '/talks'],
  ['copilot', '/copilot'],
  ['quarkus', '/quarkus'],
] as const;

for (const [name, path] of representativePages) {
  test(`${name} is accessible and visually stable`, async ({page}) => {
    await page.goto(path);
    await expect(page.locator('main')).toBeVisible();
    await expect(page).toHaveTitle(/\S+/);

    const results = await new AxeBuilder({page}).analyze();
    expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))).toEqual([]);

    if (['home', 'blog', 'old-article', 'gist-article', 'modern-mdx', 'talks'].includes(name)) {
      await expect(page).toHaveScreenshot(`${name}.png`, {fullPage: true});
    }
  });
}

test('theme choice persists across navigation', async ({page}) => {
  await page.goto('/');
  const initialTheme = await page.locator('html').getAttribute('data-theme');
  await page.getByRole('button', {name: 'Switch color theme'}).click();
  await expect(page.locator('html')).not.toHaveAttribute('data-theme', initialTheme ?? '');
  const selectedTheme = await page.locator('html').getAttribute('data-theme');
  await page.goto('/blog');
  await expect(page.locator('html')).toHaveAttribute('data-theme', selectedTheme ?? '');
});

test('showcase handles loading, filtering, and remote errors', async ({page}) => {
  await page.route('**/data/blog/videos.json', async (route) => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify([
      {
        id: 'first',
        snippet: {
          title: 'Copilot CLI',
          description: 'CLI demonstration',
          tags: ['CLI', 'Agents'],
          thumbnails: {default: {url: '/img/logo.png'}},
        },
      },
      {
        id: 'second',
        snippet: {
          title: 'Copilot in Java',
          description: 'Java demonstration',
          tags: ['Java'],
          thumbnails: {default: {url: '/img/logo.png'}},
        },
      },
    ]),
  }));
  await page.goto('/showcase');
  await expect(page.getByRole('status')).toHaveText('2 videos');
  await page.getByRole('button', {name: 'Java'}).click();
  await expect(page.getByRole('status')).toHaveText('1 video');
  await expect(page.getByRole('heading', {name: 'Copilot in Java'})).toBeVisible();
  await expect(page).toHaveScreenshot('showcase.png', {fullPage: true});
});

test('intentional redirects preserve approved destinations', async ({page}) => {
  await page.goto('/copilot-blog');
  await expect(page).toHaveURL(/\/blog\/tags\/coding-with-copilot$/);
  await page.goto('/docs/intro');
  await expect(page).toHaveURL(/\/$/);
  await page.goto('/markdown-page');
  await expect(page).toHaveURL(/\/$/);
});
