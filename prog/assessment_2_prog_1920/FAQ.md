
# COMP1101 Programming Summative Assessment 2 FAQs

## Client-side functionality criteria

### Do we need an authentication aspect, like username and password?

Not recommended: if you are going to do authentication you should do it properly, and it's very unlikely that you could write something yourself that would be robust. My usual advice would be to use an external authentication service (e.g. through firebase), but that requires have tokens etc embedded into your code. Sharing that with others would most likely be outside the terms and conditions of its use. So if you want to do authentication, just include a function to authenticate, which maybe pops up an alert saying 'this page is private' or something like that.

## Client-side quality criteria

### Can I use react to build the web-site?

Not recommended: peer reviewers probably don't know what this is, and so may find it difficult to assess the quality of your solution.

### Can I use jQuery to build the web-site?

Not recommended: in years gone by jQuery was essential to make things like event handling and AJAX work across browsers. However these days modern browsers offer things like the Fetch API which handle this. Internet Explorer support is not the issue it once was, because it now has such a small market share, and polyfills are available to make it look like it has Fetch. Many systems still do use jqQuery (i.e. bootstrap) but are looking to remove is as a requirement (e.g. Bootstrap 5) so I woiuldn't recommend it for a new project.

### Will I get marked on documentation of the client-side code?

No

### What do you mean by 'gracefully handles server disconnection'

Basically your client-side code should do something sensible if the connection to the server goes down (as it might do if it were connected via the internet). It should display an informative message to the user, and maybe try again later. You can test this by stopping the server and trying to interact with it through the client. Once the server is started up again the client should be able to carry on as before.

## Server-side functionality criteria

### Are we allowed to include additional modules via NPM that provide additional functionality?

Yes this is definitely a good idea, as it makes the code easier to read, more robust and more maintainable. Bear in mind that some frameworks (e.g. react) that are installed via npm essentially use a different language, so are difficult to read for non-experts. They are best avoided.

### How are we advised to save the data, i.e using database?

If this were for real then a database of some kind would be the best way to store data. However, databases are not part of this course. My recommendation would be to write functions for saving the state, which just write to file a JSON string representing the state. This would not work with multiple users but would be enough for simple testing.


## Server-side quality criteria

### Is the testing solely on the server.js file or on the other js files the website uses also

You only need to test the server side javascript: client-side testing is a whole different can of worms.

### Are we allowed to use an API documentation generator like Postman or must we create our own documentation from scratch?

Yes, if you have a good tool for API generation such as <https://learning.postman.com/docs/postman/api-documentation/documenting-your-api/> that would be fine, and a good idea.

### Will adding comments to the API be sufficient for API documentation, or would it be preferable to use something like postman or 'https://www.npmjs.com/package/node-api-doc-generator' (an npm package)?

You should not have to read the code to see the API documentation. You could write it in HTML by hand, or you could use a tool to do that. The postman tool looks good and well maintained, but the npm tool looks less good: not updated in a year, virtually no history of maintenance.

### What do we need in the API documentation?

For the API documentation the ideal is something like the documentation of the [Twitter API])https://developer.twitter.com/en/docs/api-reference-index) which lists the methods in the API and then provides the [details for each method])https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/get-statuses-retweets-id) including details of parameters and response.

### How should we configure the ESLint file?


Unless you have a good reason to do otherwise you should use the one from the first assignment i.e.

```
module.exports = {
    "extends": "standard",
    "rules": {
      "semi": [2, "always"],
      "indent": "off"
    }
};
```

But if you are using something else reasonable that is fine, as long as you include the relevant .eslintrc and it doesn’t require a whole load of work to set up.

## Video Presentation

### You mentioned that for every 10 seconds after 2 minutes we will be losing 10% of our marks, does this apply if our video is anywhere from 2 mins 1s to 2 mins 9 seconds long ?

Yes, basically it’s 1% per second.

###  What information are we supposed to include in the video?

The video only needs to cover the points that are not peer assessed. Treat it as a sales pitch for the criteria listed under client-side functionality and server-side functionality. You don't need to show every single thing that your site does, just show how it meets the requirements. So things like HTML validation, automated testing and the API documentation do not need to be covered. It is difficult to keep videos anonymous, so your peer assessors will not see the video.
