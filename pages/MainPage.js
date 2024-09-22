export class MainPage {

    constructor(page) {
        this.page = page;
        this.title = page.locator('[data-test="title"]');
        this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
        this.product = page.locator('[data-test="inventory-item"]');
        this.productName = page.locator('[data-test="inventory-item-name"]');
        this.productPrice = page.locator('[data-test="inventory-item-price"]');
        this.addToCartButton = page.locator('[data-test^="add-to-cart"]');
        this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    }
        
    async addToCart(){
        const addToCartButton = this.addToCartButton;
        const count = await addToCartButton.count();
        const randomProduct = Math.floor(Math.random() * count);
        await addToCartButton.nth(randomProduct).click();
    }
    async getProductCount() {
        return await this.product.count();
            }    
    
    async getProductName() {
        return await this.productName.textContent();
    }
   
    async getProductPrice() {
        return await this.productPrice.textContent();
    }

    async openCartPage() {
        await this.cartIcon.click();
    }

    async getCartProductsCount() {
        return await this.cartBadge.count();
    }
}