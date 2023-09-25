(function ($) {
    $(document).ready(function () {
            //your code here

        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
        });

        /* Header */
        if ($(".main-header-section").length) {
            var $header = $(".main-header-section"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $mainHeaderHeight = $header.outerHeight(),
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() > 768) {
                $fixedHeader.css({
                    top: -$headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight + 140) {

                        //$fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").addClass("started");

                        if (fromTop > lastPos) {
                            $fixedHeader.css({
                                top: 0
                            });
                        }
                        lastPos = fromTop;


                    } else {
                        $fixedHeader.css('top', '-' + $headerHeight + 'px');
                        $("body").removeClass("started");

                    }
                });


            } else {
                $(window).on("scroll", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    } else {
                        $("body").removeClass("over-header");
                    }
                })
            }
        }
        /* Header */

        var headerHeight = $('#main-header').outerHeight();
        $(window).resize(function () {
            headerHeight = $('#main-header').outerHeight();
        });

        $(document).delegate(".DeleteBtn", 'click', function () {
            alert(".DeleteBtn Click Function -  " + $(this).attr('id'));
            var DelBtnNum = $(this).attr('id');
            DelBtnNum = DelBtnNum[DelBtnNum.length - 1];
            $('#divInput' + DelBtnNum).remove();

        });


        if ($(window).width() > 767) {
            var $pos_elements = $('.parties-abroad-closer-wrap');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($pos_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                        $element.addClass('stratParallax');
                    } else {
                        $element.removeClass('stratParallax');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');


            $(window).scroll(function () {

                var wScroll = $(this).scrollTop()

                $(".stratParallax .abroad-closer-thumb-right img").css({
                    "transform": "translate(0px, -" + wScroll / 30 + "%)"
                })
            })
        };

        $('.parties-abroad-closer-action a:first').addClass('active');
        $('.tab-hidden p').hide();
        $('.tab-hidden p:first').show();
        $('.parties-abroad-closer-action a').click(function () {

            $('.parties-abroad-closer-action a').removeClass('active');
            $(this).addClass('active');
            $('.tab-hidden p').hide();
            var activeTab = $(this).attr('href');
            $(activeTab).show();
            return false;
        });

        /* Hero slider */
        if ($('#hero-slider').length) {

            var $status = $('.slideingInfo');
            var $slickElement = $('#hero-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                if (currentSlide + 1 > slick.slideCount) {
                    i = slick.slideCount
                } else {
                    i = (currentSlide ? currentSlide : 0) + 1;
                }
                var setCounter = (i < 10 ? '0' + i : i);
                $("#counter").text(setCounter)
                var slickTotalCount = (slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount);
                $("#total-count").text(slickTotalCount)
            });

            $slickElement.slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: true,
                navigation: false,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '.arrow-left',
                nextArrow: '.arrow-right',
                responsive: [
                    {
                        breakpoint: 668,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                            infinite: false,
                        },
                    },
                ],
            });
            $(window).on('resize', function () {
                $('#hero-slider').slick('resize');

            });
        }

        /* Parties Hero slider */
        if ($('#parties-hero-slider').length) {

            var $status = $('.slideingInfo');
            var $slickElement = $('#parties-hero-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

                /* var i = (currentSlide ? currentSlide : 0) + 4;*/
                if (currentSlide + 1 > slick.slideCount) {
                    i = slick.slideCount
                } else {
                    i = (currentSlide ? currentSlide : 0) + 1;
                }
                var setCounter = (i < 10 ? '0' + i : i);

                $("#counter").text(setCounter)

                var slickTotalCount = (slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount);

                $("#total-count").text(slickTotalCount)
            });

            $slickElement.slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: true,
                navigation: false,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '.parties-arrow-left',
                nextArrow: '.parties-arrow-right',
                responsive: [
                    {
                        breakpoint: 668,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                            infinite: false,
                        },
                    },
                ],
            });
            $(window).on('resize', function () {
                $('#parties-hero-slider').slick('resize');

            });
        }

        //  venue-carousel function 
        if ($(window).width() > 767) {
            if ($('#gallery-slider').length) {
                $('#gallery-slider').slick({
                    dots: false,
                    arrows: false,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    infinite: true,
                    navigation: false,
                    speed: 700,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [


                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                autoplay: false,
                                speed: 700,
                                controlNav: false,
                                directionNav: false,
                                arrows: false,
                                loop: false,
                            }
                        },

                        {
                            breakpoint: 767,
                            settings: "unslick"
                        },

                    ]

                });
                $(window).on('resize', function () {
                    $('#gallery-slider').slick('resize');

                });
            };
        }

        //  venue-carousel function 
        if ($(window).width() > 767) {
            if ($('#gallery-slide').length) {
                $('#gallery-slide').slick({
                    dots: false,
                    arrows: false,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    infinite: true,
                    navigation: false,
                    speed: 700,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [


                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                autoplay: false,
                                speed: 700,
                                controlNav: false,
                                directionNav: false,
                                arrows: false,
                                loop: false,
                            }
                        },

                        {
                            breakpoint: 767,
                            settings: "unslick"
                        },

                    ]

                });
                $(window).on('resize', function () {
                    $('#gallery-slide').slick('resize');

                });
            };
        }

        // INITIATE THE FOOTER
        siteFooter();

        $(window).resize(function () {
            siteFooter();
        });

        function siteFooter() {
            var siteContent = $('.main-content-wrap');
            var siteContentHeight = siteContent.height();
            var siteContentWidth = siteContent.width();

            var siteFooter = $('.footer-section');
            var siteFooterHeight = siteFooter.height();
            var siteFooterWidth = siteFooter.width();


            siteContent.css({
                "margin-bottom": siteFooterHeight + 166
            });
        };

        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                $(".footer-section").addClass('footer-sticky');
            } else {
                $(".footer-section").removeClass('footer-sticky');
            }
        })
        
        if ($(".single-portfolio-conntent").length) {
            $("body").addClass("single-portfolio-page")
        }

        /* Parties Page */
        if ($('#luxury-corporate-slider').length) {

            var $status = $('.slideingInfo');
            var $slickElement = $('#luxury-corporate-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

                /* var i = (currentSlide ? currentSlide : 0) + 4;*/
                if (currentSlide + 1 > slick.slideCount) {
                    i = slick.slideCount
                } else {
                    i = (currentSlide ? currentSlide : 0) + 1;
                }
                var setCounter = (i < 10 ? '0' + i : i);
                $(".counter").text(setCounter)
                var slickTotalCount = (slick.slideCount < 10 ? '0' + slick.slideCount : slick.slideCount);
                $(".total-count").text(slickTotalCount)
            });

            $slickElement.slick({
                dots: false,
                arrows: true,
                autoplay: false,
                autoplaySpeed: 5000,
                infinite: true,
                navigation: false,
                speed: 700,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '.corporate-arrow-left',
                nextArrow: '.corporate-arrow-right',
                responsive: [
                    {
                        breakpoint: 668,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: false,
                            infinite: false,
                        },
                    },
                ],
            });
            $(window).on('resize', function () {
                $('#luxury-corporate-slider').slick('resize');

            });
        }

        /* Parties Page */

        if ($(".about-content").length) {
            $("body").addClass("about-page")
        }
    })

})(jQuery)