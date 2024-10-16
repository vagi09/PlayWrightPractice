const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
  }

  // async gotoHomePage() {
  //   await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  // }

  async gotoHomePage(url) {
    await this.page.goto(url);
  }


  aboutUsLink() {
    return this.page.locator(`//a[contains(text(), 'About Us')]`).first();
  }

  servicesLink() {
    return this.page.locator(`//a[contains(text(), 'Services')]`).first();
  }

  productsLink() {
    return this.page.locator(`//a[contains(text(), 'Products')]`).first();
  }

  productsLink() {
    return this.page.locator(`//a[contains(text(), 'Locations')]`).first();
  }

  adminPageLink() {
    return this.page.locator(`//a[contains(text(), 'Admin Page')]`);
  }
};
