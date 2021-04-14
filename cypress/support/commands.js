Cypress.Commands.add('clickCalculate', () => {
    cy.get('iframe').within(function($iFrame){
        const iFrameContent = $iFrame.contents().find('body') 

        cy.wrap(iFrameContent).click()
    })
})

Cypress.Commands.add('add', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('+');

    cy.clickCalculate()

    return cy.get('.result')
})

Cypress.Commands.add('subtract', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('-');

    cy.clickCalculate()

    return cy.get('.result')
})

Cypress.Commands.add('multiply', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('*');

    cy.clickCalculate()

    return cy.get('.result')
})

Cypress.Commands.add('divide', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('/');

    cy.clickCalculate()

    return cy.get('.result')
})
  
