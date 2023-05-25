import { test, expect, chromium } from '@playwright/test';


//setup my test function which is similar to using @Test annotation in testNG
test('Explore Xbox purchasing on Microsoft website', async ({page}) => {

    let timeLimit = 6000

    //navigate to ms website
    await page.goto('https://www.microsoft.com/en-us/')

    //click on All Microsoft
    await page.locator("//*[text()='All Microsoft']").click({timeout: timeLimit})

    //click on shop xbox
    await page.waitForTimeout(600)
    await page.locator("//*[text()='Shop Xbox']").click({timeout: timeLimit})

    //click on x to close dialog window
    await page.locator('//button[@aria-label="Close dialog window"]').click({timeout: timeLimit})

    //click on consoles
    await page.locator('//*[@aria-label="Xbox consoles."]').click({timeout: timeLimit})

    await page.waitForTimeout(800)

    //scroll down a bit
    await page.mouse.wheel(0,350)

    await page.waitForTimeout(800)

    //click on shop xbox series
    await page.locator('//*[@aria-label="Shop Xbox Series X console."]').click({timeout: timeLimit})

    //click on shop xbox series x
    await page.locator('//*[@aria-label="Xbox Series X"]').click({timeout: timeLimit})

    //click on build your device
    await page.locator('//*[text()="Build your device"]').nth(0).click({timeout: timeLimit})

    //click on none
    await page.locator('//*[@aria-labelledby="None-0-0-0"]').click({timeout: timeLimit})

    //click on next
    await page.locator("//*[text()='Next']").nth(1).click({timeout: timeLimit})

    //click on don't want any plan
    await page.locator('//*[@aria-labelledby="None-0-1-0"]').click({timeout: timeLimit})

    //click on next again
    await page.locator("//*[text()='Next']").nth(1).click({timeout: timeLimit})

    await page.waitForTimeout(4500)

})//end of test

