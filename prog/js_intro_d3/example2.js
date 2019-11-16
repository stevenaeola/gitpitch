d3.select("body")
  .selectAll("circle")
  .data([4, 8, 15, 16, 23, 42])
  .attr("r", function(d) { return 5*Math.sqrt(d); });
