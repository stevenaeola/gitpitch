
# COMP1101 Programming Summative Assessment 2

## DRAFT


## Term 2 Programming Exercise Outline

- Submission by 14:00 Thursday 2/5/2019
- Return after exam period
- Contributes 55% of module marks
- Includes peer review feedback which you will be allocated
- Peer reviews need to be submitted by 14:00 9/5/2019
- Quality of your peer reviews contribute 5% to your module mark


## Subject-specific Knowledge

- Building collections of data within a program and using JavaScript Object Notation (JSON)
- Making programs robust through the use of exceptions and exception handling
- A knowledge and understanding of good programming practice (for example, reuse, documentation and style)


## Subject-Specific Skills

- an ability to realise solutions to problems as working JavaScript programs
- an ability to apply reuse by exploiting predefined components
- an ability to use software tools related to programming (programming environments, code management, documentation tools, etc.)


## Key Skills

- an ability to communicate technical information



## Task summary

- Construct a dynamic web-site for an application of your choosing
- Use static HTML pages loading dynamic JSON content from server via AJAX
- Server written in nodejs to provide JSON through REST API
- Optional use of externally provided web service and/or cloud hosting


## Dynamic web-site

- Any application domain as long as it includes two kinds of entities e.g.
  - people
  - places
  - events
  - comments
  - pictures
- Could be e.g. club, diary, social, health, gallery


## Static HTML loading JSON via AJAX

- 'Single page app'
- Can have more than one page e.g. for user and admin
- Should provide clean and simple User Experience (UX)
- Should be responsive i.e. work well on desktop and mobile
- Recommend using framework such as Bootstrap, semantic-ui


## Message sequence chart

![Message Sequence Chart showing Client server interaction with AJAX](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgQ2xpZW50L3NlcnZlciBpbnRlcmFjdGlvbgoKABUGLT5TABcFOiBTdGF0aWMgcGFnZSByZXF1ZXN0CgAWBi0-AEEGOiBIVE1MCmxvb3AgZWFjaCB1c2VyIABJBwA_EER5bmFtaWMgY29udGVudABLCCAoQUpBWCkASRFKU09OAIEKCQBnCFJlbmRlcgAXBQA_CWFzAIEBBSB3aXRoaW4gRE9NCmVuZAoK&s=roundgreen)


## Server provides JSON through a REST API

Each entity type (e.g. person) has 

- GET method to list/search 
- GET method for individual details 
- POST method to add new (with authentication)


- Response provided as JSON
- Content-type needs to be correct
- HTTP codes should be correct: use 200, 400 or 403 (with authentication)


## Server written in nodejs

- Use npm for management
- Make sure you use --save or --save-dev option with packages you add
- Write jest test cases: run with `npm test`
- Use eslint: run with `npm pretest`
- Recommended using express


## Extension 1: cloud deployment

- Local installation must not use database: use in-memory model
- You can choose cloud deployment platform e.g. OpenShift, BlueMix, Heroku 
- Local deployment with `npm start`
- You don't need to include cloud deployment instructions
- Include url of running system


## Extension 2: external web service

Find something appropriate at

- <https://any-api.com/>
- <https://www.programmableweb.com/>
- google/facebook authentication

Integrate it into your web server


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
- App complexity
- 'Single page' style: asynchronous updates


## Client-side quality criteria

- Standards compliant (HTML5)
- Responsive to different viewport sizes
- Gracefully handles server disconnection
- Web site documentation (README.md)


## Server-side functionality criteria

- More than one entity type
- REST API provides each entity with appropriate GET/POST methods
- Installs with `npm install`
- Starts with `npm start`


## Server-side quality criteria

- Successful eslint (run with `npm pretest`)
- Successful jest tests with good coverage (run with `npm test`)
- Testing includes content-type and HTTP code
- API documentation (README.md)


## Extensions criteria

- Successful cloud deployment
- Successful integration with remote web service

