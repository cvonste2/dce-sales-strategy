// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Learning Hub (learning.html)', () => {

  test('page loads successfully', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page).toHaveTitle(/DCE Learning Hub/);
  });

  test('welcome message is visible', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=Welcome to the Academy')).toBeVisible();
  });

  test('track tabs are visible', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=TRACK 1: STRATEGY')).toBeVisible();
    await expect(page.locator('text=TRACK 2: INTEL')).toBeVisible();
    await expect(page.locator('text=TRACK 3: AI ADOPTION')).toBeVisible();
    await expect(page.locator('text=TRACK 4: COMPETITION')).toBeVisible();
  });

  test('clicking strategy track loads content', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Should show module content
    await expect(page.locator('#module-title')).not.toHaveText('Welcome to the Academy');
  });

  test('clicking intel track loads content', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 2: INTEL');
    
    await expect(page.locator('#module-title')).not.toHaveText('Welcome to the Academy');
  });

  test('take exam button appears when track selected', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    await expect(page.locator('#quiz-btn')).toBeVisible();
  });

  test('quiz modal opens on take exam click', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    
    await expect(page.locator('#quiz-modal')).toBeVisible();
  });

  test('quiz modal has start button', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    
    await expect(page.locator('text=Start Quiz')).toBeVisible();
  });

  test('quiz can be started', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    await page.click('text=Start Quiz');
    
    // Should show question
    await expect(page.locator('#quiz-questions')).toBeVisible();
    await expect(page.locator('#question-text')).toBeVisible();
  });

  test('quiz modal can be closed', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    
    await expect(page.locator('#quiz-modal')).toBeVisible();
    await page.click('#quiz-modal button:has-text("✕")');
    await expect(page.locator('#quiz-modal')).not.toBeVisible();
  });

  test('sidebar quick paths are visible', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=QUICK PATHS')).toBeVisible();
    await expect(page.locator('.sidebar-card-text >> text=The Rookie')).toBeVisible();
  });

  test('tag cloud is visible', async ({ page }) => {
    await page.goto('/learning.html');
    await expect(page.locator('text=EXPLORE BY TOPIC')).toBeVisible();
  });

  test('flashcards are displayed when track selected', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Should show flashcards
    await expect(page.locator('.card-inner, [class*="card"]').first()).toBeVisible();
  });

});
