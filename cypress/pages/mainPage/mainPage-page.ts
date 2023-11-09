import selectors from './mainPage-selectors';
export class MainPage {
    isOnMainPage(): this {
        cy.get(selectors.loginButton).should('be.visible');
        cy.get(selectors.registrationButton).should('be.visible');

        return this;
    }
    goToLoginPage(): this {
        cy.get(selectors.loginButton).click();
        cy.get(selectors.loginHeader).should('be.visible');

        return this;
    }
    searchItem(itemName: string = 'Luma Analog Watch'): this {
        cy.get(selectors.searchPanel).type(`${ itemName } {enter}`);

        return this;
    }
    goToCart(): this {
        cy.get(selectors.cartButton).click();
        cy.get(selectors.viewAndEditCart).click();

        return this;
    }
    logout(): this {
        cy.get(selectors.actionButton).click({force: true});
        cy.get(selectors.logoutButton).click({force: true});
        cy.get(selectors.logoutMessage).should('be.visible');

        return this;
    }
}
export const mainPage: MainPage = new MainPage();