(function ($) {
    $(function () {

        $('#phone-nav').click(function () {
            $('body').toggleClass('navShown')
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


        if ($('.sponsor-item-wrap').length) {
            $('.sponsor-item-wrap').slick({
                speed: 5000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                swipe: false,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                pauseOnHover: false
            });
        }

        if ($('.company-updates-sliders').length) {
            $('.company-updates-sliders').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '.slider-arrow-left',
                nextArrow: '.slider-arrow-right',
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
                        },
        },
      ],
            });
        }

        $('input').each(function () {
            var $_this = (this)
            $('input').on('keyup', function () {
                var $$_this = $(this)

                if ($$_this.val() == '') {
                    $$_this.parent().removeClass('focused');
                } else {
                    $$_this.parent().addClass('focused');
                }
            });

        })

        //faq
        $(".question-content-info").each(function () {
            var $this = $(this);
            $this.find(" > h5").on("click touch", function () {
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

        //blog
        $('.blog-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.blog-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.blog-main-section .blog-main-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if ($('.blog-page').length) {
            $('body').addClass('blog-page')
        }
        if ($('.admin-wrap').length) {
            $('body').addClass('admin-page')
        }

        //About
        if ($('.executive-slider-item-wrap').length) {
            $('.executive-slider-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: true,
                navigation: false,
                autoplaySpeed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
                pauseOnHover: true,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                },
                ],
            });
            $(window).on('resize', function () {
                $('.executive-slider-item-wrap').slick('resize');
            });
        }
        
        $('.survey-progress-item').eq(0).addClass('progress-active')
        $('.admin-survey-tab-item:first').show();
        $('.admin-survey-item').each(function () {
            var $this = $(this);
            $('.survey-next-prev a').click(function () {
                //                if ($this.find('input').is(':checked') && $this.find("textarea").val() != "") {
                $('.admin-survey-tab-item').hide();
                var activeTab = $(this).attr('href');
                $(activeTab).fadeIn(function () {
                    console.log('text')
                    $('html, body').animate({
                        scrollTop: 0
                    }, '300');
                });
                //                }
                return false;
            });
        })
        
        $('.registration-form-progress-item').eq(0).addClass('registration-form-progress-active')
        $('.registration-form-tab-item:first').show();
        $('.registration-form-tab-item').each(function () {
            var $this = $(this);
            $('.registration-form-row-input').each(function () {
                var $$this = $(this)
                $('.speaker-next-prev a').click(function () {
//                    if ($$this.find('input').val() != "" && $$this.find("textarea").val() != "") {
                        $('.registration-form-progress-active').next().addClass('registration-form-progress-active')
                        $('.registration-form-tab-item').hide();
                        var activeTab = $(this).attr('href');
                        $(activeTab).fadeIn();
//                    }
                    return false;
                });
            })
        })
        
        $('.speaker-prev a').click(function(){
            $('.registration-form-progress-item:last-child').removeClass('registration-form-progress-active')
        })


        //        $('.filter-event-row').each(function(){
        //            var $this = $(this);
        //            var radioC = $(this).find('input[type="radio"]')
        //            var checkboxC = $(this).find('input[type="checkbox"]')
        //            console.log(radioC)
        //            
        ////            $this.find('.checkall input').on('change', function(){
        ////                var thisChck = $(this)
        ////                if(thisChck.prop("checked")){
        ////                    checkboxC.attr('checked', true)
        ////                }else{
        ////                    $('.filter-event-checkbox input[type="checkbox"]').attr('checked', false)
        ////                }
        ////            })
        //            
        //            $this.find('input[type="radio"]').on('change', function () {
        //                console.log(radioC)
        //                if (radioC.prop("checked")) {
        //                    $('.filter-event-checkbox input[type="checkbox"]').attr('disabled', true)
        //                    $('.filter-event-checkbox input[type="checkbox"]').attr('checked', 'unche')
        //                    checkboxC.attr('disabled', false)
        //                }
        //            })
        //        })


        $('.filter-event-row').each(function () {
            var $$this = $(this)
            var selectAllItems = $$this.find('.checkall input');
            var checkboxItem = $$this.find(":checkbox");
            var RadioItemClick = $$this.find('input[type="radio"]');
            var RadioItem = $$this.find(":radio");
            var $this = $(this);
            var radioC = $(this).find('input[type="radio"]')
            var checkboxC = $(this).find('input[type="checkbox"]')
            $(selectAllItems).click(function () {
                if (this.checked) {
                    $(checkboxItem).each(function () {
                        this.checked = true;
                    });
                } else {
                    $(checkboxItem).each(function () {
                        this.checked = false;
                    });
                }

            });
            $this.find('input[type="radio"]').on('click', function () {
                if (radioC.prop("checked")) {
                    $('.filter-event-checkbox input[type="checkbox"]').attr('disabled', true)
                    //                    $('.filter-event-checkbox input[type="checkbox"]').attr('checked', true)
                    checkboxC.attr('disabled', false)

                }
            })
        })

        $('.filter-event-checkbox input').click(function () {
            if (!$(this).prop("checked")) {
                $(".filter-event-checkbox.checkall input").prop("checked", false);
            }
        })

        $('.filter-event-row input[type="radio"]').on('change', function () {
            $('.filter-event-checkbox input[type="checkbox"]').checked = false;
            console.log('red')
        })

        $('.filter-topic-checkbox').each(function () {
            var $$this = $(this);
            var selectAll = $('.select-all input');
            var checkboxItem = $$this.find(":checkbox");
            $(selectAll).click(function () {
                if (this.checked) {
                    $(checkboxItem).each(function () {
                        this.checked = true;
                    });
                } else {
                    $(checkboxItem).each(function () {
                        this.checked = false;
                    });
                }

            });
        })


        $('.filter-mega-menu-item').each(function () {
            var $this = $(this);
            $('.summits-filter-right ul li a').not('.summits-filter-right ul li.reset-filters a').click(function () {
                $('.filter-mega-menu-item').hide();
                $('.summits-filter-right ul li a').removeClass('filter-active');
                $(this).addClass('filter-active');
                setTimeout(function () {
                    $('.filter-mega-menu-wrap').slideDown();
                }, 200)
                var activeTab = $(this).attr('href');
                $(activeTab).show();
                return false;
            });
        })

        $('.filter-mega-menu-close').click(function () {
            setTimeout(function () {
                $('.filter-mega-menu-item').hide();
                $('.summits-filter-right ul li a').removeClass('filter-active');
            }, 400)
            $('.filter-mega-menu-wrap').slideUp();
        })

        $('.summits-event-bullet').each(function () {
            var $$this = $(this);

            $$this.find('img').click(function () {
                $$this.remove()
            })

        })

        //Summit Detail
        $('.cxo-summit-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.cxo-summit-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.cxo-summit-item-wrap .cxo-summit-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        //Summit Detail
        $('.summit-agenda-tab-trigger ul li').click(function (e) {
            e.preventDefault();
            $('.summit-agenda-tab-trigger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.summit-agenda-tab-item-wrap .summit-agenda-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        //Summit Detail
        if ($('.cxoera-executive-board-item-wrap').length) {
            $('.cxoera-executive-board-item-wrap').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '.slider-arrow-left',
                nextArrow: '.slider-arrow-right',
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
                        },
    },
  ],
            });
        }

        //Summit Detail
        if ($("select.styled-select").length) {
            $("select.styled-select").selectric();
        }

        //Summit Detail
        if ($('.summit-speakers-item-wrap').length) {
            $('.summit-speakers-item-wrap').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                prevArrow: '.slider-arrow-left',
                nextArrow: '.slider-arrow-right',
                responsive: [
                    {
                        breakpoint: 600,
                        settings: 'unslick'
                }
            ]
            })

            $(window).on('resize', function () {
                $('.summit-speakers-item-wrap').slick('resize');
            });
        }

        //Summit Detail
        $('.executive-board-item-btn a').click(function (e) {
            $('body').addClass('details-popup')
            e.preventDefault()
            $(".speaker-detail-wrap").fadeToggle()
            $('.popup-close').click(function () {
                $(".speaker-detail-wrap").fadeOut()
                $('body').removeClass('details-popup')
            })

        });


        if ($(".registration-form-row-input input[type='number']").length) {
            var countryData = window.intlTelInputGlobals.getCountryData(),
                input = document.querySelector(".registration-form-row-input input[type='number']");

            var iti = window.intlTelInput(input, {
                hiddenInput: "full_phone"
            });

        }

        if ($("select.selectric-select").length) {
            $("select.selectric-select").selectric();
        }
        
        $('.upload-btn').each(function(){
            var $$this = $(this);
            var realFileBtn = $$this.find("input");
            var customBtn = $$this.find("span");
            var customImage = $$this.find("figure");
            
            customBtn.on("click", function () {
                realFileBtn.click();
            });
            customImage.on("click", function () {
                realFileBtn.click();
            });

            
             realFileBtn.on("change", function () {
                 var filepath = this.value;
                 var m = filepath.match(/([^\/\\]+)$/);
                 var filename = m[1];
                 customBtn.text(filename);
             });
        })
        
        $('.event-cancel-trigger').on('click', function(e){
            e.preventDefault()
            $('.event-cancel-wrap').fadeIn()
        }) 
        $('.event-go-back-btn a').on('click', function(e){
            e.preventDefault()
            $('.event-cancel-wrap').fadeOut()
        })
        
        if($(".animated-cursor").length){
            $(".animated-cursor").mouseenter(function(){
                $(".circle-cursor").css({
                    "opacity" : 1,
                    "visibility" : "visible"
                });
                $(".circle-scroll-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                });
            });
            $(".animated-cursor").mouseleave(function(){
                $(".circle-cursor").css({
                    "opacity" : 0,
                    "visibility" : "hidden"
                })
            });
        }
        
        
        
        var isDragging = false;
        $(".animated-cursor")
        .mousedown(function(){
            isDragging = false;
            $("body").addClass("draged");
        })
        .mouseup(function() {
            var wasDragging = isDragging;
            isDragging = false;
            if (!wasDragging) {
                $("body").removeClass("draged");
            }
        });
        

    }) // End ready function.
})(jQuery)