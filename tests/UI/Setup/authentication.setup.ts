import { test as setup, expect } from "../../../PageObjectModels/PomFixtures";
import Env from "../../../utils/Env";
import PathHelper from "../../../utils/PathHelper";

setup(
    "Authenticate user as customer",
    { tag: ["@setup", "@ui"] },
    async ({ page, context, homePage, signInPage }) => {
        await homePage.navigateAsync();
        await homePage.navigationBar.signInButton.click();
        await signInPage.loginAsync(Env.CustomerEmail, Env.CustomerPassword);

        const accountUrl = new URL("account", Env.BaseWebUrl).toString();
        await expect(page).toHaveURL(accountUrl);

        // store cookies
        await context.storageState({ path: PathHelper.ConstantPaths.COOKIE });
    }
);
