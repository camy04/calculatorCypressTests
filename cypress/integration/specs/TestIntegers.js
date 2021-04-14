describe('Calculator - Test Integers', function() {
    it('Test - Add Integers', function() {   
        
        cy.add('2', '4').should('have.value', '6')

    })

    it('Test - Subtract Integers', function() {

        cy.subtract('2', '4').should('have.value', '-2');
    })
})