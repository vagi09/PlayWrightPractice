import { test, expect,page } from "@playwright/test";
const openai  = require('E:/PlayWrightPractice/configuration/openaiClient')




test('login Page', async({page})=>{

    // Use OpenAI to generate test input
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo', // You can also use gpt-4 or other models
    messages: [{ role: 'system', content: 'Generate a valid username and password for testing a login page' }],
  });

  // Parse AI-generated response
  const aiGeneratedText = response.choices[0].message.content.trim();
  console.log(`AI-generated credentials: ${aiGeneratedText}`);

  // Assuming AI generates "username: student, password: Password123"
  const [username, password] = aiGeneratedText
    .replace('username:', '')
    .replace('password:', '')
    .split(',')
    .map((str) => str.trim());

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill(username);

    await page.locator('#password').fill(password);

    await page.locator('#submit').click();



})