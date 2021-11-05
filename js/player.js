class Player {

	constructor() {
		this.score = 0;
		this.velocity = 0;
		this.gravity = 0.1;
		this.width = 80;
		this.height = 80;
		this.x = 0;
		this.y = height - this.height;
	}

	draw() {
		// spidy comes down
		this.velocity += this.gravity
		this.y += this.velocity
		// if spidy moves lower than the bottom of the canvas we need to correct
		// his position
		if (this.y >= height - this.height) {
			// reset to his starting position
			this.y = height - this.height;
		}
		image(game.playerImage, this.x, this.y, this.width, this.height)
	}

	jump() {
		this.velocity = - 10

	}

	toRight() {
  	//spidy moves to the right
    this.x += 20;
  	}

	toLeft() {
  	//spidy moves to the left
    this.x -= 20;
  	}


  }


