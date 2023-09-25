(function ($) {
    $(function () {



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });


        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({});
        }


        var $window = $(window);

        $('.submenu').parent('li').addClass('has-sub-nav')
        if ($window.width() > 767) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.find('a').mouseenter(function (e) {
                    e.preventDefault();
                    $this.find('.submenu').fadeIn()
                    $("body").addClass("subnavShown");
                    $this.addClass("active");
                })
                $this.mouseleave(function () {
                    $this.find('.submenu').fadeOut();
                    $("body").removeClass("subnavShown");
                    $this.removeClass("active");
                })
            })
        }
        if ($window.width() < 768) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.find('a').click(function (e) {
                    e.preventDefault();
                    $this.find('.submenu').slideToggle()
                    $("body").toggleClass("subnavShown");
                    $this.toggleClass("active");
                })
            })
        }

        if ($('.hero-item-wrap').length) {

            $('.hero-item-wrap').on('init', function (event, slick) {
                    $(this).append('<div class="slick-counter"><span class="current"></span>/<span class="total"></span></div>');
                    $('.current').text(slick.currentSlide + 1);
                    $('.total').text(slick.slideCount);
                })
                .slick({
                    dots: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    infinite: true,
                    navigation: false,
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                })
                .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    $('.current').text(nextSlide + 1);
                });

                $('.hero-next-subtract').click(function () {
                    $(".hero-item-wrap .slick-next").click();
                });
        }


        if ($('.review-item-wrap').length) {
            $('.review-item-wrap').slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: false,
                navigation: false,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            });

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