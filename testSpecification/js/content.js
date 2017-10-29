
    (function () {
    var languages = document.querySelector('.languages');
    var england_flag = languages.querySelector('.england_flag');
    var france_flag = languages.querySelector('.france_flag');
    var germany_flag = languages.querySelector('.germany_flag');
 
    england_flag.onclick = function() {
        england_flag.classList.add('active');
        france_flag.classList.remove('active');
        germany_flag.classList.remove('active');
    }; 
    france_flag.onclick = function() {
        france_flag.classList.add('active');
        england_flag.classList.remove('active');
        germany_flag.classList.remove('active');
    }; 
    germany_flag.onclick = function() {
        germany_flag.classList.add('active');
        france_flag.classList.remove('active');
        england_flag.classList.remove('active');
    };
    })();  


    (function myFunction() {
        var block_1 = document.querySelector(".block_1");
        var block_2 = document.querySelector(".block_2");
        var height = document.querySelector('.block_1').clientHeight;
         block_2.style.height = (height - 15 )+ 'px';
    })();  

    function resizeColumn() {
        var block_1 = document.querySelector(".block_1");
        var block_2 = document.querySelector(".block_2");
        var height = document.querySelector('.block_1').clientHeight;
        block_2.style.height = (height - 20 )+ 'px';
    }

    window.addEventListener('resize', resizeColumn);
    window.addEventListener('load', resizeColumn);



function table(count){
    var myUrl = 'http://webwork.s3.amazonaws.com/interview-tests/MOCK_DATA.json';
    var proxy = 'https://cors-anywhere.herokuapp.com/';
    var xhr = new XMLHttpRequest();
    var json;
    var users = [];
    var headers = [];
    var str;
    var cell;
    var dvTable = document.getElementById("dvTable");
xhr.open('GET', proxy + myUrl, true);
xhr.responseType = 'json';
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            json = xhr.response;
            users = [];
            headers = [];
            str = JSON.stringify(json);
        users = JSON.parse(str);

    for (var user in users[0]) {        
        headers.push(user);
    }

    var table = document.createElement("TABLE");
    table.border = "1";
    var headerCell;
    var columnCount = headers.length;
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        headerCell = document.createElement("TH");
        headerCell.innerHTML = headers[i];
        row.appendChild(headerCell);
    }
    
   if(count > 0){
    users.sort(function(a, b){ return 0.5 - Math.random() });
   }
    count++;
    for (var i = 0; i < users.length; i++) {
        row = table.insertRow(-1);
        for (var user in users[i]) {     
            var cell = row.insertCell(-1);
            cell.innerHTML = users[i][user];
        }
    }
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
    resizeColumn();
         }
    }

};
xhr.send(null);
};
table(0);

document.querySelector("#dvTable").addEventListener("click", function(){
    var dvTable = document.querySelector("tbody");
    dvTable.innerHTML = "";
    var count = 1;
    table(count);
});

