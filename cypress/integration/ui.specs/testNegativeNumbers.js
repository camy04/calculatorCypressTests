describe('Calculator - Test negative numbers', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('add negative integers', function() {      
        cy.add('-99', '-99').should('have.value', '-198')
    })

    it('subtract negative integers', function() {
        cy.subtract('-99', '-99').should('have.value', '0')
    })

    it('multiply integers', function() {
        cy.multiply('-99', '-99').should('have.value', '9801')
    })
    
    it('divide integers', function() {
        cy.divide('-99', '-99').should('have.value', '1')
    })
    
})