import { Locator, Page } from "@playwright/test";
import NavigationBar from "../Components/NavigationBar";

export default abstract class BasePage {
  protected readonly page: Page;
  readonly navigationBar: NavigationBar;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = new NavigationBar(page);
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
  }
}
