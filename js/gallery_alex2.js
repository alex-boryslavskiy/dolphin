(function ($) {
    $.fn.gallery_alex = function (settings, callback) {
        settings = $.extend(true, {
            activeClass: 'active',
            selectedClass: 'selected',
            baseCSS: {},
            selectedCSS: {}
        }, settings);

        function absolute_img(el) {
            $(el).children().each(function () {
                var pos = $(this).position();
                $(this).css('top', Math.floor(pos.top) + 'px');
                $(this).css('left', Math.floor(pos.left) + 'px');
            }).each(function () {
                placeOriginal(this);
            });
        }

        function placeOriginal(el, animate, callback) {
            var dtop = $(el).css('top');
            var dleft = $(el).css('left');
            var props = $.extend({
                top: dtop,
                left: dleft
            }, settings.baseCSS);

            /*var last_item = 14;
            var item_width = $(el).width();
            var item_height = $(el).height();
            var item_height2 = item_height * 2;
            var item_height3 = item_height2 + item_height;
            if (($(el).index() - last_item) <= 5) {
                $(el).next().css('left', item_width);
            } else if ((($(el).index() - last_item) > 5) && ((($(el).index() - last_item) <= 10))) {
                $(el).next().css('left', item_width);
                $(el).next().css('top', item_height2);
            } else {
                $(el).next().css('left', item_width);
                $(el).next().css('top', item_height3);
            }
            last_item = last_item - 1;
            item_width = item_width * 2;*/
            if (animate) {
                $(el).animate(props, 'slow', function () {
                    if ($.isFunction(callback)) callback();
                });
            }
            else {
                $(el).css($.extend(props, {position: 'absolute'}));
            }
        }

        function hideSelected(callback) {
            $container.find('.' + settings.selectedClass).each(function () {
                $(this).removeClass(settings.selectedClass);
                placeOriginal(this, true);
            });
            if ($.isFunction(callback)) callback();
        }

        function select(el) {
            hideSelected(function () {
                $(el).addClass('selected').removeClass('active');
                $(el).animate(settings.selectedCSS, 'slow');
            });
        }

        return $(this).each(function () {
            $container = $(this);
            $container.css('position', 'relative');
            absolute_img($container);

            $(this).children()
                .css('cursor', 'pointer')
                .hover(function () {
                    if (!$(this).hasClass(settings.selectedClass))
                        $(this).addClass(settings.activeClass);
                }, function () {
                    $(this).removeClass(settings.activeClass);
                });
            $('.' + settings.activeClass).live('click', function () {
                select(this);
            });
            $('.' + settings.selectedClass).live('click', function () {
                hideSelected();
            });
        });
    }
})(jQuery);