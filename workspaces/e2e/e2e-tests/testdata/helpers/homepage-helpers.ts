import { Page } from "@playwright/test";
import { Locators } from "../locators";

export async function clickRegisterLink(page: Page) {
    // Click on Register link
    await page.locator(Locators.REGISTER_LINK).click();
}


export async function clickLoginLink(page: Page) {
    // Go to login page
    await page.locator(Locators.LOGIN_LINK).click();
}


export async function goToBooksPage(page: Page) {
    // Click on Books link
    await page.locator(Locators.BOOKS_LINK).click();
    // Validate Books page is displayed
    await page.waitForSelector(Locators.BOOKS_PAGE, {timeout: 3000});
}


export async function addMultipleProductsToCart(page: Page) {
    // Add product 1
    await page.locator(Locators.ADD_TO_CART_PRODUCT_1).click();
    await page.waitForTimeout(2000)

    // Add product 2
    await page.locator(Locators.ADD_TO_CART_PRODUCT_2).click();
    await page.waitForTimeout(2000)

    // Add product 3
    await page.locator(Locators.ADD_TO_CART_PRODUCT_3).click();
    await page.waitForTimeout(2000)
}


export async function closeCartPopup(page: Page) {
    // Close popup
    await page.locator(Locators.CLOSE_ADD_TO_CART_POPUP).click();
}

