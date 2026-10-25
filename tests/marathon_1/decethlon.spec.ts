import {  test,expect  } from "@playwright/test";


test ("Automate Decathalon", async ({page}) => {

    await page.goto(" https://www.decathlon.in/")
    await expect(page).toHaveURL("https://www.decathlon.in/") //assertion for url
    const pageTitle = await page.title()
    console.log(pageTitle) // to get the page title
    await expect(page).toHaveTitle( "Buy Sporting Goods, Sportswear and Equipments | Download App" ) //assertion for page is displayed or not
    await expect(page.locator('//input[@type="search"]')).toBeEnabled() //assertion for search bar is enabled or not
    await page.locator('//input[@type="search"]').click() // to click the search bar
    await page.locator('//input[@type="search"]').fill("shoes") // to enter the value in the search bar
    await page.locator("//span[text()='Shoes']/following-sibling::span[text()='For Men']").click() // to click the shoes for men option
    const newPageTitle = await page.title()
    console.log(newPageTitle) // to get the new page title
    await expect(page).toHaveTitle("Decathlon Sports India")
    await page.locator('//button[@type="button"]/span[text()="Sport"]').click() // to click the sport button
    await page.locator('//span[text()="Running"]').click() // to click the running option
    await page.locator("//span[text()='Gender']").click() // to click the gender option
    await page.locator('//div[@id="gender_id_en"]//span[text()="Men"]').click() // to click the men option
    await page.locator('//span[text()="Size"]').click() // to click the size option
    await page.locator('//span[text()="11"]').click() // to click the size 11 option
    await page.locator("//img[@alt='Men Running Superior Grip Cushion Shoes, Jogflow 100 - Black']").click() // to click the first product
    await page.locator('//button[contains(@class,"hover:border-gray-400")]//span[text()="11"]').click() // to click the size 11 option
    await page.locator("//button[@data-test-id='pdp:add-to-cart-button']//span[@data-test-id='button-children']").click() // to click the add to cart button
    await page.locator('//div[@class="dy-lb-close"]').click() // to click the close button
    await page.locator("//button[@data-test-id='button']//span[@data-test-id='button-children']").click()
    await expect(page.locator("//div[@data-test-id='product-info']//span[text()='Men Running Superior Grip Cushion Shoes, Jogflow 100 - Black']")).toHaveText('Men Running Superior Grip Cushion Shoes, Jogflow 100 - Black')
    await page.waitForTimeout(5000)
})