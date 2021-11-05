const game = new Game();

function preload() {
	game.preload()
}

function setup() {
	createCanvas(800, 600)
	game.setup()
}
function draw() {
	game.draw()
}
function keyPressed() {
	if (keyCode === 32) {
		// spidy jumps
		game.player.jump()
	}
	if (keyCode === 39) {
		//spidy moves to the right
		game.player.toRight()
	}
	if (keyCode === 37) {
		game.player.toLeft()
	}

}

function mousePressed() {
	if (song.isPlaying()) {
		// .isPlaying() returns a boolean
		song.stop();
		this.background;
	} else {
		song.play();
		this.background;
	}
}


