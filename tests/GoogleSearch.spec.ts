import { test, expect } from '@playwright/test';


//setup my test function which is similar to using @Test annotation in testNG
test('Capture Google Search Result', async ({ page }) => {

    //navigate to google home
    await page.goto('https://www.google.com')

    //to wait few seconds
    //await page.waitForTimeout(2000);
   
   //entering bmw to your search field
   await page.locator("xpath=//*[@name='q']").fill('BMW',{timeout: 10000})

   //click on search button
   await page.locator("xpath=//*[@name='btnK']").nth(0).click({timeout: 10000})

   //capture the text and print out the number
   let result = await page.locator("xpath=//*[@id='result-stat']").textContent({timeout: 10000})
   //to print we use console.log
   console.log("Result: " + result)
   //split the number
   let arrayResult = result.split(' ');
   console.log("Search Number: " + arrayResult[1])


})//end of test

