# VeriskHomework
## Overview
This is an implementation of one E2E test scenario including base funcionalities as in homweork doc.
Configuration test data is stored in ```cypress.env.json``` to use your own data create new user on [Test Store](https://magento.softwaretestingboard.com/) and pass credentials into this file.
## Requirements
To run this project locally, you need to have the following installed:
```node.js```
```cypress```
[Cypress documentation](https://docs.cypress.io/guides/getting-started/installing-cypress)

## Run test in cypress GUI interface:

```
npx cypress open
```


## Run test and generate report

```
npx cypress run --spec cypress/e2e/addAndRemoveItemFromeCart.cy.ts
```

path to report: ```cypress/reports/html/index.html```

Reports form test are visible after cloning repository on localhost env, example pdf with report: ```VeriskHomeworkTestReport.pdf```
