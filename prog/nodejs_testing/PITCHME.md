
---?color=#7E317B

# Testing nodejs REST

---

## Basic Approaches

- Using browser (manual)
- Using Postman (partly automatic)
- Using test scripts (automatic)

---

## browser-based testing


- GET is easy: just type in URL
- POST is slightly harder: build HTML form
- Other http methods more difficult

---

## Postman

- Originally a chrome plugin
- Now standalone application <https://www.getpostman.com/>
- Define a set of requests in a collection
- Choose GET or POST (or other)
- Include body parameters for POST
- Use x-www-form-urlencoded
- Can specify expected responses

---

## Test scripts

- There are very many javascript unit testing frameworks (mocha, jasmine)
- I am using Jest
- Read a [recent review](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
- npm install
- Tests are js programs (as in jUnit)
- Put tests in test directory or name .test.js

---

## Running tests

- Get it going first
- Use nodemon to auto-restart server
- Add test script to your package.json
- run test with npm test
- see the [tests for the assignment](https://github.com/stevenaeola/gitpitch/blob/master/prog/WP_assignment_1819/app.test.js ) 

---

package.json
```
{
  "name": "seminargroups",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "dev": "nodemon index.js"
  }
  ...
  }

```
---

## Separate out app from server

e.g. app.js file
```
const express = require('express');
const app = express();
// ... add routes
module.exports = app;

```
e.g. index.js file
```
const app = require('./app');
app.listen(8090);

```
