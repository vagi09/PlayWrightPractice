import { test, expect } from '@playwright/test';


test('multiple Page Tests', async ({ page, context }) => {


    //launch the URL
    await page.goto('https://www.checklyhq.com/');

    //Launch the second page
    // const newTab = await context.newPage();

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator(`//a[contains(text(),'Login') and @class="nav-item mr-2 max-sm:hidden" ]`).click()
    ]);

    await newPage.bringToFront();

    await newPage.screenshot({ path: 'C:/Users/manas/OneDrive/Documents/playwright-demo/screenshots/loginpage.png', fullPage: true });

    await page.waitForTimeout(3000);

});