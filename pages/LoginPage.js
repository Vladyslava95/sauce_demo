import { getAuthData } from '../utils';

export class LogIn {

    constructor(page) {
        this.page = page;
        this.emailTextbox = page.locator('[data-test="username"]');
        this.passwordTextbox = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async navigateTo() {
        await this.page.goto('')
    }

    async login(){
        const authData = getAuthData();
        await this.emailTextbox.fill(authData.email);
        await this.passwordTextbox.fill(authData.password);
        await this.loginButton.click();
    } 
}