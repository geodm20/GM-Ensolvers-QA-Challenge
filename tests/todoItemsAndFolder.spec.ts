import {test, expect} from "@playwright/test";
import { Login } from '../pages/login.page';
import { todoItemsAndFolder } from "../pages/todoItemsAndFolder.page";

test.beforeEach(async ({page}) => {
    await page.goto('/');
    const loginPage = new Login(page);
    await loginPage.signIn("user", "user");
    expect(loginPage.isLoggedIn).toBeTruthy();
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

test("TC03: Folder management (view, edit and delete).", async({page}) => {
    const folderPage = new todoItemsAndFolder(page);
    await folderPage.goToManageFolders();

    const folderName = 'Folder 1';
    await folderPage.createNewFolder(folderName);
    await folderPage.viewFolderOrItem();
    expect(await folderPage.verifyFolderName()).toBe(folderName);

    const newFolderName = 'Folder 2';
    await folderPage.editFolder(newFolderName);
    expect(await folderPage.verifyFolderEdition()).toBe(newFolderName);

    await folderPage.deleteFolderOrItem();
    expect(await folderPage.verifyFolderOrItemDeletion()).toBeTruthy();
});

test("TC04: To-Do Items management (view, edit and delete).", async({page}) => {
    const folderPage = new todoItemsAndFolder(page);
    await folderPage.goToManageFolders();

    const folderName = 'Folder 1';
    await folderPage.createNewFolder(folderName);

    await folderPage.gotoToDoItems();
    const title = "A";
    const description = "1"
    await folderPage.createNote1(title, description);
    expect (folderPage.verifyNoteCreation()).toBeTruthy();
   
    await folderPage.viewFolderOrItem();
    const newTitle = 'B';
    const newDescription = "2";
    await folderPage.editItem(newTitle, newDescription);

    await folderPage.deleteFolderOrItem();
    expect(await folderPage.verifyFolderOrItemDeletion()).toBeTruthy();
});