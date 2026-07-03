import { test, expect } from "@playwright/test";
const { HomePage } = require("../PageModels/HomePage");
const { LoginPage } = require("../PageModels/LoginPage");
const ConfigManager = require('../../configuration/ConfigManager');

test.describe("LogInPage", async () => {
  test("Valid Login", async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const configManager = new ConfigManager('testEnvironment');
    const url = configManager.getUrl();
    const userName = configManager.getUsername();
    const passWord = configManager.getPassword();
    

    await homePage.gotoHomePage(url);

    // await homePage.gotoHomePage();

    await loginPage.userName().pressSequentially(userName);
    await loginPage.passWord().pressSequentially(passWord);

    await loginPage.logInButton().click();

    await loginPage.page.waitForTimeout(2_000);
  

    
  });
});
