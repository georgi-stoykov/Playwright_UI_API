import { Locator, Page } from "@playwright/test";
import BasePage from "./BasePage";
import Env from "../../utils/Env";

export default class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    override async navigateAsync(): Promise<void> {
        this.page.goto(Env.BaseWebUrl);
    }
}
