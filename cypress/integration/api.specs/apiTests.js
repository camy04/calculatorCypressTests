describe('API tests for Integers', function() {
    
    const calApi = Cypress.env('apiUrl')
    
    it('add integers', function() {

        const reqbody = {
            "LeftNumber" : "2",
            "RightNumber" : "4",
            "Operator" : "+"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.property('value', 6)
        })
    })

    it('subtract integers', function() {

        const reqbody = {
            "LeftNumber" : "2",
            "RightNumber" : "4",
            "Operator" : "-"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('multiply integers', function() {

        const reqbody = { 
            "LeftNumber" : "2",
            "RightNumber" : "4",
            "Operator" : "*"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('divide integers', function() {

        const reqbody = {
            "LeftNumber" : "4",
            "RightNumber" : "2",
            "Operator" : "/"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('add maximum entered values', function() {
        const reqbody = {
            "LeftNumber" : "999999999",
            "RightNumber" : "999999999",
            "Operator" : "+"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('subtract maximum entered values', function() {
        const reqbody = {
            "LeftNumber" : "999999999",
            "RightNumber" : "999999999",
            "Operator" : "-"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('multiply maximum entered values', function() {
        const reqbody = {
            "LeftNumber" : "999999999",
            "RightNumber" : "999999999",
            "Operator" : "*"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : 1e18
            });
        })
    })

    it('divide maximum entered values', function() {
        const reqbody = {
            "LeftNumber" : "999999999",
            "RightNumber" : "999999999",
            "Operator" : "/"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('add negative entered values', function() {
        const reqbody = {
            "LeftNumber" : "-999999999",
            "RightNumber" : "-999999999",
            "Operator" : "+"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : -1999999998
            });
        })
    })

    it('subtract negative entered values', function() {
        const reqbody = {
            "LeftNumber" : "-999999999",
            "RightNumber" : "-999999999",
            "Operator" : "-"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('multiply negative entered values', function() {
        const reqbody = {
            "LeftNumber" : "-999999999",
            "RightNumber" : "-999999999",
            "Operator" : "*"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : -1e18
            });
        })
    })

    it('divide negative entered values', function() {
        const reqbody = {
            "LeftNumber" : "-999999999",
            "RightNumber" : "-999999999",
            "Operator" : "/"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('multiply by 0', function() {
        const reqbody = {
            "LeftNumber" : "888888",
            "RightNumber" : "0",
            "Operator" : "*"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
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

    it('divide by 0', function() {
        const reqbody = {
            "LeftNumber" : "888888",
            "RightNumber" : "0",
            "Operator" : "/"
        }

        cy.request( {
            method : 'POST',
            url : calApi,
            body : reqbody,
            headers : {
                'x-functions-key' : 'cYWOrJhggJO8/CHx52TfmD8AH5RdGEjSIBjHhuiHb5qnFV0jzDyngQ=='
            }
        }).then(function(response) {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.deep.equal( {
                "value" : "indeterminate"
            });
        })
    })

})
