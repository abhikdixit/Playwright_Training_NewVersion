import { readFileSync } from 'fs';
import { test, expect } from '@playwright/test';

// Reads the JSON file and saves it  
let objects = readFileSync('./tests/TestData/WebOrder_Login_All_TCs.json')
const users = JSON.parse(objects);
for (const record of users) {
  test(`@regression WebOrder Login: ${record.test_case}`, async ({ page }) => {

    // for (const record of users) 
    // {
    //console.log(record.name, record.password, record.exp_result);
    await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
    await page.getByLabel('Username:').click();
    await page.getByLabel('Username:').fill(record.uname);
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill(record.password);
    await page.getByRole('button', { name: 'Login' }).click();
    //await page.pause()
    if ('Logout' == record.exp_res) {

      await expect(page.locator("a[id='ctl00_logout']")).toContainText(record.exp_res)
      await page.click('text=Logout');
      await page.waitForLoadState(); // The promise resolves after 'load' event.

    } 
    else
      await expect(page.locator("span[id='ctl00_MainContent_status']")).toContainText(record.exp_res)

    

    // }
  })
};