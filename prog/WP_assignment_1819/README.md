# Web Programming Assignment 2018/19


## Dates and weightings

- This assignment contributes 25% to the overall mark for the module, and 50% of the coursework mark for the module
- It should be submitted through duo by 14.00 on Friday 1st February 2019. Marks should be returned to you by 1st March 2019. *This is a change from the original assessment deadline as notified on 2nd November 2019.*


## Task summary

- Construct a dynamic web-site for a domain of your choosing
- Use static HTML pages loading dynamic JSON content via AJAX
- Client-side content to be responsive using a framework such as Bootstrap
- Server to provide  JSON through REST API
- Server to be written in nodejs
- Server to be deployed both locally (for testing) and in cloud


## Dynamic web-site

- Any application domain as long as it includes people
- Could be e.g. club, diary, group working, social, health
- Needs to have another item type as well as people e.g. events, photos, comments


## Static HTML loading JSON via AJAX

- 'Single page app'
- Can have more than one page e.g. for user and admin
- Pages should be standards compliant (HTML5)


## Message sequence chart

![Message Sequence Chart showing Client server interaction with AJAX](https://www.websequencediagrams.com/cgi-bin/cdraw?lz=dGl0bGUgQ2xpZW50L3NlcnZlciBpbnRlcmFjdGlvbgoKABUGLT5TABcFOiBTdGF0aWMgcGFnZSByZXF1ZXN0CgAWBi0-AEEGOiBIVE1MCmxvb3AgZWFjaCB1c2VyIABJBwA_EER5bmFtaWMgY29udGVudABLCCAoQUpBWCkASRFKU09OAIEKCQBnCFJlbmRlcgAXBQA_CWFzAIEBBSB3aXRoaW4gRE9NCmVuZAoK&s=roundgreen)


## Responsive content 

- Include collapsing navbar (hamburger menu)
- Include a grid layout
- Use Bootstrap or semantic-ui or similar framework


## Server provides JSON through a REST API

- Each person has forename, surname, username plus whatever you want to add
- GET method to list all people at /people
- GET method for individuals at /people/:username


- POST method for adding people, as long as username not taken
- `access_token` required for updates: `concertina` should work
- incorrect or missing access token should provide HTTP 403 error
- Response provided as JSON
- Content-type needs to be correct
- HTTP codes should be correct: use 400 for POST errors apart from access token
- On startup Delia Derbyshire (doctorwhocomposer) should be included in people
- See <app.test.js> for detailed test cases
- Can (should) add more methods to the web service


## Initial JSON response

- For GET /people
- Before any people or relationships added

`[{"username":"doctorwhocomposer",
   "forename":"Delia",
   "surname":"Derbyshire"}]`



### Initial JSON response

- For GET /people/doctorwhocomposer

`{"username":"doctorwhocomposer",
  "forename":"Delia",
  "surname":"Derbyshire"}`

Other properties can be included


## Server written in nodejs

- Recommended to use express, but not essential
- Use npm for management: installation of packages should work with `npm install`
- Make sure you use --save or --save-dev option with packages you add
- [Automated test code (Jest) provided](app.test.js) for basic REST functionality are provided
- Separate app and server so that test runs correctly


## Deployed locally and in cloud

- Local installation must not use database: use in-memory model
- You can choose cloud deployment platform e.g. OpenShift, BlueMix etc
- Local deployment with `npm start`
- You don't need to include cloud deployment instructions
- Include url of running system


## Submission

- Javascript, HTML and CSS sources, including package.json, preferably as zip
- Do not have to include node_modules in submission
- Submit two minute (max) video demonstrating how you web-site works, including all of the requiremements above


## Assessment Criteria

- 15% HTML layout and User Experience (UX), including standards compliance
- 20% REST API functionality, assessed by provided test
- 15% HTML/REST integration, based on AJAX
- 10% App complexity/functionality
- 10% Responsive design
- 15% Cloud deployment
- 15% Quality of video submission: structure, visuals, audio

All assessed through video except REST API functionality

