import { expect, test } from '@playwright/test'
import { Locators } from '../testdata/locators';
import { pageUrls } from '../testdata/data/pageUrls';
import { pageTitles } from '../testdata/data/pageTitles';
import { acceptTermsAndProceedToCheckout, addProductToCart, completePurchase, continueToFifthStep, continueToFourthStep, continueToSecondStep, continueToThirdStep, enterBillingAddressInfo, fillRegistrationForm, finishRegistration, goToCart, validateCheckoutSteps, validatePaymentSuccessful } from '../testdata/helpers/register-page-helpers';
import { clickRegisterLink } from '../testdata/helpers/homepage-helpers';

﻿test('user signup and checkout', async ({ page, context }) => {

    const cfClearanceCookie = {
        name: 'cf_clearance',
        value:
'wwXDAVWQaIlu2aaus22ujoIZA2c.TiJ3pgBlHxiFXEU-1730644588-1.2.1.1-lQLXeT.fs.Aq7OHWvh_KsY8yHpGtr9gZGvvJDzRwOHbAAKL.7G8F5FAEMMNsJcVnvRzeJMW0MdwLUe2mdk_tvNQjnG0lNogEiKMwhaz770gMLPf8xbOIxEiWLAxhTkwCDuRvDI3TI0jBADyq2lpwnFBMHnxQkV.Ow6aRVNUkV4sfs8OQCS3OCewzicaZ0sBO2dne3qurt0.h8fdrzqn8PvdIzZ06jypzFIE4ewp2YSehCDKR7bLFWA95M55wdecxr0mjp1e2Ddfve_Jr8LOJVuVc76Dt3U9NmEfVL8_sbkXH1bAycdbD72hxgoGV0ZxJF1qeCODF44s3eJckAXKun4bBUr8pUPmu_xaXY1lNeQeujNwjn_On5XSUTiYHYnwohWC7rHKziaVA43IinHbIKjHQSlzvF5Z9ZztOUHu21.EXD7U.vSPqQ8JKVS8vtvNp',
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

    // Click on Register link
    await clickRegisterLink(page);

    // Fill in valid information for a new user
    await fillRegistrationForm(page);

    // Click Register button and validate registration is successfull
    await finishRegistration(page);

    // Click Continue to procced on Homepage
    await page.locator(Locators.CONTINUE_TO_HOMEPAGE_BUTTON).click();

    // Validate page title
    expect(await page.title()).toBe('nopCommerce demo store');

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

    // Enter billing address info
    await enterBillingAddressInfo(page);

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