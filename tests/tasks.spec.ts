import { test, expect } from '@playwright/test';

test.describe('Tasks feature', () => {
    test('find element by id', async ({ page }) => {
        await page.goto('http://localhost:8080/');
        await page.fill('#newTask', 'Ler um livro de TypeScript');
    });

  test('find element by select css', async ({ page }) => {
        await page.goto('http://localhost:8080/');;
        await page.fill('input[placeholder="Add a new Task"]', 'Ler um livro de TypeScript');
    });

      test('find element by regular expression', async ({ page }) => {
        await page.goto('http://localhost:8080/');
        await page.fill('input[class*=InputNewTask]', 'Ler um livro de TypeScript');
    });


});