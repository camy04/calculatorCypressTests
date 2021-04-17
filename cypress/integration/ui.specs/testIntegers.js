describe('Calculator - Test Integers', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('add integers', function() {      
        cy.add('2', '4').should('have.value', '6')
    })

    it('subtract integers', function() {
        cy.subtract('2', '4').should('have.value', '-2')
    })

    it('multiply integers', function() {
        cy.multiply('2', '2').should('have.value', '4')
    })
    
    it('divide integers', function() {
        cy.divide('4', '2').should('have.value', '2')
    })
    
})