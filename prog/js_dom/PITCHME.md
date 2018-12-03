---?color=#7E317B

# JavaScript and the DOM

---

## Document Object Model (DOM)

@ul
- Internal representation of browser page
- Read contents with JavaScript
- Update contents to change page content
- Historically problematic (so [jQuery](https://jquery.com/))
- Better is ES6, now widespread
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document)
@ulend

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
@ulend

