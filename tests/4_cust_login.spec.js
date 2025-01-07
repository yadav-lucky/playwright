import { test, expect } from '@playwright/test';
require('dotenv').config();

test('test', async ({ page }) => {
    // Destructure environment variables
    const { BASE_URL, USER_NAME, PASSWORD } = process.env;

    // Navigate to the URL
    await page.goto(BASE_URL);

    // Fill in the username and password fields
    await page.locator('input[name="username"]').fill(USER_NAME);
    await page.locator('input[name="password"]').fill(PASSWORD);

    // Click the login button
    await page.locator('input[type="submit"][value="Log In"]').click();  // Updated to use a more common selector for login buttons
});
