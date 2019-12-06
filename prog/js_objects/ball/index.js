var cx = 100;
var cy = 200;
var radius = 50;

function draw() {
  d3.select("svg").append("ellipse").attr("cx", cx).attr("cy",cy)
    .attr("rx",radius).attr("ry",radius);
}

draw();


