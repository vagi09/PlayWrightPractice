import { test, expect,page } from "@playwright/test";
const path = require('path');



test('upload', async({page})=>{

    await page.goto('https://practice.expandtesting.com/upload');

    await page.waitForTimeout(2_000);

    const file_name = 'test.pdf'

    const filePath = path.join('E:', 'PlayWrightPractice', 'utility', 'uploads', file_name);


    await page.locator(`#fileInput`).setInputFiles(filePath);

    await page.waitForTimeout(2_000);

    await page.locator(`#fileSubmit`).click();

    const uploaded_file_name = await page.locator(`//div[@id="uploaded-files"]//p`).textContent();

    console.log(uploaded_file_name);

    expect(uploaded_file_name).toContain(file_name);

    // await expect(page.locator(`//p[contains(text(),'1737304753991_${file_name}')]`)).toContainText(file_name);

    await page.waitForTimeout(2_000);





})