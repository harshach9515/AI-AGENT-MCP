const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { ShopPage } = require('../pageObjects/ShopPage');
const { CartPage } = require('../pageObjects/CartPage');
const testData = require('./testData.json');

// Test to login, add iPhone X to cart, and verify cart
test('Login, add iPhone X to cart, and verify cart', async ({ page }) => {
  // Page objects
  const loginPage = new LoginPage(page);
  const shopPage = new ShopPage(page);
  const cartPage = new CartPage(page);

  // Navigate and login
  await loginPage.goto();
  await loginPage.login(testData.username, testData.password);
  await page.waitForURL('**/angularpractice/shop');

  // Add product to cart
  await shopPage.addProductToCart(testData.product);
  await shopPage.goToCart();

  // Verify product in cart
  await cartPage.verifyProductInCart(testData.product);
  await cartPage.checkout();
});
