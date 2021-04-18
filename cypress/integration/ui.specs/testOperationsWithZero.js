describe('Calculator - Test Operations with 0', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('add 0 to an Integer', function() {      
        cy.add('11', '0').should('have.value', '11')
    })

    it('subtract 0 from an Integer', function() {
        cy.subtract('4', '0').should('have.value', '4');
    })

    it('multiply 0 to an Integer', function() {
        cy.multiply('33', '0').should('have.value', '0');
    })
    
    it('divide an Integer by 0', function() {
        cy.divide('12', '0').should('have.value', '0')
    })
    
})


