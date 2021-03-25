$(document).ready(() => {

    $('.team__person-selector').on('click', function(e) {
        e.preventDefault();

        const list = $('.team__list')

        
        if (list.hasClass('active')) {
            list.clearQueue().finish().animate({
                'height' : '0px',
                'text-align' : 'center'
            }, 200);
            list.removeClass('active');

            

        } else {
            list.clearQueue().finish().animate({
                'height' : '100%',
                'display' : 'block'
            }, 200);
            list.addClass('active');           
        }

        $('.team__triangle').toggleClass('team__triangle_active');     
       
    });
});