import { test, expect } from "@playwright/test";
import Env from "../../utils/Env";
import BasePage from "../../WebElements/Pages/BasePage";

test("Authenticate user", async ({ page }) => {
    let basePage = new BasePage(page);
    await basePage.navigate(Env.BaseUrl)
    await basePage.navigationBar.signInButton.click()
});
