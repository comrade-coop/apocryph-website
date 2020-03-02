import params from './params.js';
import footer from './footer.js';
import vars from './vars.js';

const helper = {
	/**
	 * Remove '.current' from all sections and adds it to the active one
	 * @param  {$selector} $context sections selector
	 * @param  {Number} index  active section index
	 * @return {void}  
	 */
	updateCurrentSection($context, index) {
		$context.removeClass(vars.class.currentSection);
		
		$context[index].classList.add(vars.class.currentSection);		

		footer.isShown = vars.$footer.hasClass(vars.class.currentSection);
	},

	/**
	 * Is the passed index in specified range
	 * @param  {number}  index 
	 * @param  {number}   max   range max value
	 * @return {Boolean}  
	 */
	isIndexInRange(index, max) {
		return index > -1 && index < max
	},

	/**
	 * After every slide change adds a delay before the next one
	 * @param {Number} mSecs delay in miliseconds
	 */
	setWaitingDelay(mSecs) {
		params.isWaiting = true;
		
		setTimeout(() => { params.isWaiting = false }, mSecs );
	},

	/**
	 * Checks if the current section is scrollable
	 * @return {Boolean}
	 */
	isCurrentSectionScrollable() {
		const currentSectionHeight = $(vars.$sections[params.currentIndex]).find('.section__inner').innerHeight();

		let isOverflowing = currentSectionHeight > vars.winHeight;

		return isOverflowing
	},

	/**
	 * Check if the $selector is overflowing from the bottom
	 * @param  {$node}  $selector $section selector
	 * @return {Boolean} 
	 */
	isOverflowingBot($selector) {
		const section = $selector;
		const sectionInner = section.find('.section__inner');
		const sectionHeight = sectionInner.outerHeight();
		const sectionInnerOffset = sectionInner.offset().top;
		const windowHeight = $(window).innerHeight();

		return ( Math.floor(sectionHeight +  sectionInnerOffset) > windowHeight)
	},

	/**
	 * Check if the $selector is overflowing from the top
	 * @param  {$node}  $selector $section selector
	 * @return {Boolean} 
	 */
	isOverflowingTop($selector) {
		const section = $selector;
		const sectionInner = section.find('.section__inner');
		const sectionInnerOffset = sectionInner.offset().top;

		return ( sectionInnerOffset > -1)
	},

	toggleHeader() {
		// const headerFixed = $('.header-placeholder .header');
		// const headers = $('.section .header');

		// clearTimeout(tm)

		// headerFixed.addClass('toggle');
		// headers.addClass('toggle')

		// let tm = setTimeout(() => {
		// 	headerFixed.removeClass('toggle');
		// 	headers.removeClass('toggle')
		// },1500)
	}
}

export default helper