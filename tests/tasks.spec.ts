import { test, expect } from '@playwright/test';

test.describe('Tasks feature', () => {
    test('create a new task', async ({ page }) => {
        await page.goto('http://localhost:8080/');
        await page.fill('#newTask', 'Ler um livro de TypeScript');
    });
});