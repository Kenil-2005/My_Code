"use strict";
// Primitive data type 
const username = "kenil";
const age = 4;
const isAdmin = true;
// Array
const numbers = [1, 2, 3, 4, 5, 6];
const names = ["kenil", "pansara"];
// Tuple: we can specipe the type of each elements
let person = ["kenil", 21];
// Enum :it specify the value or we say custom type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Red;
// Any (Avoid when possible)
let randomValue = 10;
randomValue = "pryush";
randomValue = true;
// unknown (Safer then any)
let userInput = 10;
userInput = "pryush";
userInput = true;
// void (for function that don't retrun)
function subscribe(message) {
    console.log(message);
}
// NUll and Undefine
let nullValue = null;
let undefineValue = undefined;
//# sourceMappingURL=02-basic-types.js.map