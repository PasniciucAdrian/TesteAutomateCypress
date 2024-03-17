describe( 'Exemplu unde', () => {

    //Test verificare sergment din URL

    // it('verific daca un URL contine ceva', () =>{

    //     cy.visit('https://www.digisport.ro/tenis/wta-a-anuntat-ca-ia-masuri-ce-se-intampla-de-fapt-cu-situatia-simonei-halep-in-ierarhia-wta-si-ce-loc-va-ocupa-2871667');

    //     cy.url().should('include', '/tenis/'); // verifica un segment
    // })

    
    //Testul cu delay

    // it('asteapta 10 secunde', () =>{
    //     cy.visit('https://www.google.com/');
        
    //     cy.get('#L2AGLb > .QS5gu').click();

    //     cy.wait(10000); //10 secunde  - 10000 - 1sec

    //     cy.get('.gLFyf').type('Au trecut 10 secunde')
        
    // })


    //Testul cu selector de timp atribut

    // it('selectez folosind un atribut', () =>{

    //     cy.visit('https://www.google.com/');

    //     cy.get('#L2AGLb > .QS5gu').click();

    //     cy.get('[alt="Google"]').should('be.visible'); //selector atribut alt + assertion visible
    // })


    //Testul screenshot pagina

    // it('fac un screenshot la pagina', () => {

    //     cy.visit('https://www.google.com/');

    //     cy.screenshot(); // face screenshot intr-un folder default
    // })


    //Testul constanta si verificare continut input

    // it('verific o valoare din input', () => {

    //     cy.visit('https://www.google.com/');

    //     cy.get('#L2AGLb').click();
    //     const googleSearch = cy.get('.gLFyf'); //constanta

    //     googleSearch.type('123');
    //     googleSearch.should('have.value', '123'); //assertion contine textul
    // })



    // Testul verifica existenta unei clase pe un element selectat

    it('verific o valoare din input', () => {

        cy.visit('https://www.libris.ro/');

        cy.get('#autoCompleteButton').should('have.class', 'onSearchClick'); //exista clasa pe buton?
    })



})