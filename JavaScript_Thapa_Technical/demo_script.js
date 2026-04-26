// // age verification for voting
//
// var myAge = 9;
// var citizen = true;
// var registered = false;
//
// if(myAge >= 18 && citizen == true && registered == true ){
//     console.log("You are eligible for vote");
// } else {
//     if(myAge<18 && citizen != true && registered == false){
//         console.log("You are not eligible for voting");
//     }
//     else if(myAge < 18 ) {
//         console.log("You are not eligible for voting due to age");
//     }else if (citizen != true ){
//         console.log("You are not eligible for voting due to citizenship");
//     }else if(registered ==false){
//         console.log("You are not eligible for voting due to registration");
//     }
// }


// //  calculate the sum of number frome 1 to 10 usign a for loop
//
// var num;
// var sum = 0;
// for (num = 1; num <= 10; num++) {
//     sum = sum + num;
// }
// console.log("The sum of 1 to 10 is: " + sum);


// // write a program to check if a number is prime
//
// var num = prompt("Enter a number: ");
// for(var i = 2 ; i < num ;i++ ){
//     if(num % i ==- 0){
//         console.log("The number is not prime.")
//     }else{
//         console.log("The number is prime.")
//     }
// }

// // make a triangle pattern
//
// var num = 5;
// for (var i = 1; i <= num; i++) {
//     var pattern = "";
//     for (var j = 1; j <= i; j++) {
//         pattern = pattern + " * ";
//     }
//     console.log(pattern);
// }


// function sum(a,b){
//     return a+b;
// }
//
// console.log(sum(2,5));
//
// // another method to define fnction useing arrow(fat arrow)
// sum = (a,b) => {
//     return a+b;
// }
// console.log(sum(2,5));
//
// const calculate = (num1, num2, operator) => {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "/":
//             if (num2 === 0) {
//                 return "0 is not divisible"
//             } else {
//                 return num1 / num2;
//             }
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         default:
//             return "Enter valid oprator.";
//     }
// }
//
// console.log(calculate(5, 6, '*'));

// // Reverse a string without use of in-build function
// const reverse = (a) => {
//     let i;
//     let result="";
//     for (i = a.length; i>0; i--) {
//         result = result + a[i-1];
//     }
//     console.log(result);
// }
//
// let myStr = "kenil";
// reverse(myStr)

// check the string is palindrome
//
// const palindrome = (str) => {
//     let len = parseInt(str.length / 2);
//     let i, j;
//     let flag = false;
//     for (i = 0; i <= len; i++) {
//         if (str[i] == str[(str.length - i)-1]) {
//             flag = true;
//         } else {
//             flag = false;
//             break;
//         }
//     }
//     if (flag) {
//         console.log("The string is pelindrome.");
//     } else {
//         console.log("The string is not pelindrome.")
//     }
// }
//
// let myStr = "keniinek";
// console.log(palindrome(myStr));

// another method to do this
//
// const palindrome = (str) => {
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         result = result + str[i];
//     }
//     return str === result ? true : false;
// }
//
// let myStr = "level";
// console.log(palindrome(myStr));

// For-each syntax
// // normal methods
// array.forEach(function
//     callback(curruntValue, index, arr) {
//     // your logic here
// }, thisvalue);
//
// let fruits = ["apple", "banana", "orange", "grape", "watermelon"];
// fruits.forEach(function callback(curruntValue, index, arr) {
//     console.log(`${curruntValue} ${index}`);
// });
//
// // Arrow method
// fruits.forEach((curruntValue, index, arr) => {
//     console.log(`${curruntValue} ${index}`);
// });
//
// // Multiple each numebr with 2
// const number = [1, 2, 3, 4, 5];
//
// const num = number.map((currVal) => {
//     console.log(currVal * 2);
//     return `${currVal *2 }`;
// });
//
// console.log(num);



// //? Array

// splice function is use to add delte elment in the array anywhere
// myArray.splice(start,end,newEle1,newEle2,newEle3 ...newEle n);

// let fruits = ["apple", "banana", "orange", "grape", "watermelon"];

// // Remove the 2 element form array
// fruits.splice(1, 1, "graphs");
//
// console.log(fruits);

// // adding at the last using splice
// fruits.splice(fruits.length,0,"guava");
// console.log(fruits);

