import { Page } from "@playwright/test";
import { Locators } from "../locators";

export async function enterLoginData(page: Page) {
    // Enter email and password
    await page.locator(Locators.EMAIL_INPUT_FIELD).fill('test5@mail.com');
    await page.locator(Locators.PASSWORD_INPUT_FIELD).fill('Test.321');
}


export async function clickLoginButton(page: Page) {
    // Click Login button
    await page.locator(Locators.LOGIN_BUTTON).click();
}