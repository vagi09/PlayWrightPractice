import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    // readonly WebPagetitle: Locator
    readonly CompCategory: Locator;
    readonly 


    constructor(page: Page) {

        this.page = page;
        this.CompCategory = page.locator('.top-menu.notmobile>li:first-of-type>a');
    };

    async goto() {

        await this.page.goto('');

    };

    async getPagetitle() {

        return await this.page.title();
    };

    async CompCat() {

        await this.CompCategory.click();


    };

    async getCurrentUrl() {
        return this.page.url();

    };
};
