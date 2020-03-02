import vars from './vars.js';
import nav from './nav.js';
import helper from './helper.js';
import cube from './cube.js';
import footer from './footer.js';
import deepLinks from './deepLinks.js';
import header from './header.js';

const params = {
	freezeDelay: 500,
	isWaiting: false,
	_currentIndex: 0,
	isScrolled: false,
	isDark: false,

	get currentIndex() {
		return this._currentIndex
	},

	/**
	 * Update current Index, contains section change callbacks
	 * @param  {number} num next index
	 * @return {boid}  
	 */
	set currentIndex(num) {
		// update currentIndex if num is in range
		helper.isIndexInRange(num, vars.sectionsCount) ? this._currentIndex = num : false

		nav.setCurrent();
		

		helper.updateCurrentSection(vars.$sections, params.currentIndex);

		const $currentSection = $(vars.$sections[this.currentIndex])

		if ( $currentSection.find('.cube-container').length ) {
			cube.play(); 
		}

		// Toggle $header scroll class
		this.isScrolled = this.currentIndex > 0;
		vars.$header.toggleClass(vars.class.headerScrolled, this.isScrolled);

		// Toggle $wrapper dark class
		this.isDark = $currentSection.hasClass('section--dark');
		vars.$wrapper.toggleClass(vars.class.mainDark, this.isDark);

		deepLinks.update(this.currentIndex)


		const tops = $currentSection.find('.section__inner').position().top;

		$('.header').delay(400).animate({
			top: tops +'px'
		},200)

	},

	_deltaY: 0,

	/**
	 * Update deltaY and trigger swipe accordingly
	 * @param  {number} num next deltaY value
	 * @return {void}
	 */
	set deltaY(num) {
		// update _deltaY and trigger set currentIndex appropriately
		this._deltaY = num;

		if ( num > 0 ) {
			this.swipeDown()
		}
		else if ( num < 0 ) {
			this.swipeUp()
		}
	},

	// scroll down inside section, if section is not scrollable or scrolled to bottom - change down to current section
	swipeDown() {
		let $currentSection = $(vars.$sections[params.currentIndex]);

		if ( footer.isShown && !footer.isCurrent ) {
			$currentSection = vars.$footer			

			// Change to next slide on closing DOWN footer
			if ( !helper.isOverflowingBot($currentSection) ) {
				footer.hide()
				this.currentIndex++
			}
		}
		else if ( !helper.isOverflowingBot($currentSection) ) {
			this.currentIndex++
		}
	},

	// scroll up inside section, if section is not scrollable or scrolled to top - change up to current section
	swipeUp() {
		let $currentSection = $(vars.$sections[params.currentIndex]);

		if ( footer.isShown && !footer.isCurrent ) {
			$currentSection = vars.$footer			

			// Don't change slide on closing UP footer
			if ( helper.isOverflowingTop($currentSection) ) {
				footer.hide()
			}
		}
		else if ( helper.isOverflowingTop($currentSection) ) {
			this.currentIndex--
		}
	}
}

export default params