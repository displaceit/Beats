const slider = $('.products').bxSlider({
    pager: false,
    controls: false
});

$('.product-slider__arrow_left').click(e => {
    e.preventDefault();
    slider.goToPrevSlide();
});
$('.product-slider__arrow_right').click(e => {
    e.preventDefault();
    slider.goToNextSlide();
});