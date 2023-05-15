import { test, expect, chromium, Page } from '@playwright/test';
import {arrayValue} from './DataDrivenJsonFiles/grubhubCombined'


test.describe.configure({ mode: 'parallel' });
var combined = arrayValue
for(let suite of combined){
    for (let tests of suite.tests){
        test(`For this test ${tests.name}`, async ({page}) => {
             /** values from json file(s) **/
             let zipcode = tests.userParameters.zipcodValue
             let foodSearch = tests.userParameters.foodSearch

             //set explicit time limit
             let timeLimit = 10000

             //navigate to grubhub
             let URL = 'https://www.grubhub.com'
             await page.goto(URL)

             //type zip code
             await page.locator("//*[@name='searchTerm']").fill(zipcode,{timeout: timeLimit })

            //click on search nearby
            await page.locator('//*[@data-testid="start-order-search-btn"]').click({timeout: timeLimit })

            //search for food and hit submit on key press
            await page.locator("//*[@id='search-autocomplete-input']").fill(foodSearch,{timeout: timeLimit })
            await page.keyboard.press('Enter')

            //click on pickup
            await page.locator('//*[@value="pickup"]').click({timeout: timeLimit })

            //click on the first restaurant by image
            await page.locator('//*[@data-testid="restaurant-image"]').nth(0).click({timeout: timeLimit })

           //print out the all menu containers
           let menuContainer = await page.locator('//*[@data-testid="menu-sections-container"]').textContent({timeout: timeLimit })
           console.log("Full Menu: " + menuContainer)
            
        })//end of test
    }//end of sub loop
}//end of main loop

