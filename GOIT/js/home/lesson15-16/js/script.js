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

function Human(name,age,gender,height,weight) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
}

function Worker(name,age,gender,height,weight,job,salary) {
    Human.apply(this, arguments);
    this.job = job;
    this.salary = salary;
    this.work = function(){
        console.log('Worker name is',this.name,
            "\n age:", this.age,
            "\n gender:", this.gender,
            "\n height:", this.height,
            "\n weight:", this.weight,
            "\n had job in:", this.job,
            "\n had salary in USD:", this.salary,
            "\n go to work every morning.");
        console.log("*********************************");
    };
}

function Student(name,age,gender,height,weight,study,grants) {
    Human.apply(this, arguments);
    this.study = study;
    this.grants = grants;
    this.watchTv = function() {
        console.log('Student name is',this.name,
            "\n age:", this.age,
            "\n gender:", this.gender,
            "\n height:", this.height,
            "\n weight:", this.weight,
            "n had study in:", this.study,
            "\n had grants in USD:", this.grants,
            "\n watch TV all day.");
        console.log("*********************************");
    };
}



Worker.prototype.__proto__ = Human.prototype;
Worker.prototype.constructor = Worker;
Worker.prototype.__proto__ = Human.prototype;
Student.prototype.constructor = Student;


var worker1 = new Worker("jhon", 28, 'man', 180, 80,'Police',1000);
worker1.work();

var worker2 = new Worker('Petya',29, 'man', 181, 81, 'Developer',3500);
worker2.work();

var student1 = new Student('Jhon',19, 'man', 170, 66,'Garvard',500);
student1.watchTv();

var student2 = new Student('Alicia',19, 'women', 160, 54,'Oksford',350);
student2.watchTv();