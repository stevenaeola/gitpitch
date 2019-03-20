# Submission

## I assume we're allowed to submit extra JSON files with the submission, if for example we are saving IDs in a JSON file which make requests as specific parameters to an API?

# Client-side functionality

## Can I use react to build our web-site?

Yes (this is a client-side framework). Similar frameworks include
angular and vue. They won't be taught though, and you need to be
sure that your HTML code is compliant, and that is is unmistakably
clear how to build the code.

# Client-side quality criteria

# Server-side functionality criteria

## How are the two entities related? E.g. can the same thing be done for both entities separately, or should they be related/connected in some way?

For each entity you should provide a endpoint to list/search, get
details and add. You should also be able to find how one entity object
relates to another, e.g. who posted a photo, which tags are related
to which recipe etc. This could either be through the get details GET
request, and/or through search and/or through another web service
endpoint.

## Is something like Google Firebase be allowable?

Firebase provides a server-side database as an external service.

The assignment specification says that 

> Local installation must not use database: use in-memory model

This is because you can’t require everybody to install and configure
local databases. Also, if you want to use an external database and you
want people to run your code to test it, you will have to provide them
with your credentials, which would almost certainly break the Ts&Cs
for Firebase.

In real-world development a common way to do this is to use ‘mocking’,
where you build a pretend database (typically an in-memory model) that
is part of the test setup and mock functions that the test runner
calls instead of accessing the real database. This helps in terms of
performance of running the tests, and also that your live database
isn’t affected by test operations. 

So if you want to use firebug (which is a good idea in general) then you should

1. have a mocking system in place for local testing
2. keep your credentials secret, by having a local configuration file which you don’t share. You could then give a link to the working cloud-deployment of the website for review purposes.

## What if when marking peer reviewers use the daily quota for an API request? I assume we would send this back as a response

# Server-side quality

# Extensions

# General

## What if we have certain bugs after submitting which aren't related to our code? For example today it was highlighted that Youtube wasn't able to sort requests by date (both on their website and the API)


