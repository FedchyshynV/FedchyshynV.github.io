/**
 * Created by Vova on 07.08.2016.
 */


$(function() {


    function search() {
        $.ajax({
            url: 'https://pixabay.com/api/?key=2668312-be09c273d04a440a3f3617dc4&per_page=100&q=' + $('.search input').val(),
            dataType: "jsonp",
            success: function (data) {
                $('.search-results').html(tmpl('result', data));
                $('.result__link').on('mouseenter', function () {
                    $('.modal img').attr('src', $('img:first', this).attr('src'));
                    $('.modal p').text($('img:first', this).attr('data-tags'));
                });
            }
        });
    }

    $('.search').on('keypress', function (key) {
        if (key.keyCode == 13) {
            search();
        }
    });

    $('.search-btn').on('click', search);

    $('.result__link').on('mouseover', function () {
        console.log($(this));
    });







});


//Homework lesson 16/////////////////////////////////////////////////////////////////


var human = {
    name: '',
    age: 0,
    gender: '',
    height: 0,
    weight: 0
}

var worker = {
    job: '',
    salary: 0,
    work: function() {
        console.log('go to the work every day');
    }
}

var student = {
    university: '',
    grands: 0,
    watchSerials: function() {
        console.log('watch tv oll day');
    }
}

worker.__proto__ = human;
student.___proto__ = human;

var vasya = worker;
vasya.name = 'Jhon';
vasya.age = 30;
vasya.job = "Dev";
vasya.salary = "300$"
vasya.work();
console.log(vasya);
console.log("*******************************")
var petya = student;
petya.name = 'Petya';
petya.age = 20;
petya.university = "VNTU";
petya.grands= "300$"
petya.watchSerials();
console.log(petya);