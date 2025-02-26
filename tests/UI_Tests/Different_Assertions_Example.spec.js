// @ts-check
// example.spec.js
import { test, expect } from '@playwright/test';
test('my test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
// Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL

// Expect an attribute "to be strictly equal" to the value.
  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');
// Expect an element "to be visible".
  await expect(page.locator('text=Star').first()).toBeVisible();
  await page.click('text=Get Started');
  // Expect some text to be visible on the page.
  await expect(page.locator('text=Installation').first()).toBeVisible();
});