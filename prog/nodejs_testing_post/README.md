
# Testing nodejs REST POST


## Summary

- Use jest, as described in testing lecture
- Make sure that testing is not going to break real data 
- Consider using [jest functions for mocking](https://jestjs.io/docs/en/mock-functions.html)
- Need to encode parameters that are to be sent in the body
- Need to test that the POST action has had the desired effect
- See the code from [Monday session](https://github.com/stevenaeola/Prog1920/tree/master/Monday/routing)


## Special considerations for testing POST

- Parameters are not sent in URL (unlike GET)
- Use separate _.send_ method in supertest
- Need to wait for requests to finish within test method if sending multiple requests
- Add _await_ and _async_ appropriately to achieve this
