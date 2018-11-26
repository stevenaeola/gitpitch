
var falloff = 0;

function setup() {
  createCanvas(900, 600);
  background(0);
  noStroke();

}

function draw() {
  noiseDetail(2,falloff);
  falloff *= 0.9;
  fill(0, 100);
  rect(0, 0, width, height);
  for (let x=0; x < width; x+=20) {
    for (let y=0; y<height; y+=20) {
      let noiseVal = noise(x/300.0, y/300.0, millis()/8000.0);
      fill(noiseVal*255);
      ellipse (x, y, noiseVal*60, noiseVal*60);
    }
  }
}

function mousePressed(){
  falloff = 1.0;
}
