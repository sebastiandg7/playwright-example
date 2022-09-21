import { test, expect } from '@playwright/test';

test.describe('Addi Cupo Widget', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto("https://addi.com/");
  });

  test("main navigation", async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL("https://co.addi.com/");
  });

  test("cupo widget renders", async ({ page }) => {
    
    // Click text=Iniciar Sesión
  await page.locator('text=Iniciar Sesión').click();
  // Click input[type="text"]
  await page.locator('input[type="text"]').click();
  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('988 777 6666');
  // Click text=Ingresar y ver mi cupo
  await page.locator('text=Ingresar y ver mi cupo').click();

  const noClient = await page.locator('text=Parece que no eres cliente de Addi con el numero 988 777 6666');
  expect(noClient).toBeTruthy();
  });

});

