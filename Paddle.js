//TODO updatecenter function, better ai, aceleration at first when moving

function Paddle(p) {
	this.long = width / 6;
	this.tall = height / 20;
	this.player = p;
	this.pos = createVector();
	this.center = createVector();
	this.speed = createVector(width / 80, 0);
	this.score = 0;
	if (this.player) {
		this.pos.y = height - this.tall;
	} else {
		this.pos.y = 0;
	}
	this.pos.x = width / 2 - this.long/2;

	this.display = function () {

		if (this.player) {
			fill(0, 0, 255)
			rect(this.pos.x, this.pos.y, this.long, this.tall, 40, 40, 0, 0);
		} else {
			fill(255, 0, 0)
			rect(this.pos.x, this.pos.y, this.long, this.tall, 0, 0, 40, 40);
		}
	}

	this.input = function () {
		if (keyIsDown(65) && this.pos.x > 0)
			this.pos.x -= this.speed.x;

		if (keyIsDown(68) && this.pos.x < width - this.long)
			this.pos.x += this.speed.x;
		if (mouseIsPressed) {
			if (mouseX < windowWidth / 2 && this.pos.x > 0)
				this.pos.x -= this.speed.x;

			if (mouseX > windowWidth / 2 && this.pos.x < width - this.long)
				this.pos.x += this.speed.x;
		}
	}

	this.move = function (target) {
		if (target.pos.x > this.pos.x + this.long / 2 && this.pos.x < width - this.long) {
			this.pos.x += this.speed.x * 1.2;
		}
		if (target.pos.x < this.pos.x + this.long / 2 && this.pos.x > 0) {
			this.pos.x -= this.speed.x * 1.2;
		}

	}

	this.updateCenter = function () {
		this.center.x = this.pos.x + this.long / 2;
		if (this.player) {
			this.center.y = this.pos.y + this.tall ;
		} else {
			this.center.y = this.pos.y  ;
		}

	}
}