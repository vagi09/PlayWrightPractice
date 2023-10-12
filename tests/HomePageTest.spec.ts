import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage.spec';

const expectedUrls = {
    'Computers': 'https://demo.nopcommerce.com/computers',
    'Electronics': 'https://demo.nopcommerce.com/electronics',
    'Apparel': 'https://demo.nopcommerce.com/apparel',
    'Digital downloads': 'https://demo.nopcommerce.com/digital-downloads',
    'Books': 'https://demo.nopcommerce.com/books',
    'Jewelry': 'https://demo.nopcommerce.com/jewelry',
    'Gift Cards': 'https://demo.nopcommerce.com/gift-cards',
    // Add more categories and URLs as needed
};

test('HomePage test', async ({ page }) => {
    const homepage = new HomePage(page);

    await homepage.goto();
    const pageTitle = await homepage.getPagetitle();
    expect(pageTitle).toBe("nopCommerce demo store");

    for (const category in expectedUrls) {
        await homepage.clickCategory(category);
        const currentUrl = await homepage.getCurrentUrl();
        expect(currentUrl).toBe(expectedUrls[category]);
    }
});

// import { test, expect } from '@playwright/test';
// import { HomePage } from './HomePage.spec';

// const expectedUrls = {
//     'Computers': 'https://demo.nopcommerce.com/computers',
//     'Electronics': 'https://demo.nopcommerce.com/electronics',
//     'Apparel': 'https://demo.nopcommerce.com/apparel',
//     'Digital downloads': 'https://demo.nopcommerce.com/digital-downloads',
//     'Books': 'https://demo.nopcommerce.com/books',
//     'Jewelry': 'https://demo.nopcommerce.com/jewelry',
//     'Gift Cards': 'https://demo.nopcommerce.com/gift-cards'

// };
// test('HomePage test', async ({ page }) => {

//     const homepage = new HomePage(page);

//     await homepage.goto();
//     const pageTitle = await homepage.getPagetitle();

//     await expect(pageTitle).toBe("nopCommerce demo store");

//     await homepage.CompCat();
//     const currentUrl = await homepage.getCurrentUrl();
//     console.log(`currenturl: ${currentUrl}`);
//     expect(currentUrl).toBe('https://demo.nopcommerce.com/computers');



// });
