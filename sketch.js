// TODO add slider with paddle  speed
//TODO add power ups
var bell;
var p1;
var p2;
var popos;
var di;
var pw;

function preload() {
	popo = loadSound("assets/pop.mp3");
	di = loadSound("assets/ding.mp3");
}
function setup() {
	//createCanvas(windowWidth, windowHeight);
	//canvas ratio 2/3
	createCanvas(666, 1000);
	bell = new Ball(popo, di);
	p1 = new Paddle(true);
	p2 = new Paddle(false);
	pw = new powerup();
	p2.updateHitside();
}

function draw() {
	//background and play area
	background(0);
	strokeWeight(1);
	noFill();
	rect(0,0, width,height);
	dotline();
	noStroke();
	
	//control paddles
	p1.input();
	p2.move(bell);
	
	//display paddles
	p1.display();
	p2.display();
	
	//control ball
	bell.update(p1, p2);
	bell.edges(p1, p2);
	bell.hit(p1);
	bell.hit(p2);
	
	//display ball
	bell.display();
	scores();
	
	//poweup
	pw.display();
	pw.hit(bell);
	pw.create();
	
}
function dotline() {
	//draws dotted line on the middle of the window
	var x = 0;
	strokeWeight(1);
	fill(255);
	while (x < width) {
		rect(x, height / 2, 20, 1);
		x += 40;
	}
}

function scores() {
	//display scores
	push();
	fill(255);
	textSize(height/8);
	textAlign(CENTER);
	rectMode(CENTER);
	text(p2.score, width / 2, 91 + height / 7);
	text(p1.score, width / 2, height - height / 7);
	rectMode(CORNER);
	pop();
}