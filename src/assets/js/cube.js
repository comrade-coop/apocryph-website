import vars from './vars.js';

const cube = {
	/**
	 * Restart cube animation
	 * @return {void}
	 */
	restart() {
		const $cube = $('.cube-container');
		$cube.attr('animated', false);
		const copy = $cube.clone(true);
           
		$cube.before(copy);

		$(`.${$cube.attr("class")}:last`).remove();

		setTimeout(() => {
			$('.cube-container').attr('animated', true);
		},3500)
	},

	/**
	 * Inital cube animation play
	 * @return {void}
	 */
	play() {
		const $cubeContainer = $('.cube-container');

		if( $cubeContainer.hasClass('no-anim') ) {
			$cubeContainer.removeClass('no-anim');

			this.restart();
		} 
	}
}

export default cube