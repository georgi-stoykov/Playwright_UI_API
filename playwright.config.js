// @ts-check
import { defineConfig, devices } from "@playwright/test";
import PathHelper from "./utils/PathHelper";
import dotenv from "dotenv";

const envPath = PathHelper.buildFilePathFromRoot([".env.local"]);

if (PathHelper.checkFileExists(envPath)) {
    console.log("Loading .env.local file");
    dotenv.config({ path: envPath, override: true });
} else {
    console.log("Loading default .env file");
    dotenv.config();
}

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: "html",
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        // baseURL: 'http://127.0.0.1:3000',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
        headless: false,
    },

    projects: [
        {
            name: "setup",
            testMatch: /.*\.setup\.ts/,
        },
        {
            name: "chromium",
            grep: /@ui/,
            dependencies: ["setup"],
            testDir: "./tests/UI",
            use: { ...devices["Desktop Chrome"] },
        },
        {
            name: "api",
            grep: /@api/,
            testMatch: /.*\.spec\.ts/,
            testDir: "./tests/API",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});
