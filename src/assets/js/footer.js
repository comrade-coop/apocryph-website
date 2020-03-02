import vars from './vars.js';
import helper from './helper.js';
import params from './params.js';

const footer = {
	isCurrent: params.currentIndex === vars.sectionsCount - 1,

	/**
	 * Update footer.isCurrent
	 * @return {void}
	 */
	updateIsCurrent() {
		this.isCurrent = params.currentIndex === vars.sectionsCount - 1;
	},

	_isShown: false,

	get isShown() {
		return this._isShown
	},

	/**
	 * Upadte footer isShown, set $main and $btn classes accordingly	
	 * @param  {Boolean}  value 
	 * @return {void} 
	 */
	set isShown(value) {
		this._isShown = value;

		vars.$main.toggleClass(vars.class.footerActive, value);

		vars.$btnMenu.toggleClass(vars.class.btnMenuActive, this.isShown);
		
		this.updateIsCurrent();

		value ? vars.$header.addClass(vars.class.headerScrolled) : false
	},
	toggle() {
		this.isShown = !this.isShown;
	},
	hide() {
		this.isShown = false;
	},
	show() {
		this.isShown = true;
	}
}

export default footer