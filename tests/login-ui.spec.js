import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';

test('Verify success log in', async ({ page }) => {
    const loginPage = new LogIn(page);
    const mainPage = new MainPage(page);

    await loginPage.navigateTo();
    await loginPage.login();
    await expect(mainPage.title).toBeVisible();
    await expect(mainPage.cartIcon).toBeVisible();
    await mainPage.checkProductDisplayed();
     
});