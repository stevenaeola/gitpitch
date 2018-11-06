---?color=#7E317B

# Introduction to Javascript with p5.js

---

## [History](https://app.pluralsight.com/player?name=javascript-good-parts-m2&mode=live&clip=0&course=javascript-good-parts&author=douglas-crockford) 

@ul
- Originally in browsers
- Not Java
- It has some good parts
- Standardised by Ecma (once ECMA) as EcmaScript
- Current version is ES8 (2018)
- Most recent widely-supported version is ES6 (2015)
- [Support varies](http://kangax.github.io/compat-table/es6/)
@ulend

---

## Client- and server- side

@ul
- Recently JS is also used server-side: nodejs
- Good JS engines in mobile browsers
- JS often used for cross-platform App dev [Cordova](https://cordova.apache.org/)
- Also for desktop applications with [electron](https://electronjs.org/) e.g. [atom](https://atom.io/)
- Interpreted, not compiled: errors only happen at run-time
- `console.log` is your friend
@ulend

---

## Hello world

- Embed javascript in a web page
- Use `script` tag
```HTML
<html>
  <script>
    console.log("Hello World")
  </script>
</html>
```

---

## What just happened?

Nothing?

Looks the same as this
```HTML
<html>
  <script>
    vljbsv123456789!@£$%^&*
  </script>
</html>
```

Use developer tools to see the console output and error

---

## Hello again

In the browser we can also use the `alert` function
```HTML
<html>
  <script>
    alert("Hello World")
  </script>
</html>
```
Can run in browser as file, not just with http

---

## Importing code


- Link to external javascript code with `src` attribute
- Usually placed in `head`
- Can refer to files in same source
- Can refer to external files via http
- Content Delivery Networks (CDN)
```HTML
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.js">
  </script>
```

---?image=https://p5js.org/assets/img/p5js.svg


@quote[p5.js is a JavaScript library ... to make coding accessibnle for artists, designers, educators and beginners]

<https://p5js.org/>

---

## Javascript functions

- Are first-class entities
- Can be passed as parameters or returned
- Often associated with events e.g. click
- Called with function name/value, parameters
- Can use `function` keyword