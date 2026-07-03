import { test, expect } from '@playwright/test';

test('Verify all broken links on a webpage', async ({ page, request }) => {
    await page.goto('https://demo.nopcommerce.com/'); // Replace with your URL

    // Get all anchor elements with href attributes using page.locator
    const linksLocator = page.locator('a[href]');
    const count = await linksLocator.count();
    
    console.log(`Total Links Found: ${count}`);

    for (let i = 0; i < count; i++) {
        const linkHandle = linksLocator.nth(i);
        const href = await linkHandle.getAttribute('href');

        if (!href || href.startsWith('#') || href.startsWith('javascript')) {
            continue; // Skip invalid links
        }

        let url = href;
        if (!href.startsWith('http')) {
            url = new URL(href, page.url()).href; // Convert relative URL to absolute
        }

        try {
            const response = await request.get(url);
            if (response.status() >= 400) {
                console.log(`❌ Broken Link: ${url} - Status: ${response.status()}`);
            } else {
                console.log(`✅ Working Link: ${url} - Status: ${response.status()}`);
            }
        } catch (error) {
            console.log(`⚠️ Error checking ${url}: ${error}`);
        }
    }
});
