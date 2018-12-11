---?color=#7E317B

# Assignment questions 

---

## Assignment questions

- What does a reusable component look like?
- What is a `draw` method with optional p5.Renderer as parameter?
- When are private fields appropriate?
- How to use ESLint?
- Can I convert a processing sketch?
- Others?


---

## What does a reusable component look like?

- Variables in sketch become properties of the object
- Setup code in sketch becomes the constructor
- Draw method in sketch becomes draw method of the object
- Other methods for changing parameters and handling events

---

## Minimal usage in sketch (index.js)

Include p5 library your sketch class definition 

```JavaScript
var c;

function setup(){
   c = new Component();
}

function draw(){
   c.draw();
}

```

---

## What is a `draw` method with optional p5.Renderer as parameter?

- p5.Renderer objects are returned by `createCanvas` and `createGraphics`
- Can be used e.g. as texture for another object
- All calls to graphics e.g. `rect`, `ellipse`, `fill` can be applied

```JavaScript
function draw(g){
  if(g){
    g.ellipse(this.x, this.y, this.d, this.d);
  }
  else{
    ellipse(this.x, this.y, this.d, this.d);
  }

}

```

---

To avoid duplication you could

- (Optionally) create the canvas in the constructor and save the return value
- OR create delegation functions inside your draw function e.g.
```JavaScript
   rect(x,y,w,h){
     if(g){
       g.rect(x,y,w,h);
     }
     else{
       rect(x,y,w,h);
     }
   }

```

---

## When are private fields appropriate?

- They are a a post-ES6 experimental feature
- On reflection, probably not appropriate to use

---

## How to use ESLint?

- Want to use [eslint:recommended](https://eslint.org/docs/rules/) rules
- [Set up on your machine](https://eslint.org/docs/user-guide/getting-started)
- When running `eslint --init` choose `Answer questions ...`

---

```
DA-ECS-01:ball dcs0spb$ eslint --init
? How would you like to configure ESLint? Answer questions about your style
? Which version of ECMAScript do you use? ES2015
? Are you using ES6 modules? No
? Where will your code run? Browser
? Do you use CommonJS? No
```

---

```
? Do you use JSX? No
? What style of indentation do you use? Spaces
? What quotes do you use for strings? Single
? What line endings do you use? Unix
? Do you require semicolons? Yes
? What format do you want your config file to be in? JavaScript
```
You might want to use Windows line endings


---

## ESLint output

```
DA-ECS-01:ball dcs0spb$ eslint ball.js

/Users/dcs0spb/Documents/Prog18potatoes/ball/ball.js
   1:7   error  'Ball' is defined but never used                    no-unused-vars
   3:1   error  Expected indentation of 8 spaces but found 1 tab    indent
   4:1   error  Expected indentation of 8 spaces but found 1 tab    indent
   5:1   error  Expected indentation of 8 spaces but found 1 tab    indent
   5:24  error  Unnecessary semicolon                               no-extra-semi

```

---

## Can I convert a processing sketch?

Yes

- Replace variable types with `var` (or `let` or `const`)
- Replace method return types e.g. `void` with `function`
- Find equivalent objects e.g. `new PVector` becomes `createVector`
---

## Others?


