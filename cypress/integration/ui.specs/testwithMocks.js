describe('Calculator - Test with mocks', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('add integers using mocks', function() { 
        cy.intercept('POST', '**/Calculate', {fixture: 'example.json'})    
        cy.add('2', '4').should('have.value', '655')
    })

})