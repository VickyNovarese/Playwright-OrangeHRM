import{Page, Locator} from 'playwright/test';


export class Organization{

    readonly page:Page
    readonly organizationOption:Locator
    readonly generalInformation:Locator
    readonly locations:Locator
    readonly structure:Locator

    constructor (page:Page){
        this.page=page
        this.organizationOption= page.getByRole('navigation').getByText("Organization")
        this.generalInformation= page.getByRole('menuitem',{name:'General Information'})
        this.locations = page.getByRole('menuitem',{name:'Locations'})
        this.structure = page.getByRole('menuitem',{name:'Structure'})
    }

    
    
    clickOnGeneralInformation = async () => {
        await this.organizationOption.click()       
        await this.generalInformation.click()
    }

    clickOnLocations = async () => {
        await this.organizationOption.click()     
        await this.locations.click()
    }

    clickOnStructure = async () => {
        await this.organizationOption.click()    
        await this.structure.click()
    }

}