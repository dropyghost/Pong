function powerup() {
	this.class = floor(random(0, 1.99));
	this.life = 500;
	this.size = width / 15;
	this.pos = createVector(random(0, width - this.size), random(height / 4, height / 4 * 3));
	this.np = [-1, 1];

	//displays powerup depending on its class
	this.display = function () {
		if (this.life > 0) {

			if (this.class == 0) {
				fill(200, 200, 60, this.life);
				ellipse(this.pos.x, this.pos.y, this.size, this.size);
			}
			if (this.class == 1) {
				fill(0, 200, 50, this.life);
				rect(this.pos.x, this.pos.y, this.size, this.size);
			}
			this.life--;
		}
	}
	//checks if ball hits power up
	this.hit = function (ball) {
		if (this.life > 0) {
			//test hit for circles
			if (collideCircleCircle(ball.pos.x, ball.pos.y, ball.r * 2, this.pos.x, this.pos.y, this.size)) {
				if (this.class == 0) {
					ball.speed.mult(1.5);
					this.life = 0;
				}

			}
			//test hit for rects
			if (collideRectCircle(this.pos.x, this.pos.y, this.size, this.size, ball.pos.x, ball.pos.y, ball.r * 2, ball.r * 2)) {
				if (this.class == 1) {
					ball.pos.x += random(this.np) * random(ball.r * 6, ball.r * 8);
					ball.pos.y += ball.r;
					this.life = 0;
				}
			}
		}
	}
	//small chance to create new power up 
	this.create = function () {
		if (!(this.life > 0) && random(0, 100) < 0.5) {
			this.life = 500;
			this.class = floor(random(0, 1.99));
			this.pos = createVector(random(0, width - this.size), random(height / 4, height / 4 * 3));
		}
	}
}
