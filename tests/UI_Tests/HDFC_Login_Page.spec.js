const { test, expect } = require('@playwright/test');
 
test.only('test', async ({ page }) => {
    await page.goto('https://netbanking.hdfcbank.com/netbanking/');
    await page.frameLocator('frame[name="login_page"]').getByRole('textbox').click();
    await page.frameLocator('frame[name="login_page"]').getByRole('textbox').fill('1000');
    await page.frameLocator('frame[name="login_page"]').getByRole('link', { name: 'CONTINUE' }).click();
    await page.locator('#keyboard').click();
    await page.getByText('Password/IPIN').click();
  });