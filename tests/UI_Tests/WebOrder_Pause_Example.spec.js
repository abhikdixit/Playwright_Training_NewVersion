import { test, expect } from '@playwright/test';

test('WebOrder Login Test', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx');
  await page.getByLabel('Username:').fill('Tester');
  await page.getByLabel('Password1:').fill('test');
  //await page.pause()
  await page.getByRole('button', { name: 'Login' }).click();
  //await page.pause()
  //await expect(page.locator("//body[1]/form[1]/table[1]")).toHaveAttribute('color','#3C3C3C')
  await expect(page.locator('#ctl00_logout')).toContainText('Logout');
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page.url().includes('Login.aspx')).toBeTruthy();
  await expect(page.getByLabel('Username:')).toBeVisible();
  await expect(page.getByLabel('Password:')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});