import {Locator, Page} from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    readonly accountButton: Locator;
    readonly signOutButton: Locator;
    readonly signInAlert: Locator;
    readonly signOutAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByPlaceholder("Your username");
        this.password = page.getByPlaceholder("Your password");
        this.signInButton = page.getByRole("button", {name: "Sign in"});
        this.accountButton = page.locator("[data-cy='accountMenu']");
        this.signOutButton = page.locator("[data-cy='logout']");
        this.signInAlert = page.getByRole("alert", {name: "You are logged in as \"\""});
        this.signOutAlert = page.getByTitle("Logged out successfully!");
    }

    async signIn(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }

    async signOut() {
        await this.accountButton.click();
        await this.signOutButton.click();
    }

    async isLoggedIn() {
        return this.signInAlert;
    }

    async isLoggedOut() {
        return this.signOutAlert;
    }
}