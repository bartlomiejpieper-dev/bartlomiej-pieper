import { readFile } from 'node:fs/promises';
import { expect, test } from '@playwright/test';

const sections = ['about', 'experience', 'stack', 'education', 'certifications'];

for (const width of [320, 1440]) {
  test(`loads without runtime errors or horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    for (const id of sections) {
      const heading = page.locator(`#${id}`).getByRole('heading', { level: 2 });
      await heading.scrollIntoViewIfNeeded();
      await expect(heading).toBeInViewport();
      expect(await page.evaluate(() =>
        document.documentElement.scrollWidth <= document.documentElement.clientWidth
      )).toBe(true);
    }
    expect(errors).toEqual([]);
  });
}

test('downloads the intended PDF with its full filename', async ({ page }) => {
  await page.goto('/');
  const link = page.locator('header a[download]');
  await expect(link).toHaveAccessibleName('Download CV');
  await expect(link).toContainText('Download CV');
  const downloaded = page.waitForEvent('download');
  await link.click();
  const download = await downloaded;
  expect(download.suggestedFilename()).toBe('CV_Bartlomiej_Pieper.pdf');
  expect(await download.failure()).toBeNull();
  const path = await download.path();
  expect(path).toBeTruthy();
  const bytes = await readFile(path!);
  expect(bytes.subarray(0, 5).toString()).toBe('%PDF-');
  expect(bytes).toEqual(await readFile('public/CV_Bartlomiej_Pieper.pdf'));
});

test('desktop navigation reaches headings below the sticky header', async ({ page }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Page sections' });
  for (const id of sections) {
    await nav.locator(`a[href="#${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    const heading = page.locator(`#${id}`).getByRole('heading', { level: 2 });
    await expect(heading).toBeInViewport();
    await expect.poll(async () => {
      const box = await heading.boundingBox();
      const header = await page.locator('header').boundingBox();
      return !!box && !!header && box.y >= header.y + header.height;
    }).toBe(true);
  }
});
