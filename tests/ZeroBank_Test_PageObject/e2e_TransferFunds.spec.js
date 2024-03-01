const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../page_objects/LoginPage')
const { HomePage } = require('../../page_objects/HomePage')
const { Navbar } = require('../../page_objects/components/Navbar')
const { TransferFundPage } = require('../../page_objects/TransferFundPage')
 
test.describe('Transfer Funds and Make Payment', () => {
  let homePage= HomePage
  let loginPage= LoginPage
  let navbar= Navbar
  let transferFundPage = TransferFundPage
 
  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page)
    loginPage = new LoginPage(page)
    navbar = new Navbar(page)
    transferFundPage = new transferFundPage(page)
 
    await homePage.visit()
    await homePage.clickOnSignIn()
    await loginPage.login('username', 'password')
    //This is to bypass SSL error
     await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html')
  })
 
  test('Transfer Funds', async ({ page }) => {
    //await homePage.clickOnOnlineBankingLink()
    await navbar.clickOnTab('Transfer Funds')
    await transferFundPage.makePayment()
    await transferFundPage.assertSuccessMessage()
   
  })
})