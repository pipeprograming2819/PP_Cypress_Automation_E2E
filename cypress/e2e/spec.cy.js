describe('Ordering Page Login', () => {
    before(() => {
        cy.visit('https://automation-wappi.vercel.app/login');
    });
    context('When the user enters the data', () => {
        before(() => {
            cy.get('#username').type('Feliangu14');
            cy.get('#password').type('Feliangu14@');
            cy.get('#button-login').click();
        });
        it('Next', () => {});
    });
});