// // facorial using recursion function
// const factorial = (number) => {
//     if (number === 1 || number === 0) return 1;
//     return number * factorial(number - 1);
// };
// console.log(factorial(5));


// // indexof method use to find index of element  indexOf(element,index) :index is use tospecify the starting position of search
//
// let fruits = ["apple", "banana", "orange", "grape", "watermelon"];
// console.log(fruits.indexOf('apple'));

// // include method use to find the elment is there or not written booleen value
//
// let fruits = ["apple", "banana", "orange", "grape", "watermelon"];
// console.log(fruits.includes("grape")); // output is true
// console.log(fruits.includes("mango")); // output is false



// Search + Filter

// const number = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// // find method  array.find((currentElement,index,array)) : find and return first resulted element
// let result = number.find((curEle)=>{
//     return curEle > 5;
// });
// console.log(result);

// // findIndex : find and return index of the element  array.findIndex((currentElement,index,array))
// let result1 = number.findIndex((curEle) => {
//     return curEle > 5;
// });
// console.log(result1);

// // filter method  array.filter((currentElement,index,array)) : return all resulted element
// let result2 = number.filter((curEle) => {
//     return curEle > 4;
// });
// console.log(result2);

// // sort and compare method
// // sort it use to sort array array.sort() : it sort array into ascending order and not give parfect sort of number everytime
// const number = [1, 5, 3, 2, 6, 8, 7, 4, 9];
// const fruits = ['orange','mango','pineapple','grape'];
// number.sort();
// fruits.sort();
// console.log(number);
// console.log(fruits);

// // compare :it is use when you have to sort number or you have to change odere into decending order
// // this logic sort array in acending oder and exchange the return value then sort array into decending order
// // const result = array.sort((a,b) => {
// //     if (a>b) return 1;
// //     if (b>a) return -1;
// // });

// const result = fruits.sort((a,b) => {
//     if(a>b) return -1;
//     if(b>a) return 1;
// });
// console.log(result);

// //? print all element and square the element if it's even
// const number = [1, 5, 3, 2, 6, 8, 7, 4, 9];
// const result = number.map((curEle)=>{
//     if(curEle %2 === 0) return (curEle *curEle);
//     else return curEle;
// });
// console.log(result);

