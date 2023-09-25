
(function($){
	$(function(){



        // Phone nav click function
        $('.phone-nav').click(function () {
            $(".nav-wrap").slideToggle();
            $("body").toggleClass("navExpanded");
            $(".main-nav > ul > li").find("> div.mega-menu-item-wrap:visible").slideUp()
            $(".main-nav > ul > li").find("> ul:visible").slideUp()
            $(".main-nav > ul > li").removeClass("active");
        });

        $('.main-nav ul > li').find(">ul").parent().addClass("dropdown");
        $('.main-nav ul > li.dropdown').find(">ul").addClass("dropdown-menu");
        $('.main-nav ul > li').find(">div").parent().addClass("mega");
        $('.main-nav ul > li.mega').find(">div").addClass("mega-menu");
        
        
        


        if ($(window).width() < 992) {
            $(".main-nav ul > li").find("> ul").parent().addClass('hassubnav')
            $(".main-nav ul > li.hassubnav > a").bind('click', 'touchend', function (e) {
                e.preventDefault();
                $(".main-nav ul > li").find("> ul:visible").slideUp()
                $(".main-nav ul > li > a").removeClass("active")
                if ($(this).parent().find("> ul:visible").length) {
                    $(this).removeClass("active")
                    $(this).parent().find("> ul").slideUp()
                } else {
                    $(this).addClass("active")
                    $(this).parent().find("> ul").slideDown()
                }
            })
        }
        
        
        if($(".main-header-section").length){
            var $header = $(".main-header-section"),
                $clone = $header.before($header.clone().addClass("fixedTop")),
                $fixedHeader = $('.fixedTop'),
                $mainHeaderHeight = $header.outerHeight(),
                $headerHeight = $fixedHeader.outerHeight(),
                lastPos = 0;
            if ($(window).width() > 768) {
                $fixedHeader.css({
                    top: - $headerHeight
                });
                $(window).resize(function () {
                    $headerHeight = $fixedHeader.outerHeight();
                });

                $(window).on("scroll resize", function () {
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {

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


            } else{
                $(window).on("scroll", function(){
                    var fromTop = $(window).scrollTop();
                    if (fromTop > $mainHeaderHeight) {
                        $("body").addClass("over-header");
                    }else{
                        $("body").removeClass("over-header");
                    }
                })
            }
        }

        if($(".home-content").length){
            $("body").addClass('home-page');
        }
        
        if($(".village-details").length){
            $("body").addClass('village-details-page');
        }

        
        
     
        /* cart btn */
        $('.plus').click(function () {
            var $this = $(this).parent(".cart-input-item").find("input");
            $this.val(Number($this.val()) + 1);
        })

        $('.minus').click(function () {
            var $this = $(this)
            .parent(".cart-input-item").find("input");
            var amount = Number($this.val());
            if (amount > 1) {
                $this.val(amount - 1);
            }
        });
        
        
        /*  read more function */

        $(".featured-village-slider").each(function(){
            var $this = $(this);
            $this.next('.show-more-wrap ').click(function() {
                if ( $(this).prev('.featured-village-slider').hasClass('slide-down') ){
                    $('.show-more-wrap > .show-more').html('Show 6 More')
                    $(this).prev('.featured-village-slider').removeClass('slide-down')
                }

                else{
                    $('.show-more-wrap > .show-more').html('Show All')
                    $(this).find('.show-more').text("Less 6 more")
                    $('.featured-village-slider').removeClass('slide-down')
                    $(this).prev('.featured-village-slider').addClass('slide-down')
                }

            });
        })
        

        $('.video-play-icon').click(function (e) {
            e.preventDefault();
            $(".video-modal-wrap").fadeIn()
            $("body").addClass(modal-fixed);
        })
        $("#cross-bar").click(function (e) {
            e.preventDefault();
            $(".video-modal-wrap").fadeOut()
        })

        $(".video-modal-wrap").click(function(e){
            e.stopPropagation();

        })
       /* Video modal */
        
        
        
        
       /* Gallery */
        $(function(){
            var cWrap=$('<div class="one-third-set clear"></div>');
            $('.gallery-item-wrap .gallery-item.one-third').each(function(){
                var o = $(this).next('.gallery-item.one-third').length;
                $(this).replaceWith(cWrap).appendTo(cWrap);
                if (!o) cWrap=$('<div class="one-third-set clear"></div>');
            });
        });
       /* Gallery */
        
        
       /* Featured-village-slider function */
    
        if($('#featured-village-slider').length){

            var $status = $('.slideingInfo');
            var $slickElement = $('#featured-village-slider');

            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
               
                //var i = (currentSlide ? currentSlide : 0) + 4;
                if( currentSlide + 4 > slick.slideCount ){
                    i = slick.slideCount
                }
                else{
                    i = ( currentSlide ? currentSlide : 0 ) + 4; 
                }
                
                $("#counter").text(i)
                $("#total-count").text(slick.slideCount)
            });

            $slickElement.slick({
                dots: false,
                autoplay:false,
                autoplaySpeed:8000,
                infinite: true,
                navigation: true,
                speed: 800,
                slidesToShow:4,
                slidesToScroll: 4,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: "unslick"
                     
                    },
                  
                ]
            });
        }
        $(window).on('resize', function () {
            $('#featured-village-slider').slick('resize');
        });


     /*   Featured-village-slider function */
        
        
        
      /* Testimonials slider function */
        if($('#testimonials-slider').length){
            $('#testimonials-slider').slick({
                dots: true,
                arrows:true,
                autoplay:false,
                autoplaySpeed:5000,
                infinite: false,
                navigation:false,
                speed: 300,
                initialSlide : 1,
                slidesToShow:1,
                slidesToScroll: 1,
            });
        }
        /* Testimonials slider function */
       
        
        /* Form  */
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function () {
            var inputText = $(this).attr('placeholder')
            $(this).focus(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                }
            }).blur(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                    $(this).parent().removeClass('has-value');
                } else if ($(this).val().length > 0) {
                    $(this).parent().addClass('has-value');
                }
            })
        })
        /* Form  */
        
        
        /*tab*/
        if($(window).width() > 768){
       
            $(".tab-item-inner-wrap > .tab-item").eq(1).addClass("tab-active")
            $(".tab-item-inner-wrap > .tab-item").each(function (i) {
                $(this).click(function () {
                    if ($(this).hasClass("sold-out")) return false
                    if ($(this).hasClass("tab-active")) return false
                    else {
                        $(".tab-item-inner-wrap > .tab-item").removeClass("tab-active")
                        $(this).addClass("tab-active")
                        $(".tab-info-inner > div.tab-info-item").hide()
                          $(".tab-info-inner > div.tab-info-item").eq(i).show()
                    }
                })
            });
            }
        
        if($(window).width() < 768){

            $(".tab-item-inner-wrap  .tab-item").eq(0).addClass("tab-active")
            $(".tab-item-inner-wrap .tab-item").each(function (i) {
                $(this).click(function () {
                   
                  if ($(this).hasClass("tab-active")) return true
                    else {
                        $(".tab-item-inner-wrap  .tab-item").removeClass("tab-active")
                        $(this).addClass("tab-active")
                        $(".tab-info-inner > div.tab-info-item").hide()
                        $(".tab-info-inner > div.tab-info-item").eq(i).show()
                    }
                })
            });
        }

        
    
        $(".tab-item-list > ul > li").removeClass("active")
        $(".tab-item-list > ul > li").eq(0).addClass("active")

        $(".tab-item-list > ul > li").each(function (i) {
            $(this).click(function () {
                if ($(this).hasClass("active")) return false
                else {
                    $(".tab-item-list > ul > li").removeClass("active")
                    $(this).addClass("active")
                    $(".sale-tab-info > div.sale-tab-info-item").hide()
                    $(".sale-tab-info > div.sale-tab-info-item").eq(i).show()
                }
            })
        });
        
        
        $('.tab-item-inner-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 1000,
            loop: false,
            arrows:false,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },

                {
                    breakpoint: 767,

                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: false,
                        loop: false,
                        speed: 800,
                        controlNav: false,
                        directionNav: false,
                        arrows: false,
                        loop: true,
                    }
                },
                {
                    breakpoint: 480,

                    settings: {
                        slidesToShow:3,
                        slidesToScroll: 1,
                        autoplay: false,
                        loop: false,
                        speed: 800,
                        controlNav: false,
                        directionNav: false,

                        loop: true,
                    }
                },

            ]

        });
        $(window).on('resize', function () {
            $('.tab-item-inner-wrap').slick('resize');
        });
        
        

       $(".sale-tab-inner-list .sale-tab-inner-item").removeClass("active")
        $(".sale-tab-inner-list .sale-tab-inner-item").eq(0).addClass("active")

        $(".sale-tab-inner-list .sale-tab-inner-item").each(function (i) {
            $(this).click(function () {
                if ($(this).hasClass("active")) return false
                else {
                    $(".sale-tab-inner-list .sale-tab-inner-item").removeClass("active")
                    $(this).addClass("active")
                    $(".sale-price-info > div.sale-price-info-item").hide()
                    $(".sale-price-info > div.sale-price-info-item").eq(i).show()
                }
            })
        });
      
        
        
        if($(".more-blog-posts").length){
            $("body").addClass('more-blog-posts-page');
        } 
        
        if($(".estate-overview").length){
            $("body").addClass('estate-overview-page');
        }
        
        if($(".about-suburb-content").length){
            $("body").addClass('about-suburb-page');
        }
        
    
        $(window).scroll(function(){
            if($(window).width() >1024){
                if ($(window).scrollTop() > 90){
                    $("body").addClass('sticky');
                }
                else{
                    $("body").removeClass('sticky');
                }
            }
        });
        
