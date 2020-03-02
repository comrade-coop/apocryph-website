import vars from './vars.js';
import params from './params.js';

const deepLinks = {
	/**
	 * updates window hash with the current section's id
	 * @param  {Number} index of the current section
	 * @return {voud}       
	 */
	update(index) {
		const currentSection = vars.$sections[index];

		const newHash = currentSection.getAttribute('id');

		window.location.hash = newHash
	},

	/**
	 * When the window loads/reloads takes the window's hash
	 * and navigates to the section with the same id as the hash
	 * @return {void}
	 */
	init() {
		vars.$win.on('load reload', function(event) {
			const target = window.location.hash.split('#')[1];
			let targetSection;

			vars.$sections.each((index, element) => {
				element.getAttribute('id') == target ?  targetSection = index : false;
			});

			setTimeout(() => {
				params.currentIndex = targetSection;
			}, 200)
		});
	},
}

export default deepLinks