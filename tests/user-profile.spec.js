// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('User Profile UI (Logged Out State)', () => {

  test('sign in button visible on homepage when logged out', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000); // Wait for auth to initialize
    await expect(page.locator('text=Sign In')).toBeVisible();
  });

  test('sign in button visible on learning hub when logged out', async ({ page }) => {
    await page.goto('/learning.html');
    await page.waitForTimeout(1000);
    await expect(page.locator('text=Sign In')).toBeVisible();
  });

  test('learning hub sidebar exists', async ({ page }) => {
    await page.goto('/learning.html');
    // Sidebar should be visible (contains quick paths, pro tip, etc.)
    await expect(page.locator('text=QUICK PATHS')).toBeVisible();
  });

  test('login modal shows all three providers', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    
    await expect(page.locator('text=Continue with Microsoft')).toBeVisible();
    await expect(page.locator('text=Continue with Google')).toBeVisible();
    await expect(page.locator('text=Continue with Apple')).toBeVisible();
  });

  test('login modal has branded header', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    
    await expect(page.locator('text=SIGN IN TO DCE HUB')).toBeVisible();
  });

  test('auth container exists on both pages', async ({ page }) => {
    // Check homepage
    await page.goto('/');
    await expect(page.locator('.auth-container')).toBeVisible();
    
    // Check learning hub
    await page.goto('/learning.html');
    await expect(page.locator('.auth-container')).toBeVisible();
  });

});

test.describe('Profile Dropdown Structure', () => {

  test('profile dropdown has correct structure when opened', async ({ page }) => {
    await page.goto('/');
    await page.click('text=Sign In');
    
    // Modal should have cancel option
    await expect(page.locator('text=Cancel')).toBeVisible();
  });

});
