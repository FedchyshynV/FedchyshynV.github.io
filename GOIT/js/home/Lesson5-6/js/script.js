
var sec = document.querySelector('.sec');
var mils = document.querySelector('.ms');
var startTimer = document.querySelector('.startPause');
var clearTimer = document.querySelector('.clear');

function Timer(){

    var self = this;
    self.counter = 0;
    self.startTime = 0;
    self.timerId = 0;
    self.pausePeriod = 0;
    self.lasstPauseTime = 0;

    self.curTime = function(){
        var curDate = new Date();
        return (curDate.getHours() * 60 * 60 + curDate.getMinutes() * 60 +
        curDate.getSeconds()) * 1000 + curDate.getMilliseconds();
    };



    self.updateTablo = function( c ){
        var hours = Math.floor( ( c / 3600000 ) % 24 );
        hours = hours < 10 ? '0' + hours : hours;
        var mins = Math.floor( ( c / 60000 ) % 60 );
        mins = mins < 10 ? '0' + mins : mins;
        var secs = Math.floor( ( c / 1000 ) % 60 );
        secs = secs < 10 ? '0' + secs : secs;
        var ms = c % 1000;

        sec.innerHTML = hours + ':' + mins + ':' + secs;
        mils.innerHTML = ms;

    };
    self.updCounter = function(){
        self.counter = self.curTime() - self.startTime - self.pausePeriod;
        self.updateTablo(self.counter);
    };
    self.start = function(){
        if(startTimer.innerHTML == 'Start'){
            self.lasstPauseTime = self.startTime = self.curTime();
            self.pausePeriod = 0;
        }
        self.pausePeriod = self.pausePeriod + self.curTime() - self.lasstPauseTime;
        startTimer.innerHTML = 'Pause';

        timerId = setInterval(self.updCounter, 30);

        startTimer.removeEventListener('click', self.start);
        startTimer.addEventListener('click', self.pause);
    };

    self.pause= function(){
       clearInterval( timerId );
       self.lasstPauseTime = self.curTime();
        startTimer.innerHTML = "Cont..";

        startTimer.removeEventListener('click', self.pause);
        startTimer.addEventListener('click', self.start);

    };

    self.clear = function(){
        clearInterval ( timerId );
        self.pausePeriod = 0;
        startTimer.innerHTML = 'Start';
        sec.innerHTML = '00:00:00';
        mils.innerHTML = '0';

        startTimer.removeEventListener('click', self.pause);
        startTimer.addEventListener('click', self.start);
    };

}

var newTimer = new Timer();

startTimer.addEventListener('click', newTimer.start);
clearTimer.addEventListener('click', newTimer.clear);