// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Navigation', () => {

  test('can navigate from homepage to learning hub', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Learning Hub');
    await expect(page).toHaveURL(/learning\.html/);
  });

  test('can navigate from learning hub to homepage', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=Back to Strategy');
    await expect(page).toHaveURL(/index\.html|\/$/);
  });

  test('germanedge logo is visible on homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Germanedge').first()).toBeVisible();
  });

  test('germanedge logo is visible on learning hub', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=Germanedge').first()).toBeVisible();
  });

  test('navigation links are clickable', async ({ page }) => {
    await page.goto('/');
    
    // Check various nav items exist
    const navItems = ['DCE SALES HUB', 'LEARNING HUB', 'MARKET CONTEXT', 'MINDSET', 'KEYNOTE'];
    for (const item of navItems) {
      await expect(page.locator(`text=${item}`).first()).toBeVisible();
    }
  });

  test('keynote button exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=KEYNOTE').first()).toBeVisible();
  });

  test('the strategy button exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=The Strategy').first()).toBeVisible();
  });

});
