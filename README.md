# Calculator App Cypress Tests
This readme explains you how to run front end and api tests for Calculator app and the REST endpoint.

## Getting started:
1. Make sure you have node.js installed on your local
2. Checkout out the git repo: 'git clone https://github.com/camy04/calculatorCypressTests.git'
3. On terminal run: **npm install cypress --save-dev'** this will install Cypress locally as a dev dependency for your project
4. On terminal run **'npm init'** : this will initialize the project and create a package.json for the project

## Editing the project/tests: 
1. You can use Visual Studio code to view the project locally and edit it
2. To enable editing support for cypress in VSC, install the following extensions: 'Cypress Helper' and 'Cypress Snippets'

## Running tests using cypress test runner
1. To run tests via a GUI interface, on terminal run **npx cypress open**.  
   This will launch the cypress test runner where you can choose to either run the invidual spec/tests files or the whole suite
   Please note that in a cypress based project all the tests/specs should reside withing 'integration' folder.
   ![](/cypress/images/cypressgui.png)


## Running tests from CLI
### To run the entire test suite from CLI use:
 **npx cypress run**  
By default, cypress run will run all tests headlessly in the Electron browser.
 Please note this will run every tests inside the integration folder

### To run a specific spec file from CLI use:
 **npx cypress run --spec "cypress/integration/api.spces/apiTests.js'**  
apiTests.js is our spec file in this case that we want to run from command line

## Test Reports
### Cypress test runner dashboard and reports

### Mochawesome html test reports

## Screenshots

## Videos

## Running tests in CI (Jenkins):




