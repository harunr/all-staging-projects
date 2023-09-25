
(function($){
	$(function(){

        
        $('.phone-nav').click(function () {
            $('body').toggleClass('navShown')
        })

            
        $('.work-process-tab-item').eq(0).show()
        $('.work-process-tab-trigger ul li').eq(0).addClass('tab-active')
        $('.work-process-tab-trigger ul li a').click(function (e) {
            e.preventDefault();
            $('.work-process-tab-trigger ul li').removeClass('tab-active');
            $(this).parent('li').addClass('tab-active');
            $('.work-process-tab-item').hide();
            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if ($('.blog-component-wrap').length) {
            $('.blog-component-wrap').slick({
                autoplay: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots:false,
                infinite: false,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            })
        
            $(window).on('resize', function () {
                $('.blog-component-wrap').slick('resize');
            });
        }


	})// End ready function.
})(jQuery)

