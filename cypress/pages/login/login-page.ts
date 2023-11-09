import selectors from './login-selectors';
export class LoginPage {
 login(): this {
     const email: string = Cypress.env('username');
     const password: string = Cypress.env('password');

     cy.log(email);
     cy.log(password);

        cy.get(selectors.email).type(email);
        cy.get(selectors.password).type(password);
        cy.get(selectors.loginButton).click();

        return this;
    }
}

export const loginPage: LoginPage = new LoginPage();