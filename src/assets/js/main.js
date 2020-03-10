import vars from './vars.js';
import touch from './touch.js';
import footer from './footer.js';
import helper from './helper.js';
import params from './params.js';
import nav from './nav.js';
import cube from './cube.js';
import deepLinks from './deepLinks.js';
import header from './header.js';

;(function(window, document, $) {
	// Dynamically set section__inner height so it's equal on all devices
	const winHeight = $(window).innerHeight()
	const winWidth = $(window).width();
	const isMobile = winWidth < 767;

	vars.$sections.css({maxHeight: winHeight});

	if ( isMobile ) {
		vars.$sectionInners.css({minHeight: winHeight - 33});
		vars.$sectionInners.find('.shell').css({minHeight: winHeight - 108 });
		vars.$sectionInners.find('.section__container').css({minHeight: winHeight - 108 });
	}
	else {
		vars.$sectionInners.css({minHeight: winHeight});
		vars.$sectionInners.find('.shell').css({minHeight: winHeight - 100 });
		vars.$sectionInners.find('.section__container').css({minHeight: winHeight - 100 });	
	}

	// Center Section Home logo
	$(window).on('load', function(event) {
		const $sectionHome = $('.section--home');
		const $shell = $sectionHome.find('.shell')
		const $logo = $sectionHome.find('.section__head');
		const $body = $sectionHome.find('.section__body');
		const $actions = $sectionHome.find('.section__actions');

		const logoHeight = $logo.height();
		const bodyHeight = $body.height();
		const actionsHeight = $actions.outerHeight();
		const contentHeight = Math.floor(logoHeight + bodyHeight + actionsHeight);
		const shellHeight = $shell.height();
		const freeSpace = shellHeight - contentHeight ;

		$('.header__inner').css('height', (freeSpace/2 ) + 25);

		vars.$header.addClass('logo-visible')
	});

	
	// Handle section change on mouse wheel event
	vars.$win.on('wheel', function(event) {
		handleCurrentSectionChange(event.originalEvent.deltaY);	
	});

	// Update touch start position on touchstart	
	vars.$win.on('touchstart', function(event) {
		let touchY = event.touches[0].clientY;

		touch.end = touchY;
	});

	// update touch object and handle swipe accordingly
	vars.$win.on('touchend', function(event) {
		
		if ($(event.target).closest('.nav-main').length < 1 ) {
			let touchY = event.changedTouches[0].clientY;

			touch.start = touch.end;

			touch.end = touchY;

			touch.updateDirection();

			handleCurrentSectionChange(touch.direction);
		}
	});

	/**
	 * Change current section based on scroll/swipe direction
	 * @param  {number} deltaNum scroll/swipe direction (100 or -100)
	 * @return {void} 
	 */
	function handleCurrentSectionChange(deltaNum) {
		if ( !params.isWaiting ) {
			footer.updateIsCurrent();

			if ( footer.isShown && !footer.isCurrent ) {
				params.deltaY = deltaNum;
			}
			else {
				params.deltaY = deltaNum;

				helper.updateCurrentSection(vars.$sections, params.currentIndex);

				helper.setWaitingDelay(params.freezeDelay);
			}
		}
	}

	// Toggle footer and update footer object
	vars.$btnMenu.on('click', function(event) {
		const $this = $(this);

		event.preventDefault();

		footer.toggle();

		footer.updateIsCurrent();

		if ( footer.isCurrent ) {
			helper.updateCurrentSection(vars.$sections, vars.sectionsCount - 2);

			helper.setWaitingDelay(params.freezeDelay);
		}
		
		event.preventDefault();
	});

	// Change current section to target
	vars.$goToSection.on('click', function(event) {
		const $this = $(this);
		const target = $this.data('target');

		params.currentIndex = target;

		event.preventDefault();
	});

	// Restart cube animation 
	vars.$btnRestart.on('click', function(event) {
		event.preventDefault();

		cube.restart();
	});

	// Initialize nav dots
	nav.populateNav(vars.$sections);

	vars.$win.on('load', function(event) {
		nav.addListeners(vars.$nav);

		nav.show(vars.$nav);
	});

	// Init deep linking
	deepLinks.init();

	header.init();

	

})(window, document, window.jQuery);


