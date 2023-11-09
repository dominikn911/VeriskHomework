import selectors from "./searchPage-selectros";
export class SearchPage {
    isOnSearchPage(): this {
        cy.get(selectors.searchHeader).should('be.visible');

        return this;
    }
    selectItem(itemName: string = 'Luma Analog Watch'): this {
        const convertedItemName: string = `("${ itemName }")`
        cy.get(selectors.item + convertedItemName ).click();

        return this;
    }
}
export const searchPage: SearchPage = new SearchPage();