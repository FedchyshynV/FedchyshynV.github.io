/**
 * Created by Vova on 17.06.2016.
 */

function pow(number, exponent) {
    var result = 1;

    for (var i = 0; i < exponent; i++) {
        result *= number;
    }

    return result;
}

var number = +prompt('Введите число которое хотите возвести в степень:', "");
while (isNaN(number) ) {
    var number = +prompt('Вы ввели некоректные даные. Введите коректное число которое хотите возвести в степень:', "");
}
var exponent = +prompt('Введите степень', "");
while (isNaN(exponent) ) {
    var exponent = +prompt('Вы ввели некоректные даные. Введите степень целое число:', "");
}

if (exponent < 0) {
    alert('Степень ' + exponent +
        'не поддерживается, введите целую степень, большую 0');
} else {
  console.log('result : '+ pow(number, exponent) );
}
