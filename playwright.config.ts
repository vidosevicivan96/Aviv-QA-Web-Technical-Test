import { defineConfig, devices } from '@playwright/test'
// import path from 'path'
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
// export const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json')

export default defineConfig({
  testDir: './workspaces/e2e/e2e-tests/tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [
      'html', { open: 'never' }
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  //outputDir: 'C:/FailedUiTestsPwScreenshots',
  use: {
    launchOptions: {
      args: ["--start-maximized"]
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    //baseURL: 'https://example.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    headless: true
  },
  // General timeout per test
  timeout: 20000,
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { //...devices['Desktop Chrome'],
      viewport: null
      },
    }

  ],

})