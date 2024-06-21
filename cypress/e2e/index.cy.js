/// <reference types="cypress" />

context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });
    it('h1 should have text Hello World', () => {
        cy.get('h1')
            .should('have.text', 'Hello World');
    });
})

context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('../../app/index.html');
    });
    it('p should have text Coucou', () => {
        cy.get('p')
            .should('have.text', 'Coucou');
    });
})