// //? only print element that is even and do it's square
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = number.map((curElem) => {
//     if (curElem % 2 === 0) return (curElem * curElem);
// }).filter((curElem) => { return curElem != undefined; });
// console.log(result);

// //? reduce method :
// // array.reduce(function callback(accumulator,curElem,index,arr){
// //     // your logic
// // },initialValue);

// const productPrice = [100, 300, 400, 600];
// const totalPrice = productPrice.reduce((accu,curElem)=>{
//     return accu + curElem;
// },0);
// console.log(totalPrice);



// //? Strings : it represent sequence of chaaracter.

// //? lenthg : calculate  length of the string starting wih 1 and also count space
// const str = "Hello World";
// console.log(str.length);

// // Escape character : the backslash '\' is an use asa an escape character. it also use to print special character in string
// const str = "he said \"i am kenil\" ";
// console.log(str);

// // another way to do this only for inverted coma and for only onece
// const str = 'he said "i am kenil"'; // if you want to use double inverted coma then use single inverted coma for defining the string and visa-versa
// console.log(str);

// // indexof : this method return the first occurence of the specifi the string
// const str = "Hello World";
// console.log(str.indexOf('o'));

// // //? covert string into array  Array.form(string_name)
// const str = "Hello World";
// let strArr = Array.from(str);
// console.log(strArr);
// //? lastIndexof() : this method return the last occurence of the specifi the string
// const str = "Hello World";
// console.log(str.lastIndexOf('o'));

// //? search() : it searches a string for a string(or a regular expression)
// // It return the index number where the match found and return -1 if not found
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// console.log("javaScript " + myStr.search('javaScript'));
// console.log("javascript " + myStr.search('javascript'));
// console.log("javascript using regular expression " + myStr.search(/javascript/i));

// //? match() : return an array of the mathched value or null if no match found
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.match("javaScript");
// let result1 = myStr.match(/javaScript/g);
// console.log(result);
// console.log(result1);

// //? matchAll() : returns an iterator of all matches, providing detailed information about each match,
// // and return an empty iteraeir if no match found
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.matchAll("javaScript"); // return iterator
// // console.log(result); // return empty iterator because we can print iterator using console.
// // we have to use loop or spred operator(...)
// for(let item of result){
//     console.log(item);
// }

// //? inculde() : return true if the string contains the specific value, flase otherwise
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.includes("javascript");
// console.log("javascript " + result);
// result = myStr.includes("javaScript");
// console.log("javaScript " + result);

// //?starsWith : returns true if a string brgins with a specificed value. otherwise return false
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.startsWith("javascript");
// console.log("javascript " + result);
// result = myStr.startsWith("Hello");
// console.log("Hello " + result);
// result = myStr.startsWith("javaScript",6);
// console.log("javaScript " + result);

// //? endsWith : returns true if a string ends with a specificed value. otherwise return false
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.endsWith("javascript");
// console.log("javascript " + result);
// result = myStr.endsWith("course");
// console.log("course " + result);
// result = myStr.endsWith("javaScript",48);
// console.log("javaScript " + result);

// //? Extracting String part
// //? slice(start,end) : extract the part of a string and retrns extracted part in a new string
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.slice(0,6); // can't inculde the last index in extracted part
// console.log(result);
// result = myStr.slice(38,49);
// console.log(result);

// //? substring() : Extracts a portion f the string based on starting abd ending indices
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.substring(0,6); // can't inculde the last index in extracted part
// console.log(result);
// result = myStr.substring(38,49);
// console.log(result);

// //? Difference in slice() and substring()
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.substring(-6); // return full string
// console.log(result);
// result = myStr.slice(-6); // count index form end of the string, allthough go left to right
// console.log(result)

// //? replace(old_char,new_char) : replace the specified character
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.replace("j","J");
// console.log(result);

// //? replaceAll(old_char,new_char) : replace the all specified character
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.replaceAll("j","J");
// console.log(result);

// //? charAt(index) : return the character at specified index (position) in a string
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.charAt(6);
// console.log(result);
// result = myStr.charAt(-5); // can't use negative index return empty space
// console.log(result);

// //? charCodeAt(index) : return the code of the character at specified index (position) in a string.
// // the method return UTF-16 code(an integer between 0 to 65535)
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.charCodeAt(6);
// console.log(result);
// result = myStr.charCodeAt(-5); // can't use negative index return NaN
// console.log(result);

// //? at(index) : return character at a specified index (position) in a string. also it allow negative number
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// let result = myStr.at(6);
// console.log(result);
// result = myStr.at(-5);
// console.log(result);

// //? trim() : remove whitespace from both ends of the string
// const myStr = "   Hello World     " // the string has unwanted space at start and end
// console.log(myStr.trim());

// //? split() : splite the string into an array of substring based on a specified delimiter.
// const myStr = "apple,orange,banana";
// let strArr = myStr.split(",");
// console.log(strArr);

// //return a to  z
// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// for (let char = 97; char <= 122; char++) {
//     console.log(String.fromCharCode(char));
// }

// //? count all the vowel in the string
// const countVowel = (str) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
//             count++;
//         }
//     }
//     return count;
// }
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// const result = countVowel(myStr);
// console.log("Total number of vowel is: " + result);

// //? check all vowel in there in string
// const checkAllVowelPresentOrNot = (str) => {
//     if (str.includes('a') && str.includes('e') && str.includes('i') && str.includes('o') && str.includes('u')) return true;
//     else return false;
// }
// const myStr = "Hello javaScript, welcome to our best javaScript course";
// const myStr1 = "kenil";
// let result = checkAllVowelPresentOrNot(myStr);
// result == true ? console.log("All vowel are present") : console.log("All vowel are not present");
// result = checkAllVowelPresentOrNot(myStr1);
// result == true ? console.log("All vowel are present") : console.log("All vowel are not present");



// //? Math object

// //? Math.abs() : returns the absolute value of a number(return distance from 0).
// console.log("absolute method");
// console.log(Math.abs(5));
// console.log(Math.abs(-3)); // we can use nagative value
// console.log(Math.abs(8));

// //? Math.round(x) : rounds a number to the nearest integer.
// console.log("round method");
// console.log(Math.round(5.4));
// console.log(Math.round(5.5));
// console.log(Math.round(5.9));

// //? Math.ceil(x) : returns the value of x rounded up to is nearest integer.
// console.log("\nceil method");
// console.log(Math.ceil(5.4));
// console.log(Math.ceil(5.5));
// console.log(Math.ceil(5.9));

// //? Math.floor(x) : returns the value of x rounded down to is nearset integer.
// console.log("\nfloor method");
// console.log(Math.floor(5.4));
// console.log(Math.floor(5.5));
// console.log(Math.floor(5.9));

// //? Math.trunc(x) : returns the integer part of x
// console.log("\ntrunc method");
// console.log(Math.trunc(5.4));
// console.log(Math.trunc(9.2));
// console.log(Math.trunc(0.4));

// //? diffrence between floor and trunc
// console.log("floor method return lowest integer,in negative lowest value is greter")
// console.log(Math.floor(-5.5));
// console.log("trunc method return integer(value befor point(.))")
// console.log(Math.trunc(-5.5));

// //? Math.pow(x,y) : return the value of x to the power y.
// console.log("pow method");
// console.log(Math.pow(2,2));
// console.log(Math.pow(6,4));
// console.log(Math.pow(8,3));

// //? Math.sqrt(x) : return the square root of x.
// console.log("sqrt method");
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(45));
// console.log(Math.sqrt(64));

// //? Math.log(x) : return the natural logorithm of x.
// console.log("log method");
// console.log(Math.log(2));
// console.log(Math.log(10));
// console.log(Math.log(100));

// //? Math.random() : reurn a random number between 0(inclusive) to 1(exclusive)
// console.log("simple return inbetween 0 to 1 : " + Math.random());
// console.log("multiple of 10 return inbetween 0 to 10 : " + Math.round(Math.random()*10));
// console.log("multiple of 100 return inbetween 0 to 100 : " + Math.round(Math.random()*100));


// // Date And Time
// // i) new Date() : it return current date and time
// const currentDateTime = new Date();
// console.log(`curretDateTime: ${currentDateTime}`);
//
// // ii) new Date(dateString) : it create date object based on given string
// const dateString = "2025-10-12T16:10:57.881Z"
// const dateFormString = new Date(dateString);
// console.log(`dateFromString: ${dateFormString}`);
//
// // iii) new Date(year,month) : it create date object based on given year and month
// const date1 = new Date(2025, 9);
// console.log(`Date1: ${date1}`);
//
// // iv) new Date(year,month,day) : it create date object based on given year , month and day
// const date2 = new Date(2025, 9, 12);
// console.log(`Date2: ${date2}`);
//
// // v) new Date(year,month,day,hours) : it create date object based on given year , month , day and hours
// const date3 = new Date(2025, 9, 12, 22);
// console.log(`Date3: ${date3}`);
//
// // vi) new Date(year,month,day,hours,minutes) : it create date object based on given year , month , day , hours and minutes
// const date4 = new Date(2025, 9, 12, 22, 15);
// console.log(`Date4: ${date4}`);
//
// // vii) new Date(year,month,day,hours,minutes,seconds) : it create date object based on given year , month , day , hours ,minutes and seconds
// const date5 = new Date(2025, 9, 12, 22, 15, 45);
// console.log(`Date5: ${date5}`);
//
// // viii) new Date(year,month,day,hours,minutes,seconds,miliseconds) : it create date object based on given year , month  , day , hours , minutes , seconds  and milliseconds
// const date6 = new Date(2025, 9, 12, 22, 15, 45);
// console.log(`Date6: ${date6}`);
//
// // ix) new Date(milliseconds) : it create date object representing the number  of milliseconds since the unix epoch (January,1,1970,00:00:00 UTC);
// const currentMilliseconds = new Date().getTime();
// console,log(`Current milliseconds: ${currentMilliseconds}`);
// const dateFromMilliseconds = new Date(currentMilliseconds); // Also get date form milliseconds
// console.log(`Date from milliseconds: ${dateFromMilliseconds}`);

// // Get method of date in javaScript : you can get various components of date
// const date = new Date();
// console.log(`getFullYear: ${date.getFullYear()}`); // give year
// console.log(`getMonth: ${date.getMonth()}`); // give month
// console.log(`getDay: ${date.getDay()}`); // give day
// console.log(`getDate: ${date.getDate()}`); // give date
// console.log(`getHours: ${date.getHours()}`); // give hours
// console.log(`getMinutes: ${date.getMinutes()}`); // give minutes
// console.log(`getSeconds: ${date.getSeconds()}`); // give seconds
// console.log(`getMilliseconds: ${date.getMilliseconds()}`); // give milliseconds
// console.log(`getTime: ${date.getTime()}`); // give total milliseconds from january 1,1970

// // Set method of date in javaScript: you can set various components of date
// const date = new Date();
// date.setFullYear(2024); // set year
// console.log(`SetFullYear: ${date}`);
// date.setMonth(5); // set month
// console.log(`SetMonth: ${date}`);
// // console.log(`SetDay: ${date.setDay(4)}`); // set day
// date.setDate(45); // set date
// console.log(`SetDate: ${date}`);
// date.setHours(22); // set hours
// console.log(`SetHours: ${date}`);
// date.setMinutes(45); // set minutes
// console.log(`SetMinutes: ${date}`);
// date.setSeconds(54); // set seconds
// console.log(`SetSeconds: ${date}`);
// date.setMilliseconds(45); // set milliseconds
// console.log(`SetMilliseconds: ${date}`);
// date.setTime(1832090690883); // set total milliseconds
// console.log(`SetTime: ${date}`);

// // A few usefull methods of date in javaScript
// i) toLocaleString() : return a string representing the date and time using current local's convention
// const date = new Date();
// const localeString =  date.toLocaleString();
// console.log(localeString);

// ii) toLocaleDateString() : return a string representing the date using current local's convention
// const date = new Date();
// const localeDateString =  date.toLocaleDateString();
// console.log(localeDateString);

// iii) toLocaleTimeString() : return a string representing the time using current local's convention
// const date = new Date();
// const localeTimeString =  date.toLocaleTimeString();
// console.log(localeTimeString);

// // iv) parse() : return a string of given date and time
// const dateString = "2025-10-12T19:08:58.567Z";
// const parseString = Date.parse(dateString);
// console.log(parseString);


// // write a function to add specifice number of days in date
// const addDaysToDate = (date,extraDay)=>{
//     let days = date.setDate(date.getDate() + extraDay);
//     return new Date(days);
//     // days = date.toLocaleString(days);
//     // return days;
// }
//
// const date = new Date("2024-05-15");
// const newDate = addDaysToDate(date,5);
// console.log(newDate);

// // write a function to calculate the diffrence in days between two given dates

// const differenceOfDays = (date1, date2) => {
//     let oneDay = 24*60*60*1000;
//     let diff = Math.abs(date2-date1);
//     return Math.round(diff/oneDay);
// }
//
// const date1 = new Date("2024-05-15");
// const date2 = new Date("2025-05-15");
// const newDate = differenceOfDays(date1, date2);
// console.log(newDate);


// // Timing based event in javaScript

// // i) setTimeout: The setTimeout function is used to execute a function or code block after a specified delay in millisecond
// function delayFunction(x) {
//     console.log("this function is run after 2000ms: ",x);
// }
//
// setTimeout(delayFunction,2000);
// setTimeout(() => delayFunction(5),2000); // use when we have to give parameter

// // ii) setInterval: The setInterval function is used to repeatedly execute a function or code block after a specified interval in millisecond
// function delayFunction(x) {
//     console.log("this function is run repeatedly every 1000ms: ", x);
// }
//
// setInterval(delayFunction, 1000);
// setInterval(() => delayFunction(5), 1000); // use when we have to give parameter

// // iii) clearTimeout: if you want to cancels a timeout previously estalblished by calling setTimeout().
// function delayFunction() {
//     console.log("this function is run after 2000ms: ");
// }
//
// const myWork = setTimeout(delayFunction, 2000);
// clearTimeout(myWork);

// // iv) clearInterval: if you want to cancels scheduled interval before is occuers , you can use the clearInterval function.
// function delayFunction() {
//     console.log("this function is run after 2000ms");
// }
//
// const delay = setInterval(delayFunction, 2000);
// clearInterval(delay);


// // create a function thatstop the setInterval after 5000ms----------------------------------------
// function delayFunction() {
//     console.log("this function is run after 1000ms");
// }
// delayFunction(); // to run immediately onec the code exicute
// const delay = setInterval(delayFunction, 1000);
// setTimeout(() => {
//     clearInterval(delay);
// }, 5000);


// // object in javaScript
// // Creating object
// const student = {
//     idType:"AD3914",
//     sName:"Kenil Pansara",
//     sAge:18,
//     "is'Student":true,
//     greet: function (){
//         console.log("Hello, I am kenil");
//     }
// }
//
// // access object element
// console.log(student.idType);
// console.log(student.sName);
// console.log(student["is'Student"]); // We can use bracket when special character is use as key.
//
// // access method in object (function in object called method)
// student.greet();
//
// // change and add element in object
// console.log(`before changing age: ${student.sAge}`)
// student.sAge = '20'; // change element
// console.log(`after changing age: ${student.sAge}`)
// student.job='web Dev'; // add element in object
// console.log(student.job);


// //? dynamic value in object: the key in not define, vary by object.
// //? denoted by [] inside obejct and declare outside the object.
// //? use when same key use in object serve different role for other object
// const idType = "studenId";

// const student = {
//     [idType]: "AD3914", // dynamic key based on idType
//     sName:"Kenil Pansara",
//     sAge:20,
//     "is'Student":true,
//     greet: function (){
//         console.log(`my ${idType} is ${student[idType]} and my name is ${student.sName}`);
//     }
// }
// student.greet();

// //? "this" keyword : it refers to diffrent objects depending how it is use.
// //?  i) In an object method, it refers to an object
// //? if we define function using fat arrow in object this refer to window not to it's object.
// const obj = {
//     name: "kenil",
//     greet: function(){
//         console.log(this);
//     },
// };
//
// obj.greet(); // it refer to it's object

// //?  ii) Alone it is refer to global object
// this // it refer to windows because window is global object of function

// //?  ii) In a function, it is refer to global object
// function callMe(){
//     console.log(this);
// }
// callMe(); // it refer to windows because window is global object of function

// //?  iv) In an event,this refers to element that recived the event


// //? Object usefull method
// const student = {
//     idType: "AD3914",
//     sName: "Kenil Pansara",
//     sAge: 20,
//     "is'Student": true,
//     greet: function () {
//         console.log(`my ${idType} is ${student[idType]} and my name is ${student.sName}`);
//     }
// }


// //? i) Object.keys() : return an array containing the keys of all enumerable own properties of an object
// const key = Object.keys(student);
// console.log(key);

// //? ii) Object.values() : return an array containing the values of all enumerable own properties of an object
// const value = Object.values(student);
// console.log(value);

// //? iii) Object.entries() : return an array containing the key-values pairs for each of enumerable own properties of an object
// const entrie = Object.entries(student);
// console.log(entrie);

// //? iv) Object.hasOwnProperty() : return a boolean indicating whether the object has specified property as an own property
// const hasownproperty = student.hasOwnProperty("name");
// console.log(hasownproperty);

// //? iv) Object.assing() : copies the values of all enumerable own properties from one or more source object to a target object
// const target = {a:1,b:2};
// const source = {b:2,c:3};
// const mergeObject = Object.assign({},target,source);
// console.log(mergeObject);

// //? v) Object.freeze() : freeze an object,preventing new properties from being added to it and existing properties from being modified or deleted.
// Object.freeze(student);
// student.sCity = "surat"; // can add anything
// console.log(Object.entries(student));

// //? ECMAScript
// //? Object Propogation - modern JavaScript
// const name = "kenil";
// const age = 20;
// //? traditional way
// // const person = { name: name, age: age };
// //? Using shorthand notation for object property
// const person = { name, age }; // when both key and value is same we can also write this
// console.log(person);

// //? Destructuring Array
// const number = [10,20,30];
// //? i) extracting specific element
// // const first = number[0];
// // console.log(first);
// // //? Destructuring Array
// const [first,second,third] = number; // by this we can also assign values.
// console.log(first);
// console.log(second);
// console.log(third);

// //? ii) Ignoring element
// const [, ,third] = number; // we also ignore the unwanted element for assigning.

// //? interchange value of two variable without using third
// let a = 10;
// let b = 20;
// console.log(`before interchange ${a} and ${b}`);
// [a,b]=[b,a];
// console.log(`after interchange ${a} and ${b}`);


// //? Destructuring Object
// const user = { name: "kenil", age: 20 }
// //? Extracting properties:
// // traditional way
// const name = user.name;
// //? shoter way
// const { name, age } = user; // we can assing value direct tothe value but the varible name should be key of the object
// console.log(name, age);
// //? Renaming properties:
// const {name:fullName,age} = user;
// console.log(fullName);

// //? Spred Operator (...)
// //? i) copying array
// let arr1 = ["Mango", "Apple", "Banana", "Orange"];
// let arr2 = [...arr1];
// console.log(arr2);

// //? Concatinating Array
// let number1 = [1, 2, 3, 4];
// let number2 = [4, 5, 6, 7];
// let number3 = [...number1, ...number2]; // cannot remove similar value
// console.log(number3);

// //? Adding Element
// let fruits = ["Mango", "Apple", "Banana", "Orange"];
// // fruits.push("guava","grapes");
// fruits.push(...["guava","Grapes"]); // wecan also use spred operator
// console.log(fruits)

// //? change string into array
// const str = "India";
// console.log(str.split("")); // traditional way
// console.log([...str]); // using spred operator

// //? with rest function
// traditional way
// const sum = (a, b, c, d) => { // we have to declare all parameters
//     return a + b + c + d;
// }
// //? Using spred Operator (there is no limit for using parameters)
// const sum = (...number) => { // this create an array of parameterwhos value is stored into number.
//     return number.reduce((accum, curVal) => (accum = accum + curVal), 0);
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 4, 8, 84, 94, 4, 651, 31, 64, 694, 616, 16));

