import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Admin123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('#maincontent').getByRole('link', { name: 'Create an Account' }).click();
  await page.getByLabel('First Name').click();
  await page.getByLabel('First Name').fill('test');
  await page.getByLabel('First Name').press('Tab');
  await page.getByLabel('Last Name').fill('user');
  await page.getByLabel('Email', { exact: true }).click();
  await page.getByLabel('Email', { exact: true }).fill('test324@example.com');
  await page.getByLabel('Email', { exact: true }).press('Tab');
  await page.getByRole('textbox', { name: 'Password*', exact: true }).fill('Admin123');
  await page.getByLabel('Confirm Password').click();
  await page.getByLabel('Confirm Password').fill('Admin123');
  await page.getByRole('button', { name: 'Create an Account' }).click();
  await page.goto('https://magento.softwaretestingboard.com/customer/account/');
});