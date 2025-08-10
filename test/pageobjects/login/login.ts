import { $ } from '@wdio/globals'
import Page from "../page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class Login extends Page {
    /**
     * define selectors using getter methods
     */

    public get inputUsername() {
        return $('#username');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get btnSubmitLogin() {
        return $('#login');
    }

    public get searchForm() {
        return $('#search_form');
    }

    public async waitForLoginElements() {
        await this.waitForElement(this.inputUsername);
        await this.waitForElement(this.inputPassword);
        await this.waitForElement(this.btnSubmitLogin);
    }

    public async login(userName: string, password: string) {
        await this.open('https://adactinhotelapp.com');
        await this.waitForLoginElements();

        await this.inputUsername.setValue(userName);
        await this.inputPassword.setValue(password);
        await this.btnSubmitLogin.click();

        await this.waitForElement(this.searchForm);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new Login();
