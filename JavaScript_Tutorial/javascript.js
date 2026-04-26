// 1. Ways to print in JavaScript
// console.log("Hello world");
// alert("me");
// document.write("This is document write")

// 2. JavaScript console API
// console.log("Hello world", 4 + 6, "another log");
// console.warn("This is warning");
// console.error("This is error");

// 3. JavaScript Variables
// What are Variables? - Containers to store data values
// var number1 = 34;
// var number2 = 43;
// console.log(number1 + number2)
// let number3 = 54; /** It is a block level scope, it use within the brackect"{}"*/
// const a1 = 454; /** It can't be chanege once it define*/

// 4. Data types in JavaScript
/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefine, null, number, string, booleam, symbol
2. Reference data types: Arrays and Objects
*/

// Number
// var num1 = 332;
// var num2 = 452;
// console.log("This is a number",num1,num2);

// String
// var str1 = "This is a string1";
// var str2 = 'This is a string2';
// console.log(str1,str2);

// Object
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99
// }
// console.log(marks);

// Booleans
// var a = true;
// var b = false;

// console.log(a);
// console.log(b);

// Undefined - The variable that the value is not assing 
// var und = undefined;
// var und;
// console.log(und);

// Null
// var n = null;
// console.log(n);

// Arrays
// var arr = [1, 2, "bablu", 4, 5]
// console.log(arr)

// 5. Operators in JavaScript

// i) Mathemetical Operator(+,-,*,/,<,>,^)
// var a = 100;
// var b = 10;
// console.log("The value of a + b is ", a+b); 
// console.log("The value of a - b is ", a-b); 
// console.log("The value of a * b is ", a*b); 
// console.log("The value of a / b is ", a/b); 

// ii) Assignment Operators
// var c = b;
// c += 2;
// console.log(c)

// iii) Comparision Operators
// var x = 34;
// var y = 56;
// console.log("The value of a = b is ", x==y); 
// console.log("The value of a > b is ", x>y); 
// console.log("The value of a < b is ", x<y); 
// console.log("The value of a >= b is ", x>=y); 
// console.log("The value of a <= b is ", x<=y); 

// iv) Logical Operators

// // Logical AND Operator(&&)
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // Logical OR Operator(||)
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// // Logical NOT Operator(||)
// console.log(!true);
// console.log(!false);

// 6. Function in JavaScript
// function clicked() {
//     console.log("The button was clicked");
// }

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// c = avg(5, 10)
// console.log("Avrage of 5 and 10 is :", c);

// 7. Conditionals in JavaScript
// var age = 34;

/**Single if Statement */
// if(age >= 18){
//     console.log("You are mature");
// }

/**If - else statement */
// if(age >= 18){
//     console.log("You are mature");
// }
// else{
//     console.log("you are minor");
// }

/**If - else Ladder */
// if(age < 8){
//     console.log("You are a kid");
// }
// else if(age > 8){
//     console.log("You are not a kid");
// }
// else if(age >= 18 && age < 50){
//     console.log("You are mature");
// }
// else {
//     console.log("You are old");
// }

// 8. Loops in JavaScript
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(arr);

/**i) For Loop & Break & Continue */
// for (var i = 0; i < arr.length; i++){
//     // if(i == 2){
//     //     break; /**it break the loop */
//     //     continue; /**it skip the current loop */
//     // }
//     console.log(arr[i]);
// }

/**ii) Another way to print array elements */
// arr.forEach(function(elements){
//     console.log(elements);
// })

/**iii) While Loop */
// let j = 0;
// while( j< arr.length){
//     console.log(arr[j]);
//     i++;
// }

/**iv) Do-While Loop */
// var i = 0;
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length)

// 9. Array Methods
// let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr);

/**Write the length the array */
// console.log(myArr.length); 

// /**pop the last element and print it */
// myArr.pop(); 

/**Push element to array at last */
// myArr.push("Kenil");
// console.log(myArr);

/**skip the first element form the array */
// myArr.shift();
// console.log(myArr);

/**print the new length of the array */
// const newLen = myArr.unshift("Kenil");
// console.log(newLen);

/**Convert to string */
// var arrStr = myArr.toString();
// console.log(arrStr);

/**Sort the array */
// var arrSort = arr.sort();
// console.log(arrSort);

// 10. String Methods in JavaScript
// let myString = "Kenil is a good boy good";
// console.log(myString);

