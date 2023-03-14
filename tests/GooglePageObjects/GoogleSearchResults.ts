import { expect, Locator, Page } from '@playwright/test';

export class GoogleSearchResults {
  readonly page: Page;
  readonly searchText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchText = page.locator('xpath=//*[@id="result-stat"]');
  }

  async getSearchNumber(keyValue: string) {
    let result = await this.searchText.textContent({timeout: 2500})
    let arrayResult = result.split(' ')
    console.log("The search number for " + keyValue + " is " + arrayResult[1])
  }//end of searchForAKeywordAndSubmit

}//end of class