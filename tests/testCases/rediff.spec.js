import { test, expect, page } from "@playwright/test";

test("alert", async ({ page }) => {
  await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

//   await page.locator(`//input[@type='submit']`).click();


  //   page.on("dialog", (dialog) => dialog.accept());
//   page.on("dialog", (dialog) => console.log(dialog.message()));
//   await page.getByRole("button").click();

//   page.on('dialog', dialog => dialog.accept());



  // Add a listener for the dialog (alert) event
  page.on('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`); // Logs the alert text
    await dialog.dismiss(); // Clicks the "OK" button on the alert
  });

  // Click the sign-in button
  await page.click('input[type="submit"]'); // Modify the selector if necessary

  // Wait for a moment to observe the alert (optional)
  await page.waitForTimeout(2000);


});
