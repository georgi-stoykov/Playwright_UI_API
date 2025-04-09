import { Locator, Page } from "@playwright/test";

export default class NavigationBar {
  protected readonly page: Page;
  protected readonly logo: Locator;
  protected readonly homeButton: Locator;
//   protected readonly categoriesDropdown: Locator;
//   protected readonly contactButton: Locator;
//   protected readonly signInButton: Locator;
//   protected readonly languageDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole("button", { name: "'Practice Software Testing - Toolshop"} );
    this.homeButton = page.getByRole("button", { name: "'Practice Software Testing - Toolshop"} );
    // this.categoriesDropdown = page.locator();
    // this.contactButton = page.locator();
    // this.signInButton = page.locator();
    // this.languageDropdown = page.locator();
  }

  async getNavigationBar() {
    return this.page.locator("nav");
  }
}
