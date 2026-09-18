import { Page, Locator } from "@playwright/test";
export class JobMenu{

    readonly page:Page
    readonly jobOption:Locator
    readonly jobTitleOption:Locator
    readonly payGradesOption:Locator
    readonly employmentStatusOption:Locator
    readonly jobCategoriesOption:Locator
    readonly workShiftsOption:Locator



    constructor(page:Page){
            this.page=page
            this.jobOption = page.getByRole('navigation').getByText("Job")
            this.jobTitleOption = page.getByRole('menuitem',{name:"Job Title"})
            this.payGradesOption = page.getByRole('menuitem',{name:"Pay Grades"})
            this.employmentStatusOption = page.getByRole('menuitem',{name:"Employment Status"})
            this.jobCategoriesOption = page.getByRole('menuitem',{name:"Job Categories"})
            this.workShiftsOption = page.getByRole('menuitem',{name:"Work Shifts"})
            
            
            
        }

        

    


    clickOnJobTitleOption = async () => {
        await this.jobOption.click()
        await this.jobTitleOption.click()
    }

    ClickOnPayGradesOption = async () => {
        await this.jobOption.click()
        await this.payGradesOption.click()
    }

    clickOnEmploymentStatusOption = async () => {
        await this.jobOption.click()
        await this.employmentStatusOption.click()
    }

    clickOnWorkShiftsOption = async () => {
        await this.jobOption.click()
        await this.workShiftsOption.click()
    }

    clickOnJobCategoriesOption= async () => {
        await this.jobOption.click()
        await this.jobCategoriesOption.click()
    }


}