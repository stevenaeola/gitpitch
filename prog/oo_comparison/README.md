
## OO Programming
## Java vs python


## Summary

- Why object-orientation (OO)?
- Key features of OO
- How do these compare in Java and python



## Why not have one big file for your program?



## OO helps maintenance

- Smaller files makes for less reading
- Separate files allows for shared development

Suppose I write code which works on matrices
Coupling
Global variables
Cohesion
- Encapsulate for decoupling
  - data (properties/fields)
  - code (functions/methods)
- Ease name clashes
- Inheritance


## python classes

- Everything is an object
- Class-based, but classes are mutable
- Classes are objects
- Don't need one class for one file


## python methods

- No visibility modifiers (underscore convention)
- functions become methods via the class
```
x.m(a)
```
is the same as
```
c.m(x,a)
```
where `x` is in class `c`
- Need to include `self` as first parameter (also in constructors)


### python fields

- Don't exist independently
- Class properties are like java statics


### Differences to Java

- No types
- Constructors called with class name (not `new`)
- Multiple inheritance is allowed
- Lists are polymorphic, use array syntax
