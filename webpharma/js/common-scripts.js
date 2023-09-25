
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function() {
            $('body').toggleClass('nav-shown');
        });

        $(".main-nav ul > li").find("section").parent("li").addClass("show");
        $(".main-nav ul > li").find("section").parent("li").addClass("has-sub-nav");
       
        if ($(window).width() < 769){
            $(".main-nav ul > li.has-sub-nav > a").bind('click', 'touchend', function (e) {
                e.preventDefault();
                $(".main-nav ul > li").find("> section:visible").slideUp()
                $(".main-nav ul > li").removeClass("active")
                if ($(this).parent().find("> section:visible").length) {
                    $(this).removeClass("active")
                    $(this).parent().find("> section").slideUp()
                } else {
                    $(this).addClass("active")
                    $(this).parent().find("> section").slideDown()
                }
            })
        }
        
        // Headroom init function
        var header = new Headroom(document.querySelector(".header-wrap"), {
            tolerance: 5,
            offset : 205,
            classes: {
                initial: "headroom",
                pinned: "slideDown",
                unpinned: "slideUp"
            },
            onPin : function() {
                $('body').addClass('breadcrumb-bottom');
            },
            onUnpin : function() {
                $('body').removeClass('breadcrumb-bottom');
            },
        });
        header.init();
        
        $(window).scroll(function() {
            if ($(document).scrollTop() > 205) {
                $('body').addClass('breadcrumb-top');
            }
            else {
                $('body').removeClass('breadcrumb-top');
            }
        });
        
        
        if ($('.hypnotherapy-wrap .hypnotherapy-item-wrap').length) {
            $('.hypnotherapy-wrap .hypnotherapy-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },

                ]
            })
        }
        if ($('.further-wrap .hypnotherapy-item-wrap').length) {
            $('.further-wrap .hypnotherapy-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,

                        }
                    },
                    {
                        breakpoint: 769,
                        settings: "unslick"
                        },

                ]
            });
            $(window).on('resize', function () {
                $('.further-wrap .hypnotherapy-item-wrap').slick('resize');
                
                });
                
        }

        
        
        if ($('.session-slider-item-wrap').length) {
            $('.session-slider-item-wrap').slick({
                arrows:true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1500,
                speed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                centerMode: false,
                focusOnSelect: true,
                fade: true,
                
            })
        }

        $('.owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
            if (!e.namespace)  {
                return;
            }
            var carousel = e.relatedTarget;
            $('.slider-counter').text(carousel.relative(carousel.current()) + 1 +  ' of '  + carousel.items().length);
        }).owlCarousel({
            items: 3,
            loop:true,
            margin:0,
            nav:true,
            responsive : {
                0 : {
                    items: 1,
                    slideBy: 1,
                    stagePadding: 30,
                    center:true,
                },
                768 : {
                    items: 2,
                    slideBy: 1,
                },
                992 : {
                    items: 3,
                    slideBy: 1,
                },
            }
        });

        
        
        
        //go to second section
        $(function () {
            $('.down-icon a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });





        if ($('.achieve-item-wrap').length) {
            $('.achieve-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 2,
                arrows:true,
                dots: true,
                responsive: [
                    {
                     breakpoint: 999999,
                     settings: 'unslick'
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows:true,
                            dots: true,
                        }
                    },
                ]
            })
        
            $(window).on('resize', function () {
                $('.achieve-item-wrap').slick('resize');
                });
        }

        $(".question-content-info").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".question-content-info").removeClass("accordion-active")
                $(".question-content-text").slideUp();
                if($this.find(".question-content-text:visible").length){
                    $(".question-content-info").removeClass("accordion-active")
                    $(".question-content-text").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".question-content-text").slideUp();
                    $this.find(" > .question-content-text").slideDown();
                }
            })
        })

        if ($('.treatments').length){
            $('body').addClass('treatments-page');
        } 
   
        
       
        $(window).scroll(function () {
            var scrollDistance = $(window).scrollTop();
            $('.page-section').each(function (i) {
                if ($(this).position().top <= scrollDistance) {
                    $('.breadcrumb-nav ul li a.active').removeClass('active');
                    $('.breadcrumb-nav ul li a').eq(i).addClass('active');
                }
            });
        }).scroll();
        $(function () {
            $('.breadcrumb-nav a[href*="#"]:not([href="#"])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top + 10
                        }, 1000);
                        return false;
                    }
                }
            });
        });
        

        // Contact Page
        $(' .expert-item-wrap').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
             arrows: true,
             dots: false,
             autoplay: false,
             responsive: [
                 {
                     breakpoint: 769,
                     settings: {
                         arrows: true,
                         dots: true,
                         slidesToShow: 1
                     }
                 },
                 {
                     breakpoint: 480,
                     settings: {
                         arrows: true,
                         dots: true,
                         slidesToShow: 1
                     }
                 }
             ]
         });
        

        $(".breadcrumb-dropdown-wrap .common-wrap > ul > li").find(".breadcrumb-dropdown-nav").parent("li").addClass("has-sub-dropdown")
        $('.breadcrumb-dropdown-nav ul li').each(function () {
            var $$_this = $(this);
            $$_this.click(function (e) {
                e.preventDefault();
                var $_this = $(this)
                if ($$_this.find('> .dropdown-active')) {
                    $('.breadcrumb-dropdown-nav ul li a').removeClass('dropdown-active')
                    $$_this.find('> a').addClass('dropdown-active');
                } else {
                    $('.breadcrumb-dropdown-nav ul li a').removeClass('dropdown-active')
                    $$_this.find('> a').addClass('dropdown-active')
                }
            })
        })

        
        $(".breadcrumb-dropdown-nav ul li a").click(function (e) {
            e.preventDefault();
            $val2 = $('.breadcrumb-dropdown-wrap .common-wrap > ul > li.has-sub-dropdown > em');
            var $_this = $(this)
            $val = $_this.text();

            $val2.find('a').remove()
            $($val2).append('<a href="#">' + $val + '</a>');
        });
        
        $('.breadcrumb-dropdown-wrap .common-wrap > ul > li.has-sub-dropdown').find('> em a').click(function (e) {
            e.preventDefault();
        })
        $('.breadcrumb-dropdown-wrap .common-wrap > ul > li.has-sub-dropdown').find('> em').click(function (e) {
     
            var $_This = $(this)
            $_This.parents('.has-sub-dropdown').find('.breadcrumb-dropdown-nav').fadeIn();
        })

        $('.breadcrumb-dropdown-nav ul li a').click(function (e) {
            e.preventDefault();
            $(this).parents('.breadcrumb-dropdown-nav').fadeOut();
        })


        if($('#marque-slider').length){

            $('#marque-slider').slick({
                slidesToShow: 9,
                slidesToScroll: 2,
                centerPadding: '0px',
                autoplay: true,
                autoplaySpeed: 0,
                infinite: true,
                speed: 1500,
                cssEase:'linear',
                centerMode: true,
                variableWidth: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                focusOnSelect:false,
                initialSlide:1,
                arrows:false,
                responsive: [
                      
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '0px',
                            speed: 1500,
                        }
                    },
    
                ]
              /*  swipeToSlide: true,*/
    
            })
            $(window).on('resize', function () {
                $('#marque-slider').slick('resize');
                
                });
            }
    

    })// End ready function.
   
})(jQuery)

