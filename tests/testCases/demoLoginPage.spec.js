import { test, expect } from "@playwright/test";

test("Get brand list in table format", async ({ page }) => {
  // Navigate to the Myntra men's formal shirts page
  await page.goto("https://practicetestautomation.com/practice-test-login/#main-container");

  const texts = await Promise.all(
    (await page.locator('ul#menu-primary-items li a').elementHandles()).map(async (el) => {
      return await el.textContent();
    })
  );
  console.log(texts);

 
});
