//Boundary value scenarios

describe('Calculator Test - Addition max values', function() {

    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("999");
        cy.get('#rightNumber').type("999");
        cy.get('#operator').select('+');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('#rightNumber').type("999");
        cy.get('#operator').select('-');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '0');
    })
})

describe('Calculator Test - Multiplication max values', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("999");
        cy.get('#rightNumber').type("999");
        cy.get('#operator').select('*');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '998001');
    })
})

describe('Calculator Test - Division max values', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("999");
        cy.get('#rightNumber').type("999");
        cy.get('#operator').select('/');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '1');
    })
})
