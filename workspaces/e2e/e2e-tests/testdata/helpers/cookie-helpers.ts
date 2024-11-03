import { BrowserContext } from '@playwright/test';

export async function addCfClearanceCookie(context: BrowserContext) {
    const cfClearanceCookie = {
        name: 'cf_clearance',
        value: process.env.CF_CLEARANCE_COOKIE || '',
        domain: 'demo.nopcommerce.com',
        path: '/',
        httpOnly: true,
        secure: true,
    };

    // Add the cookie to the browser context
    await context.addCookies([cfClearanceCookie]);
    
}