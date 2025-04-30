/*global consol, if, prompt, function, smoothScroll, alert, document, window, var, $ */

$(document).ready(function () {
    
    'use strict';
    
    /*=====================================
    Start Header
    =====================================*/ 
    
    $(".header .navbar-nav>li").click(function () {
        $(".navbar-nav>li").removeClass('active');
        $(this).addClass('active').siblings();
    });
    
    /*=====================================
    End Header
    =====================================*/
    
    /*=====================================
    Smooth Scroll
    =====================================*/
	smoothScroll.init({
		speed: 800,
        offset: 87
	});
    
    /*=====================================
    End Smooth Scroll
    =====================================*/
    
    /*=====================================
    Scroll top 
    =====================================*/

	var scrollTop = $("#scroll-top");

	$(window).scroll(function () {
		if ($(this).scrollTop() >= 300) {
			scrollTop.fadeIn(500);
		} else {
			scrollTop.fadeOut(500);
		}
	});

	scrollTop.on('click', function () {
		$("html,body").animate({
			scrollTop: 0
		}, 900);
	});
    
    /*=====================================
    End Scroll top 
    =====================================*/

    /*=====================================
    Toggle Info in Portfolio Items
    =====================================*/
    $(".image-portfolio").on("click", function (e) {
        // Prevent default behavior if it's a link
        if ($(e.target).is('a, img')) return;
        $(this).toggleClass("expanded");
    });
    
});
