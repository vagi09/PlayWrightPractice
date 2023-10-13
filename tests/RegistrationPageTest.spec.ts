import { test, expect } from '@playwright/test';
import { RegistrationPage } from './RegistrationPage.spec';

test('Registeration Page test', async ({ page }) => {

    const regPage = new RegistrationPage(page);

    await regPage.goto();

    await regPage.clickOnRegistrationLink();
    await regPage.fillRegistrationForm();
    await regPage.clickRegisterBtn();

})