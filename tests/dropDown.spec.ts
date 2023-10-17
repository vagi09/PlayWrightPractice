import { test, expect } from '@playwright/test';

test('Drop Down Page Tests', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // const dropdown = await page.$("select[fdprocessedid='ot4xdn']");

    // const options = await dropdown.$$('option');

    // for (const option of options) {

    //     const text = await option.textContent();

    //     console.log(text);
    // };

    // await page.locator('')

    // const dp = await.page.$("//select[contains(@fdprocessedid, 'nskz7q')]");
    const dropDown = await page.locator('#country');

    dropDown.click();

    // const countryOptions = await page.locator('//label[@for="country"]//following::option');

    const countryOptions = await page.$$eval('//label[@for="country"]//following::option', (options) =>
        options.map((option) => option.textContent)
    );

    // Iterate through each option and print the text
    for (const countryName of countryOptions) {
        console.log(countryName);
    }

    await page.waitForTimeout(5000);








});