import { test, expect } from '@playwright/test'

const users = [

    { username: 'student', password: 'Password123' },

    { username: 'student1', password: 'Password1234' },

    { username: 'student2', password: 'Password1235' }


];

// const videoPath = 'C:/Users/manas/OneDrive/Documents/playwright-demo/test-results'; 

// Ensure the output directory exists
// mkdirSync(videoPath, { recursive: true });   

for (const name of users) {

    test(`testing with ${name.username}`, async ({ page }) => {


        await page.goto('https://practicetestautomation.com/practice-test-login/');
        await page.fill('input[name="username"]', name.username);
        await page.fill('input[name="password"]', name.password);
        await page.screenshot({ path: 'C:/Users/manas/OneDrive/Documents/playwright-demo/screenshots/scre.png', fullPage: true });
        await page.click("//button[text()='Submit']");
       



    });


};


