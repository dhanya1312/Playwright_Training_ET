
//My_First_Login.spec.js
const {test} = require('@playwright/test')

test('My First Playwright Testcase',async ({browser})=>
{
const context =await browser.newContext();
const page=await context.newPage();
await page.goto("https://www.google.com/");

});

test('To Open CTM login page', async({browser})=>
{

    

});