/**
 * Created by Vova on 07.07.2016.
 */

    $(function(){

        $(".niceCheck").mousedown(
            /* при клике на чекбоксе меняем его вид и значение */
            function() {

                changeCheck($(this));
            });

        $(".niceCheck").each(
            /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
            function() {

                changeCheckStart($(this));

            });
    });

function changeCheck(el)
/*
 функция смены вида и значения чекбокса
 el - span контейнер дял обычного чекбокса
 input - чекбокс
 */
{
    var el = el,
         input = el.find("input").eq(0),
    elPosition = "0 -17px",
    iAttr = true;

    if (input.attr("checked")) {
        elPosition = "0 0px";
        iAttr = false;
    }

        el.css("background-position", elPosition);
        input.attr("checked", iAttr);
}

function changeCheckStart(el)
/*
 если установлен атрибут checked, меняем вид чекбокса
 */
{
    var el = el,
        input = el.find("input").eq(0);
    if(input.attr("checked")) {
        el.css("background-position","0 -17px");
    }
    return true;
}



