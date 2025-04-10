import { test, expect } from "../../PageObjectModels/PomFixtures";
import PathHelper from "../../utils/PathHelper";

test.use({ storageState: PathHelper.ConstantPaths.COOKIE });

test.describe(
    "View single product information",
    { tag: ["@authenticated", "@ui"] },
    () => {
        test.beforeEach(async ({ homePage }) => {
            await homePage.navigateAsync();
        });

        // Fake tests
        test(
            "Single product information can be reviewed by customer #1",
            { tag: "@productInfo1" },
            async ({ page, homePage }) => {
                let products = await page.locator("div.col-md-9");
                await products
                    .getByRole("link", { name: "Combination Pliers" })
                    .click();
            }
            // Add expectation
        );

        test(
            "Single product information can be reviewed by customer #2",
            { tag: "@productInfo2" },
            async ({ page, homePage }) => {
                let products = await page.locator("div.col-md-9");
                await products
                    .getByRole("link", { name: "Pliers" })
                    .nth(1)
                    .click();
            }
            // Add expectation
        );
    }
);
