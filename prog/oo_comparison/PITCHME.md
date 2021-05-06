# OOP: Java vs python 

---

## Summary

::: incremental

- Why object-orientation (OO)?
- Key features of OO
- How do these compare in Java and python

:::


# Why not have one big file for your program? {data-background-color=#BE1E2D}

---

## OO helps maintenance

::: incremental

- Smaller files makes for less reading
- Separate files allows for shared development
- Cohesion and coupling
- Encapsulate for decoupling
  - data (properties/fields)
  - code (functions/methods)
- Ease name clashes
- Inheritance

:::

---

## python classes

- Everything is an object
- Class-based, but classes are mutable
- Classes are objects
- Don't need one class for one file

--- 

## python methods

- No visibility modifiers (underscore convention)
- Functions become methods via the class
- Need to include `self` as first parameter (also in constructors)
```
x.m(a)
```
is the same as
```
c.m(x,a)
```
where `x` is in class `c`


---

## python fields

- Don't exist independently
- Class properties are like java statics

---

## Differences to Java

- No static types
- Constructors called with class name (not `new`)
- Multiple inheritance is allowed
- Lists are polymorphic, use array syntax
