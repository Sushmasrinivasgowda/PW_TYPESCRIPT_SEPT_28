

import {chromium, test} from "@playwright/test";
import { asyncWrapProviders } from "node:async_hooks";

test('learn to launch browser',async()=>{
    const browser = await chromium.launch({channel:'msedge',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})

test.only('launch browser using page fixture', async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForTimeout(2000)
}
)