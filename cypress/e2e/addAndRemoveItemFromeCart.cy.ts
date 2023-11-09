import { mainPage }  from "../pages/mainPage/mainPage-page"
import {loginPage} from "../pages/login/login-page";
import {searchPage} from "../pages/searchPage/searchPage-page";
import {itemPage} from "../pages/item/item-page";
import {cartPage} from "../pages/cart/cart-page";

describe('Verisk Homework Test', (): void => {
    it('should be possible to add and remove item from cart', (): void => {
        cy.visit(Cypress.env("url"));
        mainPage.isOnMainPage()
            .goToLoginPage();
        loginPage.login();
        mainPage.searchItem();
        searchPage.isOnSearchPage()
            .selectItem();
        itemPage.isOnItemPage()
            .addToCart();
        mainPage.goToCart()
        cartPage.isOnCartPage()
            .addNextItem()
            .removeFromCart();
        mainPage.logout();
    })
})