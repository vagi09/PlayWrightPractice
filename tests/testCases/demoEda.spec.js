// playwright-eda.spec.js

const { chromium } = require('playwright');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// Define event listeners
myEmitter.on('newBuildDeployed', async () => {
    console.log('Running tests for the new build...');
    await runTests();
});

myEmitter.on('testFailed', (testName) => {
    console.log(`Test failed: ${testName}. Notifying team...`);
    // Add your notification logic here
});

// Function to run Playwright tests
async function runTests() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
        // Add your test steps here
        const title = await page.title();
        console.log("title: " + title)
        if (title !== 'Test Login | Practice Test Automation') {
            throw new Error('Title does not match!');
        }
        console.log('Test passed!');
    } catch (error) {
        console.error(error);
        myEmitter.emit('testFailed', 'Example Test'); // Emit event on failure
    } finally {
        await browser.close();
    }
}

// Simulate a new build deployment
myEmitter.emit('newBuildDeployed');

// Run your script using Node.js
