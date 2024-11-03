import { expect, test } from '@playwright/test'
import { pageUrls } from '../testdata/data/pageUrls';
import { pageTitles } from '../testdata/data/pageTitles';
import { clickRegisterLink } from '../testdata/helpers/homepage-helpers';
import { fillInvalidRegistrationData, validateRegistrationInvalid } from '../testdata/helpers/register-page-helpers';

﻿test('user signup and checkout', async ({ page, context }) => {

    const cfClearanceCookie = {
        name: 'cf_clearance',
        value:
'Kend55kuMoOIetE9eEBpQQj0ybVpFpDvHMzQi5kKIes-1730639495-1.2.1.1-Wa1rWE0q2s484jwzyDmAflivSeKxKXAG9rQ79_josdX2FK1oDk7AM4jlxIobOAEBgNOpKLivJ79m2FuGZhjbiwiN.QP_hTMvzGA2fZ4EUl6pBJS054I.pAQXe8qc88E0ZZ9VJ1tm1zZFJclCFrCOTmJP9mcAT5Be079GP1MR2nq1NSrTqN7ybSY.Hr4Fpm3_wahygp67Z58XO36hlQT7XEoWIAbszEJLXoziFDeekMg6FnVyV6g3K_S34l0.2uORfzO6xWeEZWo1mdPkxzljwOMoc7ZtMUopZXUWcPwod93gYmghsc43OICb4awvdMDOmHvk_o6WaAr2kp9.Nh.Nwe80CrfVyX15_RzdnD_k801vhT1ZkwC1ZmsAZHVX_6igmNkWFQS61sFrrsGmPfVqCRNthE0Cu7bGrGI5FV4MkAglvqudBckHDyfUJ0P6q5lX',
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

    // Select gender
    await fillInvalidRegistrationData(page);

    // Click Register button
    await validateRegistrationInvalid(page);

})