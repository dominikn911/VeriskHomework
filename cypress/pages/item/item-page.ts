import selectors from './item-selectors';
export class ItemPage {
    isOnItemPage(): this {
        cy.get(selectors.itemName).should('be.visible');

        return this;
    }
    addToCart(): this {
        cy.get(selectors.addToCartButton).click();
        cy.get(selectors.successMessage).should('be.visible');

        return this;
    }
}
export const itemPage: ItemPage = new ItemPage();