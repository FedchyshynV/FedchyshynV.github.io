$('.dropDownMenu').hide();
$('.dynamicBoxes').hide();


$('.languages li').click( function(){
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('li.active').removeClass('active');
        $(this).addClass('active');    
    }
});

// jQuery(function($){
// 	var max_col_height = 0; 
// 	$('section').each(function(){ 
// 		if ($(this).height() > max_col_height) { 
// 			max_col_height = $(this).height();
// 		}
// 	});
// 	$('section').height(max_col_height);
// });