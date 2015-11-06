(function IIFE($) {
	$.fn.simpleAccordion = function() {
		this.on('click', '.s_accordion__control', function() {
			// Toggle the panel next to the item that was clicked
			$(this).toggleClass('active');
			$(this).next().toggle();
		});
		return this;
	}
})( jQuery );
