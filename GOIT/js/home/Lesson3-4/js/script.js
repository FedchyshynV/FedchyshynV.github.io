/**
 * Created by Vova on 18.06.2016.
 */

var test = {
    addTag: function (tag, parent, number) {
        var element = document.createElement(tag);
        var block = document.querySelectorAll(parent);
        block[number].appendChild (element);
    },

    addText: function (text, parent, number) {
        var element = document.createTextNode(text);
        var block = document.querySelectorAll(parent);
        block[number].appendChild (element);
    },

    addClass: function (tag, number, newClass) {
        var element=document.querySelectorAll(tag);
        element[number].classList.add (newClass);
    },

    addContent: function (tag, number, text) {
        var element = document.querySelectorAll(tag);
        element[number].innerHTML = text;
    },

    setAttr: function (tag, number, attributes, value) {
        var element = document.querySelectorAll(tag);
        element[number].setAttribute (attributes, value);
    }

};

test.addTag('h1' ,'body' ,0);
test.addClass('h1', 0, 'text-center');
test.addContent('h1', 0, 'Тест по програмированию');
test.addTag('ol', 'body', 0);

for (var i = 0; i < 3; i++) {
    test.addTag ('li','ol', 0);
    test.addClass('li', i, 'link')
    test.addTag ('h3', 'li', i);
    test.addContent ('h3', i, (i+1)+'.Вопрос №'+(i+1));

    for (var j = 0; j < 3; j++) {
        var number = 3*i+j;
        test.addTag('div','li',i);
        test.addClass ('div', number, 'checkbox');
        test.addTag('label', 'div', number);
        test.addTag('input', 'label', number);
        test.setAttr ('input', number, 'type', 'checkbox');
        test.addText ('Вариант ответа №'+(j+1), 'label', number);

    }
}

var element=document.querySelectorAll('.link');
for (var i=0; i < 3; i++) {
    element[i].style.listStyleType = 'none';
    element[i].style.marginLeft = '200px';
   }

var inputMargn=document.querySelectorAll('.checkbox');
for (var i=0; i < 9; i++) {
    inputMargn[i].style.marginLeft = '20px';
}

test.addTag('button', 'body', 0);
test.setAttr ('button',0, 'type', 'submit');
test.addClass ('button', 0, 'btn');
test.addContent('button', 0, 'Проверить мои результаты');

var butt=document.querySelector('.btn');
    butt.style.padding = '10px';
    butt.style.fontSize = '25px';
    butt.style.marginLeft = '35%';
    butt.style.paddingLeft = '30px';
    butt.style.paddingRight = '30px';
    butt.style.background = 'lightBlue';

var timerId = setInterval(function() {
    console.log("this = " +this);
    alert( "тик" );
}, 2000);

