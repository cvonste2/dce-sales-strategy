// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Quiz Flow', () => {

  test('can start and complete quiz for Strategy track', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    
    // Start quiz
    await expect(page.locator('text=Start Quiz')).toBeVisible();
    await page.click('text=Start Quiz');
    
    // Should show first question
    await expect(page.locator('#quiz-questions')).toBeVisible();
    await expect(page.locator('#question-text')).toBeVisible();
    
    // Answer 3 questions (click first answer each time)
    for (let i = 0; i < 3; i++) {
      await page.waitForSelector('#answers-container button', { timeout: 3000 });
      await page.locator('#answers-container button').first().click();
      await page.waitForTimeout(500); // Wait for next question
    }
    
    // Should show result - either "Certified!" or "NOT QUITE..."
    await page.waitForTimeout(500);
    const certified = await page.locator('text=Certified!').isVisible();
    const notQuite = await page.locator('text=NOT QUITE').isVisible();
    expect(certified || notQuite).toBe(true);
  });

  test('quiz shows question counter', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    await page.click('text=Start Quiz');
    
    // Check question counter
    await expect(page.locator('text=Question 1 of')).toBeVisible();
  });

  test('quiz progresses through questions', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    await page.click('text=Start Quiz');
    
    // Answer first question
    await expect(page.locator('text=Question 1 of')).toBeVisible();
    await page.locator('#answers-container button').first().click();
    
    // Should progress to question 2
    await expect(page.locator('text=Question 2 of')).toBeVisible();
  });

  test('quiz shows result after completion', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    await page.click('text=Start Quiz');
    
    // Answer all questions
    for (let i = 0; i < 3; i++) {
      await page.waitForSelector('#answers-container button', { timeout: 3000 });
      await page.locator('#answers-container button').first().click();
      await page.waitForTimeout(500);
    }
    
    // Should show either success or fail result text
    await page.waitForTimeout(500);
    const certified = await page.locator('text=Certified!').isVisible();
    const notQuite = await page.locator('text=NOT QUITE').isVisible();
    expect(certified || notQuite).toBe(true);
  });

  test('quiz modal can be closed during quiz', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 1: STRATEGY');
    await page.click('#quiz-btn');
    await page.click('text=Start Quiz');
    
    // Close modal using the X button (absolute positioned top-right)
    await page.click('#quiz-modal button.absolute');
    await expect(page.locator('#quiz-modal')).toHaveClass(/hidden/);
  });

  test('Intel track quiz works', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 2: INTEL');
    await page.click('#quiz-btn');
    
    await expect(page.locator('text=Start Quiz')).toBeVisible();
    await page.click('text=Start Quiz');
    await expect(page.locator('#question-text')).toBeVisible();
  });

  test('AI Adoption track quiz works', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 3: AI ADOPTION');
    await page.click('#quiz-btn');
    
    await expect(page.locator('text=Start Quiz')).toBeVisible();
    await page.click('text=Start Quiz');
    await expect(page.locator('#question-text')).toBeVisible();
  });

  test('Competition track quiz works', async ({ page }) => {
    await page.goto('/learning.html');
    await page.click('text=TRACK 4: COMPETITION');
    await page.click('#quiz-btn');
    
    await expect(page.locator('text=Start Quiz')).toBeVisible();
    await page.click('text=Start Quiz');
    await expect(page.locator('#question-text')).toBeVisible();
  });

});
