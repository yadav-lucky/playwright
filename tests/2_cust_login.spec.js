import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.waitForTimeout(3000000);
  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('test324@example.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Admin123');
  await page.getByRole('button', { name: 'Sign In' }).click();
});