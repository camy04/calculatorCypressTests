describe('Calculator - Test Integers', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('Test - Add Decimals', function() {      
        cy.add('22.4', '44.5').should('have.value', '66.9')
    })

    it('Test - Subtract Decimals', function() {
        cy.subtract('4.4', '2.2').should('have.value', '2.4');
    })

    it('Test - Multiply Decimals', function() {
        cy.multiply('3.5', '3.6').should('have.value', '12.6');
    })
    
    it('Test - Divide Decimals', function() {
        cy.divide('8.80', '2.40').should('have.value', '3.66')
    })
    
})