/*        var lastScrollTopPos = 0;*/

        
        
        /* select */
   

        var mdquery = window.matchMedia("(max-width: 767px)");
        if (mdquery.matches) {
            
            if ($("select.mobiselec").length) {
                $("select.mobiselec").selectric();
            }
            
            $("#saleFirstTabItems > div:first-child").addClass("active");
            
            $("#firstSelect").on("change", function() {
                var chitem = $("#" + $("#firstSelect option:selected").val() );
                $("#saleFirstTabItems > div").removeClass("active");
                chitem.addClass("active")
                
                /*
                var chheight = chitem.height() + 180;
                $(".sale-tab-info").css({ height: chheight + "px" });
                ;*/
            })
        }
        
        
        var mdquery = window.matchMedia("(max-width: 767px)");
        if (mdquery.matches) {

            if ($("select.mobiselec").length) {
                $("select.mobiselec").selectric();
            }

            $("#secondSelect > div:first-child").addClass("active");

            $("#secondSelect").on("change", function() {
                var chitem = $("#" + $("#secondSelect option:selected").val() );
                $("#saleSecondTabItems > div").removeClass("active");
                chitem.addClass("active")

                /*
                var chheight = chitem.height() + 180;
                $(".sale-tab-info").css({ height: chheight + "px" });
                ;*/
            })
        }
        
