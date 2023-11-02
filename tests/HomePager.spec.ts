import {test, expect} from '@playwright/test';


test('Home Page Tests', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/');

    // const PageTitle = await page.title();
    // console.log(`Page title:${PageTitle}`)
    // const ExpectedPageTitle = "nopCommerce demo store";
    // expect(PageTitle).toBe(ExpectedPageTitle);

    // await expect(page).toHaveTitle(/nopCommerce demo store/);



});