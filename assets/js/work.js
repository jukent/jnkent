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
        delegate: 'a.popup-with-caption',
        type: 'image',
        gallery: { enabled: true },
        image: {
            markup: `
                <div class="mfp-figure custom-figure">
                    <div class="mfp-img-container">
                        <img class="mfp-img" />
                        <div class="custom-mfp-overlay"></div>
                    </div>
                </div>`,
            verticalFit: true,
            titleSrc: function(item) {
                return item.el.attr('data-caption');
            }
        },
        callbacks: {
            markupParse: function(template, values, item) {
                template.find('.custom-mfp-overlay').html(item.el.attr('data-caption'));
            }
        }
    });    
    
    
    
    
    /*=====================================
    End Portfolio
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
