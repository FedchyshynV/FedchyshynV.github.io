



$('.languages li').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('li.active').removeClass('active');
        $(this).addClass('active');    
    }
});

