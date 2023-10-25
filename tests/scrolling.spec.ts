import { test, expect } from '@playwright/test';

test.describe('scrolling', () => {

    test.beforeEach(async ({ page }) => {
        // Launch the website before each test
        await page.goto('https://www.dell.com/en-in'); // Replace with your website URL
    });

    test('Bottom Scrolling', async ({ page }) => {

        // Scroll to the bottom of the page
        await page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });

        await page.waitForTimeout(3000);

        const scrollX = await page.evaluate(() => window.scrollX);
        const scrollY = await page.evaluate(() => window.scrollY);

        // Print the captured coordinates
        console.log(`Scroll Coordinates - X: ${scrollX}, Y: ${scrollY}`);

    });

    test('Scroll to the Middle of the apge', async ({ page }) => {

        const pageHeight = await page.evaluate(() => document.body.scrollHeight);

        // Scroll to the middle of the page
        await page.evaluate((height) => {
            window.scrollTo(0, height / 2);
        }, pageHeight);

        const scrollX = await page.evaluate(() => window.scrollX);
        const scrollY = await page.evaluate(() => window.scrollY);

        // Print the captured coordinates
        console.log(`Scroll Coordinates - X: ${scrollX}, Y: ${scrollY}`);

        // Wait for a moment to ensure scrolling is completed
        await page.waitForTimeout(5000);

    });

    test.only('Scroll to Specific Coordinates', async ({ page }) => {

        await page.evaluate(() => {
            window.scrollTo(0, 416);
        });

        // Wait for a moment to ensure scrolling is completed
        await page.waitForTimeout(4000);

        const scrollX = await page.evaluate(() => window.scrollX);
        const scrollY = await page.evaluate(() => window.scrollY);

        // Print the captured coordinates
        console.log(`Scroll Coordinates - X: ${scrollX}, Y: ${scrollY}`);

    });


    test('Top Scrolling', async ({ page }) => {

        // Scroll to the top of the page
        await page.evaluate(() => {
            window.scrollTo(0, 0);
        });

        const scrollX = await page.evaluate(() => window.scrollX);
        const scrollY = await page.evaluate(() => window.scrollY);

        // Print the captured coordinates
        console.log(`Scroll Coordinates - X: ${scrollX}, Y: ${scrollY}`);

        await page.waitForTimeout(4000);


    });

});