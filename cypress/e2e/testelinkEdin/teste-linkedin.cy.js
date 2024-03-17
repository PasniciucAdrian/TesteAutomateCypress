describe('teste linkEdin', () =>{

    it('I can Login', () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('adrian.pasniciuc@yahoo.com');
        cy.get('#password').type('azsazs112');
        cy.get('.btn__primary--large').click();

        cy.get('#ember13').should('exist');
        //cy.get('#ember131234556').should('exist');
    }) 

})