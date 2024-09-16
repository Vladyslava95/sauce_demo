import { test, expect } from '@playwright/test';
import { LogIn } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';
import { CartPage } from '../pages/CartPage';

test.beforeEach(async ({ page }) => {
    const loginPage = new LogIn(page);
    const mainPage = new MainPage(page);
    
    await loginPage.navigateTo();
    await loginPage.login();  
    await expect(mainPage.title).toBeVisible();
});

test('Verify add to cart product', async ({ page }) => {    
    const mainPage = new MainPage(page); 
    const cartPage = new CartPage(page); 
     

    await mainPage.addToCartButton.click();
    await expect(mainPage.cartBadge).toBeVisible();
    const cartProducts = await mainPage.getCartProductsCount();
    await expect(cartProducts).toBe(1);  
    await mainPage.openCartPage();

    const productName = await mainPage.getProductName();
    const productPrice = await mainPage.getProductPrice();
    const cartProductName = await cartPage.getCartProductName();
    const cartProductPrice = await cartPage.getCartProductPrice();
    await expect(cartProductName).toBe(productName);
    await expect(cartProductPrice).toBe(productPrice);

    await cartPage.removeProduct();    
    await expect(mainPage.cartBadge).not.toBeVisible();
     
});