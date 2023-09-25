
(function($){
	$(function(){



        // Phone nav click function
        $('.menu-icon-wrap').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeIn()
        });


        $('.hero-marquee').marquee({
            direction: 'left',
            speed: 80,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });
        

        $('.product-tab-trigger a').click(function (e) {
            e.preventDefault();
            $('.product-tab-trigger a').removeClass('active');
            $(this).addClass('active');
            $('.product-tab-item').hide();
            
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
         var $animation_elements = $('.animated');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height() / 1.2;
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {}
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
		
	})// End ready function.
   
    

	

})(jQuery)


function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}