import { Locator, Page, expect } from "@playwright/test";
import BasePage from "./BasePage";
import Env from "../../utils/Env";
import * as path from "path";

export default class SignInPage extends BasePage {
    private email: Locator;
    private password: Locator;
    private submitBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.email = page.getByRole("textbox", { name: "Email address" });
        this.password = page.getByRole("textbox", { name: "Password" });
        this.submitBtn = page.getByRole("button", { name: "Login" });
    }

    async login(email: string, password: string) {
        await this.email.pressSequentially(email);
        await this.password.pressSequentially(password);
        await this.submitBtn.click();

        const accountUrl = new URL("account", Env.BaseUrl).toString();
        await expect(this.page).toHaveURL(accountUrl);
    }
}
