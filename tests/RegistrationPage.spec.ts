import { expect, type Locator, type Page } from "@playwright/test";
import registrationData from '../registrationTestData.json';

export class RegistrationPage {

    readonly page: Page;
    readonly registerLink: Locator;
    readonly genderRadioBtn: Locator;
    readonly firstNameTextField: Locator;
    readonly lastNameTextField: Locator;
    readonly emailId: Locator;
    readonly passwrodTextfield: Locator;
    readonly confirmPassword: Locator;
    readonly registerBtn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.registerLink = page.locator('.ico-register');
        this.genderRadioBtn = page.locator('input#gender-male');
        this.firstNameTextField = page.locator('#FirstName');
        this.lastNameTextField = page.locator('#LastName');
        this.emailId = page.locator('#Email');
        this.passwrodTextfield = page.locator('#Company');
        this.confirmPassword = page.locator('#ConfirmPassword');
        this.registerBtn = page.locator('button#register-button');
    };

    async goto() {
        await this.page.goto('');
    };

    async clickOnRegistrationLink() {

        await this.registerLink.click();
    };

    async fillRegistrationForm() {

        await this.genderRadioBtn.click();
        await this.firstNameTextField.fill(registrationData.firstName);
        await this.lastNameTextField.fill(registrationData.lastName);
        await this.emailId.fill(registrationData.email);
        await this.passwrodTextfield.fill(registrationData.password);
        await this.confirmPassword.fill(registrationData.confirmPassword);
    };

    async clickRegisterBtn() {

        await this.registerBtn.click();

    };



};