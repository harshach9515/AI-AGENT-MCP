// pageObjects/ShopPage.js
class ShopPage {
  constructor(page) {
    this.page = page;
    this.productCards = page.locator('.card.h-100');
    this.cartNavBtn = 'a.nav-link.btn.btn-primary';
  }
  async addProductToCart(productName) {
    const count = await this.productCards.count();
    for (let i = 0; i < count; i++) {
      const title = await this.productCards.nth(i).locator('h4 a').textContent();
      if (title && title.includes(productName)) {
        await this.productCards.nth(i).locator('button').click();
        break;
      }
    }
  }
  async goToCart() {
    await this.page.click(this.cartNavBtn);
  }
}
module.exports = { ShopPage };
