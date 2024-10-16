const { expect } = require("@playwright/test");

exports.RegistrationPage = class RegistrationPage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  registerLink() {
    return this.page.locator(`//a[contains(text(),'Register')]`);
  };

  firstName(){

    return this.page.locator(`//input[@id='customer.firstName']`)
  }


};
