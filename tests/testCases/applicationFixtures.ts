/* eslint-disable @typescript-eslint/no-unused-vars */
// Above is required for Playwright fixtures

import { test as base, expect, Browser, Page } from '@playwright/test';
import { MainPage } from './mainPage';
import { logInfo, testConfig } from '@oncall/apitesting';
import { rm, stat } from 'fs/promises';

const testContexts = new Map<
  string,
  {
    isMobileUnit?: boolean;
    isRecords?: boolean;
    isDispatchPrimary?: boolean;
  }
>([
  ['dispatchPrimary', { isDispatchPrimary: true },],
  ['dispatchSecondary', {}],
  ['dispatchviewer', {}],
  [
    'recordsPrimary',
    {
      isRecords: true,
    },
  ],
  [
    'mobilePrimary',
    {
      isMobileUnit: true,
    },
  ],
  [
    'mobileSecondary',
    {
      isMobileUnit: true,
    },
  ],
  [
    'mobileSupervisor',
    {
      isMobileUnit: true,
    },
  ],
]);

interface Fixture {
  dispatchPrimary: MainPage;
  dispatchPrimaryMultiPage: {
    createNewPage: () => Promise<Page>;
  };
  recordsPrimary: MainPage;
  recordsPrimaryMultiPage: {
    createNewPage: () => Promise<Page>;
  };

  recordsPrimaryStorageState: {
    storageState: string;
  };

  dispatchviewer: MainPage;
  dispatchviewerMultiPage: {
    createNewPage: () => Promise<Page>;
  };

  dispatchviewerStorageState: {
    storageState: string;
  };

  dispatchSecondaryMultiPage: {
    createNewPage: () => Promise<Page>;
  };
  dispatchPrimaryStorageState: {
    storageState: string;
  };
  dispatchSecondary: MainPage;
  dispatchSecondaryStorageState: {
    storageState: string;
  };

  mobilePrimary: MainPage;
  mobilePrimaryMultiPage: {
    createNewPage: () => Promise<Page>;
  };

  mobilePrimaryStorageState: {
    storageState: string;
  };
  mobileSecondary: MainPage;
  mobileSecondaryMultiPage: {
    createNewPage: () => Promise<Page>;
  };
  mobileSecondaryStorageState: {
    storageState: string;
  };
  mobileSupervisor: MainPage;
}

const test = base.extend<Fixture>({
  dispatchPrimary: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'dispatchPrimary',
      browser,
      use,
    });
  },
  dispatchPrimaryMultiPage: async ({ browser }, use) => {
    await createApplicationPageFactory({
      testContext: 'dispatchPrimary',
      browser,
      use,
    });
  },
  dispatchSecondaryMultiPage: async ({ browser }, use) => {
    await createApplicationPageFactory({
      testContext: 'dispatchSecondary',
      browser,
      use,
    });
  },
  dispatchSecondary: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'dispatchSecondary',
      browser,
      use,
    });
  },
  dispatchPrimaryStorageState: async ({ browser }, use) => {
    const { storageState } = await createAuthenticatedContext({
      testContext: 'dispatchPrimary',
      browser,
    });
    await use({ storageState });
  },
  dispatchSecondaryStorageState: async ({ browser }, use) => {
    const { storageState } = await createAuthenticatedContext({
      testContext: 'dispatchSecondary',
      browser,
    });
    await use({ storageState });
  },
  mobilePrimary: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'mobilePrimary',
      browser,
      use,
    });
  },
  mobilePrimaryMultiPage: async ({ browser }, use) => {
    await createApplicationPageFactory({
      testContext: 'mobilePrimary',
      browser,
      use,
    });
  },
  mobilePrimaryStorageState: async ({ browser }, use) => {
    const { storageState } = await createAuthenticatedContext({
      testContext: 'mobilePrimary',
      browser,
    });
    await use({ storageState });
  },

  recordsPrimary: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'recordsPrimary',
      browser,
      use,
    });
  },
  recordsPrimaryMultiPage: async ({ browser }, use) => {
    await createApplicationPageFactory({
      testContext: 'recordsPrimary',
      browser,
      use,
    });
  },
  recordsPrimaryStorageState: async ({ browser }, use) => {
    const { storageState } = await createAuthenticatedContext({
      testContext: 'recordsPrimary',
      browser,
    });
    await use({ storageState });
  },


  dispatchviewer: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'dispatchviewer',
      browser,
      use,
    });
  },
  dispatchviewerMultiPage: async ({ browser }, use) => {
    await createApplicationPageFactory({
      testContext: 'dispatchviewer',
      browser,
      use,
    });
  },
  dispatchviewerStorageState: async ({ browser }, use) => {
    const { storageState } = await createAuthenticatedContext({
      testContext: 'dispatchviewer',
      browser,
    });
    await use({ storageState });
  },

  mobileSecondary: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'mobileSecondary',
      browser,
      use,
    });
  },
  mobileSecondaryMultiPage: async ({ browser }, use) => {
    await createApplicationPageFactory({
      testContext: 'mobileSecondary',
      browser,
      use,
    });
  },
  mobileSecondaryStorageState: async ({ browser }, use) => {
    const { storageState } = await createAuthenticatedContext({
      testContext: 'mobileSecondary',
      browser,
    });
    await use({ storageState });
  },
  mobileSupervisor: async ({ browser }, use) => {
    await createApplicationPage({
      testContext: 'mobileSupervisor',
      browser,
      use,
    });
  },
});

async function deleteExistingStorageStateFiles() {
  logInfo('Removing existing storage state files.');
  for (const context of testContexts.keys()) {
    const storageStateFileName = getStorageStateFileName(context);
    await deleteFileIfExists(storageStateFileName);
  }
}

