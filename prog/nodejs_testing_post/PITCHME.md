---?color=#7E317B

# Testing nodejs REST POST

---

## Summary

@ul
- Use jest, as described in testing lecture
- Make sure that testing is not going to break real data 
- Consider using [jest functions for mocking](https://jestjs.io/docs/en/mock-functions.html)
- Need to encode parameters that are to be sent in the body
- Need to test that the POST action has had the desired effect
- See the code from [Monday session](https://github.com/stevenaeola/Prog1920/tree/master/Monday/routing)
@ulend

---

## Special considerations for sending POST

@ul
- Parameters are not sent in URL (unlike GET)
- Use separate _.send_ method in supertest
- Need to serialise parameters (turn into a string)
- Default content-type is `application/x-www-form-urlencoded`
- See `app.test.js` for example code to do this
- Different if you're using `multipart/form-data`
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
