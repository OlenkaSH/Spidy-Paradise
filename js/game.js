class Game {

	setup() {
		this.player = new Player()
		this.background = new Background()
		this.obstacles = []
		this.score = 0
		//this.song
		//this.loadSound

		
	}

	constructor() {
		this.backgroundImages
		this.flyImage 
		
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage('assets/background/3.jpg'), x: 0, speed: 0.05 },
			{ src: loadImage('assets/background/2.png'), x: 0, speed: 0 },
			{ src: loadImage('assets/background/1.png'), x: 0, speed: 0 }
			
		]
		
		this.playerImage = loadImage('assets/player/spidy.png')
		this.flyImage = loadImage('assets/fly/fly.png')

		//this.song = loadSound('assets/remix.mp3')
	}

	draw() {
		
		clear()

		this.background.draw()
		this.player.draw()
		
		
		//add flys
		if (frameCount % 50 === 0) {
			this.obstacles.push(new Obstacle(this.flyImage))
			//console.log(this.obstacles)
		}
		

		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

		this.obstacles = this.obstacles.filter(obstacle => {
			if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
				return false
			} else {
				return true
			} 
			
		})
		


		
	}
	
}
