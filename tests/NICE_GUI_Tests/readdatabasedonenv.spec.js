// Include playwright module
const { test, expect } = require('@playwright/test');
import { qaTestData } from '../TestData/qa/google.json';
import { stageTestData } from '../testData/stage/google.json';

let testData = null;

test.beforeAll('Running before all tests', () => {
    if (process.env.ENV == 'qa') {
        testData = qaTestData;
    } else {
        testData = stageTestData;
    }
})

// Write a test
test('Read Test data based on different env in playwright ', async ({ page }) => {
    // Go to URL
    await page.goto(process.env.URL);

    // search with keywords
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill(testData.skill1);
    await page.locator('#APjFqb').press('Enter');
    await page.waitForTimeout(5000);
})









