describe('Calculator - Test Operations with 0', function() {

    beforeEach(function () {
        cy.visit(Cypress.env('frontendUrl'))
    })
    
    it('Test - Add 0 to an Integer', function() {      
        cy.add('11', '0').should('have.value', '11')
    })

    it('Test - Add 0 to an Decimal', function() {      
        cy.add('11.9', '0').should('have.value', '11.9')
    })

    it('Test - Subtract 0 from an Integer', function() {
        cy.subtract('4', '0').should('have.value', '4');
    })

    it('Test - Subtract 0 from a Decimal', function() {
        cy.subtract('4.4', '0').should('have.value', '4.4');
    })

    it('Test - Multiply 0 to an Integer', function() {
        cy.multiply('33', '0').should('have.value', '0');
    })
    
    it('Test - Multiply 0 to a Decimal', function() {
        cy.multiply('3.5', '0').should('have.value', '0');
    })
    
    it('Test - Divide an Integer by 0', function() {
        cy.divide('12', '0').should('have.value', '0')
    })

    it('Test - Divide a Decimal with 0', function() {
        cy.divide('99.9', '0').should('have.value', '0')
    })
    
})


