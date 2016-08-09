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


function Human() {
    this.name = 'name';
    this.age = 0;
    this.gender = 'gender';
    this.height = 0;
    this.weight = 0;
}

function Worker() {
    this.job = '';
    this.salary = 0;
    this.work = function(){
        return 'go to work every morning.';
    };
}

function Student() {
    this.study = '';
    this.grants = 0;
    this.watchTv = function() {
        return 'watch TV soap opera all day.';
    };
}

Worker.prototype = Object.create(Human.prototype);
Student.prototype = Object.create(Human.prototype);



var worker1 = new Worker();
worker1.name = 'Vasia';
worker1.age = 35;
worker1.gender  = "man";
worker1.height  = 185;
worker1.weight  = 98;
worker1.job = 'Frontend developer';
worker1.salary = 2000;

var worker2 = new Worker();
worker2.name = 'Petia';
worker2.age = 45;
worker2.gender  = "man";
worker2.height  = 177;
worker2.weight  = 85;
worker2.job = 'Java developer';
worker2.salary = 3000;

var student1 = new Student();
student1.name = "Igor";
student1.age = 19;
student1.gender = "man";
student1.height = 165;
student1.weight = 60;
student1.study = 'Oksford';
student1.grants = 250;

var student2 = new Student();
student2.name = "Katia";
student2.age = 18;
student2.gender = "women";
student2.height = 160;
student2.weight = 52;
student2.study = 'Garvard';
student2.grants = 200;

console.log('Worker name is',worker1.name,
    "\n age:", worker1.age,
    "\n gender:", worker1.gender,
    "\n height:", worker1.height,
    "\n weight:", worker1.weight,
    "\n had job in:", worker1.job,
    "\n had salary in USD:", worker1.salary
);
console.log(worker1.name, worker1.work());

console.log ("---------------------------------")

console.log('Worker name is',worker2.name,
    "\n age:", worker2.age,
    "\n gender:", worker2.gender,
    "\n height:", worker2.height,
    "\n weight:", worker2.weight,
    "\n had job in:", worker2.job,
    "\n had salary in USD:", worker2.salary
);
console.log(worker2.name, worker2.work());

console.log ("---------------------------------");



console.log('Student name is',student1.name,
    "\n age:", student1.age,
    "\n gender:", student1.gender,
    "\n height:", student1.height,
    "\n weight:", student1.weight,
    "\n he is study in:", student1.study,
    "\n had grants in USD:", student1.grants
);
console.log(student1.name,student1.watchTv());

console.log ("---------------------------------");



console.log('Student name is',student2.name,
    "\n age:", student2.age,
    "\n gender:", student2.gender,
    "\n height:", student2.height,
    "\n weight:", student2.weight,
    "\n he is study in:", student2.study,
    "\n had grants in USD:", student2.grants
);
console.log(student2.name,student2.watchTv());