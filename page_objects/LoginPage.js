/*

//import { Locator, Page } from '@playwright/test'
const { expect, Locator, Page } = require('@playwright/test');
exports.LoginPage= class LoginPage {
   page= Page
   Login= Locator
   Password= Locator
   KeepMeSignIn= Locator
   signInButton= Locator
 
  constructor(page= Page) {
    this.page = page
    this.Login = page.locator('#user_login')
    this.Password = page.locator('#user_password')
    this.KeepMeSignIn = page.locator('#user_remember_me')
    this.signInButton = page.locator("#submit")
  }
 
  async visit() {
    await this.page.goto('http://zero.webappsecurity.com/login.html')
  }
 
  async clickOnLogin() {
    await this.Login.click();
    await this.Login.fill('username');

    /*await page.getByLabel('Email:').clear()
    await page.getByLabel('Email:').fill(record.uname);

    await page.locator('input[name="Email"]').clear();
      await page.fill('input[name="Email"]', record.uname);
      await page.locator('input[name="Password"]').clear();
      // Fill input[name="ctl00\$MainContent\$password"]
      await page.fill('input[name="Password"]', record.pass);
 
    
 }

 async clickOnLogin() {
    await this.Password.click();
    await this.Password.fill('password');

 }
 
 
  async clickOnKeepMeSignIn() {
    await this.KeepMeSignIn.click()
  }
 
  async signInButton() {
    //await this.searchBox.type(phrase)
    await this.page.keyboard.press('Enter')
  }
}
 

*/



//import { expect, Locator, Page } from '@playwright/test'
import { expect, Locator, Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage';
 
export class LoginPage extends AbstractPage {
//exports.LoginPage = class LoginPage {
  // Define selectors
  // readonly page: Page
  usernameInput = Locator
  passwordInput = Locator
  submitButton = Locator
  errorMessage = Locator
 
  // Init selectors using constructor
  constructor(page = Page) {
    // this.page = page
    super(page)
    this.usernameInput = page.locator('#user_login')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.errorMessage = page.locator('.alert-error')
  }
 
  // Define login page methods
  async login(username = string, password = string) {
    await this.usernameInput.type(username)
    await this.passwordInput.type(password)
    await this.submitButton.click()
   
 
  }
 
  async assertErrorMessage() {
    await expect(this.errorMessage).toContainText('Login and/or password are wrong')
  }
  async snapshotLoginForm() {
    await expect(this.loginForm.screenshot()).toMatchSnapshot('login-form.png')
  }
 
  async snapshotErrorMessage() {
    await expect(this.errorMessage.screenshot()).toMatchSnapshot('login-error.png')
  }
 
 
}