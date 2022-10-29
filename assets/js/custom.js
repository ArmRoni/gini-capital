
jQuery(document).ready(function(){
    if(matchMedia('only screen and (max-width: 991px)').matches) {
        var $mwo = $('.marquee-with-options');
        jQuery('.marquee').marquee();
        jQuery('.marquee-with-options').marquee({
            speed: 40,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            startVisible: true,
            pauseOnHover: true
        });

        //pause and resume links
        jQuery('.pause').click(function(e){
            e.preventDefault();
            $mwo.trigger('pause');
        });

        jQuery('.resume').click(function(e){
            e.preventDefault();
            $mwo.trigger('resume');
        });

        //toggle
        jQuery('.toggle').hover(function(e){
            $mwo.trigger('pause');
            },function(){
            $mwo.trigger('resume');
        })
        .click(function(e){
            e.preventDefault();
        });
    }
	jQuery(".privacy-pop-link").click(function() {
        jQuery('.privacy-popup-area').fadeIn(200);
    });
    jQuery(".privacy-popup-close").click(function() {
        jQuery('.privacy-popup-area').fadeOut(200);
    });

    // top up bottom
    jQuery('.top_up_btn, .contnet_btn >a').click(function(){ 
        jQuery("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 



    jQuery( ".toggle_view_bg" ).click(function(e) {
        if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
        } else {
            $( ".toggle_view_bg" ).each(function() {
                if(jQuery(this).parent('.toggle_view_item').hasClass('active')) {
                    jQuery(this).parent('.toggle_view_item').toggleClass('active');
                    jQuery(this).next('.show_details').slideToggle('hide');
                }
            });
        }
        jQuery(this).parent('.toggle_view_item').toggleClass('active');
        jQuery(this).next('.show_details').slideToggle('slow');
        e.preventDefault();
    });

    jQuery('.floating_btn, .info_btn_wrap > a').click(function () {
        var header_height = jQuery('.header_area').innerHeight();
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({ 
        scrollTop: jQuery(Lochref).offset().top - header_height,
        }, 1500); 
        return false;
    });

//fixed button visible and hide js
    jQuery.fn.isInViewport = function() {
        var elementTop = jQuery(this).offset().top;
        var elementBottom = elementTop + jQuery(this).outerHeight();

        var viewportTop = jQuery(window).scrollTop();
        var viewportBottom = viewportTop + jQuery(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    jQuery(window).on("scroll", function(){
        buttonFixed();

        if(jQuery('.form_view_box').length > 0) {
            if (jQuery('.form_view_box').isInViewport()) {
                jQuery('.header_floating_btn_wrap').removeClass('fixedBottom');
                jQuery('.header_container').removeClass('header_floatin_control');
            } else {
                jQuery('.header_floating_btn_wrap').addClass('fixedBottom');
                jQuery('.header_container').addClass('header_floatin_control');
            }
        }
    });

    function buttonFixed() {
        var footer_area_offset = jQuery('.form_view_box2').offset().top;
        var info_btn = jQuery('.info_btn_wrap').offset().top;
        var scrollTop = jQuery(window).scrollTop();
        var winH = jQuery(window).height();

        if ( scrollTop > ( footer_area_offset - winH ) ) {
            jQuery('.header_floating_btn_wrap').addClass('btn_hidden');
            jQuery('.header_container').addClass('header_floatin_bottom');

        } else {
            jQuery('.header_floating_btn_wrap').removeClass('btn_hidden');
            jQuery('.header_container').removeClass('header_floatin_bottom');
        }
        if ( scrollTop > ( info_btn - winH ) ) {
            jQuery('.header_floating_btn_wrap').addClass('btn_hidden2');

        } else {
            jQuery('.header_floating_btn_wrap').removeClass('btn_hidden2');
        }
    }
   //number counting js
   jQuery(".timer").counterUp({
        delay: 100, // the delay time in ms
        time: 2000, // the speed time in ms
    });
});


jQuery(window).scroll(function(){
    if (jQuery(window).scrollTop() >= 40) {
        jQuery('.sticky_header').addClass('is_stuck');
    }
    else {
        jQuery('.sticky_header').removeClass('is_stuck');
    }
});


var brand_logo_slider = jQuery(".brand_logo_slider");
brand_logo_slider.owlCarousel({
    loop:false,
    margin: 0,
    nav:true,
    mouseDrag: true,
    touchDrag: true,
    dots:true,
    dotsEach: 1,
    responsiveClass:true,
    items: 1,
});

var revolution_slider = jQuery(".revolution_slider");
revolution_slider.owlCarousel({
    loop:false,
    margin: 0,
    nav:true,
    mouseDrag: true,
    touchDrag: true,
    dots:true,
    dotsEach: 3,
    responsiveClass:true,
    items: 1,
    responsiveClass:true,
    autoHeight:true,
    responsive:{
        0:{
            dotsEach: 1,
        }
    }
});
