import { expect, test } from '@playwright/test'
import { pageUrls } from '../testdata/data/pageUrls';
import { pageTitles } from '../testdata/data/pageTitles';
import { addMultipleProductsToCart, closeCartPopup, goToBooksPage } from '../testdata/helpers/homepage-helpers';
import { goToCart } from '../testdata/helpers/register-page-helpers';
import { clickQuantityUpButton, removeProduct, validatePrice, verifyProductsAreInCart, verifyQuantityOfProducts } from '../testdata/helpers/cart-helpers';

﻿test('verify cart functionality', async ({ page, context }) => {

    const cfClearanceCookie = {
        name: 'cf_clearance',
        value:
'evfcKQtFHGbkrYfe6jmf2D2BJn.S4fva5MpHj_Z3tQo-1730647283-1.2.1.1-y9jpIPWMV2Lzb1N5iifzz03MDnyFT6Gs5fhNoIhCGiZAwiXyvmiOUoH3ovxjSGfjoMOaMHSMAeIODZeFNow3SWQZ1iTT4lRmjU3rueBbq.XqpW_9txkUeqSgTgE8Zn3bro_ZUlw9JPYRaFaIs01vU_fHV0vKraodbxe_UejB4rZhfMsA5MZzOulCX2FCFtGDbGU5syYNImJYQeMAMSUqSknReY3u5UHPc6rbR74R8jAIAYZyIyUCahVY1OKOLdrnj4eS449pxbCCXnSsw9b1sTp42jbtFgjxTseFM.Js_u_lC6V.4tsZzLknouWCSSYb1eSJKlK5OkCOn5ZhpG61d2zRNgjfNt1ZyBCXqCkHAAObpVPFlupJDQEHH8iDMOfr6LtVr755RIEfG6ma2loeCI3UgIdbnr0WxUg3ImeivGRTepu0Txs7sDLkR7rG2a5d',
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

    // Click on Books link
    await goToBooksPage(page);

    // Add multiple products to cart
    await addMultipleProductsToCart(page);

    // Close popup
    await closeCartPopup(page);

    // Go to cart
    await goToCart(page);
    await page.waitForTimeout(2000)

    // Verify products are in cart
    await verifyProductsAreInCart(page);

    // Verify quantity of products
    await verifyQuantityOfProducts(page, '1');

    // Click quantity up button for First Prize Pies product
    await clickQuantityUpButton(page);

    // Validate price
    await validatePrice(page, '$102.00');;

    // Validate product quantity increased
    await verifyQuantityOfProducts(page, '2');

    // Remove product
    await removeProduct(page);

})