instruments = [{name:"concertina", number: 2},
               {name:"piano", number: 5},
               {name:"harp", number :25}]

d3.select("body")
  .selectAll("rect")
  .data(instruments)
  .attr("width", function(d) { console.log("name " + d.name);return d.number*10; })


