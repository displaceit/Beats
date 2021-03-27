const list = $('.colors-menu');
list.on('click', '.colors-menu__line', function(e) {
    e.preventDefault()
    $(this).siblings('li').removeClass('colors-menu__line_active').animate({width:'toggle'},500).delay(5000).animate();
    $(this).toggleClass('colors-menu__line_active');
    })

    //