describe('Calculator - Test Integers', function() {

    it('Test - Add Integers', function() {      
        cy.add('2', '4').should('have.value', '6')
    })

    it('Test - Subtract Integers', function() {
        cy.subtract('2', '4').should('have.value', '-2')
    })

    it('Multiply Integers', function() {
        cy.multiply('2', '2').should('have.value', '4')
    })
    
    it('Divide Integers', function() {
        cy.divide('4', '2').should('have.value', '2')
    })
    
})