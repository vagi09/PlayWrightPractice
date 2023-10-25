import { test, expect } from '@playwright/test';

test('File Upload Test', async ({ page }) => {
    // Navigate to the webpage
    await page.goto('https://ps.uci.edu/~franklin/doc/file_upload.html');

    // Locate the file input element and set the file path
    const fileInput = await page.locator('input[type="file"]');
    const filePath = "C:/Users/manas/Downloads/dummy.pdf"; // Replace with the actual path to your file
    await fileInput.setInputFiles(filePath);

    // Click the "Send File" button
    const sendFileButton = await page.locator('input[type="submit"]');
    await sendFileButton.click();

    // Add assertions as needed to verify the upload was successful
    await page.waitForTimeout(4000); // Give some time to see the result

    // You can add assertions based on the page's response or other elements
    const confirmationText = await page.locator('h1').textContent();
    expect(confirmationText).toContain('File uploaded successfully');
});
