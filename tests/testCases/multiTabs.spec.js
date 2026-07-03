import { test, expect, chromium } from "@playwright/test";

test("multi Tabs", async ({ browser }) => {
  const context = await browser.newContext();
  const context1 = await browser.newContext();

  const page1 = await context.newPage();
  const page2 = await context.newPage();

  const page3 = await context1.newPage();
  const page4 = await context1.newPage();

  await page1.goto("https://www.checklyhq.com/");
  await page2.goto("https://playwright.dev/");

  await page1.bringToFront();

  await page3.goto("https://www.checklyhq.com/");
  await page4.goto("https://playwright.dev/");
});
