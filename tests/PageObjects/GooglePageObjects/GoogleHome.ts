import { expect, Locator, Page } from '@playwright/test';

export class GoogleHome {
  readonly page: Page;
  readonly searchField: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchField = page.locator('xpath=//*[@name="q"]');
    this.searchButton = page.locator('xpath=//*[@name="btnK"]');
  }

  async searchForAKeywordAndSubmit(url: string, userValue: string) {
    await this.page.goto(url);
    await this.searchField.fill(userValue,{timeout: 10000})
    await this.searchButton.nth(0).click({timeout: 10000})
  }//end of searchForAKeywordAndSubmit

}//end of class