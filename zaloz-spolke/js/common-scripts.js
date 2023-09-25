(function ($) {
    $(function () {

        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle();
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('header').addClass("sticky");
            } else {
                $('header').removeClass("sticky");
            }
        });

        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({});
        }

        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);
                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                }
            });
        }

        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)
        }

        $('.main-nav ul li a, .header-cta-btn a').click(function (e) {
            e.preventDefault();
            if ($(window).width() < 769) {

                $('body').removeClass('navShown')
                $('.nav-wrap').hide(100)
            }
            var headerHeight = $('.main-header-section').outerHeight()
            var target = $($(this).attr('href'));
            if (target.length) {
                var scrollTo = target.offset().top - headerHeight;
                $('body, html').animate({
                    scrollTop: scrollTo + 'px'
                }, 800);
            }
        });
        
            $('.tab-trigger ul li').click(function () {
                $('.tab-trigger ul li').removeClass('active');
                $(this).addClass('active');
                $('.tab-item-wrap .tab-item').hide();
    
                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false;
            });

        /* $('.sprawdz-tab-trigger-item ul li').click(function () {
                $('.sprawdz-tab-trigger-item ul li').removeClass('active');
                $(this).addClass('active');
                $('.sprawdz-tab-item-wrap .sprawdz-tab-item').hide();
    
                var activeTab = $(this).find('a').attr('href');
                $(activeTab).fadeIn();
                return false;
            });
*/
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

        $('.benefits').click(function (e) {
            e.preventDefault();
            $("body").toggleClass("close-icon");
        });

        $('.popup-close').click(function (e) {
            e.preventDefault()
            $("body").removeClass("close-icon");
        });



        $('.sprawdz-tab-trigger-item').each(function () {
            var $$this = $(this);
            $$this.find('ul li a').click(function (e) {
                e.preventDefault();
                $$this.find('li').removeClass('active')
                $(this).parent('li').addClass('active')
            })
        })
        $('.monthly-revenue-trigger ul li').each(function () {
            var $this = $(this);
            var monthlyRevenue = $('.monthly-revenue em span');
            $this.find('a').click(function () {
                var thisText = $(this).text()
                var thisTextNum = parseFloat(thisText.replace(/\s/g, "").replace(",", ""));
                monthlyRevenue.text(thisText)
                monthlyRevenue.attr('data', thisTextNum)

            })
        })

        $('.monthly-cost-trigger ul li').each(function () {
            var $this = $(this);
            var monthlyCost = $('.monthly-cost em span');
            $this.find('a').click(function () {
                var thisText = $(this).text()
                var thisTextNum = parseFloat(thisText.replace(/\s/g, "").replace(",", ""));
                monthlyCost.text(thisText)
                monthlyCost.attr('data', thisTextNum)
            })
        })


        //Monthly Total Cost
        function check_how_much_you_will_gain() {
            var $monthlyCost1 = parseFloat($('.monthly-cost .sprawdz-calculator-row').eq(1).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $monthlyCost2 = parseFloat($('.monthly-cost .sprawdz-calculator-row').eq(2).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $monthlyCost3 = parseFloat($('.monthly-cost .sprawdz-calculator-row').eq(3).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $monthlyCost4 = parseFloat($('.monthly-cost .sprawdz-calculator-row').eq(4).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $accounting1 = parseFloat($('.accounting-wrap .sprawdz-calculator-row').eq(1).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $accounting2 = parseFloat($('.accounting-wrap .sprawdz-calculator-row').eq(2).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $accounting3 = parseFloat($('.accounting-wrap .sprawdz-calculator-row').eq(3).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $accounting4 = parseFloat($('.accounting-wrap .sprawdz-calculator-row').eq(4).find('span').text().replace(/\s/g, "").replace(",", ""));
            var totalCost1 = $monthlyCost1 + $accounting1;
            var totalCost2 = $monthlyCost2 + $accounting2;
            var totalCost3 = $monthlyCost3 + $accounting3;
            var totalCost4 = $monthlyCost4 + $accounting4;
            $('.monthly-total-cost .sprawdz-calculator-row').eq(1).find('span').text(totalCost1.toLocaleString())
            $('.monthly-total-cost .sprawdz-calculator-row').eq(2).find('span').text(totalCost2.toLocaleString())
            $('.monthly-total-cost .sprawdz-calculator-row').eq(3).find('span').text(totalCost3.toLocaleString())
            $('.monthly-total-cost .sprawdz-calculator-row').eq(4).find('span').text(totalCost4.toLocaleString())
            $('.monthly-total-cost .sprawdz-calculator-row').eq(1).find('span').attr('data', totalCost1)
            $('.monthly-total-cost .sprawdz-calculator-row').eq(2).find('span').attr('data', totalCost2)
            $('.monthly-total-cost .sprawdz-calculator-row').eq(3).find('span').attr('data', totalCost3)
            $('.monthly-total-cost .sprawdz-calculator-row').eq(4).find('span').attr('data', totalCost4)

            var $monthlyRev1 = parseFloat($('.monthly-revenue .sprawdz-calculator-row').eq(1).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $monthlyRev2 = parseFloat($('.monthly-revenue .sprawdz-calculator-row').eq(2).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $monthlyRev3 = parseFloat($('.monthly-revenue .sprawdz-calculator-row').eq(3).find('span').text().replace(/\s/g, "").replace(",", ""));
            var $monthlyRev4 = parseFloat($('.monthly-revenue .sprawdz-calculator-row').eq(4).find('span').text().replace(/\s/g, "").replace(",", ""));

            var monthlyRev1 = $('.monthly-revenue-one span').attr('data')
            var monthlyTtlCst1 = $('.monthly-total-cost-one span').attr('data')
            var monthlyZus1 = $('.zus-wrap-one span').attr('data')

            var monthlyRev2 = $('.monthly-revenue-two span').attr('data')
            var monthlyTtlCst2 = $('.monthly-total-cost-two span').attr('data')
            var monthlyZus2 = $('.zus-wrap-two span').attr('data')

            var monthlyRev3 = $('.monthly-revenue-three span').attr('data')
            var monthlyTtlCst3 = $('.monthly-total-cost-three span').attr('data')
            var monthlyZus3 = $('.zus-wrap-three span').attr('data')

            var monthlyRev4 = $('.monthly-revenue-four span').attr('data')
            var monthlyTtlCst4 = $('.monthly-total-cost-four span').attr('data')
            var monthlyZus4 = $('.zus-wrap-four span').attr('data')

            function numberWithCommas(number) {
                var parts = number.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                return parts.join(".");
            }

            var helthIn1 = 0.09 * (12 * monthlyRev1 - 12 * monthlyTtlCst1 - monthlyZus1)
            var helthInNum1 = parseFloat(helthIn1).toFixed(2);
            var commaNum1 = numberWithCommas(helthInNum1);
            $('.helth-insurance-one span').text(commaNum1)
            $('.helth-insurance-one span').attr('data', helthInNum1)

            var helthIn2 = (12 * (monthlyRev2 - monthlyTtlCst2) - monthlyZus2) * 0.049
            var helthInNum2 = parseFloat(helthIn2).toFixed(2);
            var commaNum2 = numberWithCommas(helthInNum2);
            $('.helth-insurance-two span').text(commaNum2)
            $('.helth-insurance-two span').attr('data', helthInNum2)

            if (monthlyRev3 < 5000) {
                var helthIn3 = 335.94 * 12
            } else if ((monthlyRev3 * 12) > 60000 && (monthlyRev3 * 12) < 300000) {
                var helthIn3 = 559.89 * 12
            } else if ((monthlyRev3 * 12) >= 300000) {
                var helthIn3 = 1007.81 * 12
            }

            var helthInNum3 = parseFloat(helthIn3).toFixed(2);
            var commaNum3 = numberWithCommas(helthInNum3);
            $('.helth-insurance-three span').text(commaNum3)
            $('.helth-insurance-three span').attr('data', helthInNum3)

            var ceoSalary = $('.ceo-salary em span');
            var thisText = $('.ceo-salary-trigger ul li.active a').text()
            var helthIn4 = 12 * thisText * 0.09
            var helthInNum4 = parseFloat(helthIn4).toFixed(2);
            var commaNum4 = numberWithCommas(helthInNum4);
            ceoSalary.text(commaNum4)
            ceoSalary.attr('data', helthIn4)

            var socialSecurity4 = $('.zus-wrap-four em span').attr('data') + helthIn4;
            var socialSecurityNum4 = parseFloat(socialSecurity4).toFixed(2);
            var socialSecurityText4 = numberWithCommas(socialSecurityNum4);
            $('.social-security-row-four span').text(socialSecurityText4)
            $('.social-security-row-four span').attr('data', socialSecurityNum4)

            // Social Security 
            var socialSecurity1 = Number(monthlyZus1) + helthIn1;
            var socialSecurityNum1 = parseFloat(socialSecurity1).toFixed(2);
            var socialSecurityText1 = numberWithCommas(socialSecurityNum1);
            $('.social-security-row-one span').text(socialSecurityText1)
            $('.social-security-row-one span').attr('data', socialSecurityNum1)

            var socialSecurity2 = Number(monthlyZus2) + helthIn2;
            var socialSecurityNum2 = parseFloat(socialSecurity2).toFixed(2);
            var socialSecurityText2 = numberWithCommas(socialSecurityNum2);
            $('.social-security-row-two span').text(socialSecurityText2)
            $('.social-security-row-two span').attr('data', socialSecurityNum2)

            var socialSecurity3 = Number(monthlyZus3) + helthIn3;
            var socialSecurityNum3 = parseFloat(socialSecurity3).toFixed(2);
            var socialSecurityText3 = numberWithCommas(socialSecurityNum3);
            $('.social-security-row-three span').text(socialSecurityText3)
            $('.social-security-row-three span').attr('data', socialSecurityNum3)

            // Personal Income Text
            if (12 * (monthlyRev1 - monthlyTtlCst1) - monthlyZus1 < 120000) {
                var $pit1 = 0.12 * (12 * (monthlyRev1 - monthlyTtlCst1) - monthlyZus1 - 30000)
            } else {
                var $pit1 = 0.12 * (120000 - 30000) + 0.32 * (12 * (monthlyRev1 - monthlyTtlCst1) - monthlyZus1 - 120000)
            }

            var pitNum1 = parseFloat($pit1).toFixed(2);
            var pitText1 = numberWithCommas(pitNum1);
            $('.pit-row-one span').text(pitText1)
            $('.pit-row-one span').attr('data', pitNum1)

            var $pit2 = 0.19 * (12 * (monthlyRev2 - monthlyTtlCst2) - monthlyZus2 - 8700)
            var pitNum2 = parseFloat($pit2).toFixed(2);
            var pitText2 = numberWithCommas(pitNum2);
            $('.pit-row-two span').text(pitText2)
            $('.pit-row-two span').attr('data', pitNum2)

            var thisValText = parseFloat($('.sprawdz-calculator-row .selectric .label').text())
            var thisValNum = Number(thisValText / 100)

            var $pit3 = thisValNum * (monthlyRev3 * 12 - 0.5 * helthInNum3)
            var pitNum3 = parseFloat($pit3).toFixed(2);
            var pitText3 = numberWithCommas(pitNum3);
            $('.pit-row-three span').text(pitText3)
            $('.pit-row-three span').attr('data', pitNum3)

            var $pit4 = parseFloat($('.owner-salary-trigger ul li.active a').text().replace(/\s/g, "").replace(",", ""));
            if ($pit4 < 120000) {
                var $pitMain4 = 0.12 * ($pit4 * 12 - 30000)
            } else {
                var $pitMain4 = 0.12 * (120000 - 30000) + 0.32 * ($pit4 * 12 - 120000)
            }

            var pitNum4 = parseFloat($pitMain4).toFixed(2);
            var pitText4 = numberWithCommas(pitNum4);
            $('.pit-row-four span').text(pitText4)
            $('.pit-row-four span').attr('data', pitNum4)

            /* CIT */
            var normalCit4 = $('.normal-cit-row-four p span').text()
            var normalCit4 = Number(normalCit4 / 100)

            var citVal4 = normalCit4 * (12 * (Number(monthlyRev4) - Number(monthlyTtlCst4)) - 12 * (Number(thisText) + $pit4))
            var citValNum4 = parseFloat(citVal4).toFixed(2);
            var citValText4 = numberWithCommas(citValNum4);
            $('.cit-row-four span').text(citValText4)
            $('.cit-row-four span').attr('data', citValNum4)

            // Texes Yearly
            var texesYearly1 = $pit1 + $('.cit-row-one span').attr('data')
            var texesYearlyNum1 = parseFloat(texesYearly1).toFixed(2);
            var texesYearlyText1 = numberWithCommas(texesYearlyNum1);
            $('.taxes-yearly-row-one span').text(texesYearlyText1)
            $('.taxes-yearly-row-one span').attr('data', texesYearlyNum1)

            var texesYearly2 = $pit2 + $('.cit-row-one span').attr('data')
            var texesYearlyNum2 = parseFloat(texesYearly2).toFixed(2);
            var texesYearlyText2 = numberWithCommas(texesYearlyNum2);
            $('.taxes-yearly-row-two span').text(texesYearlyText2)
            $('.taxes-yearly-row-two span').attr('data', texesYearlyNum2)

            var texesYearly3 = $pit3 + $('.cit-row-one span').attr('data')
            var texesYearlyNum3 = parseFloat(texesYearly3).toFixed(2);
            var texesYearlyText3 = numberWithCommas(texesYearlyNum3);
            $('.taxes-yearly-row-three span').text(texesYearlyText3)
            $('.taxes-yearly-row-three span').attr('data', texesYearlyNum3)

            // owner Profit
            var ownerProfit1 = 12 * Number(monthlyRev1) - (Number(monthlyZus1) + helthIn1 + Number(monthlyTtlCst1)) - $pit1

            var ownerProfitNum1 = parseFloat(ownerProfit1).toFixed(2);
            var ownerProfitText1 = numberWithCommas(ownerProfitNum1);
            $('.owner-profit-row-one span').text(ownerProfitText1)
            $('.owner-profit-row-one span').attr('data', ownerProfitNum1)

            var ownerProfit2 = 12 * (Number(monthlyRev2) - Number(monthlyTtlCst2)) - (Number(monthlyZus2) + Number(helthInNum2) + Number($pit2))
            var ownerProfitNum2 = parseFloat(ownerProfit2).toFixed(2);
            var ownerProfitText2 = numberWithCommas(ownerProfitNum2);
            $('.owner-profit-row-two span').text(ownerProfitText2)
            $('.owner-profit-row-two span').attr('data', ownerProfitNum2)

            var ownerProfit3 = 12 * (Number(monthlyRev3) - Number(monthlyTtlCst3)) - (Number(monthlyZus3) + Number(helthInNum3) + Number($pit3))
            var ownerProfitNum3 = parseFloat(ownerProfit3).toFixed(2);
            var ownerProfitText3 = numberWithCommas(ownerProfitNum3);
            $('.owner-profit-row-three span').text(ownerProfitText3)
            $('.owner-profit-row-three span').attr('data', ownerProfitNum3)

            var ownerProfit4 = 12 * $pit4 + 12 * Number(thisText) - $('.ceo-salary span').attr('data') - $('.pit-row-four span').attr('data')
            var ownerProfitNum4 = parseFloat(ownerProfit4).toFixed(2);
            var ownerProfitText4 = numberWithCommas(ownerProfitNum4);
            $('.owner-profit-row-four span').text(ownerProfitText4)
            $('.owner-profit-row-four span').attr('data', ownerProfitNum4)

            //Ltd

            var ltdVal4 = 12 * (Number(monthlyRev4) - Number(monthlyTtlCst4)) - 12 * (Number(thisText) + $pit4) - citValNum4;

            var ltdValNum4 = parseFloat(ltdVal4).toFixed(2);
            var ltdValText4 = numberWithCommas(ltdValNum4);
            $('.ltd-row-four span').text(ltdValText4)
            $('.ltd-row-four span').attr('data', ltdValNum4)

            // Net Profit
            var netProfit1 = ownerProfit1 + $('.ltd-row-one span').attr('data')
            var netProfitNum1 = parseFloat(netProfit1).toFixed(2);
            var netProfitText1 = numberWithCommas(netProfitNum1);
            $('.net-profit-row-one span').text(netProfitText1)
            $('.net-profit-row-one span').attr('data', netProfitNum1)

            var netProfit2 = ownerProfit2 + $('.ltd-row-two span').attr('data')
            var netProfitNum2 = parseFloat(netProfit2).toFixed(2);
            var netProfitText2 = numberWithCommas(netProfitNum2);
            $('.net-profit-row-two span').text(netProfitText2)
            $('.net-profit-row-two span').attr('data', netProfitNum2)

            var netProfit3 = ownerProfit3 + $('.ltd-row-two span').attr('data')
            var netProfitNum3 = parseFloat(netProfit3).toFixed(2);
            var netProfitText3 = numberWithCommas(netProfitNum3);
            $('.net-profit-row-three span').text(netProfitText3)
            $('.net-profit-row-three span').attr('data', netProfitNum3)

            var netProfit4 = Number(ownerProfitNum4) + Number(ltdValNum4)
            var netProfitNum4 = parseFloat(netProfit4).toFixed(2);
            var netProfitText4 = numberWithCommas(netProfitNum4);
            $('.net-profit-row-four span').text(netProfitText4)
            $('.net-profit-row-four span').attr('data', netProfitNum4)


            // Wspólnika
            var wspólnikaVal4 = ltdVal4 * 0.81
            var wspólnikaValNum4 = parseFloat(wspólnikaVal4).toFixed(2);
            var wspólnikaValText4 = numberWithCommas(wspólnikaValNum4);
            $('.wspólnika-row-four span').text(wspólnikaValText4)
            $('.wspólnika-row-four span').attr('data', wspólnikaValNum4)


            // Savings Sole
            var savingSole1 = netProfit4 - netProfit1;
            var savingSoleNum1 = parseFloat(savingSole1).toFixed(2);
            var savingSoleText1 = numberWithCommas(savingSoleNum1);
            $('.saving-sole-one span').text(savingSoleText1)
            $('.saving-sole-one span').attr('data', savingSoleNum1)

            var savingSole2 = netProfit4 - netProfit2;
            var savingSoleNum2 = parseFloat(savingSole2).toFixed(2);
            var savingSoleText2 = numberWithCommas(savingSoleNum2);
            $('.saving-sole-two span').text(savingSoleText2)
            $('.saving-sole-two span').attr('data', savingSoleNum2)

            var savingSole3 = netProfit4 - netProfit3;
            var savingSoleNum3 = parseFloat(savingSole3).toFixed(2);
            var savingSoleText3 = numberWithCommas(savingSoleNum3);
            $('.saving-sole-three span').text(savingSoleText3)
            $('.saving-sole-three span').attr('data', savingSoleNum3)

            // Savings Dividend

            var savingDividend1 = (wspólnikaVal4 + ownerProfit4) - netProfit1;
            var savingDividendNum1 = parseFloat(savingDividend1).toFixed(2);
            var savingDividendText1 = numberWithCommas(savingDividendNum1);
            $('.savings-dividend-one span').text(savingDividendText1)
            $('.savings-dividend-one span').attr('data', savingDividendNum1)

            var savingDividend2 = (wspólnikaVal4 + ownerProfit4) - netProfit2;
            var savingDividendNum2 = parseFloat(savingDividend2).toFixed(2);
            var savingDividendText2 = numberWithCommas(savingDividendNum2);
            $('.savings-dividend-two span').text(savingDividendText2)
            $('.savings-dividend-two span').attr('data', savingDividendNum2)

            var savingDividend3 = (wspólnikaVal4 + ownerProfit4) - netProfit3;
            var savingDividendNum3 = parseFloat(savingDividend3).toFixed(2);
            var savingDividendText3 = numberWithCommas(savingDividendNum3);
            $('.savings-dividend-three span').text(savingDividendText3)
            $('.savings-dividend-three span').attr('data', savingDividendNum3)
        }
        $window.on('load', check_how_much_you_will_gain);
        $('.sprawdz-tab-trigger-item ul li a').on('click', check_how_much_you_will_gain);
        $('select.select.styled-select').on('change', check_how_much_you_will_gain);



    }) // End ready function.

})(jQuery)