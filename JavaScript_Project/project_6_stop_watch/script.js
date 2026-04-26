console.log("Hello World!");

const timeDisplay = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const lap = document.getElementById('lap');
const laplist = document.getElementById('lap-list');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;


let lapString = '';
let count = 0;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})

stopBtn.addEventListener('click', function () {
    clearInterval(timerId);
})

resetBtn.addEventListener('click', function () {
    clearInterval(timerId);
    timeDisplay.innerHTML = '00 : 00 : 00';
    laplist.innerHTML = '';
    count = 0;
})

lap.addEventListener('click', function () {
    count++;
    // console.log(timeDisplay.innerHTML);
    lapString = timeDisplay.innerHTML;
    laplist.innerHTML += `Lap ${count} : ${lapString}` + '<br>';
})

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timeDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}

