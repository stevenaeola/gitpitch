---?color=#7E317B

# JavaScript and the DOM

---

## Document Object Model (DOM)

@ul
- Internal representation of browser page
- Read contents with JavaScript
- Update contents to change page content
- Historically problematic (so [jQuery](https://jquery.com/))
- Better in ES6, now widespread
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document)
@ulend

---

## Event handling with HTML

- Add `onclick` attribute to an element
- Javascript is executed
- Note embedded single quotes

```
<html>
<button onclick="alert('Hello potato');">
</html>

```
See [Events and the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events)

---

## Identifying parts of the page: getElementById

@ul
- In a browser you have access to the global `document` object
- `id` attribute of HTML elements should be unique
- Find an element with
```
var element = document.getElementById(id);
```
- Returns an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
@ulend

---

## Listening for events

@ul
- Browsers produce events as users interact with page
- E.g. `click`, `keypress`, `focus`, `submit`
- Use `addEventListener` to attach a function to an element
- See [button2.html](button2.html);
- Better to separate JS and HTML in this way (MVC)
@ulend

---

## Waiting for the DOM to be loaded

- JS often included in `<head>`
- But DOM elements not defined when code is executed
- Common to use `document.addEventListener("DOMContentLoaded", ...)`
- Handlers are often anonymous functions
    - function expression
    - arrow function expression
- See [button3.html](button3.html)

---

## Accessing DOM data

- HTML `form` element defines inputs
- Access individual controls by ID
- Disable default action (form submission)
- Link with existing objects e.g. p5 ball
- See [ball with controls](https://github.com/stevenaeola/Prog18potatoes/tree/c887df28b3cbd7afc85b060c52f4a988fcc23bc1)