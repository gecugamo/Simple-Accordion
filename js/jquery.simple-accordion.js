(function IIFE($) {
	$.fn.simpleAccordion = function() {
		this.on("click", ".accordion__control", function() {
			// Toggle the panel next to the item that was clicked
			$(this).toggleClass("accordion__control--active");
			$(this).next().toggle();
		});

		// Return jQuery object for method chaining
		return this;
	}
})(jQuery);
