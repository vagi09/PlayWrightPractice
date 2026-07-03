import { test, expect } from "@playwright/test";

test("Get brand list in table format", async ({ page }) => {
  // Navigate to the Myntra men's formal shirts page
  await page.goto("https://www.myntra.com/men-formal-shirts");

  // Open the 'brand-more' section to load all brands
  await page.locator(`.brand-more`).click();

  // Select all product brand checkboxes
  const allProductBrands = page.locator(
    `//label[@class=" common-customCheckbox"]//input`
  );

  // Get the count of all brands
  const count = await allProductBrands.count();

  // Create an array to store the brand names
  const brandList = [];

  // Loop through all brand checkboxes and get their values
  for (let i = 0; i < count; i++) {
    const brandName = await allProductBrands.nth(i).getAttribute("value");
    if (brandName) {
      brandList.push({ Brand: brandName }); // Store the brand names as objects for table format
    }
  }

  // Display the brand list in table format
  console.table(brandList);
});
