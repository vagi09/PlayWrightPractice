import { expect, type Locator, type Page } from '@playwright/test';
// import { navigateToURL } from './commonUtilities.spec';
// import 'dotenv/config';
// const username = process.env.USERNAME || 'defaultUsername';  // Provide a default value
// const password = process.env.PASSWORD || 'defaultPassword';
import fs from 'fs'
// Read the configuration file
const configFile = 'config.json';
const configData = JSON.parse(fs.readFileSync(configFile, 'utf-8'));

// Use the values from the configuration file
const username = configData.username;
const password = configData.password;


export class LoginPage {

    readonly page: Page;
    readonly LoginLink: Locator;
    readonly Email: Locator;
    readonly Password: Locator;
    readonly LoginBtn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.LoginLink = page.locator('.ico-login');
        this.Email = page.locator('#Email');
        this.Password = page.locator('#Password');
        this.LoginBtn = page.locator('button[class="button-1 login-button"]');


    };

    async NavigateHomePage() {

        await this.page.goto('');
    };

    async ClickOnLoginLink() {

        await this.LoginLink.click();
    };

    async EnterEmail() {

        await this.Email.fill(username);
       
        // await expect(this.Email.getAttribute('type')).toBe('email');     
    };

    async EnterPassword() {

        await this.Password.fill(password);
    };

    async ClickSumbitButton() {


        await this.LoginBtn.click();
        // await expect(this.LoginBtn).toBeVisible();
        
    };

};