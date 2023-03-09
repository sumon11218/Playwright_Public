import { test, expect } from '@playwright/test';


//setup my test function which is similar to using @Test annotation in testNG
test('Mlcalc test', async ({ page }) => {

    //navigate to mlcalc home
    await page.goto('https://www.mlcalc.com')

    //use mouse wheel to scroll near show advance options 
    await page.mouse.wheel(0, 200);

    await page.waitForTimeout(1500)


    //click on show advance option
    await page.locator('xpath=//*[text()="Show advanced options"]').nth(0).click({timeout: 5000})


    //select a month from the month dropdown
    await page.locator('xpath=//*[@name="sm"]').nth(0).selectOption('Apr')

    await page.waitForTimeout(3000)



})//end of test