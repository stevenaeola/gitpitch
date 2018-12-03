class Ball{
    constructor(x, y, r){
	this.x = x;
	this.y = y;
	this.radius = r;
    }
    draw(){
	ellipse(this.x, this.y,
		this.radius*2, this.radius*2);
    }
}

var b;

function setup() {
    createCanvas(900, 600);
    b = new Ball (width/2, height/2, 20);
}

function draw() {
    background(0);
    b.draw();
}

