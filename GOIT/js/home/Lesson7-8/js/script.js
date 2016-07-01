/**
 * Created by Vova on 28.06.2016.
 */

$(function () {
    var $content = $('.content div');
    var $link = $('.menu a');
    $content.hide().filter(':first').show();

    function chooseContent () {
        $content.hide();
        $content.filter(this.hash).show();
        $link.removeClass('active');
        $(this).addClass('active');
    }

    $link.on ('click', chooseContent);
});