// //? Exponentiation Operator
// //? Syntax (**) : base_value ** exponent_value
// let base = 2;
// let exponent = 5;
// console.log("Using Math.pow(): " + Math.pow(base,exponent));
// console.log("Using exponentiation: "+ base**exponent);

// //? String padding()it is a way in javaScript to add extra character(like spaces) to a string to make its s specific length.
// //? padStart() to pad from the beginning.
// const name = "Kodyfier";
// const paddedName = name.padStart(10);
// console.log(paddedName);

// //? padEnd() to pad from the end.
// const name = "Kodyfier";
// // const paddedName = name.padEnd(15);
// const paddedName = name.padEnd(15,"$"); // we can add symbol at the empty space
// console.log(paddedName);

// //? Object.entries() : it return an array of containing all the object own properties, as an array of [key,value] pairs:
// const person = {name: "kenil", age: 20};
// const entries = Object.entries(person);
// console.log(entries);

// //? Object.fromEntries() : It create a new object from such array of properties
// const person = {name: "kenil", age: 20};
// const entries = Object.entries(person);
// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// //? String.prototype.trimStart : return a new string with removing white space from the start of the original string
// console.log("testing(no space)".trimStart());
// console.log("   testing(space at start)".trimStart());
// console.log("   testing(space at both side)     ".trimStart());
// console.log("testing(space at end)      ".trimStart());

