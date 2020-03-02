const touch = {
	start: 0,
	end: 0,
	touchDiffMin: 20,
	direction: 0,

	// Update touch direction based on swipeDiff
	updateDirection() {
		let swipeDiff = this.end - this.start

		if ( swipeDiff > this.touchDiffMin ) {
			this.direction = -100	
		}
		else if ( swipeDiff < -this.touchDiffMin ) {
			this.direction = 100
		}
		else {
			this.direction = 0
		}
	}
}

export default touch