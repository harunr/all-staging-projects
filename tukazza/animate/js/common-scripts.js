
(function($){
	$(function(){



        // Phone nav click function
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });

        var heroHeight = $('.hero-wrap').outerHeight()
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
            
        })
 
		
	})// End ready function.
    


})(jQuery)

