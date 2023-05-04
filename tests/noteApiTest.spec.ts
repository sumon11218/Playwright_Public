import { test, expect } from '@playwright/test';
import { NoteTakerAPI } from './PageObjects/NoteTakerPageObjects/NoteTakerAPI'

test('Created a new Note on Note Taker via api', async ({ page }) => {

    const noteTakerApi = new NoteTakerAPI(page);
    //create a new note
    let res = await noteTakerApi.createNewNote("AUTOMATION NOTE 104","THIS IS FROM NOTE AUTOMATION TEST")
    let noteId = JSON.stringify(res.id).replace(/"/g, '');
    console.log("Note ID: " + noteId)


    await page.waitForTimeout(12000)

    //delete the note
    let res2 = await noteTakerApi.deleteNote(noteId)
    //console.log("Delete Response: " + JSON.stringify(res2)) //

})//end of test

