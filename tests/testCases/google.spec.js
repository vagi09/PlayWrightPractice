import { test, expect, page } from "@playwright/test";

test("Google search", async ({ page }) => {
  await page.goto("https://www.google.com/");

  await page.waitForTimeout(2_000);

  await page
    .locator('textarea[title="Search"]')
    .pressSequentially("java", { delay: 100 });

  const suggestions = await page
    .locator('//ul[@role="listbox"]//following::li')
    .allInnerTexts();

  await page.waitForTimeout(2_000);

  console.log(suggestions);

  // Check if "java download" is in the suggestions
  // for (let i = 0; i < suggestions.length; i++) {
  //   if (suggestions[i].toLowerCase().includes("java download")) {
  //     console.log("Clicking on: " + suggestions[i]);

  //     // Click on the corresponding suggestion
  //     await page
  //       .locator(`//ul[@role="listbox"]//following::li[${i + 1}]`)
  //       .click();

  //     break;
  //   }
  // }

  await expect(page).toHaveTitle("Google.com");
  // const serarchResults = page.locator(`//ul[@role="listbox"]//li/descendant::div[@role="option"]`);
  // // .count();

  // for(let i=0; i<await serarchResults.count(); i++){

  //   const attri =  await serarchResults.nth(i).getAttribute('aria-label');

  //   console.log(attri);
  // }
});
