import {test,expect} from "@playwright/test"

test('Learning Assersions', async({ page })=>{


    await page.goto('https://leafground.com/input.xhtml')
    const disableTextbox = page.getByPlaceholder('Disabled')
    await expect(disableTextbox).toBeDisabled();
    const enableTextbox = page.getByPlaceholder('Babu Manickam')
    await expect(enableTextbox).toBeEditable();
    const checkSoftAsserstion = page.getByPlaceholder('About Yourself')
    await expect.soft(checkSoftAsserstion).toBeDisabled();
    console.log('Assertion completed successfully');
    // const entervalue = page.getByPlaceholder('Channai')
    // await expect(enableTextbox).toBeEditable()
    await page.locator('input[value="Chennai"]').fill('Bangalore',{timeout : 10000})
    
}
)