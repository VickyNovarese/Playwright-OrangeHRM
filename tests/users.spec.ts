import{test,expect} from 'playwright/test';

test('Get all username', async ({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await page.getByRole('textbox',{name:'Username'}).fill('Admin')
        await page.getByRole('textbox',{name:'Password'}).fill('admin123')
        await page.getByRole('button', {name:'Login'}).click()
        await expect (page.getByRole('link', {name:'Admin'})).toBeVisible()
        await page.getByRole('link', {name:'Admin'}).click()
        await page.getByRole('navigation').getByText('User Management').click()
        await page.getByRole('menuitem').click()

        const rows= page.getByRole('table').getByRole(('row'))
        const username : string[] =[] 
        const rowCount = await rows.count()

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
        await page.getByRole('menuitem').click()

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