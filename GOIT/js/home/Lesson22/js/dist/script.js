'use strict';

$(function () {

  var info = [{
    question: "1. Что обозначает директива ‘use strict’?",
    answer: ["Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 6", "Код данного скрипта будет обработан по строгим правилам, однако допускается использование нестрогих правил написания кода", "Код данного скрипта будет обработан по строгим правилам стандарта HTML5", "Код данного скрипта будет обработан по строгим правилам стандарта EcmaScript 5"],
    rightAnswer: {
      3: true

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

  var questions = JSON.parse(localStorage.getItem('data'));

  var htmlQuestion = $('#test').html();

  var content = tmpl(htmlQuestion, {
    data: questions
  });

  $('.questions').append(content);

  var checkAnswer = function checkAnswer(e) {

    e.preventDefault();

    var error = false;

    var user = [];

    for (var i = 0; i < questions.length; i++) {

      var inputs = $('.box' + i + ' input:checkbox');

      var userAnswered = {};
      for (var j = 0; j < inputs.length; j++) {

        var checked = inputs[j].checked;

        var right = questions[i].rightAnswer[j] == true;

        if (checked !== right) {
          userAnswered[j] = false;
          error = true;
        } else {
          userAnswered[j] = true;
        };
      };
      user.push(userAnswered);
    };

    var modalWindow = function modalWindow() {
      var $modal = $('<div class="modalWindow"><h2 class="text-center">' + (error ? '<p class="color_red">Вы не сдали тест!</p>' : '<p class="color_green">Вы сдали тест!</p>') + '</h2></div>'); // Модалька и условия вывода на ней "сдал" или "не сдал"
      var $overlay = $('<div class="modalWindow-overlay"></div>');
      var $buttonOk = $('<button class="btn btn-success">Пройти ещё раз</button>');

      $('body').append($modal);
      $('body').append($overlay);
      $('.modalWindow').append(content);
      $('.modalWindow').append($buttonOk);

      for (var _i = 0; _i < questions.length; _i++) {
        var _inputs = $('.box' + _i + ' input:checkbox');
        var inputsShowResult = $('.modalWindow .box' + _i + ' input:checkbox');

        for (var _j = 0; _j < questions[_i].answer.length; _j++) {

          var _checked = _inputs[_j].checked;

          if (_checked == true) {
            if (user[_i][_j] == true) {
              $(inputsShowResult[_j]).attr({
                "disabled": true,
                "checked": true
              }).parent().append("<span> <img src='img/button_ok.png'></span>");
            } else {
              $(inputsShowResult[_j]).attr({
                "disabled": true,
                "checked": true
              }).parent().append("<span> <img src='img/button_bad.png'></span>");
            };
          } else {
            $(inputsShowResult[_j]).attr({
              "disabled": true
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


