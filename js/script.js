$(function() {
    $(document).ready(function () {
        $('#show_site').on('click', function () {
            $('.popup-back').toggleClass('hidden');
            $('#main_page').toggleClass('visible');
            $('body').toggleClass('full-h');
        });
    });
});

$(function() {
    $(document).ready(function () {
        $('.bxslider').bxSlider({
            maxSlides: 3,
            slideWidth: 250,
            slideMargin: 50,
            useCSS: false,
            pager: false
        });
        var $menu_item = $('.menu-btn');
        var $menu_item_id;
        $menu_item.on('click', function() {
            $menu_item_id = this.id;
            $menu_item.each(function() {
                if (this.id===$menu_item_id)
                    $(this).addClass('active');
                else
                    $(this).removeClass('active');
            });
        });
        $('.heal_needed').on('click', '.one, .two, .check, .fa-check', function(e) {
            if (e.target.hasAttribute('dl-check')) {
                var dl_check = $(e.target).attr('dl-check');
                if (dl_check === "one") {
                    $('.check[dl-check="' + dl_check + '"]').addClass('active')
                    $('.check[dl-check="two"]').removeClass('active');
                }
                if (dl_check === "two") {
                    $('.check[dl-check="' + dl_check + '"]').addClass('active')
                    $('.check[dl-check="one"]').removeClass('active');
                }
            }
        });
        $('.class_val').on('click', '.one, .two, .three, .four, .five, .check, .fa-check', function(e) {
            if (e.target.hasAttribute('dl-check')) {
                var dl_check = $(e.target).attr('dl-check');
                $('.check[dl-check]').removeClass('active');
                $(this).addClass('active');
                $('.title .stars_full').addClass('hidden');
                $('.title .stars_empty').removeClass('hidden');
                $('.title[dl-check="' + dl_check + '"] .stars_full').removeClass('hidden');
                $('.title[dl-check="' + dl_check + '"] .stars_empty').addClass('hidden');
            }
        });
        $('#wrapper_gallery').find('.item').on('click', function() {
            $(this).toggleClass('selected');
            $('#wrapper_gallery').toggleClass('modal');
        });

        $('.recomend').on('click', function() {
            $(this).toggleClass('active');
            $('.consult').removeClass('active');
            $('#recomend_consult').removeClass('trig_right');
            $('#recomend_consult').toggleClass('trig_left');
        });
        $('.consult').on('click', function() {
            $(this).toggleClass('active');
            $('.recomend').removeClass('active');
            $('#recomend_consult').toggleClass('trig_right');
            $('#recomend_consult').removeClass('trig_left');
        });
        $('.recomend2 .item').on('click', function() {
            $('.recomend2 .item').removeClass('active');
            $(this).addClass('active');
            $('#modal').addClass('active');
            $('.popup_koval').addClass('active');
        });
        $('.popup_koval .close').on('click', function() {
            $('#modal').removeClass('active');
            $('.popup_koval').removeClass('active');
            $('.recomend2 .item').removeClass('active');
        });

        $('#trusk_btn').on('click', function() {
            $('#morshin').removeClass('active');
            $('#shod').removeClass('active');
            $('#morshin_btn').removeClass('active');
            $('#shod_btn').removeClass('active');
            $('html, body').animate({
                scrollTop: $('#trusk').offset().top
            }, 1000);
            $('#trusk').addClass('active');
            $('#trusk_btn').addClass('active');
        });
        $('#morshin_btn').on('click', function() {
            $('#trusk').removeClass('active');
            $('#shod').removeClass('active');
            $('#trusk_btn').removeClass('active');
            $('#shod_btn').removeClass('active');
            $('html, body').animate({
                scrollTop: $('#morshin').offset().top
            }, 1000);
            $('#morshin').addClass('active');
            $('#morshin_btn').addClass('active');
        });
        $('#shod_btn').on('click', function() {
            $('#trusk').removeClass('active');
            $('#morshin').removeClass('active');
            $('#trusk_btn').removeClass('active');
            $('#morshin_btn').removeClass('active');
            $('html, body').animate({
                scrollTop: $('#shod').offset().top
            }, 1000);
            $('#shod').addClass('active');
            $('#shod_btn').addClass('active');
        });
    });
});