describe('API tests for Calculator REST API', function() {

    it('Verify Add', function() {

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : {
                "LeftNumber" : "2",
                "RightNumber" : "4",
                "Operator" : "+"
            },
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 6
            });
        })
    })

    it('Verify Subtract', function() {

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : {
                "LeftNumber" : "2",
                "RightNumber" : "4",
                "Operator" : "-"
            },
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

    it('Verify Multiply', function() {

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : {
                "LeftNumber" : "2",
                "RightNumber" : "4",
                "Operator" : "*"
            },
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

    it('Verify Division', function() {

        cy.request( {
            method : 'POST',
            url : ' https://calculator-api.azurewebsites.net/api/Calculate',
            body : {
                "LeftNumber" : "4",
                "RightNumber" : "2",
                "Operator" : "/"
            },
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

})
