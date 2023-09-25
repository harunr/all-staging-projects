(function ($) {
    $(function () {



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".side-nav").fadeToggle()
        });


        if ($('.marquee-slider-wrap').length) {
            $('.marquee-slider-wrap').marquee({
                direction: 'left',
                duration: 40000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }

        var itemHeight = $('.product-item-thumb figure').outerHeight();
        $('.product-item-thumb').css({'height': itemHeight})

        if ($('.product-item-wrap').length) {
            $('.product-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                
            });
            $(window).on('resize', function () {
                $('.product-item-wrap').slick('resize');

            });
            var slickTracHeight = $('.product-item-wrap .slick-list').outerHeight();
            $('.product-item').css({'height': slickTracHeight})
        }




        if ($('.recipe-item-wrap').length) {
            $('.recipe-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                responsive: [{
                        breakpoint: 561,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                 },
                    {
                        breakpoint: 1360,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                             }]
            });
            $(window).on('resize', function () {
                $('.recipe-item-wrap').slick('resize');

            });

            var slickTracHeight = $('.recipe-item-wrap .slick-list').outerHeight();

            $('.recipe-item').css({'height': slickTracHeight})
        }

        var $animation_elements = $('.animated');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height() / 1.1;
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


    }) // End ready function.





})(jQuery)