/**Give the length of string */
// console.log(myString.length);

/**Give the first index of the word or letter */
// console.log(myString.indexOf("good"));

/**Give the last index of the word or letter */
// console.log(myString.lastIndexOf("good"));

/**Give the char at the given index */
// console.log(myString.charAt(11));

/**Replace the word or letter */
// console.log(myString.replace('K','k'));

/**It slice the string from given index */
// console.log(myString.slice(0,6));

// 11. Dates in JavaString
// let myDate = new Date();
// console.log(myDate);

/**Methos of dates */
/**Give time in the seconds */
// console.log(myDate.getTime());
/**Give year */
// console.log(myDate.getFullYear());
/**Give day in numbers */
// console.log(myDate.getDay());
/**Give seconds */
// console.log(myDate.getSeconds());
/**Give minutes */
// console.log(myDate.getMinutes());
/**Give hours */
// console.log(myDate.getHours());

// 12. DOM(Document object Model) Manipulation (by this we can manipulate CSS)
// /**Show elements by it ID */
// let myElement1 = document.getElementById('click');
// console.log(myElement1);

// /**Show elements by it class name */
// let myElement2 = document.getElementsByClassName('container');
// console.log(myElement2);

// /**manipulate the style of the element of class */
// myElement2[0].style.background = "yellow";
// /**Add the style of the element */
// myElement2[1].classList.add("bg-primery");
// /**Remove the style of the element */
// myElement2[1].classList.remove("bg-primery");
// /**Give HTML weriten in the part */
// console.log(myElement2[0].innerHTML);
// /**Give text weriten in the part */
// console.log(myElement2[0].innerText);

// /**Get element by tag name */
// let tn = document.getElementsByTagName("div");
// console.log(tn);

// /**create a child */
// createdElement1 = document.createElement('p');
// createdElement1.innerText = "This is a created Para";
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created Bold";
// /**Add a child */
// tn[0].appendChild(createdElement1);
// /**replace a chid */
// tn[0].replaceChild(createdElement2,createdElement1)
// /**Remove an element */
// tn[0].removeChild(myElement1);/**myElement is define above (at line no.249)  */

// 13. Events in JavaScript (By this we can change or manipulate html or css when an event happen)
// /**Click Event */
// firstContainer.addEventListener('click',function(){
//     console.log("Clicked on Container");
// });

// /**mouse over Event */
// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse  on Container");
// });

// /**mouse out Event */
// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out Container");
// });

// /**mouse unpress Event */
// preHtml = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function () {
//     document.querySelectorAll('.container')[1].innerHTML = preHtml;
//     console.log("mouse up when clicked on Container");
// });

// /**mouse press Event */
// firstContainer.addEventListener('mousedown', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>";
//     console.log("mouse Down when hold the click on Container");
// });

// 14. Arrow Function
// function sun(a, b) {
//     return a + b;
// }
// /**this is a other way to define a function */
// sum = (a, b) => {
//     return a + b;
// }

// 15. SetTimeout and SetInterval
// logkaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>";
//     console.log("I am your log");
// }

// /**Use clearTimeout(clr)/clearinteraval(clr) to cancle setTimeout/setInterval  */
// /**It use to set time that the function or code is run */
// clr = setTimeout(logkaro, 2000);

// /**It use to set interval that the function or code is run */
// clr = setInterval(logkaro, 2000);

// 16. JavaScript localStorage

// /**use to set localStorage */
// localStorage.setItem("name", "kenil");

// /**use to get localStorage */
// localStorage.getItem("name");

// /**Use to remove item from localStorage */
// localStorage.removeItem(name);

// /**use to clear localStorage */
// localStorage.clear();

// 17. JSON(JavaScript Object Notation) :- use to exchange data
/**Change data to string and perform operation and rechange into JavaScript */
/**It can't accept single inverted coma(') */

/**Convert to string */
obj = { name: "kenil", a: { this: "that" } };
jso = JSON.stringify(obj);
console.log(typeof obj);
console.log(typeof jso);
console.log(jso);

/**String to object */
parsed = JSON.parse(`{"name":"kenil","a":{"this":"that"}}`)
console.log(parsed);

// 18. Templete literals - Backticks
a = 67;
b = "kenil"
console.log(`this is my ${a}`);
console.log(`this is my ${b}`);






