describe('Calculator - test boundary values', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    //Calculator app can only input 3 digits

    it('add max value integers', function() {      
        cy.add('999', '999').should('have.value', '1998')
    })

    it('subtract max value integers', function() {      
        cy.subtract('999', '999').should('have.value', '0')
    })

    it('multiply max value integers', function() {
        cy.multiply('999', '999').should('have.value', '998001')
    })
    
    it('divide integers', function() {
        cy.divide('999', '999').should('have.value', '1')
    })

})
