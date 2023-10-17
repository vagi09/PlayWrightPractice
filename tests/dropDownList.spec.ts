import { test, expect } from '@playwright/test';

test("DropDown list test", async ({ page }) => {

    //Launch the URL
    await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

    //locate the drop down and select "India"
    const dropDown = await page.locator("//div[@rel-title='Select Country']//select[1]")
    dropDown.click();
    dropDown.selectOption({ label: 'India' });
    


    await page.waitForTimeout(6000);


});



