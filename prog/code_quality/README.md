# Code Quality 


## Summary

- ESLint
- Code review best practice
- Getting the most out of VSCode


## ESLint

- Check coding standards are applied
- Install with `npm install -g eslint`
- Use a particular set of rules e.g. standard (need to install)
- Customise (see coursework specification)
- Run with `eslint file.js`
- Beware [bikeshedding](https://exceptionnotfound.net/bikeshedding-the-daily-software-anti-pattern/) over standards


## Recommended style

Put this in .eslintrc.js
```
module.exports = {
    "extends": "standard",
    "rules": {
      "semi": [2, "always"],
      "indent": "off"
    }
};
```

## ESLint tooling

- Consider [adding a git pre-commit hook](https://levelup.gitconnected.com/how-to-run-eslint-using-pre-commit-hook-25984fbce17e)
- Install the [ESLint plugin for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint):
  - identify and auto-fix 


## Code review best practice

[Advice from Michaela Greiler](https://www.michaelagreiler.com/respectful-constructive-code-review-feedback/)


## Getting the most out of VSCode

- [Advanced code editing](https://code.visualstudio.com/docs/introvideos/codeediting)
- Auto-fix for ESLint problems
- [Live share](https://code.visualstudio.com/learn/collaboration/live-share)


## Next time 

- Is the last lecture
- I will talk about the second assignment
- If you want me to go over anything then let me know
- Or come and see me in my office hour (see staff contacts)




