import selectors from './cart-selectors';
export class CartPage {
    isOnCartPage(): this {
        cy.get(selectors.cartHeader).should('be.visible');

        return this;
    }
    removeFromCart(): this {
        cy.get(selectors.removeItemFromCart).click();
        cy.get(selectors.emptyCartMessage).should("be.visible");

        return this;
    }
    addNextItem(count: number = 2): this {
        let itemPrice : string;
        cy.get(selectors.itemCount).clear().type(String(count) + '{enter}').wait(1000)
        cy.get(selectors.itemPrice).then(($price): void => {
            itemPrice = $price.text().replace('$', '');
            cy.log("Item price:", itemPrice);

            this.checkItemsPrice(count, itemPrice);
            });

        return this;
    }
    checkItemsPrice(count: number, itemPrice: string): void {
        let totalPrice : string;
        cy.get(selectors.totalPrice).then(($totalPrice): void => {
            totalPrice = $totalPrice.text().replace('$', '');
            cy.log("Total item price:", totalPrice);

            expect(parseInt(totalPrice)).to.eq(count*parseInt(itemPrice));
        });
    }
}
export const cartPage: CartPage = new CartPage();