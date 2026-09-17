import { Page, Locator } from "@playwright/test";

export class SideMenu {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly adminMenu: Locator;
  readonly pimMenu: Locator;
  readonly leaveMenu: Locator;
  readonly timeMenu: Locator;
  readonly recruitmentMenu: Locator;
  readonly myInfoMenu: Locator;
  readonly performanceMenu: Locator;
  readonly dashboardMenu: Locator;
  readonly directoryMenu: Locator;
  readonly maintenanceMenu: Locator;
  readonly claimMenu: Locator;
  readonly buzzMenu: Locator;

  
  
  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole("textbox", { name: "Search" });
    this.adminMenu = page.getByRole("link", { name: "Admin" });
    this.pimMenu = page.getByRole("link", { name: "PIM" });
    this.leaveMenu = page.getByRole("link", { name: "Leave" });
    this.timeMenu = page.getByRole("link", { name: "Time" });
    this.recruitmentMenu = page.getByRole("link", { name: "Recruitment" });
    this.myInfoMenu = page.getByRole("link", { name: "My Info" });
    this.performanceMenu = page.getByRole("link", { name: "Performance" });
    this.dashboardMenu = page.getByRole("link", { name: "Dashboard" });

    this.directoryMenu = page.getByRole("link", { name: "Directory" });
    this.maintenanceMenu = page.getByRole("link", { name: "Maintenance" });
    this.claimMenu = page.getByRole("link", { name: "Claim" });
    this.buzzMenu = page.getByRole("link", { name: "Buzz" });
  }
}
