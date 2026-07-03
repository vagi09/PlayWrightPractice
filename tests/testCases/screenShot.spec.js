import { test } from "@playwright/test";

const screenshotpath = "E:/PlayWrightPractice/ScreenShots/login_page.png";
test("multi Tabs", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");

  await page.waitForTimeout(1_000);

  //  const buffer =  await page.screenshot({ path: screenshotpath , fullPage: true });

  const buffer = await page.screenshot();
  console.log(buffer.toString("base64"));
});
