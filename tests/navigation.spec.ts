import {test, expect} from 'playwright/test'

test('Left menu items in Orange',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await expect (page.getByRole('link', {name:'Admin'})).toBeVisible()

    const leftMenuListItem= page.getByLabel('Sidepanel').getByRole('listitem')

    const listItemCount = await leftMenuListItem.count()
    const menuItemTexts : string[]=[]
    for (let i=0;i<listItemCount;i++){
        const menuText = await leftMenuListItem.nth(i).innerText()
        menuItemTexts.push(menuText)

    }
    console.log(menuItemTexts)

    const expectedListItem = [
        'Admin',
        'PIM',
        'Leave',
        'Time',
        'Recruitment',
        'My Info',
        'Performance',
        'Dashboard',
        'Directory',
        'Maintenance',
        'Claim',
        'Buzz'
    ]

    expect (menuItemTexts).toEqual(expectedListItem)
    expect (expectedListItem[0]).toEqual('Admin')
})

test('Click in menu options', async({page})=>{
    test.setTimeout(90000)
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await expect (page.getByRole('link', {name:'Admin'})).toBeVisible()

    const leftMenuListItem= page.getByLabel('Sidepanel').getByRole('listitem')

    const listItemCount = await leftMenuListItem.count()

    for(let i=0;i<listItemCount;i++){
        const menuItem = leftMenuListItem.nth(i)
        const menuText = await menuItem.innerText()
        console.log(menuText)
         await menuItem.click()
        if(menuText =='Maintenance'){
         await page.goBack()
          }
    }


    })