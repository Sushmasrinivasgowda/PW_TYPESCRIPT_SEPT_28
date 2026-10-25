import test, { expect } from "playwright/test"

test('Upload image without clicking Upload button',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/upload')

// Locate the hidden input used by the red dropzone area
const inputLocator = page.locator('input.dz-hidden-input');

// Supply the image file to that input
await inputLocator.setInputFiles('Data/Women.png');

// Assert that the uploaded filename is displayed
let uplodAssertion = await expect(page.getByText('Women.png')).toBeVisible();
console.log('file uploded',uplodAssertion)
})