function addUrlPath(url: string, path: string) {
  return [url.replace(/\/$/, ''), path.replace(/^\//, '')].join('/');
}

function getStorageStateFileName(testContext: string) {
  return storageState.${testContext}.json;
}

async function fileExists(fileName: string) {
  try {
    const details = await stat(fileName);
    return details.isFile();
  } catch {
    return false;
  }
}

const MSECS_PER_MINUTE = 1000 * 60;

async function deleteFileIfExists(fileName: string) {
  const exists = await fileExists(fileName);
  if (exists) {
    const { playwrightTests: { minutesToKeepSessionData = 0 } = {} } =
      testConfig();
    let shouldDeleteFile = true;
    if (minutesToKeepSessionData > 0) {
      const stats = await stat(fileName);
      const ageInMinutes =
        (new Date().getTime() - new Date(stats.mtime).getTime()) /
        MSECS_PER_MINUTE;
      shouldDeleteFile = ageInMinutes > minutesToKeepSessionData;
    }
    if (shouldDeleteFile) {
      logInfo(  Deleting storage state ${fileName});
      await rm(fileName);
    }
  }
}

async function createAuthenticatedContext(options: {
  testContext: string;
  browser: Browser;
}) {
  const { testContext, browser } = options;
  const testContextDetails = testContexts.get(testContext);
  if (!testContextDetails) {
    throw new Error(Invalid context name: ${testContext});
  }

  const storageState = getStorageStateFileName(testContext);
  const { applicationUsers, baseUrl, adEnabled, rmsUrl } = testConfig();
  const mainUrl = testContextDetails.isMobileUnit
    ? addUrlPath(baseUrl, '/mobileunit/')
    : testContextDetails.isRecords
      ? rmsUrl
      : baseUrl;

  /*  const mainUrl1 = testContextDetails.isRecordUnit
    ? addUrlPath(rmsUrl, '/webrms/')
    : baseUrl;
*/

  const testUser = applicationUsers[testContext];
  if (!testUser) {
    throw new Error(User details not found for context name: ${testContext});
  }

  if (!(await fileExists(storageState))) {
    logInfo(Logging in for context ${testContext} ...);

    const { userId, password, unitId } = testUser;

    const context = await browser.newContext({
      recordVideo: {
        dir: 'videos/',
        size: {
          width: 640,
          height: 480,
        },
      },
    });
    const page = await context.newPage();

    await Promise.all([page.waitForNavigation(), page.goto(mainUrl)]);

    if (adEnabled === true) {
      await page.fill(//input[@type="email"], process.env.USERID);
      await page.waitForTimeout(1000);
      await page.click(//input[@type="submit"]);
      await page.waitForTimeout(1000);
      await page.fill(//input[@name="passwd"], atob(process.env.PASSWORD));
      await page.waitForTimeout(1000);
      await page.click(//input[@type="submit"]);
      await page.waitForTimeout(1000);
      await page.click(//input[@id="idBtn_Back"]);
      await page.waitForTimeout(1000);
    } else {
      await page.fill('input[name="username"]', userId);
      await page.press('input[name="username"]', 'Tab');
      await page.fill('input[name="password"]', password);
      await page.click('text=Log In');
      await page.waitForTimeout(8000);
    }

    if (testContextDetails.isMobileUnit) {
      await page.fill('input[label="Unit ID"]', unitId);
    }

    if (testContextDetails.isDispatchPrimary) {
      await page.locator(//div[@class="hxgn-inner-select__input"]//input).fill(applicationUsers.dispatchPrimary.positionId);
      await page.waitForTimeout(3000);
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");

    }

    if (
      (await page.locator(//button[text()='Continue']).isVisible()) == true
    ) {
      await page.click('text=Continue', {
        timeout: 13 * 60 * 1000,
      });

      await page.waitForNavigation({
        timeout: 13 * 60 * 1000,
      });
      /*
      await page.goto(mainUrl, {
        timeout: 9 * 60 * 1000,
      });
      */
    }

    /*await page.click('text=Continue', {
      timeout: 2 * 60 * 1000,
    });*/

    /* await page.waitForNavigation({
      timeout: 2 * 60 * 1000,
    });*/
    /* await page.goto(mainUrl, {
      timeout: 2 * 60 * 1000,
    });*/

    await page.context().storageState({ path: storageState });
    await page.close();
    await context.close();
  }

  return { storageState };
}

async function createApplicationPage(options: {
  testContext: string;
  browser: Browser;
  use: (r: MainPage) => Promise<void>;
}) {
  const { testContext, browser, use } = options;
  const { storageState } = await createAuthenticatedContext({
    testContext,
    browser,
  });

  const context = await browser.newContext({
    storageState,

    recordVideo: {
      dir: 'videos/',
      size: { width: 640, height: 480 },
    },
  });
  const mainPage = new MainPage({ page: await context.newPage() });
  await use(mainPage);
  await mainPage.page.close();
  await context.close();
}

async function createApplicationPageFactory(options: {
  testContext: string;
  browser: Browser;
  use: (r: { createNewPage: () => Promise<Page> }) => Promise<void>;
}) {
  const { testContext, browser, use } = options;

  const { storageState } = await createAuthenticatedContext({
    testContext,
    browser,
  });

  const context = await browser.newContext({
    storageState,

    recordVideo: {
      dir: 'videos/',
      size: { width: 640, height: 480 },
    },
  });
  const pagesCreated: Page[] = [];
  const createNewPage = async () => {
    const page = await context.newPage();
    pagesCreated.push(page);
    return page;
  };
  await use({
    createNewPage,
  });
  await Promise.all(pagesCreated.map((page) => page.close()));
  await context.close();
}

export { test, expect, deleteExistingStorageStateFiles };