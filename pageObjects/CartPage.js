// pageObjects/CartPage.js
class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItem = page.locator('h4.media-heading a');
    this.checkoutBtn = 'button.btn.btn-success';
  }
  async verifyProductInCart(productName) {
    await expect(this.cartItem).toHaveText(new RegExp(productName, 'i'));
  }
  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}
const { expect } = require('@playwright/test');
module.exports = { CartPage };
