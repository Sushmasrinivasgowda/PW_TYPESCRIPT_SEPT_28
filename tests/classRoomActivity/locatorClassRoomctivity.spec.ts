import test,{expect} from "@playwright/test"

test ('Playwright Locator for leafstaps application',async({page})=>{
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByText('USERNAME').fill('democsr');
    await page.getByLabel('Password').fill('crmsfa');
    await page.getByRole('button').click()
    await page.waitForTimeout(20000)
}
)














