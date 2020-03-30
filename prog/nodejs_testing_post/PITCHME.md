---?color=#7E317B

# Testing nodejs REST POST

---

## Summary

@ul
- Use jest, as described in testing lecture
- Make sure that testing is not going to break real data 
- Consider using [jest functions for mocking](https://jestjs.io/docs/en/mock-functions.html)
- Need to send the parameters appropriately
- Need to test that the POST action has had the desired effect
- See the code from [Monday session](https://github.com/stevenaeola/Prog1920/tree/master/Monday/routing)
@ulend

---

## Sending POST parameters

Four main methods:

@ul
- URL-encoded, in the body
  - Can share endpoint with a standard HTML form
- multipart form encoded, in the body
  - Used for file attachments etc
- URL-encoded, in the URL (like GET)
  - Limits to data size due to URL limits
  - This is how Twitter API does it
- JSON, in the body
  - Most powerful/flexible
@ulend

---

## Encoding _.post_ parameters 

@ul
- URL-encoded, in the body
  - Need to serialise parameters (turn into a string)
  - Use separate _.send_ method in supertest
- multipart form encoded, in the body
  - Use _.attach_ (see [superagent](http://visionmedia.github.io/superagent/#multipart-requests))
- URL-encoded, in the URL (like GET)
  - Serialise parameters and attach to URL of _.post_ method
- JSON, in the body
  - _.send_ will automatically do JSON encoding
- See `index.js` and `app.test.js` for example code to do this
@ulend

---

## Testing the effect of POST

@ul
- Send a GET request to see if POST was successful
- Need to wait for requests to finish within test method if sending multiple requests
- Add _await_ and _async_ appropriately to achieve this
@ulend

---

# That's all folks
