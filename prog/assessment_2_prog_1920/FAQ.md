
# COMP1101 Programming Summative Assessment 2 FAQs

## Client-side functionality criteria

### Do we need an authentication aspect, like username and password?

Not recommended: if you are going to do authentication you should do it properly, and it's very unlikely that you could write something yourself that would be robust. My usual advice would be to use an external authentication service (e.g. through firebase), but that requires have tokens etc embedded into your code. Sharing that with others would most likely be outside the terms and conditions of its use. So if you want to do authentication, just include a function to authenticate, which maybe pops up an alert saying 'this page is private' or something like that.

## Client-side quality criteria

### Can I use react to build the web-site?

Not recommended: peer reviewers probably don't know what this is, and so may find it difficult to assess the quality of your solution.

### Can I use jQuery to build the web-site?

Not recommended: in years gone by jQuery was essential to make things like event handling and AJAX work across browsers. However these days modern browsers offer things like the Fetch API which handle this. Internet Explorer support is not the issue it once was, because it now has such a small market share, and polyfills are available to make it look like it has Fetch. Many systems still do use jqQuery (i.e. bootstrap) but are looking to remove is as a requirement (e.g. Bootstrap 5) so I woiuldn't recommend it for a new project.

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

## Video Presentation

