import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('test');
  await page.locator('input[name="username"]').press('Tab');
  await page.locator('input[name="password"]').fill('Admin123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  await page.getByRole('link', { name: '13788' }).click();
});