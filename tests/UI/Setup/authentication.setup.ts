import { test as setup } from "../../../PageObjectModels/PomFixtures";
import Env from "../../../utils/Env";

setup(
    "Authenticate user as customer",
    { tag: "@setup" },
    async ({ page, context, homePage, signInPage }) => {
        const customerAuthFilePath = "../../../utils/customerAuthToken.json";
        await homePage.navigate();
        await homePage.navigationBar.signInButton.click();
        await signInPage.login(Env.CustomerEmail, Env.CustomerPassword);
        await context.storageState({ path: customerAuthFilePath });
        page.close();
    }
);
