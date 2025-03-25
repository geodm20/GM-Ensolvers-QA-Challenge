import {Locator, Page} from '@playwright/test';

export class todoItemsAndFolder {
    readonly page: Page;
    readonly manageFolders: Locator;
    readonly createNewFolderButton: Locator;
    readonly folderNameInput: Locator;
    readonly saveFolderButton: Locator;
    readonly manageListsMenu: Locator;
    readonly toDoItemOption: Locator;
    readonly createToDoItemButton: Locator;
    readonly toDoItemTitle: Locator;
    readonly toDoItemDescription: Locator;
    readonly toDoItemFolder: Locator;
    readonly toDoSaveButton: Locator;
    readonly createAlert: Locator;
    public folderValue: string;
    readonly refreshButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.manageFolders = page.getByRole('button', { name: /Manage Folders/i });
        this.createNewFolderButton = page.locator("[data-cy='entityCreateButton']");
        this.folderNameInput = page.locator("[data-cy='name']");
        this.saveFolderButton = page.getByRole('button', { name: /Save/i });
        this.manageListsMenu = page.getByRole('link', { name: 'Manage lists' });
        this.toDoItemOption = page.locator('role=menuitem', { hasText: 'To Do Item' });
        this.createToDoItemButton = page.locator("[data-cy='entityCreateButton']");
        this.toDoItemTitle = page.locator("[data-cy='title']");
        this.toDoItemDescription = page.locator("[data-cy='description']");
        this.toDoItemFolder = page.locator("[data-cy='folder']");
        this.toDoSaveButton = page.locator("[data-cy='entityCreateSaveButton']");
        this.createAlert = page.locator(".Toastify__toast.Toastify__toast--success.toastify-toast");
        this.folderValue = '';
        this.refreshButton = page.getByRole('button', { name: /Refresh List/i });
    }

    async goToManageFolders() {
        await this.manageFolders.click();
    }

    async createNewFolder(folderName: string) {
        await this.createNewFolderButton.click();
        await this.folderNameInput.fill(folderName);
        await this.saveFolderButton.click();

        const alertText: string = await this.createAlert.textContent() ?? "";
        const match = alertText.match(/\d+$/);
        this.folderValue = match ? match[0] : "";
        console.log(this.folderValue);

        await this.refreshButton.click();
    }

    async gotoToDoItems() {
        await this.manageListsMenu.click();
        await this.toDoItemOption.click();
    }

    async createNote1(title: string, description: string) {
        await this.createToDoItemButton.click();

        await this.toDoItemTitle.fill(title);
        // await this.page.waitForTimeout(700);

        await this.toDoItemDescription.fill(description);
        // await this.page.waitForTimeout(700);

        await this.toDoItemFolder.selectOption(this.folderValue);
        // await this.page.waitForTimeout(700);

        await this.toDoSaveButton.click();
        await this.refreshButton.click();
    }

    async createNote2(title: string, description: string) {
        await this.createToDoItemButton.click();

        await this.toDoItemTitle.fill(title);
        await this.page.waitForTimeout(700);

        await this.toDoItemDescription.fill(description);
        await this.page.waitForTimeout(700);

        await this.toDoItemFolder.selectOption("");
        await this.page.waitForTimeout(700);

        await this.toDoSaveButton.click();
        await this.refreshButton.click();
    }

    async verifyNoteCreation() {
        return this.createAlert;
    }
}