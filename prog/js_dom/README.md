
# JavaScript and the DOM


## Document Object Model (DOM)

- Internal representation of browser page
- Read contents with JavaScript
- Update contents to change page content
- Historically problematic (so [jQuery](https://jquery.com/))
- Better is ES6, now widespread
- [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document)


## Identifying parts of the page: getElementById

- In a browser you have access to the global `document` object
- `id` attribute of HTML elements should be unique
- Find an element with
```
var element = document.getElementById(id);
```
- Returns an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)


## Listening for events

- Browsers produce events as users interact with page
- E.g. `click`, `keypress`, `focus`, `submit`

