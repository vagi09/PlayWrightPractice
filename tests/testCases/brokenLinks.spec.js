import { test, expect } from '@playwright/test';

test('Verify all broken links on a webpage', async ({ page, request }) => {
    await page.goto('https://demo.nopcommerce.com/'); // Replace with your target URL

    // Get all anchor elements with href attributes
    const links = await page.$$eval('a[href]', anchors =>
        anchors.map(a => a.getAttribute('href')).filter(href => href && !href.startsWith('#') && !href.startsWith('javascript'))
    );

    console.log(`Total Links Found: ${links.length}`);

    for (const link of links) {
        let url = link;
        
        // Convert relative URL to absolute URL
        if (!link.startsWith('http')) {
            url = new URL(link, page.url()).href;
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
