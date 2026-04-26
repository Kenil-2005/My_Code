// console.log("Hello, World!");


const hr = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');

function displayTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hRotate = 30 * h + m / 2;
    let mRotate = 6 * m + s / 10;
    let sRotate = 6 * s;

    hr.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`; 
    sec.style.transform = `rotate(${sRotate}deg)`;

}   

setInterval(displayTime, 1000);
