import { test, expect,page } from "@playwright/test";
import {ai} from '@zerostep/playwright'




test('login Page', async({page})=>{


    const aiArgs = {page, test};
    
    await page.goto('https://practicetestautomation.com/practice-test-login/');
   const pageTitle = await ai("What is the  title of the page", aiArgs);
   console.log('Page Title: ', pageTitle );

   const fetchUrl = await ai('Fetch the URL of the current Page', aiArgs);
   console.log('Current URL: ', fetchUrl );

   const btnLocator = await ai('get the Submit Button locator or Xpath', aiArgs);
   console.log('Submit Button Locator: ', btnLocator );

   const fetchtextContent = await ai('Get API respone from the page when navigated page with reponse URL and API response code', aiArgs)
   console.log(fetchtextContent)

   await expect(pageTitle).toBe('Practice Test Automation');

   await ai('Click the Submit Button', { page, test });


    // await page.locator('#username').fill(username);

    // await page.locator('#password').fill(password);

    // await page.locator('#submit').click();



})