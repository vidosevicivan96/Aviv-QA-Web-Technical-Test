import { expect, Page } from "@playwright/test";
import { Locators } from "../locators";

export async function verifyProductsAreInCart(page: Page) {
    // Verify products are in cart
    // await page.waitForSelector(Locators.PRODUCT_1_DISPLAYED_IN_CART);
    await page.waitForSelector(Locators.PRODUCT_2_DISPLAYED_IN_CART);
    await page.waitForSelector(Locators.PRODUCT_3_DISPLAYED_IN_CART);
}


export async function verifyQuantityOfProducts(page: Page, expectedQuantity: string) {
    const quantityOfProduct2 = await page.locator(Locators.PRODUCT_2_QUANTITY).inputValue();
    expect(quantityOfProduct2, `Error: Expected quantity of Product1 to be ${expectedQuantity}`).toBe(expectedQuantity);
}


export async function clickQuantityUpButton(page: Page) {
    await page.locator(Locators.PRODUCT_2_QUANTITY_UP_BUTTON).click();
    await page.waitForTimeout(2000)
}


export async function validatePrice(page: Page, expectedNewFirstPrizePiesPrice: string) {
    const newFirstPrizePiesPrice = await page.locator(Locators.PRODUCT_2_PRICE).textContent();
    expect(newFirstPrizePiesPrice, `Error: Expected new price of First Prize Pies to be ${expectedNewFirstPrizePiesPrice}`).toBe(expectedNewFirstPrizePiesPrice);
}


export async function removeProduct(page: Page) {
    // Remove product
    await page.locator(Locators.PRODUCT_3_REMOVE).click();
    
    // Validate Pride and Prejudice is not in cart anymore
    const count = await page.locator(Locators.PRODUCT_3_DISPLAYED_IN_CART).count();
    expect(count).toBe(0);
}