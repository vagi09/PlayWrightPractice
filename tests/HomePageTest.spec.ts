import { test, expect } from '@playwright/test';
import { HomePage } from './HomePage.spec';

test('HomePage test', async ({ page }) => {

    const homepage = new HomePage(page);

    await homepage.goto();
    const pageTitle = await homepage.getPagetitle();

    await expect(pageTitle).toBe("nopCommerce demo store");

    await homepage.CompCat();
    const currentUrl = await homepage.getCurrentUrl();
    console.log(`currenturl: ${currentUrl}`);
    expect(currentUrl).toBe('https://demo.nopcommerce.com/computers');



});