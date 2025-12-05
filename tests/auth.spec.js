// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Authentication UI', () => {

  test('auth container exists on homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.auth-container')).toBeVisible();
  });

  test('auth container exists on learning hub', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('.auth-container')).toBeVisible();
  });

  test('sign in button shows when logged out', async ({ page }) => {
    await page.goto('/');
    // Wait for auth to initialize
    await page.waitForTimeout(1000);
    await expect(page.locator('text=Sign In')).toBeVisible();
  });

  test('login modal contains Google option', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    await expect(page.locator('text=Continue with Google')).toBeVisible();
  });

  test('login modal contains Microsoft option', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    await expect(page.locator('text=Continue with Microsoft')).toBeVisible();
  });

  test('login modal contains Apple option', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    await expect(page.locator('text=Continue with Apple')).toBeVisible();
  });

  test('login modal styling is correct', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    
    // Check modal has proper structure and all login options
    await expect(page.locator('text=SIGN IN TO DCE HUB')).toBeVisible();
    await expect(page.locator('text=Continue with Google')).toBeVisible();
    await expect(page.locator('text=Cancel')).toBeVisible();
  });

});
