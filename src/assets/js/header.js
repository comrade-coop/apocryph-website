const header = {
	$header: $('.header'),
	$section: $('.section'),
	_headerOffset: 0,

	get headerOffset() {
		return this._headerOffset
	},

	/**
	 * Updates this._headerOffset and its dependencies
	 * @param  {Number} value is the new heade offset
	 * @return {void}       
	 */
	set headerOffset(value) {
		this._headerOffset = value;

		// this.$header.css({transform: `translateY(${value}px)`});
		this.$header.css({top: value + 'px'});
	},

	/**
	 * inits the header scroll handler
	 * @return {void} 
	 */
	init() {
		this.$section.on('scroll', event => {
			const $this = $(event.currentTarget);
			
			const offset = $this.find('.section__inner').position().top;

			this.headerOffset = offset
		});
	}
}

export default header