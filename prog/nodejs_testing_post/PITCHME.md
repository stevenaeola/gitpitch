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

## Parameters for `.post` 

@ul
- URL-encoded, in the body
  - Need to serialise parameters (turn into a string)
  - Use separate `.send` method in supertest
- multipart form encoded, in the body
  - Use `.attach` (see [superagent](http://visionmedia.github.io/superagent/#multipart-requests))
- URL-encoded, in the URL (like GET)
  - Serialise parameters and attach to URL of `.post` method
- JSON, in the body
  - `.send` will automatically do JSON encoding
@ulend

---

## Testing the effect of POST

@ul
- Send a GET request to see if POST was successful
- Need to wait for requests to finish within test method if sending multiple requests
- Add `await` and `async` appropriately to achieve this
@ulend

---

# That's all folks
