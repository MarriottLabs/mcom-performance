/***
 * Web Fonts Preloader
 * This is used for defeating FOUT (Flash of Unstyled Text) while Source Sans Pro is loading
 * This code needs to be added at the beginning of the <head> to work appropriately
 *
 * To prevent SPOF, this script is loaded asynchronously for HTML5 compliant browsers.
 * IE8 and IE9 fall back to the old mi.core.js approach, loaded at the end of the <body>.
 *
 * @see /common/layout/responsive/jsHeader.jsp
 */
(function(w, d) {
	// this will prevent loading twice via mi.core.js
	w.webFontsPreloaded = false;

	var path = w.location.pathname;

	// window.webfontloads is required for backwards compatibility
	w.webfontloads = ( path.indexOf('/ritz') !== 0 && path.indexOf('/mvci') !== 0 && path.indexOf('/bulgari') !== 0 );

	if (w.webfontloads) {
		var domain = w.location.hostname,
			familySet = 'Source+Sans+Pro:300,400,600:latin' + ( domain.match(/\.fr|\.de/) ? ',latin-ext' : '' );

		w.WebFontConfig = {
			google : { families: [ familySet ] }
			,context : w.parent
		};

		var wf = d.createElement('script');

		wf.src   = ('https:' == d.location.protocol ? 'https' : 'http') +
					'://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
		wf.type  = 'text/javascript';
		wf.async = 'true';

		var s = d.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);

		w.webFontsPreloaded = true;
	}
})(window, document);

