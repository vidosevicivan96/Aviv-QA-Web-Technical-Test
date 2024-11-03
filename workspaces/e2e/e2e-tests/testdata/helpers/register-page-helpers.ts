
import { expect, Page } from '@playwright/test';
import { Locators } from '../locators';

export async function fillRegistrationForm(page: Page) {
    // Select gender
    await page.locator(Locators.GENDER_MALE_RADIOBUTTON).click();

    // Enter first name
    await page.locator(Locators.FIRST_NAME_INPUT_FIELD).fill('Vida1');

    // Enter last name
    await page.locator(Locators.LAST_NAME_INPUT_FIELD).fill('Testing');

    // Enter date of birth
    await page.locator(Locators.DATE_OF_BIRTH_DAY_DROPDOWN).selectOption({ value: '1' });
    await page.locator(Locators.DATE_OF_BIRTH_MONTH_DROPDOWN).selectOption({ value: '5' });
    await page.locator(Locators.DATE_OF_BIRTH_YEAR_DROPDOWN).selectOption({ value: '1990' });

    // Enter email
    await page.locator(Locators.EMAIL_INPUT_FIELD).fill('test5@mail.com');

    // Enter password
    await page.locator(Locators.PASSWORD_INPUT_FIELD).fill('Test.321');

    // Confirm password
    await page.locator(Locators.CONFIRM_PASSWORD_INPUT_FIELD).fill('Test.321');
}


export async function finishRegistration(page: Page) {
    // Click Register button
    await page.locator(Locators.REGISTER_BUTTON).click();

    // Validate registration is successfull
    await page.waitForSelector(Locators.REGISTRATION_COMPLETED_TITLE, {timeout: 5000});
}


export async function addProductToCart(page: Page) {
    // Add product to the cart
    await page.locator(Locators.ADD_PRODUCT_TO_CART_BUTTON).click();
}


export async function goToCart(page: Page) {
    // Go to cart
    await page.locator(Locators.GO_TO_CART_BUTTON).click();
}


export async function acceptTermsAndProceedToCheckout(page: Page) {
    // Accept terms of service and proceed to the checkout process
    await page.locator(Locators.ACCEPT_TERMS_OF_SERVICE_CHECKBOX).click();
    await page.locator(Locators.CHECKOUT_BUTTON).click();
}


export async function validateCheckoutSteps(page: Page) {
    // Validate checkout steps
    await expect(page.locator(Locators.CHECKOUT_STEP_BILLING_ADDRESS)).toBeVisible();
    await expect(page.locator(Locators.CHECKOUT_STEP_SHIPPING_ADDRESS)).toBeVisible();
    await expect(page.locator(Locators.CHECKOUT_STEP_SHIPPING_METHOD)).toBeVisible();
    await expect(page.locator(Locators.CHECKOUT_STEP_PAYMENT_METHOD)).toBeVisible();
    await expect(page.locator(Locators.CHECKOUT_STEP_PAYMENT_INFORMATION)).toBeVisible();
    await expect(page.locator(Locators.CHECKOUT_STEP_CONFIRM_ORDER)).toBeVisible();
}


export async function enterBillingAddressInfo(page: Page) {
    // Enter billing address info
    await page.locator(Locators.BILLING_ADDRESS_COUNTRY_DROPDOWN).selectOption({ value: '175' });
    await page.locator(Locators.BILLING_ADDRESS_CITY_INPUT_FIELD).fill('Split');
    await page.locator(Locators.BILLING_ADDRESS_ADDRESS1_INPUT_FIELD).fill('Test Address 1');
    await page.locator(Locators.BILLING_ADDRESS_ZIP_CODE_INPUT_FIELD).fill('22000');
    await page.locator(Locators.BILLING_ADDRESS_PHONE_NUMBER_INPUT_FIELD).fill('0911231231');
}


export async function continueToSecondStep(page: Page) {
    // Continue to second step
    await page.waitForSelector(Locators.CONTINUE_TO_SECOND_STEP_BUTTON, {timeout: 3000});
    await page.locator(Locators.CONTINUE_TO_SECOND_STEP_BUTTON).click();
}


export async function continueToThirdStep(page: Page) {
    // Continue to third step
    await page.waitForSelector(Locators.CONTINUE_TO_THIRD_STEP_BUTTON, {timeout: 3000});
    await page.locator(Locators.CONTINUE_TO_THIRD_STEP_BUTTON).click();
}


export async function continueToFourthStep(page: Page) {
    // Continue to fourth step
    await page.waitForSelector(Locators.CONTINUE_TO_FOURTH_STEP_BUTTON, {timeout: 3000});
    await page.locator(Locators.CONTINUE_TO_FOURTH_STEP_BUTTON).click();
}


export async function continueToFifthStep(page: Page) {
    // Continue to fifth step
    await page.waitForSelector(Locators.CONTINUE_TO_FIFTH_STEP_BUTTON, {timeout: 3000});
    await page.locator(Locators.CONTINUE_TO_FIFTH_STEP_BUTTON).click();
}


export async function completePurchase(page: Page) {
    // Complete purchase
    await page.waitForSelector(Locators.COMPLETE_ORDER_BUTTON, {timeout: 3000});
    await page.locator(Locators.COMPLETE_ORDER_BUTTON).click();
}


export async function validatePaymentSuccessful(page: Page) {
    // Validate payment is successful
    await page.waitForSelector(Locators.PAYMENT_SUCCESSFUL_PAGE, {timeout: 3000});
}


export async function fillInvalidRegistrationData(page: Page) {
    // Select gender
    await page.locator(Locators.GENDER_MALE_RADIOBUTTON).click();

    // Enter first name
    await page.locator(Locators.FIRST_NAME_INPUT_FIELD).fill('Vidavida');

    // Enter last name
    await page.locator(Locators.LAST_NAME_INPUT_FIELD).fill('Testtest');

    // Enter date of birth
    await page.locator(Locators.DATE_OF_BIRTH_DAY_DROPDOWN).selectOption({ value: '2' });
    await page.locator(Locators.DATE_OF_BIRTH_MONTH_DROPDOWN).selectOption({ value: '3' });
    await page.locator(Locators.DATE_OF_BIRTH_YEAR_DROPDOWN).selectOption({ value: '1990' });

    // Enter email
    await page.locator(Locators.EMAIL_INPUT_FIELD).fill('invalid mail');

    // Enter password
    await page.locator(Locators.PASSWORD_INPUT_FIELD).fill('Test.321');

    // Confirm password
    await page.locator(Locators.CONFIRM_PASSWORD_INPUT_FIELD).fill('Test.321');
}


export async function validateRegistrationInvalid(page: Page) {
    // Click Register button and validate appropriate error message displayed
    await page.locator(Locators.REGISTER_BUTTON).click();
    await expect(page.locator(Locators.INVALID_EMAIL_ERROR_MESSAGE)).toBeVisible();
}


