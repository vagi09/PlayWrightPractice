const { expect } = require("@playwright/test");

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  userName(){

    return this.page.locator(`input[name='username']`)
  }

  passWord(){

    return this.page.locator(`input[name='password']`)
  }


  logInButton(){

    return this.page.locator(`input[value="Log In"]`)
  }






}