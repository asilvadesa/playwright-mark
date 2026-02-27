import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Tasks feature', () => {

    const baseURL = 'http://localhost:8080/';
    const baseAPIURL = 'http://localhost:3333/';
    const taskName = 'Ler um livro de TypeScript';

    test('find element by id', async ({ page }) => {
        await page.goto(baseURL);
        await page.fill('#newTask', taskName);
    });

    test('find element by select css', async ({ page }) => {
        await page.goto(baseURL);;
        await page.fill('input[placeholder="Add a new Task"]', taskName);
    });

    test('find element by regular expression', async ({ page }) => {
        await page.goto(baseURL);
        await page.fill('input[class*=InputNewTask]', taskName);
    });

    test('find element by xpath', async ({ page }) => {
        await page.goto(baseURL);
        await page.fill('input[class*=InputNewTask]', faker.lorem.words());
        // await page.click('xpath=//button[contains(text(), "Create")]');
    });

    test('find element by playwright xpath', async ({ page }) => {
        await page.goto(baseURL);
        await page.fill('input[class*=InputNewTask]', faker.lorem.words());
        // await page.click('css=button >> text=Create');
    });

    test('find element by role', async ({ page, request }) => {
        //Dado que eu tenha uma nova tarefa criada
        await request.delete(`${baseAPIURL}helper/tasks/${taskName}`);
       
       //E que estou na tela de cadastro
        await page.goto(baseURL);

        //Quando faço o cadastro da tarefa
        await page.fill('input[class*=InputNewTask]', taskName);
        await page.click('role=button[name="Create"]');

        //Então devo ver a tarefa na lista
        await expect(page.locator(`css=.task-item p >> text=${taskName}`)).toHaveText(taskName);
    });

});