// commonUtils.ts

import { BrowserContext, Page } from '@playwright/test';

export async function navigateToURL(context: BrowserContext, url: string) {
  const page = await context.newPage();
  await page.goto(url);
  return page;
}
