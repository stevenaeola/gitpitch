
# Marking Programming Summative 2


## Reminder: Exercise Outline

- Submission by 14:00 Thursday 2/5/2019
- Return after exam period
- Contributes 55% of module marks
- Includes peer review feedback which you will be allocated
- Peer reviews need to be submitted by 14:00 9/5/2019
- Quality of your peer reviews contribute 5% to your module mark



## Submission

Source code (all zipped)

- HTML and CSS and any media
- Client and server side JavaScript
- package.json including test and pretest scripts
- .eslintrc 
- jest test cases e.g. app.test.js
- README.md explaining how to use the site and API

Should not include `node_modules` in submission


## Assessment Criteria

Equally weighted

- Client-side functionality
- Client-side quality
- Server-side functionality
- Server-side quality
- Extensions


## Client-side functionality criteria

- User Experience (UX)
  - Professional appearance
  - Appropriate, consistent styling
  - Minimal interaction required (clicks, keypresses)
  

- App complexity
  - Complexity of data: number of entities; attributes; relationships
  - Complexity of interaction: list; add; edit; verify
- 'Single page' style: asynchronous updates
  - Requests should be sent via fetch. Check XHR requests in devtools > Network


## Client-side quality criteria

- Standards compliant (HTML5)
  - Check with <https://validator.w3.org/>
- Responsive to different viewport sizes
  - Collapsing navbar (turns into hamburger)
  - Grid layout
  - Check with [mobile device simulation](https://developers.google.com/web/tools/chrome-devtools/device-mode/)
  

- Gracefully handles server disconnection
  - Stop server after loading page
  - Check for sensible messages
  - What happens when it starts again
- Web site documentation (README.md)
  - Does not have to be extensive

## Server-side functionality criteria

- More than one entity type
  - Entities correspond with client-side
- Installs with `npm install`
- Starts with `npm start`


- REST API provides each entity with appropriate GET/POST methods
  - consistent API structure
  - GET only reads, POST only writes
  - POST has authentication
  - GET to list/search, returns list of minimal details
  - GET with ID (query encoded or in path) has more details, including relationships


## Server-side quality criteria

- Successful eslint (run with `npm pretest`)
  - Lint rules at least those used in first assigment
  - No problems reported
- API documentation (README.md)
  - Compare with e.g. [twitter API docs](https://developer.twitter.com/en/docs/api-reference-index)


- Successful jest tests with good coverage (run with `npm test`)
  - All tests passed
  - Black box coverage: ranges of inputs
  - Valid and invalid (e.g. missing parameters)
  - Code coverage i.e. all branches executes
- Testing includes content-type and HTTP code


## Extensions criteria

- Successful cloud deployment
  - Works on remote server with same functionality
  - Client and REST API work
- Successful integration with remote web service
  - Adds value 
  - Appropriate mocking during testing
  - Copes with service remote service being down (graceful degradation)

