import { test, expect, page } from "@playwright/test";
const fs = require('fs');
const path = require('path');

const loginUrl = "https://practicetestautomation.com/practice-test-login/";
test('Data driven', async({page})=>{

   // Correct the path to credentials.json
   const credentialsPath = path.join(__dirname, '..', '..', 'utility', 'credentials.json');
   console.log(`Looking for credentials at: ${credentialsPath}`);

   // Check if the file exists
   if (!fs.existsSync(credentialsPath)) {
       throw new Error(`File not found at: ${credentialsPath}`);
   }
    const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf-8'));

    for (const { username, password } of credentials) {
        console.log(`Logging in with Username: ${username}`);
    
        // Navigate to the login page
        await page.goto(loginUrl);
    
        // Fill the login form
        await page.fill('#username', username); // Replace '#username' with the actual selector
        await page.fill('#password', password); // Replace '#password' with the actual selector
    
        // Click the submit button
        await page.click('#submit'); // Replace '#submit' with the actual selector
    
        // Wait for a successful login indication (modify as per your application's behavior)
        await page.waitForTimeout(2000); // Replace with a proper wait condition if possible
    
        // Optionally log out or prepare for the next iteration
        // Example: await page.click('#logout'); // Replace '#logout' with the actual selector
      }
    




});