import { Page, Locator } from "@playwright/test";

export class UserManagementMenu {

    readonly page: Page;
    readonly userManagement: Locator;
    readonly usersOption: Locator;

    constructor(page: Page) {
    this.page = page;
    this.userManagement = page.getByRole('navigation').getByText('User Management');    
    this.usersOption = page.getByRole("menuitem", { name: "Users" });
    }

   

   
    
    clickOnUsers = async () => {
        await this.userManagement.click()      
        await this.usersOption.click()
    }
}
