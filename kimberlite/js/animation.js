Muhammad Al - Am, [5 / 1 / 2023 7: 31 PM]
    (function ($) {
        $(function () {


            // $(window).on('load', function() {
            //   setTimeout(function () {

            // if($('#SortBy').length){
            //     $('#SortBy').selectric();
            // }







            //   }, 100)
            // })

            $(window).on('load', function () {

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

                $('.split-heading').convertToSeperateLetters();

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

                $('.split-heading').each(function () {
                    var $this = $(this);

                    var thisOffset = $this.offset().top;
                    var windowHeight = $(window).outerHeight() / 1.2
                    $(window).on('scroll', function () {
                        var scrollY = $(this).scrollTop();

                        if (scrollY > (thisOffset - windowHeight)) {
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



                    $(function () {
                        var el = $('.hero-split .letter');
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

        }) // End ready function.

    })(jQuery)