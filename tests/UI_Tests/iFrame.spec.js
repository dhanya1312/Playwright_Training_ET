const { test, expect } = require('@playwright/test');


[
    {
      "test_case": "TC1",
      "name": "Tester",
      "password": "test"
    },
    {
        "test_case": "TC2",
        "name": "Tester",
        "password": "test"
      },
      {
        "test_case": "TC3",
        "name": "Tester",
        "password": "test"
      },
      {
        "test_case": "TC3",
        "name": "Tester",
        "password": "test"
      }
  ]



test('test', async ({ page }) => {

  // Go to https://netbanking.hdfcbank.com/netbanking/
  await page.goto('https://netbanking.hdfcbank.com/netbanking/');
  //await page.goto('https://netbanking.hdfcbank.com/netbanking/');
  // Click input[name="fldLoginUserId"]
  await page.frame({name: 'login_page'}).click('input[name="fldLoginUserId"]');

  // Fill input[name="fldLoginUserId"]
  await page.frame({name: 'login_page'}).fill('input[name="fldLoginUserId"]', '1000');

  // Click text=CONTINUE
  await page.frame({name: 'login_page'}).click('text=CONTINUE');

  
  // Click a:has-text("LOGIN")
  const frame1 = await page.frame({name: 'login_page'});
  const Login = await frame1.$('a:has-text("LOGIN")');
  console.log(await Login.innerText());
  await expect(page).toHaveURL('https://netbanking.hdfcbank.com/netbanking/');
});