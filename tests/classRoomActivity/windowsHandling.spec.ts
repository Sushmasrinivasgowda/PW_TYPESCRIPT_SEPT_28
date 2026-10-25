
import { test } from '@playwright/test';

test('Handle a single child window and interact with elements in the child page', async ({ page, context }) => {

  await page.goto('https://www.leafground.com/window.xhtml');
 
  console.log('Parent Page Title:', await page.title());

  const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByText('Open', { exact: true }).click()
  ]);

  await childPage.waitForLoadState('domcontentloaded');
 
  console.log('Child Page Title:', await childPage.title());

  await childPage
    .getByPlaceholder('E-mail Address', { exact: true })
    .fill('sushmars@gmail.com');

  await childPage
    .getByPlaceholder('Write your message...', { exact: true })
    .fill('Learning Playwright Window Hnadling ');

});
