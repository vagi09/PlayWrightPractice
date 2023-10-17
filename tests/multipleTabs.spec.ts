import { test, expect } from '@playwright/test';

test('Multiple Tabs Test', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with your desired URL

  // Click on the link to open it in a new tab
  await page.click("//a[contains(text(),'OrangeHRM, Inc')]"); // Modify the selector as needed

  // Wait for the new tab to be opened
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    // page.click("//a[contains(text(),'OrangeHRM, Inc')]"),
  ]);

  // You can interact with the new tab here
  // For example, you can navigate to a new URL in the new tab:
  await newPage.goto('https://www.orangehrm.com/'); // Replace with the URL you want

  // Perform actions on the new tab

  // Use 'expect' to make assertions
  await expect(newPage).toHaveURL('https://www.orangehrm.com/'); // Replace with the expected URL

  // Close the new tab
  await newPage.close();
});
