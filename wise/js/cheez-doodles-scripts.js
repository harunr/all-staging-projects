
(function($){
	$(function(){

        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });
        
        
        // Contact page function
        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({});
        }
        
        // marquee-slider
        $('.marquee-slider-wrap').marquee({
            direction: 'left',
            duration: 50000,
            gap: 50,
            delayBeforeStart: 0,
            duplicated: true,
            startVisible: true
        });
        
        
        if ($('.videos-item-wrap').length) {
            $('.videos-item-wrap').slick({
                autoplay: false,
                autoplaySpeed: 1500,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            adaptiveHeight: true,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows:false,
                        },
                    },
                ],
            });
        }
        
        
        if ($('.mySwiper').length) {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                speed: 600,
                navigation: {
                    nextEl: '.cheez-arrow-next',
                    prevEl: '.cheez-arrow-prev',
                }
            });
        }
        
        if ($('.split-heading').length) {

            window.addEventListener("load", function () {
                let revealText = document.querySelectorAll(".split-heading");
                let results = Splitting({
                    target: revealText,
                    by: "lines"
                });

                results.forEach((splitResult) => {
                    const wrappedLines = splitResult.lines
                        .map(
                            (wordsArr) => `
                <span class="line"><div class="words">
                  ${wordsArr
                    .map(
                      (word) => `${word.outerHTML}<span class="whitespace"> 
                 </span>`
                    )
                    .join("")}
                </div></span>`
                        )
                        .join("");
                    splitResult.el.innerHTML = wrappedLines;
                });

                gsap.registerPlugin(ScrollTrigger);
                let revealLines = revealText.forEach((element) => {
                    const lines = element.querySelectorAll(".line .words");

                    let tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: element,
                            toggleActions: "restart none none none",
                        }
                    });
                    tl.set(revealText, {
                        autoAlpha: 1
                    });
                    tl.from(lines, 1, {
                        yPercent: 200,
                        duration: 1,
                        ease: "expo.inOut",
                        stagger: 0.2,
                        delay: 0.1
                    });
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
        
        });

}
        
        
        
        
        
        
        
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