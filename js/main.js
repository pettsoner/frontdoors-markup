$(document).ready(function() {

    $.fancybox.defaults.padding = 0;

    /* Обработчик форм
    ------------------------------------------------------------ */

    $(document).on('submit', '.b-form', function(e) {
        var $this = $(this);

        $.fancybox($('.b-thanks'));

        /*$.post('/', $this.serialize(), function(response) {

            if (response.error) {
                alert(response.error);
            } else {
                $.fancybox($('.b-thanks'));
            }

        }, 'json');*/  

        e.preventDefault();
    });

    /* Всплывающая форма
    ------------------------------------------------------------ */

    $(document).on('click', '[form-modal]', function(e) {
        $.fancybox($('.b-form--modal'));

        e.preventDefault();
    });
    
    /* Каталог
    ------------------------------------------------------------ */

    $(document).on('click', '.b-product-preview__image', function(e) {
        $.fancybox($(this).parents('.b-catalog__item').find('.b-product-details'));

        e.preventDefault();
    });

    $('.b-catalog__item').each(function() {
        var $product = $(this).find('.b-product-details');

        $product
            .find('.b-product-details__images__current img')
            .attr('src', $product.find('.b-product-details__images__item.active img').attr('src'));
    });

    $(document).on('mouseover', '.b-product-details__images__item', function() {
        var $this                = $(this)
            $product             = $this.parents('.b-product-details'),
            $productImages       = $product.find('.b-product-details__images__item'),
            $productCurrentImage = $product.find('.b-product-details__images__current'),

        $productImages.removeClass('active');
        $productCurrentImage
            .find('img')
            .attr('src', $this.addClass('active').find('img').attr('src'));
    });

});