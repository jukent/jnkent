/*global consol, if, prompt, function, smoothScroll, alert, document, window, var, $ */

$(document).ready(function () {
	'use strict';

    (function mySlider() {
        $('.slider .words .active').each(function () {
			
			if (!$(this).is(':last-child')) {
				
				$(this).delay(4000).fadeOut(1000, function () {
					
					$(this).removeClass('active').next().addClass('active').fadeIn(1000);
					
					mySlider();
				
				});
			} else {
				
				$(this).delay(4000).fadeOut(1000, function () {
					
					$(this).removeClass('active');
					
					$('.slider .words div').eq(0).addClass('active').fadeIn(1000);
					
					mySlider();
				
				});
			
			}
		
		});
	
	}());

});
