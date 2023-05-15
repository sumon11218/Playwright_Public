import { test, expect } from '@playwright/test';


//setup my test function which is similar to using @Test annotation in testNG
test('View upcoming Transformers movie', async ({ page }) => {

    let timeLimit = 10000

    //navigate to transformers home page
    await page.goto('https://transformers.hasbro.com/en-us')

   //click on movies
   await page.locator('//*[@aria-label="link to Movies  page"]').click({timeout: timeLimit})

   //scroll to movies
   await page.mouse.wheel(0,500)
   await page.waitForTimeout(500)
   await page.mouse.wheel(0,500)
   await page.waitForTimeout(500)
   await page.mouse.wheel(0,500)
   await page.waitForTimeout(500)
   await page.mouse.wheel(0,500)
   await page.waitForTimeout(500)
   await page.mouse.wheel(0,500)
   await page.waitForTimeout(500)
   await page.mouse.wheel(0,500)
   await page.waitForTimeout(500)

   //click on back to top arrow
   await page.locator('//*[@id="back-to-top"]').click({timeout: timeLimit})

   //click on videos
   await page.locator('//*[@aria-label="link to Videos page"]').click({timeout: timeLimit})

   
   //click on watch video
   await page.locator('//*[@class="videos_top_hero_cta"]').click({timeout: timeLimit})

   

   //click on play bumble bee music
   await page.mouse.wheel(0,900)
   await page.locator('//*[contains(text(),"Bumblebee") and contains(text(),"Music Mix")]').nth(1).click({timeout: timeLimit})
   await page.waitForTimeout(7000)
   await page.locator('//div[@id="TRFBB_modeNormal" and @data-mode="normal"]').click({timeout: 50000})

   
   await page.waitForTimeout(20000)

})//end of test

