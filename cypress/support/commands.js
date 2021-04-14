// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//TODO - fix this maybe don't pass iframe arg
Cypress.Commands.add('clickCalculate', (iframe) => {
    cy.get(iframe).within(function($iFrame){
        const iFrameContent = $iFrame.contents().find('body') 

        cy.wrap(iFrameContent).click()
    })
})

//cypress function to add values
Cypress.Commands.add('add', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('+');

    cy.clickCalculate('iframe')

    return cy.get('.result')
})

Cypress.Commands.add('subtract', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('-');

    cy.clickCalculate('iframe')

    return cy.get('.result')
})

Cypress.Commands.add('multiply', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('*');

    cy.clickCalculate('iframe')

    return cy.get('.result')
})

Cypress.Commands.add('divide', (firstValue, secondValue) => {
    cy.get('#leftNumber').type(firstValue);
    cy.get('#rightNumber').type(secondValue);
    cy.get('#operator').select('/');

    cy.clickCalculate('iframe')

    return cy.get('.result')
})
  
