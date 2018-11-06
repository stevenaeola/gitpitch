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

## [Hello world](prog/js_intro_p5/index1.html)

- Embed javascript in a web page
- Use `script` tag
```
<html>
<script>console.log("Hello world")</script>
</html>
```

---

## What just happened?

Nothing?

Looks the same as [this]((prog/js_intro_p5/index2.html))
```
<html>
<script>vljbsv123456789!@£$%^&*</script>
</html>
```

Use developer tools to see the console

---

## Hello again

In the browser we can also use `alert`