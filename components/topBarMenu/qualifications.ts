import {Page, Locator} from "playwright/test"

export class Qualifications {

    readonly page:Page
    readonly qualifications : Locator
    readonly skillsOption : Locator
    readonly educationOption : Locator
    readonly licensesOption : Locator
    readonly languagesOption : Locator
    readonly membershipsOption : Locator


    constructor(page:Page) {
        this.page = page
        this.qualifications = page.getByRole('navigation').getByText("Qualifications")
        this.skillsOption= page.getByRole('menuitem',{name:"Skills"})
        this.educationOption = page.getByRole('menuitem',{name:"Education"})
        this.licensesOption = page.getByRole('menuitem',{name:"Licenses"})
        this.languagesOption = page.getByRole('menuitem',{name:"Languages"})
        this.membershipsOption = page.getByRole('menuitem',{name:"Memberships"})
    
    
    }
    
    
    clickOnSkills = async () => {
        await this.qualifications.click()      
        await this.skillsOption.click()
    }

    clickOnEducationOption = async () => {
        await this.qualifications.click()      
        await this.educationOption.click()
    }

    clickOnLicensesOption = async () =>{
        await this.qualifications.click()
        await this.licensesOption.click()
    }

    clickOnLanguagesOption = async () =>{
        await this.qualifications.click()
        await this.languagesOption.click()
    }

    clickOnMembershipsOption = async () =>{
        await this.qualifications.click()
        await this.membershipsOption.click()
    }

}