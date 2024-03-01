const fs = require("fs");
const { test, expect } = require('@playwright/test');
 
test.describe.only('Read data from JSON file', () =>
    {
        test('Read URL and Locators from JSON file', async ({ page }) =>
        {
        // Reads the CSV file and saves it  
        let objects = fs.readFileSync('./tests/TestData/Object.json')
        const objectlist = JSON.parse(objects);
        console.log(objectlist);
 
            await page.goto(objectlist.TestUrl);
            await page.click(objectlist.Locators.BankManagerLoginButton)
            await page.waitForTimeout(1000)
            await page.click(objectlist.Locators.AddCustomerButon)
            await page.fill(objectlist.Locators.CustomerFirstName,'Test1')
            await page.fill(objectlist.Locators.CustomerLastName,'Palywright')
            await page.fill(objectlist.Locators.Pincode,'400708')
            await page.click(objectlist.Locators.AddCustomerButonDown)
            await page.waitForTimeout(1000)
            await page.click(objectlist.Locators.CustomersButton)
            await page.waitForTimeout(1000)
            await page.fill(objectlist.Locators.SearchCustomer,'Test1')
            await page.waitForTimeout(8000)
    })
})