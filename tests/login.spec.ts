import { test, expect } from '@playwright/test';
import { Login } from '../pages/login.page';

test.beforeEach(async ({page}) => {
  await page.goto('/');
});

// TC01: Login with valid credentials and logout successfully
test("TC01: Login with valid credentials and logout successfully.", async ({page}) => {
  const loginPage = new Login(page);
  await loginPage.signIn("user", "user");
  expect(loginPage.isLoggedOut).toBeTruthy();

  await loginPage.signOut();
  expect(loginPage.isLoggedOut).toBeTruthy();
});