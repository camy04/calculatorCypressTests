describe('Calculator - Test Operations with 0', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('add 0 to an integer', function() {      
        cy.add('11', '0').should('have.value', '11')
    })

    it('subtract 0 from an integer', function() {
        cy.subtract('4', '0').should('have.value', '4')
    })

    it('subtract an integer from 0', function() {
        cy.subtract('0', '44').should('have.value', '-44')
    })

    it('multiply 0 to an integer', function() {
        cy.multiply('33', '0').should('have.value', '0')
    })
    
    it('divide an integer by 0', function() {
        //this should result in an indeterminate value
        cy.divide('12', '0').should('have.value', '')
    })
    
    it('divide 0 by an integer', function() {
        cy.divide('0', '12').should('have.value', '0')
    })
})


