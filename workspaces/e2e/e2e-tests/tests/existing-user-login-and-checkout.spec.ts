import { expect, test } from '@playwright/test'
import { Locators } from '../testdata/locators';
import { pageUrls } from '../testdata/data/pageUrls';
import { pageTitles } from '../testdata/data/pageTitles';
import { clickLoginLink } from '../testdata/helpers/homepage-helpers';
import { clickLoginButton, enterLoginData } from '../testdata/helpers/login-page-helpers';
import { acceptTermsAndProceedToCheckout, addProductToCart, completePurchase, continueToFifthStep, continueToFourthStep, continueToSecondStep, continueToThirdStep, goToCart, validateCheckoutSteps, validatePaymentSuccessful } from '../testdata/helpers/register-page-helpers';
import { addCfClearanceCookie } from '../testdata/helpers/cookie-helpers';

﻿test.only('user signup and checkout', async ({ page, context }) => {

    await addCfClearanceCookie(context);

    // Navigate to nopCommerce home page
    await page.goto(pageUrls.homepage);
    await page.waitForTimeout(1000)

    // Validate page title
    expect(await page.title()).toBe(pageTitles.homepageTitle);

    // Go to login page
    await clickLoginLink(page);

    // Enter email and password
    await enterLoginData(page);

    // Click Login button
    await clickLoginButton(page);

    // Validate user logged in
    expect(await page.locator(Locators.LOGOUT_LINK)).toHaveText('Log out');

    // Add product to the cart
    await addProductToCart(page);

    // Go to cart
    await goToCart(page);

    // Accept terms of service and proceed to the checkout process
    await acceptTermsAndProceedToCheckout(page);

    // Validate checkout steps
    await validateCheckoutSteps(page);

    // Continue to second step
    await continueToSecondStep(page);

    // Continue to third step
    await continueToThirdStep(page);

    // Continue to fourth step
    await continueToFourthStep(page);

    // Continue to fifth step
    await continueToFifthStep(page);

    // Complete purchase
    await completePurchase(page);

    // Validate payment is successfull
    await validatePaymentSuccessful(page);

})