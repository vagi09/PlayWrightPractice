import { test, expect } from "@playwright/test";
// import model from "../configuration/geminiModel.js";
import model from '../../configuration/deepSeekModel'


test("AI-assisted login test with Gemini", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  
  const pageContent = await page.content();

  const prompt = `Extract the username, password fields, and login button selectors from this HTML:\n${pageContent}`;

  // Generate AI response using Gemini
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  console.log("Gemini Output:", text);

  const selectors = JSON.parse(text);

  await page.fill(selectors.usernameSelector, "your_username");
  await page.fill(selectors.passwordSelector, "your_password");
  await page.click(selectors.loginButtonSelector);

//   await expect(page).toHaveURL("https://example.com/dashboard");
});
