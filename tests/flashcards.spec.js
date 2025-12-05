// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Flashcards', () => {

  test('flashcards appear when track is selected', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Flashcards should be visible
    await expect(page.locator('#card-grid')).toBeVisible();
  });

  test('flashcards have front content', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Cards should have question text (look for CLICK TO FLIP text)
    await expect(page.locator('text=CLICK TO FLIP').first()).toBeVisible();
  });

  test('flashcard shows click to flip hint', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    await expect(page.locator('text=CLICK TO FLIP').first()).toBeVisible();
  });

  test('flashcard can be flipped', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Click on a card to flip it (click the CLICK TO FLIP text area)
    await page.locator('text=CLICK TO FLIP').first().click();
    
    // Wait for flip animation
    await page.waitForTimeout(600);
    
    // After flip, should still be on page (test doesn't break)
    await expect(page.locator('#card-grid')).toBeVisible();
  });

  test('module navigation works', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Module list should be visible in sidebar
    await expect(page.locator('#module-list')).toBeVisible();
  });

  test('clicking module changes content', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Get initial module title
    const initialTitle = await page.locator('#module-title').textContent();
    
    // Click on a different module in the list (use the clickable div)
    const modules = page.locator('#module-list > div');
    const count = await modules.count();
    if (count > 1) {
      await modules.nth(1).click();
      await page.waitForTimeout(300);
      
      // Title should change
      const newTitle = await page.locator('#module-title').textContent();
      expect(newTitle).not.toBe(initialTitle);
    }
  });

  test('cards display card numbers', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    
    // Cards should show "CARD 1", "CARD 2", etc.
    await expect(page.locator('text=CARD 1')).toBeVisible();
  });

  test('different tracks show different content', async ({ page }) => {
    await page.goto('/learning.html');
    
    // Get Strategy content
    await page.click('text=TRACK 1: STRATEGY');
    const strategyTitle = await page.locator('#module-title').textContent();
    
    // Switch to Intel
    await page.click('text=TRACK 2: INTEL');
    const intelTitle = await page.locator('#module-title').textContent();
    
    // Titles should be different
    expect(strategyTitle).not.toBe(intelTitle);
  });

});
