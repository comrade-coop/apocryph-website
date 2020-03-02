import vars from './vars.js';
import helper from './helper.js';
import params from './params.js';

const nav = {

	/**
	 * Show $nav after a delay
	 * @param  {$selector} $context $nav selector
	 * @return {void} 
	 */
	show($context) {
		setTimeout(() => {
			$context.addClass(vars.class.navVisible);
		}, params.freezeDelay);
	},

	/**
	 * Populates the $nav with links to sections
	 * @param  {$selector} $context $nav selector
	 * @return {void}
	 */
	populateNav($context) {
		$context.each((index) => {
			const tooltipText = $context[index].getAttribute('data-tooltip');

			const btn = `<li><a data-index="${index}" href="#"><span>${tooltipText}</span></a></li>`;

			vars.$nav.append(btn);
		});
	},

	/**
	 * Add $nav links event handlers
	 * @param {$selector} $context $nav selector
	 */
	addListeners($context) {
		$context.find('a').on('click', function(event) {
			event.preventDefault();

			if ( !params.isWaiting ) {
				const index = $(this).data('index');

				params.currentIndex = index;
			}
		});

		this.setCurrent();
	},

	/**
	 * Sets the current active $nav link
	 */
	setCurrent() {
		const $allLinks = vars.$nav.find('li');

		$allLinks.removeClass(vars.class.navCurrent);
		
		$($allLinks[params.currentIndex]).addClass(vars.class.navCurrent);
	}
}

export default nav