// //? Sttring.prototype.trimEnd : return a new string with removing white space from the end of the original string
// console.log("testing(no space)".trimEnd());
// console.log("   testing(space at start)".trimEnd());
// console.log("   testing(space at both side)     ".trimEnd());
// console.log("testing(space at end)      ".trimEnd());

// //? optional chaining operator(?.) : it is a way to access properties of object without worrying of existence of intermediate properties.
// const person = {
//     naem: "john",
//     address: {
//         city: "New York",
//         zipCode: "533522",
//     }
// };
// // simple way to check the intermediate properties
// const city = person.address ? person.address.city : "city is not present";
// console.log(city);
// // by using Optional chaining operator
// const city1 = person.address ?. city ?? "city is note present";

// //? .at() : use for access data useing index in array.work same as an square bracket but for negative number.
// const arr = [1, 2, 3, 4, 5, 6, 4];
// console.log(arr[arr.length - 1]); // to access late index data(we can use -1 simply "arr[-1]" gives error)
// console.log(arr.at(-1)); // simplified

// //? First class Function :- It Just a concept, A function can be treated as value, assinging to variables, and prassed around as arguments.
// function sayHello(name) {
//     return "hello " + name;
// }
//
// var greetFunction = sayHello;
//
// console.log(greetFunction("kenil"));

