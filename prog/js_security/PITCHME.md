---?color=#7E317B

# Authorisation and Security

---

## Outline

* Attack types
* OAuth (for brute force)
* CORS (for XSS)
* Accessing external services

---

## Security issues

Very many! See [OWASP](https://www.owasp.org/index.php/Main_Page).

Common attacks include
@ul
* [Brute force](https://www.owasp.org/index.php/Brute_force_attack)
* [Cross-site Scripting (XSS)]( https://www.owasp.org/index.php/Cross-site_Scripting_%28XSS%29 )
* [(Distributed) Denial of service](https://www.owasp.org/index.php/Denial_of_Service)
* [SQL injection](https://www.owasp.org/index.php/SQL_Injection)
* The user e.g. [Jeff Bezos](https://www.bbc.co.uk/news/technology-47253869)
@ulend

---

## Brute force

@ul
* Username/password combinations can be guessed
* People reuse passwords
* Hashing helps to prevent password stealing
* But [SHA1 is broken](https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html)
* Dictionary attacks and rainbow attacks: use salting
* See also [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) and [WebAuthn](https://www.w3.org/TR/webauthn/)
@ulend

---

## OAuth

@ul
* It's very easy to do auth wrong
* [OAuth](https://oauth.net/) is [industry standard protocol](https://tools.ietf.org/html/rfc6749)
* Authentication server issues authorization code and access token
* Authentication server could be
  * Same service
  * Separate microservice
  * Remote service
@ulend

---

Thanks to [Amit Kumar Gupta](https://stackoverflow.com/users/453767/amit-kumar-gupta)

![Message Sequence Chart for OAuth](https://i.stack.imgur.com/lrLe3.png)

---

## External Authentication

Using external service is a good idea
@ul
* It reduces the likelihood of making a mistake
* More likely to be kept up to date
* Can be integrated with MFA
* Can reduce the number of username/passwords to remember
* Could choose one ([facebook](https://developers.facebook.com/docs/facebook-login/), [google](https://developers.google.com/identity/), [linkedin](https://docs.microsoft.com/en-us/linkedin/shared/authentication/authentication), [github](https://developer.github.com/v3/auth/))
* Could choose generic provider e.g. [auth0](https://auth0.com/)
@endul

Do not attempt to do this yourself

---

## XSS and CORS

@ul
* User-provided content may be malicious
* Might redirect from trusted source or access trusted data
* Mitigate by
  * Sanitizing input and
  * Stopping cross-domain requests (fetch)
* Causes problems when accessing external web services
  * Use [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) or
  * Make the request from the server ([node-fetch](https://www.npmjs.com/package/node-fetch))
@ulend

---

## Accessing External Web Services

* You may need to use OAuth to access
* You will need to use CORS/server requests to get into browser
* External OAuth service is a good idea



