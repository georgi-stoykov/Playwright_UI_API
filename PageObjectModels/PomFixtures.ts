import { test as playwrightTestObj } from "@playwright/test";
import HomePage from "./Pages/HomePage";
import SignInPage from "./Pages/SignInPage";

type customPageTypes = {
    homePage: HomePage;
    signInPage: SignInPage;
};

const customPages = playwrightTestObj.extend<customPageTypes>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },
});

export const test = customPages;
export const expect = customPages.expect;
