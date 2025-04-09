// @ts-check
import { defineConfig, devices } from "@playwright/test";
import fileSystem from "fs";

import dotenv from "dotenv";
import path from "path";
// Check if .env.local exists and load it, otherwise load .env
const envPath = path.resolve(__dirname, ".env.local");
const envLocalExists = fileSystem.existsSync(envPath);

if (envLocalExists) {
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
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});
