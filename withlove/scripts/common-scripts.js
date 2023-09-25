
;(function($){
	$(function(){

		// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){if(this.value==this.defaultValue){this.value=''}})
		$('input:text,input:password,textarea').blur(function(){if(!this.value){this.value=this.defaultValue;}})
		// Ends input common focus and blur for value.
		

        $("#phone-nav").click(function(){
            $(".menu-area").slideToggle()
            
        })
        $("#sub-nav-icon").click(function(){
            $(".sub-menu").slideToggle()
            
        })
        
        if($(".home-page-content").length){
            $("body").addClass("home-page-body")
        }
        
        if($(".profile-content").length){
            $("body").addClass("profile-page-body")
        }
        
        
        $("#tab-item-wrap > .tab-item").eq(0).addClass("active")
        $("#tab-content-wrap > .tab-content").hide()
        $("#tab-content-wrap > .tab-content").eq(0).show()
        
        $("#tab-item-wrap > .tab-item").each(function(i){
            $(this).click(function(){
                
                if($(this).hasClass("active")) return false
                
                else{
                    $("#tab-item-wrap > .tab-item").removeClass("active")
                    $(this).addClass("active")
                    $("#tab-content-wrap > .tab-content").hide()
                    $("#tab-content-wrap > .tab-content").eq(i).show()
                }
            })
        })
        
        // Vilas page tab function
        $("#tab-list li").eq(0).addClass("active")
        $("#villasTab-content-wrap > .tab-content").hide()
        $("#villasTab-content-wrap > .tab-content").eq(0).show()

        $("#tab-list li").each(function(i){
            $(this).click(function(){

                if($(this).hasClass("active")) return false

                else{
                    $("#tab-list li").removeClass("active")
                    $(this).addClass("active")
                    $("#villasTab-content-wrap > .tab-content").hide()
                    $("#villasTab-content-wrap > .tab-content").eq(i).show()
                }
            })
        })


        
        
        $(".enquiries-triger").click(function(e){
            e.preventDefault()
            $("#popup-container").fadeIn()
            $(this).parent().addClass("active")
            $("body, html").stop(true, true).animate({
                scrollTop: $("#popup-container").offset().top - 117
            }, 10)
            
            if($(window).width() < 768){
                $(".menu-area").slideUp()
            }
        })
        
        $("#close-btn").click(function(){
            $("#popup-container").fadeOut()
            $(".enquiries-triger").parent().removeClass("active")
        })
        
        $(".about-triger").click(function(e){
            e.preventDefault()
            e.stopPropagation()
            $("#about-popup").fadeIn()
            $(this).parent().addClass("active")
            $("body, html").stop(true, true).animate({
                scrollTop: $("#about-popup").offset().top - 0
            }, 10)
            
            if($(window).width() < 768){
                $(".menu-area").slideUp()
            }
        })
        
        $("#about-close, body").click(function(){
            $("#about-popup").fadeOut()
            $(".about-triger").parent().removeClass("active")
            
            $(".popup-inner-wrap").click(function(e){
                e.stopPropagation()
            })
        })
      
        
        $(".say-hello").click(function(e){
            e.preventDefault()
            $("#say-hello-popup").fadeIn()
            $(this).parent().addClass("active")
            $("body, html").stop(true, true).animate({
                scrollTop: $("#say-hello-popup").offset().top - 0
            }, 10)
        })
        
        $("#popup-close-btn").click(function(){
            $("#say-hello-popup").fadeOut()
        })
        
    

        if($(".datepicker").length){
            $( ".datepicker" ).datepicker();
        }

        
        
        $('.content-navigation li a').click(function(e){
            if( $(this).parent('li').hasClass('single-page')) return false
            else{
                console.log("I am clicked")
                e.preventDefault()
                var id = $(this).attr('href')

                if($(window).width() > 767){
                    $('html, body').stop(true, true).animate({
                        scrollTop: $(id).offset().top - 117
                    }, 1500, 'easeInOutCubic' );
                }

                else{
                    $('html, body').stop(true, true).animate({
                        scrollTop: $(id).offset().top - 60
                    }, 1500, 'easeInOutCubic' );
                    
                }

            }

        });
        
        
        $(".features-accodion .accordion p").hide()
        $(".features-accodion .accordion > h6").click(function(){
            
            $(".features-accodion .accordion").removeClass("active")
            $(this).parent().addClass("active")
            $(".features-accodion .accordion").find("p:visible").slideUp()
            
            if( $(this).parent().find("p:visible").length ){
                $(".accordion > p").slideUp()
                $(".accordion").removeClass("active")
            }
            else{
                $(this).parent().find("p").slideDown()
                $(this).parent().addClass("active")
            }
        })
        
        
        //Scroll Up and down function 
        var iScrollPos = 0;
        $(window).scroll(function () {
            var iCurScrollPos = $(this).scrollTop();

            if (iCurScrollPos > iScrollPos) {

                $('div.fond').animate({
                    'top': 15
                }, 500, function(){
                    $(this).stop(true, true).animate({'top': 65 }, 500)
                })
                
                $('div.bamboo-fond').animate({
                    'top': -35
                }, 500, function(){
                    $(this).stop(true, true).animate({'top': 0 }, 500)
                })

                //Scrolling Down

            } else {

                //Scrolling Up
                $('div.fond').animate({
                    'top': 105
                }, 500, function(){
                    $(this).stop(true, true).animate({'top': 65 }, 500)
                })
                
                $('div.bamboo-fond').animate({
                    'top': -35
                }, 500, function(){
                    $(this).stop(true, true).animate({'top': 0 }, 500)
                })

            }
            iScrollPos = iCurScrollPos;
        });

                
        $(window).scroll(function(){
            if($(window).scrollTop() > 10){
                $("body").addClass("fixed")
            }
            else{
                $("body").removeClass("fixed")
            }
            
            if($(".home-page-content").length){
            
                if( $(window).scrollTop() > ( $('#cousine-island').offset().top - 120 ) && $(window).scrollTop() < ( $('#shine-shack').offset().top - 127) ){
                    $('.content-navigation li.active').removeClass('active')
                    $('a.cousine-island-nav').parent('li').addClass('active')

                }


                else if( $(window).scrollTop() > ( $('#shine-shack').offset().top - 125 ) && $(window).scrollTop() < ( $('#bamboo-bee').offset().top - 187 )){
                    $('.content-navigation li.active').removeClass('active')
                    $('a.shine-shack-nav').parent('li').addClass('active')

                }

                else if( $(window).scrollTop() > ( $('#bamboo-bee').offset().top - 127)){

                    $('.content-navigation li.active').removeClass('active')
                    $('a.bamboo-bee-nav').parent('li').addClass('active')
                    $(".content-navigation").addClass("changePosition")
                }

                else{
                    $('.content-navigation li.active').removeClass('active')
                    $(".content-navigation").removeClass("changePosition")
                }
                
            }
            
        })
        
        $(window).scroll(function(){
                        
            if($(".profile-content").length){
            
                if( $(window).scrollTop() > ( $('#about-kirsten').offset().top - 120 ) && $(window).scrollTop() < ( $('#my-memoir').offset().top - 120) ){
                    $('.content-navigation li.active').removeClass('active')
                    $('a.about-kirsten-nav').parent('li').addClass('active')

                }

                else if( $(window).scrollTop() > ( $('#my-memoir').offset().top - 120)){

                    $('.content-navigation li.active').removeClass('active')
                    $('a.my-memoir-nav').parent('li').addClass('active')

                }

                else{
                    $('.content-navigation li.active').removeClass('active')
                }
                
            }
        })
        
        
        if($(".home-page-content").length){
            $(window).scroll(function(){
                if( $(window).scrollTop() > ( $('#bamboo-bee').offset().top + 190)){
                    $(".content-navigation").addClass("changePosition")
                }
                else{
                    $(".content-navigation").removeClass("changePosition")  
                }
            })
        }

        if($(".profile-content").length){
            $(window).scroll(function(){
                if($(window).scrollTop() > ($("#my-memoir").offset().top - 190) ){
                    $(".content-navigation").addClass("changePosition")
                }
                else{
                    $(".content-navigation").removeClass("changePosition") 
                }
            })
        }
        
        
        
        
        
        
		
	})// End ready function.


    $(window).load(function(){
        $("body").addClass("startAnimate");

        // Begin common slider
        if ( $('.content-slider').length == 0 ) return false

        $('.content-slider').flexslider({
            animation:"slide",
            slideshow: true,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })
    })
    


    $(window).load(function(){
        $("body").addClass("startAnimate");

        // Begin common slider
        if ( $('.about-text-sldier').length == 0 ) return false

        $('.about-text-sldier').flexslider({
            animation:"fade",
            slideshow: true,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })
    })
    $(window).load(function(){
        $("body").addClass("startAnimate");

        // Begin common slider
        if ( $('.video-slider').length == 0 ) return false
        $('.video-slider').flexslider({
            animation:" slide",
            slideshow: true,
            directionNav: false,
            controlNav:true,
            slideshowSpeed: 5000,  //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600, 
            useCSS: false,
            start: function(slider){
                //$('body').removeClass('loading');

            }
            ,
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function(slider) {

            }
        })

        /*$('div.slider-wrap video').trigger('play');*/
    })

})(jQuery)