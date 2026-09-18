//sostiene los demas componentes del top bar menu
import { Page } from "@playwright/test";
import { JobMenu } from "./jobMenu"
import { UserManagementMenu } from "./userManagementMenu"
import { Organization } from "./organization"  
import {Qualifications } from "./qualifications"




export class TopBarMenu{

    readonly page:Page
    readonly userManagement:UserManagementMenu
    readonly job:JobMenu
    readonly organization:Organization
    readonly qualifications:Qualifications
    //readonly nationalities:Nationalities
   // readonly corporateBranding:CorporateBranding
   // readonly configuration:Configuration


    constructor(page:Page){
        this.page=page
        this.userManagement=new UserManagementMenu(page)
        this.job=new JobMenu(page)
        this.organization = new Organization(page)
        this.qualifications = new Qualifications(page)
      //  this.nationalities = new Nationalities(page)
      //  this.corporateBranding = new CorporateBranding(page)
      //  this.configuration = new Configuration(page)
    }
}