// //? Highter-Order Function :- it is a function that takes one or more function as argrument or return a function as a result.
// //? Callback function :- it is a function that passed as an argument to another function and is execute after the completion of task.
// function processUserInput(name,callback){
//     console.log("Received input: " + name);
//     callback(name)
// }
// // this function is callback function
// function greetUser(name){
//     console.log("Hello " + name);
// }
//
// processUserInput("kenil",greetUser); // this function is higher-order function because a faction pass as argument

// //? callback hell :- is also knows as pyramid of doo, refer to a situation in asynchronous javascript where multiple nested callbacks are use to handle asynchronous operations thsi offen results in code that is difficult to read, understand and maintain due to its deeply nested structure.
// const getStudentData = () => {  // setTimeout is an callback function because it execute after some time
//     setTimeout(() => {  // First callback
//         console.log("Hi, My name is Kenil");
//         setTimeout(() => { // Secound callback
//             console.log("Hi, My middlename is Girishbhai");
//             setTimeout(() => { // Third callback
//                 console.log("Hi, My lastname is Pansara");
//                 setTimeout(() => { // Fourth callback
//                     console.log("Hi, I like to code");
//                     setTimeout(() => { // fifth callback
//                         console.log("Hi, i was born in Madhupur, Gujrat");
//                         setTimeout(() => { // Sixth callback
//                             console.log("Hi, i love to play video games");
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }
//
// getStudentData();

