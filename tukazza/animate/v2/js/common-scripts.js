
(function($){
	$(function(){



        // Phone nav click function
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });

        /*var heroHeight = $('.hero-wrap').outerHeight()
        $('.main-content-wrap').css('padding-top', heroHeight)
        $(window).on('scroll', function(){
            var scrollY = $(this).scrollTop()
            if(scrollY > 5){
                $('body').addClass('animated')
                $('body').css("margin-top", -(heroHeight - 200))
            }else{
                $('body').removeClass('animated')
                $('body').css("margin-top", 0)
            }
            
        })*/
        
        
        $( window ).on("load", function() {
        // Handler for .load() called.
            $('.spacer').hide()
            var heroHeight = $('.hero-wrap').outerHeight()
            $('.main-content-wrap').css('padding-top', heroHeight)
            $(window).on('scroll', function(){
                var scrollY = $(this).scrollTop()
                if(scrollY > 5 && scrollY < heroHeight){
                    $(".fadeleft-anim").css("transform", `translateX(${(scrollY / 15)}px)`); 
                    $(".fadeup-slow").css("transform", `translateY(${-(scrollY / 8)}px)`); 
                    $(".fadeup-fast").css("transform", `translateY(${-(scrollY / 2)}px)`); 
                    $(".fadeup-anim").css("transform", `translateY(${-(scrollY / 5)}px)`); 
                    $(".hero-wrap").css({ 'opacity' : 1 - (scrollY / (heroHeight - 50)) });
                }else if(scrollY <= 6){
                    $(".hero-wrap").css({ 'opacity' : 1})
                }
                
            })
      });
        
 
		
	})// End ready function.
    


})(jQuery)

