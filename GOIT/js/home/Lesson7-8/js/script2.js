/**
 * Created by Vova on 28.06.2016.
 */
$(function(){


$('input').hover(showHint, hideHint);
$('button').click (showHelp);

function showHint() {
    $(this).parent().find('.show').remove();
    $(this).parent().append("<span class='show'>" + $(this).attr('title') + "</span>");
};

function hideHint() {
    $(this).parent().find('.show').remove();
};

function showHelp() {
    $('form input').each(hideHint);
    $('form input').each(showHint);
};
});
