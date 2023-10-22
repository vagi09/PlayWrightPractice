import { test, expect } from '@playwright/test'

const users = [

    { username: 'student', password: 'Password123' },

    { username: 'student1', password: 'Password1234' },

    { username: 'student2', password: 'Password1235' }


];

for (const name of users) {

    test(`testing with ${name.username}`, async ({ page }) => {

        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.fill('input[name="username"]', name.username);
        await page.fill('input[name="password"]', name.password);
        await page.click("//button[text()='Submit']");


    });


};


