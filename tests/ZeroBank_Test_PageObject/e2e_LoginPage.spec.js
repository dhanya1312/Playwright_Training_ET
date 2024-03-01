//import { test, expect } from '@playwright/test'
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../page_objects/LoginPage')
const { HomePage } = require('../../page_objects/HomePage')
 
test.describe('Login / Logout Flow', () => {
  let loginPage= LoginPage
  let homePage= HomePage
 
  // Before Hook
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
 
    await homePage.visit()
  })
 
  // Negative Scenario
  test('Negative Scenario for login', async () => {
    await homePage.clickOnSignIn()
    await loginPage.login('invalid username', 'invalid password')
    await loginPage.wait(3000)
    await loginPage.assertErrorMessage()
 
  })
 
  // Positive Scenario + Logout
  test('Positive Scenario for login + logout', async ({ page }) => {
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')
    //This is to bypass SSL error
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
   
   //not a right way as it overrides the concept of POM
   //We need to get data from Page_object/components/Navbar and navigate to Account Summary Tab   
    const accountSummaryTab = await page.locator('#account_summary_tab')
    await expect(accountSummaryTab).toBeVisible()
 
    await page.goto('http://zero.webappsecurity.com/logout.html')
    await expect(page).toHaveURL('http://zero.webappsecurity.com/index.html')
  })
})
 