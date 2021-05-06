---?color=#7E317B

# Javascript Objects

---

## Collection of properties

Each property is named (with a key) and has a value

In object literal notation (like JavaScript Object Notation (JSON)) we can write

```
let ball = {x: 200, y: 300, radius: 50};
```

---

## obj.prop

Access properties like this

```
ball.x += 5;
ball.z = 8;
ball["colour"] = "red";

```

---

## Function-valued properties

Object properties can be any type, including functions

```
ball.draw = function(){ alert("I am a ball");}
ball.draw();
```

---

## this

`this` refers to the object it was called on

```
ball.draw = function(){
    alert("I am a ball this big: " + this.radius);
}
ball.draw();

```

---
## of and in

In a `for` loop over a list you can use `of`
```
for (let x of [1,2,3]){console.log(x)}
```

In a `for` loop over an object you can use `in` (gives keys)
```
const me = {name: 'Steven', game: 'Lecturer'};
for(let k in me){
    console.log('I have a ' + k);
    console.log('It is ' + me[k]);
}
```

---

## Prototypal Inheritance

@ul
- Every object has a property `\_\_proto\_\_` which refers to another object
- If a property isn't found in an object's own properties, then `\_\_proto\_\_` is checked
- Every function has a property `prototype` which is used when creating an object
- The `new` keyword is used with a constructor function to create an object and set its `\_\_proto\_\_`
- Read more at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
@ulend

---

## Inheriting behaviour

@ul
- In other languages (e.g Java, C#) every object belongs to a *class*
    - Data values (fields) are associated with objects
    - Behaviour (methods) are associated with classes
- Things of the same type (class) can do the same things
- JS is more flexible: each object can define its own behaviour
- JS allows inheritance (common behaviour) through prototypes
@ulend

---

- Java uses *class-based inheritance*
- JS use *prototypal inheritance*


---

## Emulating classes in JS

[Simple syntax for constructors and prototype functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

```
class Ball{
   constructor(x, y, r){
      this.x = x;
      this.y = y;
      this.radius = r;
   }
   draw(){
       alert("I am a ball this big: " + this.radius);
   }
}
let b = new Ball(400,300,20);
b.draw();

```

---

## Why classes?

@ul
- Reduces cut-and-paste: eases maintenance
- Encourages *encapsulation*: hide the details so they can be changed easily
- No global variables: no clashes
- Make reusable components with classes
- Reuse in the same project (multiple balls) or in different projects
@ulend
