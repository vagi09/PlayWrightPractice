const { test, expect } = require("@playwright/test");
const { HomePage } = require("../PageModels/HomePage");
const ConfigManager = require('../../configuration/ConfigManager');



test.describe("HomePage", async () => {
  test("About Us Link", async ({ page }) => {
    const homePage = new HomePage(page);
    const configManager = new ConfigManager('testEnvironment');
    const url = configManager.getUrl();

    await homePage.gotoHomePage(url);

    await homePage.aboutUsLink().click();

    await homePage.productsLink().click();
  });
});
