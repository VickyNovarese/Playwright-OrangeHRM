import {test, expect} from 'playwright/test'

test('login Orange',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await expect (page.getByRole('link', {name:'Admin'})).toBeVisible()
})

test('Invalid Login',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin1')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()

    const message = await page.getByRole('alert').textContent()
    expect (message).toEqual('Invalid credentials')
    
})

test('Invalid Login empty data',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const username = page.getByRole('textbox',{name:'Username'})
    await page.getByRole('button', {name:'Login'}).click()
        
    await expect (username).toHaveClass('oxd-input oxd-input--active oxd-input--error')
    await expect (page.getByText('Required').first()).toBeVisible()
    await expect (page.getByText('Required').last()).toBeVisible()    

    
})

test('Invalid Login wrong password',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByRole('textbox',{name:'Username'}).fill('Admin')
    await page.getByRole('textbox',{name:'Password'}).fill('admin')
    await page.getByRole('button', {name:'Login'}).click()
    const message = await page.getByRole('alert').textContent()
    expect (message).toEqual('Invalid credentials')    
    
})

test('Invalid Login empty username',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const username = page.getByRole('textbox',{name:'Username'})
    await page.getByRole('textbox',{name:'Username'}).fill('')
    await page.getByRole('textbox',{name:'Password'}).fill('admin123')
    await page.getByRole('button', {name:'Login'}).click()
    await expect (username).toHaveClass('oxd-input oxd-input--active oxd-input--error')
    await expect (page.getByText('Required').first()).toBeVisible()  
    
})

