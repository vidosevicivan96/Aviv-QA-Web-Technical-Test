import { expect, test } from '@playwright/test'
import { Locators } from '../testdata/locators';
import { pageUrls } from '../testdata/data/pageUrls';
import { pageTitles } from '../testdata/data/pageTitles';
import { clickLoginLink } from '../testdata/helpers/homepage-helpers';
import { clickLoginButton, enterLoginData } from '../testdata/helpers/login-page-helpers';
import { acceptTermsAndProceedToCheckout, addProductToCart, completePurchase, continueToFifthStep, continueToFourthStep, continueToSecondStep, continueToThirdStep, goToCart, validateCheckoutSteps, validatePaymentSuccessful } from '../testdata/helpers/register-page-helpers';

﻿test.only('user signup and checkout', async ({ page, context }) => {

    const cfClearanceCookie = {
        name: 'cf_clearance',
        value:
'c6VN8N4BqFNeT_ED0ZAgL7DBl9L8K_gtg9dFymBvbdk-1730651192-1.2.1.1-ihb3ROnrVFcv6bSz6qDeMLk3fq7FSv6EhRffdu.W7yn0rAxrruAVjOtio1NuhhTvcPuW1588RSCMXWPm1nJGQlMkUhVtL_684ZCBVrPJF.uaQUD8O2CDpjI65oEzMly9egjYiEANbKiraQctqg_BWgyApX45dsDbX8G5lMdE6u_e6uc4nXZR9tcEBhI_EyZkQYn_upUNaRuJe5Zc0kSqIV63SHtRENVdjcBJcFSNrkSySycigRKdSXSVEUiunntEhwHACOxVXywfGHh8MCpHbJc0VR4v_XWumquMtysp8rCn0ZfJBShikhcpeRf6EsGbV9bhKlhbfQxFQb_fa0Iy6.RwUaeYBC5.hWokeMuqdAAedph_TkNF_i88v455GAsdArYo7ov6xfvC34er992A2xXxC.AkgKxULK5zAnPFJ54RkKEfs7bmMN49RJEZj95F',
        domain: 'demo.nopcommerce.com',
        path: '/',
        httpOnly: true,
        secure: true
    }

    // Add the cookie to the browser context.
    await context.addCookies([cfClearanceCookie]);

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