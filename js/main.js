$(document).ready(function() {

    $('.b-product-mini__image').click(function(e) {

        $.fancybox($(this).parents('.b-catalog').find('.b-product-full'));

        e.preventDefault();
    });

});