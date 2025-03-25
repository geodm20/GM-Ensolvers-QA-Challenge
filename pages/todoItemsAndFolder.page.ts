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
    readonly viewFolderButton: Locator;
    readonly folderViewCard: Locator;
    readonly editFolderButton: Locator;
    readonly folderNameCell: Locator;
    readonly deleteFolderButton: Locator;
    readonly deleteFolderConfirmButton: Locator;
    readonly noFoldersFound: Locator;

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
        this.viewFolderButton = page.locator("[data-cy='entityDetailsButton']");
        this.folderViewCard = page.locator('dl.jh-entity-details dt:has(span#name) + dd');
        this.editFolderButton = page.getByRole("link", {name: "Edit"});
        this.folderNameCell = page.locator('[data-cy="entityTable"]').getByText('Folder 2');
        this.deleteFolderButton = page.locator("[data-cy='entityDeleteButton']");
        this.deleteFolderConfirmButton = page.locator("[data-cy='entityConfirmDeleteButton']");
        this.noFoldersFound = page.locator(".alert.alert-warning").getByText("No Folders found");
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
        await this.page.waitForTimeout(700);

        await this.toDoItemDescription.fill(description);
        await this.page.waitForTimeout(700);

        await this.toDoItemFolder.selectOption(this.folderValue);
        await this.page.waitForTimeout(700);

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

    async viewFolder() {
        await this.viewFolderButton.click();
    }

    async verifyFolderName() {
        return await this.folderViewCard.textContent();
    }

    async editFolder(newFolderName: string) {
        await this.editFolderButton.click();
        await this.page.waitForTimeout(300);
        await this.folderNameInput.fill(newFolderName);
        await this.page.waitForTimeout(300);
        await this.saveFolderButton.click();
    }

    async verifyFolderEdition() {
        return await this.folderNameCell.textContent();
    }

    async deleteFolder() {
        await this.deleteFolderButton.click();
        await this.page.waitForTimeout(300);
        await this.deleteFolderConfirmButton.click();
        await this.page.waitForTimeout(300);
    }

    async verifyFolderDeletion() {
        if (this.noFoldersFound) return true;
    }
}