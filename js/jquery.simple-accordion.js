(function IIFE($) {
	$.fn.simpleAccordion = function() {
		this.on("click", ".accordion__control", function() {
			$(this).toggleClass("accordion__control--active");
			$(this).next().toggle();
		});
		return this;
	}
})(jQuery);
