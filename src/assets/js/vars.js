const vars = {
	$win: $(window),
	$doc: $(document),
	animationDuration: 1500,
	$wrapper: $('.wrapper'),
	winHeight: $(window).innerHeight(),
	$main: $('.main'),
	$footer: $('.footer'),
	$header: $('.header'),
	$sections: $('.section'),
	$sectionInners: $('.section__inner'),
	sectionsCount: $('.section').length,
	$nav: $('.nav-main ul'),
	$btnMenu: $('.btn-menu'),
	$goToSection: $('.goToSection'),
	$btnRestart: $('.btn-restart'),
	$cubeContainer: $('.cube-container'),
	class: {
		footerActive: 'footerShown',
		currentSection: 'current',
		animated: 'animated',
		navCurrent: 'current',
		navVisible: 'visible',
		btnMenuActive: 'nav-trigger--active',
		sectionDark: 'section--dark',
		mainDark: 'bg-dark',
		headerScrolled: 'scrolled',
		headerAppended: 'header-appended',
	}
}

export default vars