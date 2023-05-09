import { test, expect, chromium, Page } from '@playwright/test';
import { NoteTakerAPI } from './PageObjects/NoteTakerPageObjects/NoteTakerAPI'



test.describe.serial("Note Taker Test Scenarios", () => { 

    let page: any
    let noteTakerApi = new NoteTakerAPI(page);
    let noteId: any
    let randomId = Math.floor(Math.random()*100000+1)
    let titleName = "AUTOMATION NOTE " + randomId
    let newTitleName = "UPDATED AUTOMATION NOTE " + randomId

    test.beforeAll(async ({browser}) =>{
        page = await browser.newPage(); //Create a new Page instance
    })//end of before all

    test('TC01 - Create a new Note on Note Taker via api and verify on UI', async () => {
        //create a new note
        let res = await noteTakerApi.createNewNote(titleName,"THIS IS FROM NOTE AUTOMATION TEST")
        noteId = JSON.stringify(res.id).replace(/"/g, '');
        console.log("Note ID: " + noteId)    
        //verify in note taker ui
        await page.goto('https://fk-note-taker.herokuapp.com/notes')
        expect(await page.locator("//span[text()='"+titleName+"']")).toBeVisible({timeout: 5000})
        console.log("Note: " + titleName + " appears on the ui")
        await page.waitForTimeout(5000)
    })//end of test 1

    test('TC02 - Update the Note on Note Taker via api and verify on UI', async () => {
        //create a new note
        let res = await noteTakerApi.updateNewNote(noteId, newTitleName, "THIS IS UPDATED FROM NOTE AUTOMATION TEST")
        //verify in note taker ui
        await page.goto('https://fk-note-taker.herokuapp.com/notes')
        expect(await page.locator("//span[text()='"+newTitleName+"']")).toBeVisible({timeout: 5000})
        console.log("Note: " , newTitleName ," appears on the ui")
        //test
        await page.waitForTimeout(5000)
    })//end of test 2

    test('TC03 - Delete the Note on Note Taker via api and verify on UI', async () => {
        //delete the note
        let res2 = await noteTakerApi.deleteNote(noteId)
        //verify in note taker ui
        await page.goto('https://fk-note-taker.herokuapp.com/notes')
        expect(await page.locator("//span[text()='"+newTitleName+"']")).toBeHidden({timeout: 5000})
        console.log("Note: " + newTitleName + " isn't present on the ui")
        await page.waitForTimeout(5000)
    })//end of test 3

})//end of describe