import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage.spec';


test('LoginPage test', async ({ page }) => {

    const loginpage = new LoginPage(page);
    await loginpage.NavigateHomePage();

    await page.waitForTimeout(3000);

    //assertions for login link.
    await loginpage.ClickOnLoginLink();
    const loginlink = loginpage.LoginLink;
    await expect(loginlink).toBeVisible()

    await page.waitForTimeout(2000);

    //assertions for Email field
    await loginpage.EnterEmail();
    const EmailField = loginpage.Email
    await expect(EmailField).toBeTruthy();
    await page.waitForTimeout(2000);

    //assertions for PW field
    await loginpage.EnterPassword();
    const PwField = loginpage.Password;
    await expect(PwField).toBeVisible();

    await page.waitForTimeout(2000);

    //assertions on submit button
    await loginpage.ClickSumbitButton();
    const submitButton = loginpage.LoginBtn;
    await expect(submitButton).toBeVisible();


});