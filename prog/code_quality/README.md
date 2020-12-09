# Code Quality 



## Summary

- Running visualisation with CORS errors
- Encapsulation and classes
- Documentation with JSDoc
- ESLint



## CORS Errors

- Cross-Origin Resource Sharing
- JS Module feature (import) is picky
- Run the whole thing through a web server e.g.
```
python -m http.server
```
- Then access through <http://127.0.0.1:8000>


## Making a local version

- Include in your own script by taking the relevant parts into one JS file
- Include the data too
- Use `d3.select` rather than `d3.append`
- See [updated sunburst](sunburst)


## Encapsulation and classes

- Take all of the code and put it inside your class
- Parameterise any numeric and string constants
- Have a constructor that takes data object (or possibly url)


## Documentation with JSDoc

- Generates web site of documentation based on comments in code
- Install [nodejs](https://nodejs.org/en/download/)
- Install jsdoc with `npm install -g jsdoc`
- Run with `jsdoc file.js`
- Read the [documentation documentation](https://devdocs.io/jsdoc/about-getting-started)
- Specific advice on [classes](https://devdocs.io/jsdoc/howto-es2015-classes)


## Code Quality with ESLint

- Checks coding standards are applied
- Install with `npm install -g eslint`
- Use a particular set of rules e.g. standard (need to install)
- Customise (see coursework specification)
- Run with `eslint file.js`



