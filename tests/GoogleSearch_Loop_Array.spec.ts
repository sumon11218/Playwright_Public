import { test, expect } from '@playwright/test';


//setup my test function which is similar to using @Test annotation in testNG
test('Capture Google Search Result', async ({ page }) => {

    //declare the arraylist
    let cars = ["Honda","Nissan"]
    cars.push("BMW")
    cars.push("Lexus")

    for(let i = 0; i < cars.length; i++){
        //navigate to google home
        await page.goto('https://www.google.com')

        //to wait few seconds
        //await page.waitForTimeout(2000);
    
        //entering bmw to your search field
        await page.locator("xpath=//*[@name='q']").fill(cars[i],{timeout: 10000})

        //click on search button
        await page.locator("xpath=//*[@name='btnK']").nth(0).click({timeout: 10000})

        //capture the text and print out the number
        let result = await page.locator("xpath=//*[@id='result-stat']").textContent({timeout: 3000})
        //to print we use console.log
        console.log("Result: " + result)
        //split the number
        let arrayResult = result.split(' ');
        console.log("Search Number for " + cars[i] + " is " + arrayResult[1])
    }//end of loop
})//end of test