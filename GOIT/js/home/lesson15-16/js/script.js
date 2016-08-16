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

function Human() {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

function Worker(job,salary) {
    this.job = job;
    this.salary = salary;
    this.work = function(){
        console.log( " had job in:", this.job,
            "\n had salary in USD:", this.salary,
            "\n go to work every morning.");
        console.log("*********************************");
    };
}

function Student(study,grants) {
    this.study = study;
    this.grants = grants;
    this.watchTv = function() {
        console.log(" had study in:", this.study,
            "\n had grants in USD:", this.grants,
            "\n watch TV all day.");
        console.log("*********************************");
    };
}

Human.prototype.Visual = function(){
    console.log('Worker name is',this.name,
        "\n age:", this.age,
        "\n gender:", this.gender,
        "\n height:", this.height,
        "\n weight:", this.weight)
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);

var worker1 = new Worker('Police',1000);
worker1.name = 'Vasya';
worker1.age = 28;
worker1.gender  = "man";
worker1.height  = 180;
worker1.weight  = 80;
worker1.Visual();
worker1.work();

var worker2 = new Worker('Developer',3500);
worker2.name = 'Petya';
worker2.age = 29;
worker2.gender  = "man";
worker2.height  = 181;
worker2.weight  = 81;
worker2.Visual();
worker2.work();

var student1 = new Student('Garvard',500);
student1.name = "John";
student1.age = 21;
student1.gender = "man";
student1.height = 175;
student1.weight = 70;
student1.Visual();
student1.watchTv();

var student2 = new Student('Oksford',350);
student2.name = "Alicia";
student2.age = 19;
student2.gender = "women";
student2.height = 170;
student2.weight = 55;
student2.Visual();
student2.watchTv();