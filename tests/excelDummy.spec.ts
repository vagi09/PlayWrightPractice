import { test, expect } from '@playwright/test';
import * as excel from 'exceljs';

test('excel data test', async ({ page }) => {

    

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    const workbook = new excel.Workbook();
    await workbook.xlsx.readFile('login-data.xlsx'); // Update with your Excel file name
  
    const worksheet: excel.Worksheet | undefined = workbook.getWorksheet(1); // Assuming data is on the first sheet
    const headers = worksheet.getRow(1).values;
  
    for (let i = 2; i <= worksheet.rowCount; i++) {
      const data = worksheet.getRow(i).values;
      const username = data[headers.indexOf('Username')];
      const password = data[headers.indexOf('Password')];
  
      await page.fill('input[name="username"]', username);
      await page.fill('input[name="password"]', password);
      await page.click('button[type="submit"]');
  
      // You can add assertions or other test steps here
  
      await page.goto('https://practicetestautomation.com/practice-test-login/'); // Go back to the login page
    }
  

});

