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
    await expect(loginlink).toHaveAttribute('href', '/login?returnUrl=%2Fcomputers');

    // await page.waitForTimeout(2000);

    //assertions for Email field
    await loginpage.EnterEmail();
    const EmailField = loginpage.Email
    await expect(EmailField).toBeTruthy();
    await expect(EmailField).toHaveAttribute('type', 'email');
    await page.waitForTimeout(2000);

    //assertions for PW field
    await loginpage.EnterPassword();
    const PwField = loginpage.Password;
    await expect(PwField).toBeVisible();
    await expect(EmailField).toHaveAttribute('type', 'password');

    // await page.waitForTimeout(2000);

    //assertions on submit button
    await loginpage.ClickSumbitButton();
    const submitButton = loginpage.LoginBtn;
    await expect(submitButton).toBeVisible();

    await page.waitForTimeout(2000);

    // const loginErrorMessage = await loginpage.LoginErrorMsg();
    // // const loginErrorMessage = loginpage.UnSuccessfulLoginMsg;
    // console.log(loginErrorMessage);
    // // expect(loginErrorMessage).toBe("Login was unsuccessful. Please correct the errors and try again.No customer account found");
    // const expectedErrorMessage = "Login was unsuccessful. Please correct the errors and try again. No customer account found";

    // // Perform the assertion after trimming white spaces
    // expect(loginErrorMessage.trim()).toBe(expectedErrorMessage);


});