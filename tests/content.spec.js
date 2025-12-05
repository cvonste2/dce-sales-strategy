// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Homepage Content', () => {

  test('hero section displays correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=DECISION CENTRIC ENTERPRISE')).toBeVisible();
  });

  test('internal strategy version is shown', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=INTERNAL STRATEGY')).toBeVisible();
  });

  test('view execution plan button exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=View Execution Plan')).toBeVisible();
  });

  test('analyze market button exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Analyze Market')).toBeVisible();
  });

  test('keynote section exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=KEYNOTE').first()).toBeVisible();
  });

  test('the strategy button exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=The Strategy').first()).toBeVisible();
  });

});

test.describe('Learning Hub Content', () => {

  test('welcome message displays on load', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=Welcome to the Academy')).toBeVisible();
    await expect(page.locator('text=Choose your learning path below')).toBeVisible();
  });

  test('all four learning paths are displayed', async ({ page }) => {
    await page.goto('/learning.html');
    
    await expect(page.locator('.dash-title:has-text("The Rookie")')).toBeVisible();
    await expect(page.locator('.dash-title:has-text("The Deal Closer")')).toBeVisible();
    await expect(page.locator('.dash-title:has-text("The Futurist")')).toBeVisible();
    await expect(page.locator('.dash-title:has-text("The Expert")')).toBeVisible();
  });

  test('learning path descriptions exist', async ({ page }) => {
    await page.goto('/learning.html');
    
    await expect(page.locator('text=Start here to understand')).toBeVisible();
  });

  test('back to strategy button exists', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=Back to Strategy')).toBeVisible();
  });

  test('digital factory knowledge hub title is shown', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=DIGITAL FACTORY KNOWLEDGE HUB')).toBeVisible();
  });

  test('pro tip section exists', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=PRO TIP')).toBeVisible();
  });

});

test.describe('Track Content', () => {

  test('strategy track has modules', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Module list should be visible and content area should show module
    await expect(page.locator('#module-list')).toBeVisible();
    await expect(page.locator('#module-title')).toBeVisible();
  });

  test('intel track has modules', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 2: INTEL');
    
    await expect(page.locator('#module-list')).toBeVisible();
  });

  test('ai adoption track has modules', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 3: AI ADOPTION');
    
    await expect(page.locator('#module-list')).toBeVisible();
  });

  test('competition track has modules', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 4: COMPETITION');
    
    await expect(page.locator('#module-list')).toBeVisible();
  });

});
