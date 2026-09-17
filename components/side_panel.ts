import { Page, Locator } from "@playwright/test";
  
export class SidePanel {
  readonly page : Page

  constructor(page: Page) {
        this.page = page;

  }

  //devuelve el localizador del elemento del menú lateral según la opción proporcionada

  private menuOption(option: SideMenuOption):Locator{
      return this.page.getByRole('link', { name: option });
  }


   async clickOnOption(option: SideMenuOption){
    await this.menuOption(option).click();
  }

}
//enumeración

  export enum SideMenuOption{
    ADMIN="Admin",
    PIM="PIM",
    LEAVE="Leave",
    TIME="Time",
    RECRUITMENT="Recruitment",
    MY_INFO="My Info",
    PERFORMANCE="Performance",
    DASHBOARD="Dashboard",
    DIRECTORY="Directory",
    MAINTENANCE="Maintenance",
  }

