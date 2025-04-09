import { Locator, Page } from "@playwright/test";

export default class NavigationBar {
  readonly page: Page;
  readonly logo: Locator;
  readonly homeButton: Locator;
  readonly categoriesDropdown: Locator;
  readonly contactButton: Locator;
  readonly signInButton: Locator;
  readonly languageDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole("link", { name: "'Practice Software Testing - Toolshop"} );
    this.homeButton = page.getByRole("link", { name: "Home"} );
    this.categoriesDropdown = page.getByRole("link", { name: "Categories"} );
    this.contactButton = page.getByRole("link", { name: "Contact"} );
    this.signInButton = page.getByRole("link", { name: "Sign in"} );
    this.languageDropdown = page.locator("#language");
  }
}
