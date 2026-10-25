import {chromium, test,expect } from "@playwright/test"
import { channel } from "node:diagnostics_channel"

test('lanching PVR Cenimas browser', async()=>{
    const browser = await chromium.launch({channel :'msedge'})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.pvrcinemas.com/ ')
    const arrow = page.locator(
  '.show-desktop-view .custom-dropdown-arrow'
    );
    console.log('Arrow count:', await arrow.count());
    
    const trigger = page.locator(
  '.show-desktop-view .p-dropdown-trigger'
    );

    console.log('Trigger count:', await trigger.count());
    await trigger.click();
    const cityWindow = page.getByText('Select City', { exact: true });
    // console.log('City window count:', await cityWindow.count());
    // console.log('City window visible:', await cityWindow.isVisible());
    const cityName = page.getByRole('heading', {
    name: 'Bengaluru',
    exact: true
  });

  await expect(cityName).toBeVisible({ timeout: 10000 });
  await cityName.click();
    // console.log('City name:', cityName);
    const movie = page.getByText('PREMADA OORALI', {
    exact: true
    });

    // console.log('Movie matches:', await movie.count());
    
  const movie1 = page.locator('h2').getByText('PREMADA OORALI', {
  exact: true
});

// console.log('Movie count:', await movie1.count());
    await movie1.click();
    console.log('Current URL:', page.url());
    console.log('Page title:', await page.title());
    console.log('Calendar locator count:',
    // await page.locator('.calendar-current-for-desktop').count()
    );
    const calendar = page.locator('.calender-current.fordesktop');

    console.log('Calendar count:', await calendar.count());
    console.log(
    'Date container count:',
    await page.locator('.date-fix-moviesession').count()
    );
    console.log(
    'Calendar count:',
    await page.locator('.date-fix-moviesession .calender-current.fordesktop').count()
    );

    // console.log('Available dates:', await dates.allTextContents());
    const dateContainer = page.locator('.date-fix-moviesession');
    const dates = dateContainer.locator('li');

    await dates.nth(1).click();

    console.log('Selected date:', await dates.nth(1).innerText());
    const theater = page.getByText('PVR GT World Mall Magadi Road', {
    exact: true
    });
    const theaterSection = page
    .locator('.box-listed-cinema')
    .filter({ has: page.getByText('PVR GT World Mall Magadi Road', { exact: true }) });

    console.log('Theater section count:', await theaterSection.count());

    await theater.scrollIntoViewIfNeeded();

    console.log('Theater count:', await theater.count());

    console.log(
    'Theater element details:',
    await theater.evaluate(el => ({
        tag: el.tagName,
        className: el.className,
        parentClass: el.parentElement?.className,
        grandparentClass: el.parentElement?.parentElement?.className
    }))
    );

    await page.getByText('09:30 PM').click() // to select the time from the dropdown
    await page.locator('//button[contains(@type,"submit")]/span[(text()="Book")]').click() // to click the book button
    await page.getByText('Accept').click() // to click the accept button
    await page.locator('//span[@id="EX.Executive|N:7"]').click() // to select the seat from the seat dropdown
    await expect(page.locator('//span[@id="EX.Executive|N:7"]')).toBeVisible() // to verify the seat is selected or not
    await expect(page.getByText('361.92')).toHaveText('361.92') // to verify the total amount is correct or not
    const pageTitle = await page.title()
    console.log(pageTitle) 
    expect(pageTitle).toBe('PVR Cinemas') // to get the page title
    await page.getByText('Proceed').click() // to click the proceed button
    await page.waitForTimeout(5000)
    })

