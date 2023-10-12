import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {

    readonly page: Page;
    // Define locators for different categories
    categoriesLocators: Record<string, Locator | undefined> = {
        'Computers': undefined,
        'Electronics': undefined,
        'Apparel': undefined,
        'Digital downloads': undefined,
        'Books': undefined,
        'Jewelry': undefined,
        'Gift Cards': undefined,
    };

    constructor(page: Page) {
        this.page = page;

        // Initialize locators for each category
        this.categoriesLocators['Computers'] = page.locator('a', { hasText: 'Computers' });
        this.categoriesLocators['Electronics'] = page.locator('a', { hasText: 'Electronics' });
        this.categoriesLocators['Apparel'] = page.locator('a', { hasText: 'Apparel' });
        this.categoriesLocators['Digital downloads'] = page.locator('a', { hasText: 'Digital downloads' });
        this.categoriesLocators['Books'] = page.locator('a', { hasText: 'Books' });
        this.categoriesLocators['Jewelry'] = page.locator('a', { hasText: 'Jewelry' });
        this.categoriesLocators['Gift Cards'] = page.locator('a', { hasText: 'Gift Cards' });
    };

    async goto() {
        await this.page.goto('');
    };

    async getPagetitle() {
        return await this.page.title();
    };

    async clickCategory(category: string) {
        if (category in this.categoriesLocators) {
            const element = this.categoriesLocators[category];
            if (element) {
                // Wait for the element to be visible, enabled, and stable
                await element.nth(0).waitFor({ state: 'visible',  });

                // Click the element
                await element.nth(0).click();
            } else {
                throw new Error(`Category '${category}' locator is undefined.`);
            };
        } else {
            throw new Error(`Category '${category}' not found in the mapping.`);
        };
    };
    async getCurrentUrl() {
        return this.page.url();
    };
};

// import { expect, type Locator, type Page } from '@playwright/test';

// export class HomePage {

//     readonly page: Page;
//     // readonly WebPagetitle: Locator
//     readonly CompCategory: Locator;
//     readonly ElecCategory: Locator;
//     readonly AppearlCategory: Locator;
//     readonly DigDownloadsCategory: Locator;
//     readonly JewelryCategory: Locator;
//     readonly BooksCategory: Locator;
//     readonly GiftCardsCategory: Locator;


//     constructor(page: Page) {

//         this.page = page;
//         this.CompCategory = page.locator('a', { hasText: 'Computers' });
//         this.ElecCategory = page.locator('a', { hasText: 'Electronics' });
//         this.AppearlCategory = page.locator('a', { hasText: 'Apparel' });
//         this.AppearlCategory = page.locator('a', { hasText: 'Digital downloads' });
//         this.AppearlCategory = page.locator('a', { hasText: 'Books' });
//         this.AppearlCategory = page.locator('a', { hasText: 'Jewelry' });
//         this.AppearlCategory = page.locator('a', { hasText: 'Gift Cards' });
//     };

//     async goto() {

//         await this.page.goto('');

//     };

//     async getPagetitle() {

//         return await this.page.title();
//     };

//     async CompCat() {

//         await this.CompCategory.click();


//     };

//     async ElectCat() {

//         await this.ElecCategory.click();

//     };

//     async AppearlCat() {

//         await this.AppearlCategory.click();

//     };

//     async DigDownCat() {

//         await this.DigDownloadsCategory.click();

//     };

//     async BooksCat() {

//         await this.BooksCategory.click();

//     };

//     async JewlryCat() {

//         await this.JewelryCategory.click();

//     };

//     async giftCat() {

//         await this.GiftCardsCategory.click();

//     };

//     async getCurrentUrl() {
//         return this.page.url();

//     };
// };
