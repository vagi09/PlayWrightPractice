import { test } from "@playwright/test";
import { text } from "stream/consumers";

test("dropdow", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/select-dropdown-menu/");

  // const options = page.locator("//select//option");

// const totalCount = await options.count();



  const options = await page.$$eval('select option', elements =>
      elements.map(option => ({
        // value: option.value,
        text: option.textContent.trim()
      }))
    );

    // Print the options to the console
    console.log(options);

  // Select option by index (e.g., index 3 for "Albania")
  //   await page.selectOption('select', { index: 3 });

  // Select option by value (e.g., value "ALB" for Albania)
  //   await page.selectOption('select', { value: 'ALB' });

  // Select option by visible text (e.g., "Albania")
  //   await page.selectOption('select', { label: 'Albania' });

  // multiple selection
  // page.selectOption('select', ['Angola', 'Algeria', 'Armenia']);

  // Get all options in the dropdown
  // const options = await page.$$eval('select > option', (options) =>
  //     options.map((option) => option.value)

  //   );

  //   console.log(`Total number of options in the dropdown: ${options.length}`);

  // Iterate through each option and select it
  //   for (const optionValue of options) {
  //     await page.selectOption('select', { value: optionValue });
  //     console.log(`Selected option with value: ${optionValue}`);

  //     // Perform actions after selecting each option if needed
  //     await page.waitForTimeout(100); // Optional: Wait for 1 second after selecting each option to observe the changes
  //   }

  //   await page.waitForTimeout(3_000);
});
