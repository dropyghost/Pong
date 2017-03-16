//TODO  better ai, aceleration at first when moving;
//TODO  have a chance to predict ball path and go directly there
//TODO  small chance to try to hit good power ups and evade bad ones

function Paddle(p) {
	this.long = width / 6;
	this.tall = height / 20;
	this.player = p;
	this.pos = createVector();
	this.center = createVector();
	this.speed = createVector(width / 80, 0);
	this.score = 0;
	this.hitside = 0;
	
	
	//puts paddles in position
	if (this.player) {
		this.pos.y = height - this.tall;
	} else {
		this.pos.y = 0;
	}
	this.pos.x = width / 2 - this.long / 2;
	
	
	//draws padles
	this.display = function () {
		if (this.player) {
			fill(0, 0, 255)
			rect(this.pos.x, this.pos.y, this.long, this.tall, 40, 40, 0, 0);
		} else {
			fill(255, 0, 0)
			rect(this.pos.x, this.pos.y, this.long, this.tall, 0, 0, 40, 40);
		}
	}
	
	
	//control function for player paddle
	this.input = function () {
		//keys
		if (keyIsDown(65) && this.pos.x > 0)
			this.pos.x -= this.speed.x;

		if (keyIsDown(68) && this.pos.x < width - this.long)
			this.pos.x += this.speed.x;
		//touch
		if (touches.length > 0) {
			if (touches[0].x < width / 2 && this.pos.x > 0)
				this.pos.x -= this.speed.x;

			if (touches[0].x > width / 2 && this.pos.x < width - this.long)
				this.pos.x += this.speed.x;
		}
	}
	
	
	//function to move ai paddle
	this.move = function (target) {
		if (target.pos.y < height / 2) {
			//while on ai side
			if (target.pos.x > this.pos.x + this.long / 2 + this.hitside && this.pos.x < width - this.long) {
				this.pos.x += this.speed.x * 1;
			}
			if (target.pos.x < this.pos.x + this.long / 2 + this.hitside && this.pos.x > 0) {
				this.pos.x -= this.speed.x * 1;
			}
		} else {
			//player side
			if (width / 2 > this.pos.x + this.long / 2 && this.pos.x < width - this.long) {
				this.pos.x += this.speed.x * 1;
			}
			if (width / 2 < this.pos.x + this.long / 2 && this.pos.x > 0) {
				this.pos.x -= this.speed.x * 1;
			}
		}

	}
	
	
	//updates the side the ai paddle hits on the ball
	this.updateHitside = function () {
		this.hitside = random(-this.long / 2, this.long / 2);
	}
	
	
	//calculates the paddle center
	this.updateCenter = function () {
		this.center.x = this.pos.x + this.long / 2;
		if (this.player) {
			this.center.y = this.pos.y + this.tall;
		} else {
			this.center.y = this.pos.y;
		}

	}
}
