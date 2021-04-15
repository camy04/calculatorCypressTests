describe('API tests for Integers', function() {
    
    it('verify add integers', function() {

        const reqbody = {
            "LeftNumber" : "2",
            "RightNumber" : "4",
            "Operator" : "+"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.property('value', 6)
        })
    })

    it('verify subtract integers', function() {

        const reqbody = {
            "LeftNumber" : "2",
            "RightNumber" : "4",
            "Operator" : "-"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : -2
            });
        })
    })

    it('verify multiply integers', function() {

        const reqbody = { 
            "LeftNumber" : "2",
            "RightNumber" : "4",
            "Operator" : "*"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 8
            });
        })
    })

    it('verify division integers', function() {

        const reqbody = {
            "LeftNumber" : "4",
            "RightNumber" : "2",
            "Operator" : "/"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 2
            });
        })
    })

    it('verify max value integers addition', function() {
        const reqbody = {
            "LeftNumber" : "999999999",
            "RightNumber" : "999999999",
            "Operator" : "+"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 1999999998
            });
        })
    })

    it('verify max value integers subtraction', function() {
        const reqbody = {
            "LeftNumber" : "9999999999",
            "RightNumber" : "9999999999",
            "Operator" : "-"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 0
            });
        })
    })

    it('verify more than max value integers subtraction', function() {
        const reqbody = {
            "LeftNumber" : "9999999999",
            "RightNumber" : "9999999999",
            "Operator" : "-"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 0
            });
        })
    })

    it('verify more than max value integers subtraction', function() {
        const reqbody = {
            "LeftNumber" : "9999999999",
            "RightNumber" : "9999999999",
            "Operator" : "*"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 808348673
            });
        })
    })

    it('verify max value integers division', function() {
        const reqbody = {
            "LeftNumber" : "9999999999",
            "RightNumber" : "9999999999",
            "Operator" : "/"
        }

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 1
            });
        })
    })

})
