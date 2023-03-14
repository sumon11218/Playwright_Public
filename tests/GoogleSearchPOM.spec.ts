import { test, expect, chromium, Page } from '@playwright/test';
import { GoogleHome } from './GooglePageObjects/GoogleHome'
import { GoogleSearchResults } from './GooglePageObjects/GoogleSearchResults'
import {arrayValue} from './DataDrivenJsonFiles/combined'


test.describe.configure({ mode: 'parallel' });
var combined = arrayValue
for(let suite of combined){
    for (let tests of suite.tests){
        test(`For this test ${tests.name}`, async ({page}) => {
            /** declare the page object class instances below **/
            const googleHome = new GoogleHome(page);
            const googleSearchResults = new GoogleSearchResults(page);

             /** values from json file(s) **/
             let userValue = tests.userParameters.keyValue

             let URL = 'https://www.google.com'
             await googleHome.searchForAKeywordAndSubmit(URL,userValue)
             /*
                passing the user value on getSearchNumber so when it prints the number, it will also display which value 
                it's printing the number for
            */
             await googleSearchResults.getSearchNumber(userValue)
             //testing one three
        })//end of test
    }//end of sub loop
}//end of main loop

