import { test, expect } from '@playwright/test';

test("Multiple elements", async ({ page }) => {


    await page.goto('https://www.w3schools.com/js/js_string_templates.asp');
    await page.waitForLoadState('load');
    await page.waitForSelector("//h2[contains(text(), 'JS Tutorial')]//following::a[@target='_top']", { timeout: 9000 });
    const links = await page.$$("//h2[contains(text(), 'JS Tutorial')]//following::a[@target='_top']");
    console.log("number of links", links.length);

    for await (const link of links) {

        console.log(await link.innerText());


    };




});
