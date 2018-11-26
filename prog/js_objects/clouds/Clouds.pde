int width = 1200;
int height = 900;

float falloff = 0;
void setup() {
  size(1200, 900);
  background(0);
  noStroke();

}
/*
void draw(){
 if(mousePressed){
 rect(0,0,random(500),random(500)); 
 }
 }
 */
void draw() {
  noiseDetail(2,falloff);
  falloff *=0.9;
  fill(0, 100);
  rect(0, 0, width, height);
  for (int x=0; x < width; x+=20) {
    for (int y=0; y<height; y+=20) {
      float noiseVal = noise(x/300.0, y/300.0, millis()/8000.0);
      //   println("x " + x + " y " + y + " noise " + noiseVal);
      fill(noiseVal*255);

      ellipse (x, y, noiseVal*60, noiseVal*60);
    }
  }
}

void mousePressed(){
  falloff = 1.0;
}