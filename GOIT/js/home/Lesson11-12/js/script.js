/**
 * Created by Vova on 18.07.2016.
 */

$( function() {



    var resume = {
        name: 'Федчишин Владимир Владимирович',
        job: 'Студент GOIT GoFrontend: Online 4',
        want: [
            'Хочу сменить роботу',
            'Хочу стать специалистом',
            'Хочу развиватся в ногу со временем'
        ],
        phone: '+380674302647',
        fb: 'https://www.facebook.com/profile.php?id=100005496316197',
        feedback: 'Могу сделать лендинг'
    };


    var results = document.getElementById("results");
    results.innerHTML = tmpl("item_tmpl", resume);
});
