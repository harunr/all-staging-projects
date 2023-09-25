(function ($) {
    $(function () {

        $('#phone-nav').click(function () {
            $('body').toggleClass('navShown')
            $(".nav-wrap").fadeToggle()
        })

        $('.sub-nav').parent('li').addClass('has-sub-nav')
        if ($(window).width() > 991) {

            $('.header-cta a.login').mouseenter(function () {
                $(this).addClass('hoverd')
                $('.main-nav > ul > li').stop(true, true).removeClass('hoverd')
            })

            $('.main-nav > ul > li, .header-cta a.login').addClass('hoverd')
            $('.main-nav > ul > li > a').mouseenter(function (e) {
                e.preventDefault()
                console.log('enter')
                $('.main-nav > ul > li, .header-cta a.login').stop(true, true).removeClass('hoverd')
                $(this).parent('li').stop(true, true).addClass('hoverd')
            })
            $('.main-nav > ul > li > a, .header-cta a.login').mouseleave(function () {
                console.log('enter')
                $('.main-nav > ul > li, .header-cta a.login').stop(true, true).addClass('hoverd')
            })

            $('.has-sub-nav').each(function () {
                var $this = $(this)
                $this.find('> a').mouseenter(function () {
                    $(this).stop(true, true).addClass('nav-open')
                    $this.find('.sub-nav').stop(true, true).fadeIn()
                })
                $this.mouseleave(function () {
                    $('.has-sub-nav a').removeClass('nav-open')
                    $this.find('.sub-nav').stop(true, true).fadeOut()
                })
            })
        }

        if ($(window).width() < 992) {
            $(".has-sub-nav").each(function () {
                var $this = $(this);
                $this.find(" > a").on("click touch", function (e) {
                    e.preventDefault();
                    $(".has-sub-nav > a").removeClass("nav-open")
                    $(".sub-nav").slideUp();
                    if ($this.find(".sub-nav:visible").length) {
                        $(".has-sub-nav > a").removeClass("nav-open")
                        $(".sub-nav").slideUp();
                    } else {
                        $this.find('> a').addClass("nav-open")
                        $(".sub-nav").slideUp();
                        $this.find(".sub-nav").slideDown();
                    }
                })
            })
        }

        if ($('.hero-slider-item-wrap').length) {
            $('.hero-slider-item-wrap').slick({
                arrows: false,
                navigation: false,
                autoplaySpeed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                pauseOnHover: true,

            });
            $(window).on('resize', function () {
                $('.hero-slider-item-wrap').slick('resize');
            });
        }

        if ($('.instagram-item-wrap').length) {
            $('.instagram-item-wrap').slick({
                arrows: false,
                navigation: false,
                autoplaySpeed: 500,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,

                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,

                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('.instagram-item-wrap').slick('resize');
            });
        }


        if ($('.testimonials-item-wrap').length) {
            $('.testimonials-item-wrap').slick({
                arrows: false,
                navigation: false,
                autoplaySpeed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                centerPadding: '0',
                centerMode: true,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,

                        }
                    },

                ]

            });
            $(window).on('resize', function () {
                $('.testimonials-item-wrap').slick('resize');
            });
        }

        if ($('.product-features-item-wrap').length) {
            $('.product-features-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.product-features-item-wrap').slick('resize');
            });
        }

        if ($('.our-products-item-wrap').length) {
            $('.our-products-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: true,
                autoplay: false,
                autoplaySpeed: 2000,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.our-products-item-wrap').slick('resize');
            });
        }

        if ($('.brand-partners-item-wrap').length) {
            $('.brand-partners-item-wrap').slick({
                speed: 3500,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                mobileFirst: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: "unslick"
                    }
                            ]
            });
            $(window).on('resize', function () {
                $('.brand-partners-item-wrap').slick('resize');
            });
        }


    }) // End ready function.


})(jQuery)