'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

$(function () {

  var info = [{
    question: "1. Что обозначает директива ‘use strict’?",
    answer: ["Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5", "Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода", "Код данного скрипта будет обработан по строгим правилам стандарта HTML5", "Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6"],
    rightAnswer: {
      0: true

    }
  }, {
    question: "2. К какому участку скрипта применяется строгие правила ‘use strict’?",
    answer: ["Во всем скрипте", "Либо во всем скрипте, либо в отдельной функции", "Внутри блока {}", "Строгие правила работают между директивами ‘use strict’ и ‘strict end’"],
    rightAnswer: {
      1: true
    }
  }, {
    question: "3. Какие основное ограничения к объявлению переменных в строгом режиме?",
    answer: ["Переменные функций должны объявляться с использованием ключевого слова var", "Название переменных должно быть camel-case с маленькой буквы", "Любая переменная должна объявляться с использованием ключевого слова var", "Глобальные переменные должны объявляться с использованием ключевого слова var"],
    rightAnswer: {
      2: true
    }

  }];

  localStorage.setItem('data', JSON.stringify(info));

  let questions = JSON.parse(localStorage.getItem('data'));

  let htmlQuestion = $('#test').html();

  var content = tmpl(htmlQuestion, {
    data: questions
  });

  $('.questions').append(content);


  function checkAnswer(e) {

  e.preventDefault();

  let error = false;

  let user = [];

   for (let [value, index] of questions.entries()) {
     let inputs = $(`.box${value} input:checkbox`);
    
      let userAnswered = {};
  
        let checked = inputs[value].checked;
        let right = questions[value].rightAnswer[value] == true;
        if (checked !== right) {
          userAnswered[value] = false;
          error = true;
        } else {
          userAnswered[value] = true;
        };
      
      user.push(userAnswered);
    };


  function modalWindow () {
    let $modal = $('<div class="modalWindow"><h2 class="text-center">' +
          (error? '<p class="color_red">Вы не сдали тест!</p>' : '<p class="color_green">Вы сдали тест!</p>' ) +'</h2></div>');          // Модалька и условия вывода на ней "сдал" или "не сдал"
    let $overlay = $('<div class="modalWindow-overlay"></div>');
    let $buttonOk = $('<button class="btn btn-success">Пройти ещё раз</button>');

    $('body').append($modal);
    $('body').append($overlay);
    $('.modalWindow').append(content);
    $('.modalWindow').append($buttonOk);

    for (let [value, index] of questions.entries()) {
      let inputs = $(`.box${value} input:checkbox`);
      let inputsShowResult =  $(`.modalWindow .box${value} input:checkbox`);

      for (let j = 0; j < questions[value].answer.length; j++) {

        let checked = inputs[j].checked;

          if ((checked == true)) {
              if ((user[value][j]) == true) {
                $(inputsShowResult[j]).attr({
                  "disabled": true,
                  "checked" : true
                }).parent().append("<span> <img src='img/button_ok.png'></span>");
              } else {
                $(inputsShowResult[j]).attr({
                  "disabled": true,
                  "checked" : true
                }).parent().append("<span> <img src='img/button_bad.png'></span>");

              };
          } else {
              $(inputsShowResult[j]).attr({
                "disabled": true,
              });
          };
      };
    };

    $overlay.one('click', hideModal);
    $buttonOk.one('click', hideModal);


    function hideModal() {
      $('input:checkbox').removeAttr('checked');
      $modal.remove();
      $overlay.remove();
    };

  };

  modalWindow();

};

$('.check').on('click', checkAnswer);

});