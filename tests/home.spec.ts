import {test, expect} from '@playwright/test';

test.describe('Home page', () => {
  test('should display the correct title', async ({page}) => {
    await page.goto('http://localhost:8080/');
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L');
  });
});