import { test, expect } from "@playwright/test";
const { HomePage } = require("../PageModels/HomePage");
const { RegistrationPage } = require("../PageModels/Registeration-Page");
const {getRandomText} = require("../../utility/randomUtils")
const { LoginPage } = require("../PageModels/LoginPage");
const ConfigManager = require('../../configuration/ConfigManager');
// import logger from './logger';

test.describe("Registration Page", async () => {
  test("About Us Link", async ({ page }) => {
    const homePage = new HomePage(page);
    const regPage = new RegistrationPage(page)
    const configManager = new ConfigManager('testEnvironment');
    const url = configManager.getUrl();
    const fName = getRandomText();

    await homePage.gotoHomePage(url);
    // logger.info(`Page laoded`);

    await regPage.registerLink().click();

    await regPage.page.waitForTimeout(2_000);

    await regPage.firstName().pressSequentially(fName)



    

    
  });
});