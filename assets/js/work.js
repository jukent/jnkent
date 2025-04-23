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
    Start Portfolio
    =====================================*/
    
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled: true}
      // other options
    });
    
    /*=====================================
    End Portfolio
    =====================================*/
    
    
    
    /*=====================================
    Start Testimonials
    =====================================*/
    
	$(".testimonials #owl-testimonials").owlCarousel({

		autoPlay: 4000, //Set AutoPlay to 3 seconds
		items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]

	});

	/*=====================================
    End Testimonials
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

	// Click on Button To Scroll Top

	scrollTop.on('click', function () {

		$("html,body").animate({
			scrollTop: 0
		}, 900);
	});
    
    /*=====================================
    End Scroll top 
    =====================================*/
    
    
    
    /*=====================================
    Start Loading
    =====================================*/

    $(window).on('load', function () {

        $('.loading .sk-cube-grid').fadeOut(3000, function () {

            $(this).parent().fadeOut(1000);

        });
    });

    /*=====================================
    End Loading
    =====================================*/
    
      
});


