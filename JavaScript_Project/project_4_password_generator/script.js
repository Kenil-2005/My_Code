// console.log("Hello World");

const input = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
const sliderValue = document.getElementById('sliderValue');
const inputSlider = document.querySelector('.inputSlider');
const lowerAlpha = document.getElementById('lowerAlpha');
const upperAlpha = document.getElementById('upperAlpha');
const number = document.getElementById('Number');
const symbol = document.getElementById('Symbol');

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})

buttons.forEach(buttons => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'Genarate Password') {
            input.value = generatePassword();
        }
        else if (e.target.innerHTML == 'copy') {
            if(input.value != "" || input.value.length > 0){
                navigator.clipboard.writeText(input.value)
            }
        }
    })
})

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "~!@#$%^&*";


function generatePassword() {
    let password = '';
    let allChars = '';

    allChars += lowerAlpha.checked ? lowerCase : "";
    allChars += upperAlpha.checked ? upperCase : "";
    allChars += number.checked ? numbers : "";
    allChars += symbol.checked ? symbols : "";

    let i = 1;
    let length = inputSlider.value;
    while (i <= length) {
        password += allChars.charAt(parseInt(Math.random() * (allChars.length)));
        i++;
    }

    return password;
}