/*
        var mdquery2 = window.matchMedia("(min-width:768px)");
        if (mdquery2.matches) {
            var checkscl = true;

            $(".tab-item-list-wrap ul li a").each(function() {
                $(this).on("click", function(e) {
                    $(".tab-item-list-wrap ul li a").removeClass("current");
                    $(this).addClass("current");
                    e.preventDefault();
                    checkscl = false;
                    $("html, body").animate(
                        {
                            scrollTop: $($(this).attr("href")).offset().top
                        },
                        1000,
                        function() {
                            checkscl = true;
                        }
                    );
                });
            });

            var mainNavLinks = document.querySelectorAll(".tab-item-list-wrap ul li a");

            window.addEventListener("scroll", function(event) {
                if (checkscl) {
                    var fromTop = window.scrollY;
                    var windowHeight = $(window).height();
                    mainNavLinks.forEach(function(link) {
                        var section = document.querySelector(link.hash);
                        var sectionTop = section.getBoundingClientRect().top;
                        var sectionHeight = section.getBoundingClientRect().height;

                        if (
                            sectionTop - windowHeight <= 0 &&
                            sectionTop - windowHeight >= -(windowHeight + sectionHeight)
                        ) {
                            $(mainNavLinks).removeClass("current");
                            link.classList.add("current");
                        } else {
                            link.classList.remove("current");
                        }
                    });
                }
            });
        }
*/
        /* select */
        
        
        
        
        
        
        

        //FAQs Accordion Function
        $(".accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h5").on("click touch", function(){
                $(".accordion-item").removeClass("active")
                $(".accordion-item .accordion-text").slideUp();
                if($this.find(".accordion-text:visible").length){
                    $(".accordion-item").removeClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                }
                else{
                    $this.addClass("active")
                    $(".accordion-item .accordion-text").slideUp();
                    $this.find(" > .accordion-text").slideDown();
                }
            })
        })
        
        if($(window).width()<=768){
            $(".accordion-nav").each(function(){
                var $this = $(this);
                $this.on("click touch", function(){
                    $(".accordion-nav").removeClass("active");
                    $(".accordion-content").slideUp();
                    if($this.parent().find(".accordion-content:visible").length){
                        $(".accordion-item").removeClass("active");
                        $(".accordion-content").slideUp();
                    }
                    else{
                        $this.addClass("active");
                        $this.parent().find(" > .accordion-content").slideDown();
                    }
                })
            }) 
           
        }
        
        
        if ($("select.stylled-select").length) {
            $("select.stylled-select").selectric();
        }
		
	})// End ready function.
   
    
  

	

})(jQuery)

