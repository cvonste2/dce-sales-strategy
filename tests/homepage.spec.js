// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage (index.html)', () => {
  
  test('page loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Germanedge/);
  });

  test('navigation bar is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav, header').first()).toBeVisible();
  });

  test('main heading is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=DECISION CENTRIC ENTERPRISE')).toBeVisible();
  });

  test('sign in button is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Sign In')).toBeVisible();
  });

  test('login modal opens on sign in click', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    // Modal uses display:flex when visible
    await expect(page.locator('#login-modal >> text=Continue with Google')).toBeVisible();
  });

  test('login modal has social login options', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    await expect(page.locator('text=Continue with Google')).toBeVisible();
  });

  test('login modal can be closed', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    await expect(page.locator('text=Continue with Google')).toBeVisible();
    
    // Click Cancel button to close modal
    await page.click('text=Cancel');
    // Modal should be hidden
    await expect(page.locator('text=SIGN IN TO DCE HUB')).not.toBeVisible();
  });

  test('learning hub link works', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Learning Hub');
    await expect(page).toHaveURL(/learning\.html/);
  });

  test('view execution plan button exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=View Execution Plan')).toBeVisible();
  });

});
