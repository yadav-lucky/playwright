import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=0BF35C2B52D08E94976725B35D9382EE');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer\\.firstName"]').click();
  await page.locator('[id="customer\\.firstName"]').fill('test');
  await page.locator('[id="customer\\.lastName"]').click();
  await page.locator('[id="customer\\.lastName"]').fill('test');
  await page.locator('[id="customer\\.address\\.street"]').click();
  await page.locator('[id="customer\\.address\\.street"]').fill('test');
  await page.locator('[id="customer\\.address\\.city"]').click();
  await page.locator('[id="customer\\.address\\.city"]').fill('test');
  await page.locator('[id="customer\\.address\\.state"]').click();
  await page.locator('[id="customer\\.address\\.state"]').fill('test');
  await page.locator('[id="customer\\.address\\.zipCode"]').click();
  await page.locator('[id="customer\\.address\\.zipCode"]').fill('123456');
  await page.locator('[id="customer\\.phoneNumber"]').click();
  await page.locator('[id="customer\\.phoneNumber"]').fill('8888888888');
  await page.locator('[id="customer\\.ssn"]').click();
  await page.locator('[id="customer\\.ssn"]').fill('abc');
  await page.locator('[id="customer\\.username"]').click();
  await page.locator('[id="customer\\.username"]').fill('test');
  await page.locator('[id="customer\\.password"]').click();
  await page.locator('[id="customer\\.password"]').fill('Admin123');
  await page.getByRole('row', { name: 'Confirm:' }).getByRole('cell').nth(1).click();
  await page.locator('#repeatedPassword').fill('Admin123');
  await page.getByRole('button', { name: 'Register' }).click();
});