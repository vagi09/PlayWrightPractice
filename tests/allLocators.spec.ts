import { test, expect } from '@playwright/test';

test('all locators', async ({ page }) => {


    await page.goto('https://bstackdemo.com/');
    await page.getByText('Sign In').click();
    await page.locator("#username").click();
    await page.getByText('demouser', { exact: true }).click();
    await page.locator('#password').click();
    await page.getByText('testingisfun99', { exact: true }).click();
    await page.getByRole('button', {name: 'Log In'}).click();


    await page.waitForTimeout(6000);
    // await page.getAttribute()
    // await page.getByAltText()
    // await page.getByLabel()
    // await page.getByRole()
    // await page.getByTitle()









})

