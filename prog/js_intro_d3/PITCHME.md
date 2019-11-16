---?color=#7E317B

# Introduction to d3


---

## What is d3?

[Data-Driven Documents](https://d3js.org/)

@quote[D3.js is a JavaScript library for manipulating documents based on data]

@quote[exposing ... web standards such as HTML, SVG, and CSS]


---

## How to use d3

Either download from [github](https://github.com/d3/d3)

Or link from your HTML page

```
<script src="https://d3js.org/d3.v5.js"></script>
```
---

## First example

```
d3.select("body")
  .selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
  .text(function(d) { return "I'm number " + d + "!"; });
```

See this in [example1.html](https://github.com/stevenaeola/gitpitch/blob/master/prog/js_intro_d3/example1.html)

---

## What is happening?

- `d3` is an object that contains functions we can use
- results of functions being applied are chained
- parts of the HTML DOM are being [selected](https://github.com/d3/d3/blob/master/API.md#selections-d3-selection)
- data are being [joined to elements](https://github.com/d3/d3-selection/blob/v1.4.0/README.md#joining-data)
- a function is applied to each element

---

## Not too interesting

@ul
- This is (at best) textualization, not visualization
- Use [Scalable Vector Graphics](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) (SVG) elements
- Not all of the data is being shown
- Use `enter` function to add new elements
@ulend

---

## What is SVG?

@ul
- Scalable i.e. can be viewed at any resolution
- Vector, as opposed to pixel-based (raster) images
- Graphics, obviously
- XML language
- Can be embedded in HTML
- Browser support is (now) good
@ulend

---

## SVG in D3

Now we can select and change circle properties

```
d3.select("body")
  .selectAll("circle")
  .data([4, 8, 15, 16, 23, 42])
  .attr("r", function(d) { return 5*Math.sqrt(d); });
```

See [example2.html](https://github.com/stevenaeola/gitpitch/blob/master/prog/js_intro_d3/example2.html)






