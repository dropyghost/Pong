function Ball(p, d) {
	//this.img = loadImage('assets/download.png');
	this.pos = createVector(windowWidth/2, windowHeight/2);
	this.speed = createVector(0, windowHeight/100);
	this.smult = 0.25;
	this.r = windowWidth/25;
	this.pop = p;
	this.ding = d;
	this.play = true;


	this.display = function () {
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r * 2);
		//image(this.img,this.x,this.y,this.r*2,this.r*2)
	}

	this.update = function (sape, sape1) {
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
		if (collideRectCircle(sape.pos.x, sape.pos.y, sape.long, sape.tall, this.pos.x + this.speed.x, this.pos.y + this.speed.y, this.r * 2, this.r * 2)) {
			this.play = true;
		}
		if (collideRectCircle(sape1.pos.x, sape1.pos.y, sape1.long, sape1.tall, this.pos.x + this.speed.x, this.pos.y + this.speed.y, this.r * 2, this.r * 2)) {
			this.play = true;
		}
		//this.pos.x = mouseX;
		//this.pos.y = mouseY;
	}

	this.edges = function (pa1, pa2) {
		if (this.pos.x >= width) {
			this.speed.x *= -1;
			this.pos.x = width - 1;
			this.pop.setVolume(0.8);
			this.pop.play();
		}
		if (this.pos.x <= 0) {
			this.speed.x *= -1;
			this.pos.x = 1;
			this.pop.setVolume(0.8);
			this.pop.play();
		}
		if (this.pos.y <= 0) {
			this.speed.y *= -1;
			pa1.score++;
			this.pos.y = pa1.pos.y - this.r*2.2;
			pa1.updateCenter();
			this.pos.x = pa1.center.x;
			this.speed.y = -windowHeight/50;
			this.speed.x = 0;
			//this.ding.setVolume(0.1);
			//this.ding.play();
		}
		if (this.pos.y > height) {
			score = 0;
			this.pos.y = pa2.pos.y + this.r*2.2;
			pa2.updateCenter();
			this.pos.x = pa2.center.x;
			pa2.score++;
			this.speed.x = 0;
			this.speed.y = windowHeight/50;
			//this.ding.setVolume(0.1);
			//this.ding.play();
		}
	}

	this.hit = function (sape) {
		if (collideRectCircle(sape.pos.x, sape.pos.y, sape.long, sape.tall, this.pos.x, this.pos.y, this.r * 2, this.r * 2)) {
			this.speed.y *= -1;
			sape.updateCenter();
			this.speed.x += (sape.center.x - this.pos.x) * -1;
			this.speed.y = (sape.center.y - this.pos.y) * -1;
			this.speed.mult(this.smult)
			if (this.play) {
				this.pop.setVolume(0.8);
				this.pop.play();
				this.play = false;
			}
			console.log(this.pop.currentTime());
		}
	}
}