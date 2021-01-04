(function ($) {
	"use strict";
	
    jQuery(document).ready(function($){
	
		
		
		// Navigation Scroll
		$(window).scroll(function(event) {
			Scroll();
		});
		
		$('.navbar-collapse ul li a').click(function() {  
			$('html, body').animate({scrollTop: $(this.hash).offset().top - 79}, 1000);
			return false;
		});
		
		
		//wow call

		new WOW().init();
		
	});
	
	
    jQuery(window).load(function(){
		
        
	});
	
	
}(jQuery));	