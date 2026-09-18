import{test,expect} from 'playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { TopBarMenu } from '../components/topBarMenu/topBarMenu';

declare const process: {
  env: Record<string, string | undefined>
}
test('Get all username', async ({page})=>{

        const loginPage = new LoginPage(page)
        await loginPage.login('Admin','admin123')
        await expect (page.getByRole('link', {name:'Admin'})).toBeVisible()
        await page.getByRole('link', {name:'Admin'}).click()
        await page.getByRole('navigation').getByText('User Management').click()
        await page.getByRole('menuitem').click()

        const rows= page.getByRole('table').getByRole(('row'))
        const username : string[] =[] 
        const rowCount = await rows.count()
        console.log("Filas encontradas:", await rows.count());

        for (let i=1;i<rowCount;i++){
            const cell = rows.nth(i).getByRole('cell').nth(1)
            const usernameContent = await cell.textContent()
            if (usernameContent){
                username.push(usernameContent)
            }
        }
        console.log(username)

    })


    test('Get all Employee Name', async ({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByRole('textbox',{name:'Username'}).fill('Admin')
        await page.getByRole('textbox',{name:'Password'}).fill('admin123')
        await page.getByRole('button', {name:'Login'}).click()
        await expect (page.getByRole('link', {name:'Admin'})).toBeVisible()
        await page.getByRole('link', {name:'Admin'}).click()
        await page.getByRole('navigation').getByText('User Management').click()
        await page.getByRole('menu').click()

        const rows= page.getByRole('table').getByRole(('row'))
        const employeeName : string[] =[] 
        const rowCount = await rows.count()

        for (let i=1;i<rowCount;i++){
            const cell = rows.nth(i).getByRole('cell').nth(3)
            const employeeContent = await cell.textContent()
            if (employeeContent){
                employeeName.push(employeeContent)
            }
        }
        console.log(employeeName)

    })


    test ("Testing Menu options using POM", async({page})=>{
        
        const username = process.env.ADMIN_USERNAME??""
        const password = process.env.ADMIN_PASSWORD??""
        test.setTimeout(90_000)
        const loginPage = new LoginPage(page)
        await loginPage.login(username,password)
        await expect(page.getByRole('link', {name:'Admin'})).toBeVisible()
        await page.getByRole('link', {name:'Admin'}).click()
        const topBarMenu = new TopBarMenu(page)      
        await topBarMenu.userManagement.clickOnUsers()
        await expect (page.getByRole('heading', {name:"System Users"})).toBeVisible()
        await topBarMenu.job.clickOnJobTitleOption()
        await expect (page.getByRole('heading', {name:"Job Titles"})).toBeVisible()
        await topBarMenu.job.ClickOnPayGradesOption()
        await expect (page.getByRole('heading', {name:"Pay Grades"})).toBeVisible()
        await topBarMenu.job.clickOnEmploymentStatusOption()
        await expect (page.getByRole('heading', {name:"Employment Status"})).toBeVisible()
        await topBarMenu.job.clickOnJobCategoriesOption()
        await expect (page.getByRole('heading', {name:"Job Categories"})).toBeVisible()
        await topBarMenu.job.clickOnWorkShiftsOption()
        await expect (page.getByRole('heading', {name:"Work Shifts"})).toBeVisible()        
        await topBarMenu.organization.clickOnGeneralInformation()
        await expect (page.getByRole('heading', {name:"General Information"})).toBeVisible()   
        await topBarMenu.organization.clickOnLocations()
        await expect (page.getByRole('heading', {name:"Locations"})).toBeVisible()
        await topBarMenu.organization.clickOnStructure()
        await expect (page.getByRole('heading', {name:"Organization Structure"})).toBeVisible()
        await topBarMenu.qualifications.clickOnSkills()
        await expect (page.getByRole('heading', {name:"Skills"})).toBeVisible()
        await topBarMenu.qualifications.clickOnEducationOption()
        await expect (page.getByRole('heading', {name:"Education"})).toBeVisible()
        await topBarMenu.qualifications.clickOnLicensesOption()
        await expect (page.getByRole('heading', {name:"Licenses"})).toBeVisible()
        await topBarMenu.qualifications.clickOnLanguagesOption()
        await expect (page.getByRole('heading', {name:"Languages"})).toBeVisible()
        await topBarMenu.qualifications.clickOnMembershipsOption()
        await expect (page.getByRole('heading', {name:"Memberships"})).toBeVisible()


    })