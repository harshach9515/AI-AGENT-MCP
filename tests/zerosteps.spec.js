const { test, expect } = require('@playwright/test');
const { step, ai } = require('@zerostep/playwright');

test('ZeroStep: open example page and check title', async ({ page }) => {
    const aiArgs = { test, page };

    await ai('Go to https://rahulshettyacademy.com/loginpagePractise/', aiArgs);
    await ai('Fill username with rahulshettyacademy', aiArgs);
    await ai('Fill password with learning', aiArgs);
    await ai('Click the sign in button', aiArgs);
    await ai('Verify Page title is "ProtoCommerce"', aiArgs);
    await ai('Verify Page URL is "https://rahulshettyacademy.com/angularpractice/shop"', aiArgs);

});