// //? Promises :- in simeple term, a promise is like a placeholder for the result of an asynchronous operation. Or a container for the future result or values.
// //** it can be in one of the three states:
// // ? i) Pending: Initial state, nither fullfilled nor rejected.
// // ? ii) Fullfilled(Resolve): The operation is completed successfully.
// // ? ii) Rejected: The operation failed or encountered an error.
//
// const pr = new Promise((resolve, reject) => {
//     try{
//         setTimeout(() => {
//             resolve("Hello, I am Kenil");
//         }, 2000);
//     }catch(e){
//         reject(e);
//     }
// });
//
// pr.then((responce) => { // if the promise is fullfilled then execute
//     console.log(responce);
// }).catch((error) => { // if there is an error or rejection catch execute
//     console.log(error);
// }).finally(() => { // optional: code is execute regardless of error occurred or not.
//     console.log("it fanally happen");
// });

// //? Example of promise
// const studentName = 'Alice';
//
// const enrollStudent = (studentName) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isSuccessful = Math.random();
//             // console.log(isSuccessful);
//             if (isSuccessful > 0.4) {
//                 resolve(`Enrollment successfull for ${studentName} `);
//             } else {
//                 reject(`Enrollment failed for ${studentName}, Please try again`);
//             }
//         }, 2000);
//     });
// };
//
// enrollStudent(studentName).then((responce) => {
//     console.log(responce);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Enrollment process is over");
// });

