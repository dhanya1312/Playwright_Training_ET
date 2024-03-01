import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Login.aspx?ReturnUrl=%2fsamples%2fTestComplete11%2fWebOrders%2fDefault.aspx');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('Tester');
  await page.getByLabel('Username').press('Tab');



  await page.getByLabel('Password').fill('test');
  await page.getByLabel('Password').press('Tab');
  await page.getByLabel('Password').press('Enter');
 await expect(page).toHaveURL('http://secure.smartbearsoftware.com/samples/TestComplete11/WebOrders/Default.aspx');
});