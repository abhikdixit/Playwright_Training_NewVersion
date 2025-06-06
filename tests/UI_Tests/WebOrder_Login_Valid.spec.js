import { test, expect } from '@playwright/test';

test('OrangeHRM Login Functional', async ({ page }) => {
  //test.setTimeout(40000);
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx');
  //await page.getByLabel('Username:').click();
  //await page.getByLabel('Username:').fill('Tester');
  await page.locator("//input[@id='ctl00_MainContent_username']").fill('Tester');
  //driver.findelement(By.id("name")).sendKeys("")
  //await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('test');
  //await page.pause()
  await page.getByRole('button', { name: ' Login ' }).click();
  await expect(page.getByRole('link', { name: 'Logout' })).toHaveText("Logout")
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL("http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx",{timeout: 8000})
  await expect(page.getByRole('button', { name: ' Login ' })).toBeVisible()
  //await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
});