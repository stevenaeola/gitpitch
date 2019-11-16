---?color=#7E317B

# Javascript

---

## [History](https://app.pluralsight.com/player?name=javascript-good-parts-m2&mode=live&clip=0&course=javascript-good-parts&author=douglas-crockford) 

@ul
- Originally in browsers
- Not Java
- It has some good parts
- Standardised by Ecma (once ECMA) as EcmaScript
- Current version is ES9 (2018)
- Most recent widely-supported version is ES6 (2015)
- [Support varies](http://kangax.github.io/compat-table/es6/)
@ulend

---

## Client- and server- side

@ul
- More recently JS is also used server-side: nodejs
- Good JS engines in mobile browsers
- JS often used for cross-platform App dev [Cordova](https://cordova.apache.org/)
- Also for desktop applications with [electron](https://electronjs.org/) e.g. [atom](https://atom.io/)
- Interpreted, not compiled: errors only happen at run-time
- `console.log` is your friend
@ulend

---

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
- Usually placed at end or in `head`
- Can refer to files in same source
- Can refer to external files via http
- Content Delivery Networks (CDN)
```HTML
<script
 src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
</script>
```

---

## Syntax

@ul
- Mostly insensitive to white space (not python)
- Case sensitive (not php)
- Block structured, with braces (like Java)
- Semicolons at the end of lines can be inferred
- "use strict"; good practice
- Use `require` for modules in nodejs (many ways in browser)

@ulend

---

## Variables and scope

- Variables must be declared (in strict mode)
- Can declare with
    - `var` (old-style function scope)
    - `let` (new-style block scope)
    - `const` (new-style block scope)
- `var` declarations are 'hoisted' to the top of the block
- In non-strict undeclared variables are global

---

## Types

Six primitive types

@ul
- boolean (`true` and `false`)
- null
- undefined
- number (no separate int) see [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) and [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- string see [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) (immutable)
- Also objects and functions (non-primitive)
@ulend
 
---

## Using types

- Values have types
- No type for variable declarations: dynamic typing
- Function parameters do not have types
- Might choose to document e.g. parameters with comments
- `typeof` find the type of a value

---

## Control structures

```
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

See also `while`, `for`, `switch`, `do`, `throw`, `try`, `catch`, ternary

---

## true, false, truthy and falsy

These are all 'falsy':
- false
- undefined
- null
- 0
- NaN
- the empty string ("")

---

Can use for default values e.g
```
var x = x || 4;
```
Useful when

- optional parameters have not been provided
- object properties might not have been initialised

---

## functions


- Are first-class objects and can be
    - assigned to variables
    - passed as parameters
- Often used for defining event callbacks
- Don't have to be associated with objects but can be

```
function sum(a, b){
   return a+b;
}
```

---

## functions as values

Almost equivalent is

```
var sum = function (a, b){
    return a+b;
}
```

or

```
var sum2 = (a,b) => a+b;
```

---

## Arrays

Square bracket notation: like python, Java, C

These are equivalent:

```
var arr = new Array(1,2,3);
```
```
var arr = Array(1,2,3);
```
```
var arr = [1,2,3];
```

Arrays can contain elements of different types

---

## Array iteration

```
for(var i=0; i < arr.length; i++){
   console.log(arr[i]);
}
```
See methods in [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
e.g.
```
arr.push(4);
```

---

## Objects

@ul
- Objects have named properties
- Properties can have any type (including object, function)
- A bit like Java Map and python Dictionary
- Create with `Object` constructor or literal syntax
- Access with dot or bracket
- Inheritance through prototypes

---

```
var myCar = new Object();
myCar.make = 'VW';
myCar.model = 'Touran';

console.log(myCar.make);
console.log(myCar['make']);

```


---

## See also

- modules: require and module.exports
- regexps
- backticks (string expansion)
- Set, Map
- spread operator
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- <https://www.theodinproject.com/courses/web-development-101/>
- <https://www.w3schools.com/js/default.asp>

