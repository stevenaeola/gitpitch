---?color=#7E317B

# HTTP

---

### Possible responses from a web request

Responses include

- A plain text file
- A web page: some HTML
- An image file (jpeg, gif, png)
- A document (pdf, word)
- Some data (XML, JSON)
- A CSS file
- A javascript program
- A flash movie
- A redirection (in headers)
- A cookie value (in headers)
- An error
- A combination of the above

How might requests be generated?

---

### Sources of requests

- URL typed in by user
- Hyperlink followed
- Form submitted
- Clicking in an image map
- Image included in source file
- Frameset or iframe in HTML source (can be recursive)
- Following a redirection (including 301 error)
- Javascript execution (triggered by mouseover etc)
- Flash execution (or other plug-in e.g. pdf)
- From a server (e.g. curl, robot, web service request)

Response to request may be used to update or replace some or all of a web page.

---

### Hypertext Transfer Protocol (HTTP)


@ul

-  Underlies many aspects of the web
-  Based around sockets (usually port 80 for web pages)
-  Fairly stable:
    - HTTP 0.9 (1991)
    - HTTP 1.0 (1996)
    - HTTP 1.1 (1997)
    - HTTP 2.0 (2015)
-  Commonly accepted extensions: cookies 
- HTTP 2 approved in 2015, including compression, push, pipelining and multiplexing</po
-  For full details see <http://www.w3c.org/Protocols>
-  For tutorial see <http://www.jmarshall.com/easy/http/>
-  Some knowledge important for web apps
-  Not just for HTML, but general resource (uRl)

@ulend

---

### Overview


-  Client/Server: (usually) no response without request
- Requests and responses have similar format:
    - __Request/Status Line__ including HTTP version and Status Codes for response
    - __Headers__ including the host in HTTP 1.1, allowing for multiple sites on same IP
    - __Blank Line__
-  Can run manually using telnet

---

### telnet requests

At a Linux prompt:

```
  telnet community.dur.ac.uk 80
  GET /s.p.bradley/teaching/WP/lecture_http/ HTTP/1.1
  Host: community.dur.ac.uk
```

Some sites require https (e.g. www.dur.ac.uk)

---

### Request


- __GET__ most common
- __POST__ for some forms
- __HEAD__ to check if a page exists
- __PUT__ rarely used outside web services
- __DELETE__ rarely used outside web services


Headers can include cookie values

---

### Response


Response Codes

- __100-199__ Informational (e.g. continue). Client should respond
- __200-299__ Successful
- __300-399__ File has moved (permanently or temporarily)
- __400-499__ Client error (401 Unauthorised, 403 Forbidden, 404 Not Found)
- __500-599__ Server error

