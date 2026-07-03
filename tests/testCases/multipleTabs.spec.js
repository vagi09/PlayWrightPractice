import { test, expect,page, chromium } from "@playwright/test";

test.describe('Multiple Tabs Test', ()=>{

    test('Launch Two tabs', async({page, context})=>{

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.locator("//a[text()='OrangeHRM, Inc']").click();

        await page.waitForTimeout(2_000);

       const pages = await context.pages();

       console.log("Number of Pages: " + pages);

       const newTabPage = pages[pages.length-1];

       await newTabPage.bringToFront();

       await page.pause();





        // const newTab = await context.newPage();

        // await newTab.goto('https://demo.nopcommerce.com/')

        // await page.bringToFront();

        // await page.pause();

    //     const browser = await chromium.launch();

    //     const context = await browser.newContext();

    //   const page1 =  await context.newPage();

    //   await page.waitForTimeout(2_000);

    //   const page2 =  await context.newPage();

    //   await page1.goto('https://practicetestautomation.com/practice-test-login/');

    //   await page2.goto('https://demo.nopcommerce.com/');










    });


});





