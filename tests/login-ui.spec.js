import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';

test('Verify success log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);

    await loginPage.navigateTo();
    await loginPage.login();
    await expect(mainPage.title).toBeVisible();
    await expect(mainPage.cartIcon).toBeVisible();
    const productCount = await mainPage.getProductCount();
    await expect(productCount).toBeGreaterThan(2)
     
});