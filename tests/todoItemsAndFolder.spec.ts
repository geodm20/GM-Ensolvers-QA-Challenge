import {test, expect} from "@playwright/test";
import { Login } from '../pages/login.page';
import { todoItemsAndFolder } from "../pages/todoItemsAndFolder.page";

test.beforeEach(async ({page}) => {
    await page.goto('/');
    const loginPage = new Login(page);
    await loginPage.signIn("user", "user");
    expect(loginPage.isLoggedOut).toBeTruthy();
});

test("TC02: Folder and to-do items creation.", async ({page}) => {
    const toDoItemPage = new todoItemsAndFolder(page);
    await toDoItemPage.goToManageFolders();
    const folderName = "Folder 1";
    await toDoItemPage.createNewFolder(folderName);
    await toDoItemPage.gotoToDoItems();
    
    await toDoItemPage.createNote1("A", "1");
    expect(toDoItemPage.verifyNoteCreation()).toBeTruthy();

    await toDoItemPage.createNote2("B", "2");
    expect(toDoItemPage.verifyNoteCreation()).toBeTruthy();
});