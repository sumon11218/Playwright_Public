import { expect, Locator, Page, request } from '@playwright/test';

export class NoteTakerAPI {
    readonly page: Page;
  
    constructor(page: Page) {
      this.page = page;
    }

    async createNewNote(noteTitle: any, noteText: any): Promise<JSON> {
      const context = await request.newContext();
      const response = await context.post('https://fk-note-taker.herokuapp.com/api/notes/', {
        headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
        },
        data: {        
          "title": noteTitle,
          "text": noteText
        }
      })//end of post
      //console.log("Response: " + JSON.stringify(response));
      expect(response.status()).toBe(200)
      return Promise.resolve(response.json());
    }//end of createNewNote

    async deleteNote(noteId: any): Promise<JSON> {
      const context = await request.newContext();
      const response = await context.delete('https://fk-note-taker.herokuapp.com/api/notes/'+noteId, {
        headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache"
        }
      })//end of post
      //console.log("Response: " + JSON.stringify(response));
      expect(response.status()).toBe(200)
      return Promise.resolve(response.json());
    }//end of deleteNote


}//end of class