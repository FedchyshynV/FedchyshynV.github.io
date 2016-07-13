/**
 * Created by Vova on 06.07.2016.
 */


$(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(500);
        },
        function(){
            $(this).children('.sub-menu').slideUp(300);
        }
    );
});

//////////////// select////

//$( function(){
//    // initialize sol
//    $('#my-select').searchableOptionList();
//});
