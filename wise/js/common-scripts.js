(function ($) {
    $(function () {

        // Menu function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });


        $('.meet-lineup-tab-item-wrap .meet-lineup-tab-item ').eq(0).addClass('lineup-tab-active')
        $('.meet-lineups-tab-trigger ul li').click(function () {
            $('.meet-lineups-tab-trigger ul li').removeClass('active'); 
            $(this).addClass('active');
            $('.meet-lineup-tab-item-wrap .meet-lineup-tab-item').removeClass('lineup-tab-active');
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).addClass('lineup-tab-active');
            return false;
        });

        //Contact page Function
        $(".faq-accordion-item").each(function () {
            var $this = $(this);
            $this.find(" > h6").on("click touch", function () {
                $(".faq-accordion-item").removeClass("active")
                $(".faq-accordion-item .faq-accordion-content").slideUp();
                if ($this.find(".faq-accordion-content:visible").length) {
                    $(".faq-accordion-item").removeClass("active")
                    $(".faq-accordion-item .faq-accordion-content").slideUp();
                } else {
                    $this.addClass("active")
                    $(".faq-accordion-item .faq-accordion-content").slideUp();
                    $this.find(" > .faq-accordion-content").slideDown();
                }
            })
        })

        // Recipe page Function
        $('.recipes-tab-trigger ul li').click(function () {
            $('.recipes-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.recipes-tab-item-wrap .recipes-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        // Product page Function
        $('.product-tab-trigger ul li').click(function () {
            $('.product-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.product-tab-item-wrap .product-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        $(window).on('load', function () {
            if ($('.meet-lineup-slider-wrap').length) {

                $('.meet-lineup-tab-item').each(function (e) {
                    var $this = $(this);
                    $this.find('.slider-button-next').addClass(`slider-button-next-${e}`);
                    $this.find('.slider-button-prev').addClass(`slider-button-prev-${e}`);
                    $(this).find('.meet-lineup-swiper').addClass(`meet-lineup-swiper-${e}`)
                    setTimeout(function(){
                    var swiper = new Swiper(`.meet-lineup-swiper-${e}`, {
                        slidesPerView: "auto",
                        spaceBetween: 0,
                        centeredSlides: true,
                        loop: true,
                        navigation: {
                            nextEl: '.slider-button-next-'+e,
                            prevEl: '.slider-button-prev-'+e,
                        }
                    });
                    }, 1000)
                })
            }

            if ($('.recipe-item-wrap').length) {
                var swiper = new Swiper(".recipe-item-swiper", {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    centeredSlides: true,
                    loop: true,
                    speed: 600,
                    navigation: {
                        nextEl: '.recipe-slider-button .slider-button-next',
                        prevEl: '.recipe-slider-button .slider-button-prev',
                    }
                });
            }

        })
        
        
        //History page
        if ($('.timeline-item-wrap').length) {
            $('.timeline-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                             }
                ]
            });
            $(window).on('resize', function () {
                $('.timeline-item-wrap').slick('resize');

            });
        }
        
//        if ($('.split-heading').length) {
//
//            window.addEventListener("load", function () {
//                let revealText = document.querySelectorAll(".split-heading");
//                let results = Splitting({
//                    target: revealText,
//                    by: "lines"
//                });
//
//                results.forEach((splitResult) => {
//                    const wrappedLines = splitResult.lines
//                        .map(
//                            (wordsArr) => `
//                <span class="line"><div class="words">
//                  ${wordsArr
//                    .map(
//                      (word) => `${word.outerHTML}<span class="whitespace"> 
//                 </span>`
//                    )
//                    .join("")}
//                </div></span>`
//                        )
//                        .join("");
//                    splitResult.el.innerHTML = wrappedLines;
//                });
//
//                gsap.registerPlugin(ScrollTrigger);
//                let revealLines = revealText.forEach((element) => {
//                    const lines = element.querySelectorAll(".line .words");
//
//                    let tl = gsap.timeline({
//                        scrollTrigger: {
//                            trigger: element,
//                            toggleActions: "restart none none none",
//                        }
//                    });
//                    tl.set(revealText, {
//                        autoAlpha: 1
//                    });
//                    tl.from(lines, 1, {
//                        yPercent: 150,
//                        duration: 1,
//                        ease: "expo.inOut",
//                        stagger: 0.2,
//                        delay: 0.1
//                    });
//                });
//            
//
//
//        var $animation_elements = $('.animated');
//        var $window = $(window);
//
//        function check_if_in_view() {
//            var window_height = $window.height() / 1.1;
//            var window_top_position = $window.scrollTop();
//            var window_bottom_position = (window_top_position + window_height);
//            $.each($animation_elements, function () {
//                var $element = $(this);
//                var element_height = $element.outerHeight();
//                var element_top_position = $element.offset().top;
//                var element_bottom_position = (element_top_position + element_height);
//                if (element_top_position <= window_bottom_position) {
//                    $element.addClass('in-view');
//                } else {}
//            });
//        }
//        $window.on('scroll resize', check_if_in_view);
//        $window.trigger('scroll');
//        
//        });
//
//}
        
//        var text = $(".hero-heading h1");
        
        var $animation_elements = $('.animated');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
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


        $.fn.convertToSeperateLetters = function () {
            return this.each(function () {
                var $el = $(this);
                var elements = convertToSeperateLetters($el, false);

                $el.empty().append(elements);

                return $el;
            });
        }

        $('.animated-text').convertToSeperateLetters();

        function convertToSeperateLetters($element, asSubNode) {
            var elements = [];

            var childNodes = $element.contents();

            // Loop through all child nodes of selected element
            for (var c = 0; c < childNodes.length; c++) {
                var node = childNodes[c];
                var type = node.nodeType;

                // Process a child element
                if (type == Node.ELEMENT_NODE) {
                    Array.prototype.push.apply(elements, convertToSeperateLetters($(node), true));
                }

                // Process a piece of text
                else if (type == Node.TEXT_NODE) {
                    var text = node.nodeValue;

                    // Process each word
                    var words = text.split(' ');
                    for (var w = 0; w < words.length; w++) {
                        var word = words[w];

                        // Skip empty words
                        if (word == '') continue;

                        // Wrap each word into span
                        var $word = $('<div/>').addClass('word');
                        for (var l = 0; l < word.length; l++) {
                            var letter = word[l];

                            // Wrap each letter into span
                            var $letter = $('<div/>').addClass('letter');

                            if (!asSubNode) {
                                $letter.html(letter);
                            }

                            if (asSubNode) {
                                var $subNode = $element.clone().empty().html(letter);
                                $letter.append($subNode);
                            }

                            $word.append($letter);
                        }

                        elements.push($word);
                    }
                }
            }
            return elements;
        }
        
        $('.animated-text').each(function(){
            var $this = $(this);
            
            var thisOffset = $this.offset().top;
            var windowHeight = $(window).outerHeight() / 1.1
            $(window).on('scroll', function(){
                var scrollY = $(this).scrollTop();
                 
                if(scrollY > (thisOffset - windowHeight)){
                    $(function () {
                        var el = $this.find('.letter');
                        var index = 0;
                        var timer = window.setInterval(function () {
                            if (index < el.length) {
                                el.eq(index++).addClass('text-show');
                            } else {
                                window.clearInterval(timer);
                            }
                        }, 20);
                    });
                }
            })
            
        
        
            $(window).on('load', function () {
                $(function () {
                    var el = $('.hero-heading h1 .letter');
                    var index = 0;
                    var timer = window.setInterval(function () {
                        if (index < el.length) {
                            el.eq(index++).addClass('text-show');
                        } else {
                            window.clearInterval(timer);
                        }
                    }, 20);
                });
            })
        
        })
        $(window).on('load', function () {
            var totalHeight = $('#scroll-container').outerHeight()
            $('body').css('height', totalHeight);
            
            $('.hero-heading h1').css({'opacity': 1})
        })
        
        
        
        

    }) // End ready function.






})(jQuery)