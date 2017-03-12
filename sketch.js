var bell;
var p1;
var p2;
var tru;
var fal;
var popos;
var di;
function preload(){
	popo = loadSound("assets/pop.mp3");
	di = loadSound("assets/ding.mp3");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	bell = new Ball(popo, di);
	tru = true;
	fal = false;
	p1 = new Paddle(tru);
	p2 = new Paddle(false);
}

function draw() {
	background(0);
	dotline();
	noStroke();
	p1.input();
	p1.display();
	p2.move(bell);
	p2.display();
	bell.update(p1, p2);
	bell.edges(p1, p2);
	bell.hit(p1);
	bell.hit(p2);
	bell.display();
	scores();
}

function dotline() {
	var x = 0;
	strokeWeight(1);
	fill(255);
	while (x < width) {
		rect(x, height / 2, 20, 1);
		x += 40
	}
}

function scores() {
	push();
	fill(255);
	textSize(128);
	textAlign(CENTER);
	rectMode(CENTER);
	text(p2.score, width / 2, 91 + height / 7);
	text(p1.score, width / 2, height - height / 7);
	rectMode(CORNER);
	pop();
}