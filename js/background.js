class Background {
	draw() {
		//console.log('background is drawing')
		
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, width, height)
			// second background image 
			image(img.src, img.x + width, 0, width, height)
			// if the first image is moved completely out of the screen on the left
			// we want to place it where the second image initially was
			if (img.x <= - width) {
				img.x = 0
			}
		})
	}
}