// //? Promise Methods
/** Promise.all is used when you want to wait for all promises to complete successfully.Reject state will throw an error.(if 1 out of 100 reject this throw error) */
/** Promise.allSettled is used ehwn you wait for all promises to complet successfully, regradless of success or failure, and get information about their outcomes */
/** Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure */
//
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("One"), 2000);
// });
// const promise2 = new Promise((resolve, reject) => { // return only this Reject promise
//     setTimeout(() => reject("Failed"), 5000);
// });
// // const promise2 = new Promise((resolve, reject) => {
// //     setTimeout(() => resolve("Two"), 2000);
// // });
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Third"), 200);
// });
//
// Promise.all([promise1, promise3, promise2]).then((responce) => { // execute when all promise are ready(does'nt matter mini time) and if rejection is there only show the rejected promise
//     console.log(responce);
// }).catch((error) => {
//     console.log(error);
// });
//
// Promise.allSettled([promise1, promise2, promise3]).then((responce)=>{ // execute all regradless of success or failure and shows status of the promise
//     console.log(responce);
// }).catch((error)=>{
//     console.log(error);
// });
//
// Promise.race([promise1, promise2, promise3]).then((resoponce)=>{ // only show the first promise that execute fast or first
//     console.log(resoponce);
// }).catch((error)=>{
//     console.log(error);
// })

