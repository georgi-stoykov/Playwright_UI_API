import { test, expect } from "@playwright/test";

test("Authenticate user", async ({page}) => {
    await page.goto(`${process.env.BaseUrl}`);
    page.pause();
});
