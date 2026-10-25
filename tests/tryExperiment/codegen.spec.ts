import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.getByText('Username Password Login').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.locator('#login')).toContainText('Username');
  await expect.soft(page.locator('#login')).toContainText('Pw');
  await expect(page.getByRole('heading')).toMatchAriaSnapshot(`- heading "Leaftaps Login" [level=2]`);
});