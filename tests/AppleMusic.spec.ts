import { test, expect, chromium } from '@playwright/test';


//setup my test function which is similar to using @Test annotation in testNG
test('Choose a music on apple music website', async ({page}) => {

    let timeLimit = 6000

    //navigate to apple music site
    await page.goto('https://music.apple.com/us/')

   //click on music icon
   await page.locator("//a[contains(@aria-label,'Apple')]").click({timeout: timeLimit})

   await page.waitForTimeout(1500)


   //type bones music on search and hit enter
   await page.locator('//*[@placeholder="Search"]').fill('bones',{timeout: timeLimit})
   await page.keyboard.press('Enter')

   //click on bones music icon
   await page.locator('//*[@data-testid="top-search-result"]').nth(1).click({timeout: timeLimit})

   //click on preview
   await page.locator("//*[@class='primary-actions svelte-d0m3dm']").hover({timeout: timeLimit})
   await page.keyboard.press('Enter')

   await page.waitForTimeout(7000)

})//end of test

