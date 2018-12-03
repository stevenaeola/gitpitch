var x, y;
var vx, vy;

function setup() {
    createCanvas(900, 600);
    x = width/2;
    y = height/2;
    vx = 2;
    vy = 2;
}

function draw() {
    background(0);
    if(x> width-20 || x <20){
	vx = -vx;
    }
    if(y> height-20 || y <20){
	vy = -vy;
    }
    x += vx;
    y += vy;
    ellipse(x, y, 40, 40);
}

