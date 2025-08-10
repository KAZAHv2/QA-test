import { $ } from '@wdio/globals'
import Page from "../page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class unLogin extends Page {
    /**
     * define selectors using getter methods
     */

    public get logoutLink() {
        return $('a[href*="Logout.php"]');
    }

    public get loginLink() {
        return $('a[href="index.php"]');
    }


    public async unlogin() {
        await this.waitForElement(this.logoutLink);
        await this.logoutLink.click();
        await this.waitForElement(this.loginLink);
        await this.loginLink.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

export default new unLogin();
