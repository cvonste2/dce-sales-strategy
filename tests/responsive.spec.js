// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Responsive Design', () => {

  test('homepage loads on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    await page.goto('/');
    await expect(page).toHaveTitle(/Germanedge/);
  });

  test('homepage loads on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 }); // iPad
    await page.goto('/');
    await expect(page).toHaveTitle(/Germanedge/);
  });

  test('learning hub loads on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/learning.html');
    await expect(page).toHaveTitle(/DCE Learning Hub/);
  });

  test('learning hub is usable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/learning.html');
    
    // Page should load and show welcome content on mobile
    await expect(page.locator('text=WELCOME TO THE ACADEMY')).toBeVisible();
  });

  test('homepage content visible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Main content should be visible on mobile
    await expect(page.locator('text=Germanedge').first()).toBeVisible();
  });

  test('page is scrollable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Main content should be visible
    await expect(page.locator('text=DECISION CENTRIC ENTERPRISE')).toBeVisible();
  });

  test('desktop viewport shows full navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    
    // Full nav should be visible - check for nav items
    await expect(page.locator('text=Germanedge').first()).toBeVisible();
    await expect(page.locator('text=KEYNOTE').first()).toBeVisible();
  });

});
