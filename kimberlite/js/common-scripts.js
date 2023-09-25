(function ($) {
    $(function () {


        // Start Home JS

        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });

        /* $('.mode-btn').click(function () {
            $("body").toggleClass("lightMode");
        });
*/

        var $window = $(window);

        $('.sub-nav').parent('li').addClass('has-sub-nav')
        if ($window.width() > 767) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.mouseenter(function () {
                    $this.find('.sub-nav').show()
                })
                $this.mouseleave(function () {
                    $this.find('.sub-nav').hide();
                })
            })
        }

        if ($window.width() < 768) {
            $('.has-sub-nav').each(function () {
                var $this = $(this);

                $this.find('> a').click(function (e) {
                    var $$this = $(this);
                    e.preventDefault()
                    console.log('event')
                    $this.find('.sub-nav').slideToggle()
                    $this.toggleClass('collapsed')
                })
            })
        }



        if ($window.width() > 767) {
            $('.network-component').each(function () {
                var $this = $(this);
                $this.find('.network-component-btn').mouseenter(function () {
                    $this.find('.network-component-content').stop(true).slideDown()
                    $this.stop(true).addClass('open');
                })
                $this.mouseleave(function () {
                    $this.find('.network-component-content').stop(true).slideUp();
                    $this.stop(true).removeClass('open');
                })
            })
        }
        if ($window.width() < 768) {
            $(".network-component").each(function () {
                var $this = $(this);
                $this.find(".network-component-btn").on("click touch", function () {
                    $(".network-component").removeClass("open")
                    $(".network-component-content").slideUp();
                    if ($this.find(".network-component-content:visible").length) {
                        $(".network-component").removeClass("open")
                        $(".network-component-content").slideUp();
                    } else {
                        $this.addClass("open")
                        $(".network-component-content").slideUp();
                        $this.find(".network-component-content").slideDown();
                    }
                })
            })
        }


        $(window).on('load', function () {
            if ($('.presale-popup').length) {
                setTimeout(function () {
                    $('.presale-popup').fadeIn()
                    setTimeout(function () {
                        $('body').addClass('popup-loaded')
                    }, 200)
                }, 1500)
                $('.presale-popup-arrow').click(function () {
                    $('body').removeClass('popup-loaded')
                    setTimeout(function () {
                        $('.presale-popup').fadeOut()
                    }, 600)
                })
            }
        })


        if ($('.ecosystem-content-slider').length) {

            var $slider = $('.ecosystem-content-slider');
            var $progressBar = $('.progress');
            var $progressBarLabel = $('.slider__label');

            $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

                $progressBar
                    .css('background-size', calc + '% 100%')
                    .attr('aria-valuenow', calc);

                $progressBarLabel.text(calc + '% completed');
            });

            $('.ecosystem-content-slider').slick({
                autoplay: true,
                autoplaySpeed: 2000,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                infinite: true,
                fade: true,
                asNavFor: '.ecosystem-thumb-wrap'
            })

            $(window).on('resize', function () {
                $('.ecosystem-content-slider').slick('resize');
            });
        }

        if ($('.ecosystem-thumb-wrap').length) {
            $('.ecosystem-thumb-wrap').slick({
                autoplay: false,
                autoplaySpeed: 4000,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                infinite: true,
                fade: true,
                asNavFor: '.ecosystem-content-slider',
            })

            $(window).on('resize', function () {
                $('.ecosystem-thumb-wrap').slick('resize');
            });
        }


        if ($('.team-component-slider').length) {
            $('.team-component-slider').slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1345,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            infinite: true,
                        }
            },
                    {
                        breakpoint: 1010,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                        }
            },
                    {
                        breakpoint: 715,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
            }
        ]
            });
            $(window).on('resize', function () {
                $('.team-component-slider').slick('resize');
            });
        }

        // set content on click

        $('body').addClass(localStorage.getItem("theme"));
        $('.mode-btn').click(function () {
            $('body').toggleClass('lightMode');
            if ($('body').hasClass('lightMode')) {
                localStorage.setItem("theme", "lightMode");
            } else {
                localStorage.setItem("theme", "light");
            }
        });

        if ($('.team-component-management').length) {
            $('.team-component-management').slick({
                dots: false,
                arrows: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 1345,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 2,
                            infinite: true,
                        }
            },
                    {
                        breakpoint: 1010,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true,
                        }
            },
                    {
                        breakpoint: 715,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
            }
        ]
            });
            $(window).on('resize', function () {
                $('.team-component-management').slick('resize');
            });
        }

        // Start Tokenomics JavaScript

        if ($window.width() > 767) {
            $('.investors-component').each(function () {
                var $this = $(this);

                $this.find('.investors-btn').mouseenter(function () {
                    $this.addClass('open');
                })
                $this.mouseleave(function () {
                    $this.removeClass('open');
                })
            })
        }
        if ($window.width() < 768) {
            $('.investors-component').each(function () {
                var $this = $(this);

                $this.find('.investors-btn').click(function () {
                    $this.toggleClass('open');
                })
                $this.mouseleave(function () {
                    $this.removeClass('open');
                })
            })
        }

        // End Tokenomics JavaScript


        //about page
        window.onload = function () {
            $('#featured-stakeholders-slider').slick({
                autoplay: true,
                autoplaySpeed: 1500,
                arrows: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        };

        // Contact page
        if ($('.contact-page').length) {
            $('body').addClass('contact-us')
        }


        // FAQ page tab
        $('.tab-triger ul li').click(function () {
            $('.tab-triger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.tab-item-wrap .tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        // FAQ page accordian
        $(".question-content-info").each(function () {
            var $this = $(this);
            $this.find(" > h6").on("click touch", function () {
                $(".question-content-info").removeClass("accordion-active")
                $(".question-content-text").slideUp();
                if ($this.find(".question-content-text:visible").length) {
                    $(".question-content-info").removeClass("accordion-active")
                    $(".question-content-text").slideUp();
                } else {
                    $this.addClass("accordion-active")
                    $(".question-content-text").slideUp();
                    $this.find(" > .question-content-text").slideDown();
                }
            })
        })

        // FAQ page slider
        if ($('.card-item-slide').length) {
            $('.card-item-slide').slick({
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
                $('.card-item-slide').slick('resize');
            });
        }

        /* Pie Chart*/
        $('.image-map area').click(function (e) {
            e.preventDefault();
        })
        if ($('.image-map').length) {
            $('img[usemap]').rwdImageMaps();
        }
        if ($('.pie-chart').length) {
            $('body').addClass('has-sticky')
        }


        /* Pie Chart*/

        if ($('.kimberlite-ecosystem-inner').length) {
            var ecosystemPosY = $('.kimberlite-ecosystem-inner').offset().top;
            $(window).on('scroll', function () {
                var scrollY = $(this).scrollTop();
                if (scrollY > (ecosystemPosY - ($(window).outerHeight() / 2))) {
                    $('.kimberlite-ecosystem-inner').addClass('animatedView')
                }
                /*else{
                                $('.kimberlite-ecosystem-inner').removeClass('animatedView')
                            }*/
            })
        }


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



        if ($('.pie-chart-item').length) {
            function disableScroll() {
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    window.onscroll = function () {
                        window.scrollTo(scrollLeft, scrollTop);
                    };
            }

            function enableScroll() {
                window.onscroll = function () {};
            }
            
            
            var $animation_elements1 = $('.pie-chart-item');
            var $window1 = $(window);

            function check_if_in_view1() {
                var window_height1 = $window1.height() - ($window1.height() / 2.5);
                var window_top_position1 = $window1.scrollTop();
                var window_bottom_position1 = (window_top_position1 + window_height1);
                $.each($animation_elements1, function () {
                    var $element1 = $(this);
                    var element_height1 = $element1.outerHeight();
                    var element_top_position1 = $element1.offset().top;
                    var element_bottom_position1 = (element_top_position1 + element_height1);
                    if (element_top_position1 <= window_bottom_position1) {
                        $(function () {
                            var el = $animation_elements1;
                            var index = 0;
                            var timer = window.setInterval(function () {
                                if (index < el.length) {
                                    el.eq(index++).addClass('chart-active');
                                } else {
                                    window.clearInterval(timer);
                                }
                            }, 400);
                        });
                    } else {}
                });
            }
            $window.on('scroll resize', check_if_in_view1);
            $window.trigger('scroll');


        }

        $(window).on('load', function(){
            setTimeout(function(){
                $('body').addClass('page-loaded')
            }, 800)
        })
        
        
        $('input, textarea').not('input[type="submit"]').parent().addClass('error-field')
         $('.error-field input, .error-field textarea').each(function () {
            var $this = $(this)
            $this.on("mousedown", function (e) {
                $this.on('mouseout', function () {
                    if ($this.val().length === 0) {
                        $(this).parent().addClass('no-entry')
                    } else {
                        $(this).parent().removeClass('no-entry')
                    }

                })


            });
        })

           $('.error-field').each(function () {
            var $this = $(this)
            var nameReg = /^[A-Za-z]+$/;
            var numberReg = /^[0-9]+$/; /*/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/*/
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            var emailName = $this.find('input[type="email"]').val()
            var numberName = $this.find('input[type="tel"]').val()

            var $thisInput = $(this).find('input')
            $this.find('input[type="email"]').on("keyup", function (e) {
                var $thisVal = $(this).val()
                if (!emailReg.test($thisVal)) {
                    $(this).parent().addClass('wrong-entry')

                } else {
                    $(this).parent().removeClass('wrong-entry')
                }

            });
            $this.find('input, textarea').on("keyup", function (e) {
                var $thisVal = $(this).val()
                if ($thisVal.length == 0) {
                    $(this).parent().addClass('no-entry')
                } else {
                    $(this).parent().removeClass('no-entry')
                }

            });
            $this.find('input[type="tel"]').on("keyup", function (e) {
                var $thisVal = $(this).val()
                if (!numberReg.test($thisVal)) {
                    $(this).parent().addClass('wrong-entry')
                    $(this).parent().addClass('error-field')
                } else {
                    $(this).parent().removeClass('wrong-entry')
                }

            });
        })




    }) // End ready function.





})(jQuery)