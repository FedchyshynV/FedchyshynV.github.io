



$('.languages li').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('li.active').removeClass('active');
        $(this).addClass('active');    
    }
});

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.dropDownMenu').slideDown(200);
        },
        function(){
            $(this).children('.dropDownMenu').slideUp(200);
        }
    );


});

    var h = $( '.block_1' ).height();
   $( '.block_2' ).height(h);
$( window ).resize(function() {
   var h = $( '.block_1' ).height();
   $( '.block_2' ).height(h);
});

