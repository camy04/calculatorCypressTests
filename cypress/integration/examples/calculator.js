//   INTEGERS

describe('Calculator Test - Addition Integers', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("2");
        cy.get('#rightNumber').type("4");
        cy.get('#operator').select('+');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '6');
    })
})


describe('Calculator Test - Subtraction Integers', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("2");
        cy.get('#rightNumber').type("4");
        cy.get('#operator').select('-');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '-2');
    })
})


describe('Calculator Test - Multiplication Integers', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("2");
        cy.get('#rightNumber').type("2");
        cy.get('#operator').select('*');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '4');
    })
})


describe('Calculator Test - Division Integers', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("8");
        cy.get('#rightNumber').type("2");
        cy.get('#operator').select('/');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '4');
    })
})

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

        cy.get('.result').should('have.value', '1998');
    })
})

describe('Calculator Test - Subtraction max values', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("999");
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

//  Decimals

describe('Calculator Test - Addition Decimals', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("22.4");
        cy.get('#rightNumber').type("44.5");
        cy.get('#operator').select('+');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '66.9');
    })
})


describe('Calculator Test - Subtraction Decimals', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("4.4");
        cy.get('#rightNumber').type("2.2");
        cy.get('#operator').select('-');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '2.4');
    })
})


describe('Calculator Test - Multiplication Decimals', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("3.5");
        cy.get('#rightNumber').type("3.6");
        cy.get('#operator').select('*');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '12.6');
    })
})


describe('Calculator Test - Division Decimals', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("8.80");
        cy.get('#rightNumber').type("2.40");
        cy.get('#operator').select('/');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '3.66');
    })
})

//  Functionalities with 0

describe('Calculator Test - Add 0 to an Integer', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("11");
        cy.get('#rightNumber').type("0");
        cy.get('#operator').select('+');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '11');
    })
})

describe('Calculator Test - Subtract 0 from an Integer', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("4.4");
        cy.get('#rightNumber').type("0");
        cy.get('#operator').select('-');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '4.4');
    })
})


describe('Calculator Test - Multiply 0 to an Integer', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("3");
        cy.get('#rightNumber').type("0");
        cy.get('#operator').select('*');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '0');
    })
})

describe('Calculator Test - Divide an integer by 0', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("12");
        cy.get('#rightNumber').type("0");
        cy.get('#operator').select('/');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '0');
    })
})

describe('Calculator Test - Add 0 to an Decimal', function() {
    it('Visit the calc app', function() {
        cy.visit(" https://calculator-web.azurewebsites.net/");

        cy.get('#leftNumber').type("11.1");
        cy.get('#rightNumber').type("0");
        cy.get('#operator').select('+');

        cy.get('iframe').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body') 

            cy.wrap(iFrameContent).click()
        })

        cy.get('.result').should('have.value', '11.1');
    })
})

