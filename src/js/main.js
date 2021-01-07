$(document).ready(function(){
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        dots: false
    });

    var owl = $('#slider');
    owl.owlCarousel();
// Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('ul.catalog__tabs-btns').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.more-about').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.content-box__content').eq(i).toggleClass('active');
            $('.content-box__list').eq(i).toggleClass('active');
        })

    })
    $('.back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.content-box__content').eq(i).toggleClass('active');
            $('.content-box__list').eq(i).toggleClass('active');
        })

    })

});