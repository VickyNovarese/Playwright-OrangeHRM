import {test, expect} from 'playwright/test';
import { LoginPage } from '../pageObjects/loginPage';

const expectedEndpointsQualifications = [
{
    menu: 'Skills',
    url:'admin/viewSkills'
},
{
    menu: 'Education',
    url: 'admin/viewEducation'
},
{
    menu:'Licenses',
    url:'admin/viewLicenses'
},
{
    menu:'Languages',
    url:'admin/viewLanguages'
},
{
    menu:'Memberships',
    url:'admin/membership'
}
]

const expectedEndpointsOrganization = [
{
    menu: 'General Information',
    url:'admin/viewOrganizationGeneralInformation'
},
{
    menu: 'Locations',
    url: 'admin/viewLocations'
},
{
    menu:'Structure',
    url:'admin/viewCompanyStructure'
}
]

const expectedEndpointsJobs = [
{
    menu: 'Job Title',
    url:'admin/viewJobTitleList'
},
{
    menu: 'Pay Grades',
    url: 'admin/viewPayGrades'
},
{
    menu:'Employment Status',
    url:'admin/employmentStatus'
},

{
    menu:'job Categories',
    url:'admin/jobCategory'
},
{
    menu:'Work Shifts',
    url:'admin/workShift'
}


]

test.describe("",()=>{

    test.beforeEach("",async({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.login('Admin','admin123')    
    await page.getByRole('link', {name:'Admin'}).click()
    })

test('Verify qualifications menu options urls',async({page})=>{
    
    await page.getByRole('navigation').getByText('Qualifications').click()
   
    const qualificationsMenu = page.getByRole('menu').locator('li')
        
    for (let expectedEndpoint of expectedEndpointsQualifications){

        const menuOption = qualificationsMenu.filter({hasText:expectedEndpoint.menu})
        await menuOption.click()
        await expect (page).toHaveURL(new RegExp(expectedEndpoint.url))
        await page.getByRole('navigation').getByText('Qualifications').click()

    }
})


test('Verify Organization menu options urls',async({page})=>{
 
    await page.getByRole('navigation').getByText('Organization').click()
    
    const organizationMenu = page.getByRole('menu').locator('li')        
    for (let expectedEndpoint of expectedEndpointsOrganization){

        const menuOption = organizationMenu.filter({hasText:expectedEndpoint.menu})
        await menuOption.click()
        await expect (page).toHaveURL(new RegExp(expectedEndpoint.url))
        await page.getByRole('navigation').getByText('Organization').click()

    }
})

test('Verify Jobs menu options urls',async({page})=>{

    await page.getByRole('navigation').getByText('Job').click()    
    const jobsMenu = page.getByRole('menu').locator('li')
        
    for (let expectedEndpoint of expectedEndpointsJobs){

        const menuOption = jobsMenu.filter({hasText:expectedEndpoint.menu})
        await menuOption.click()
        await expect (page).toHaveURL(new RegExp(expectedEndpoint.url))
        await page.getByRole('navigation').getByText('Job').click()

    }
})

})