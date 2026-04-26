"use strict";
// Basic Function with type
function add(a, b) {
    return a + b;
}
// opitonal parameters 
function greet(name, greeting) {
    if (greeting) {
        return `${greeting},${name}`;
    }
    return `hello, ${name}`;
}
// default parameters
function multiply(a, b = 1) {
    return a * b;
}
// rest function
function total(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
// arrow function
const divide = (a, b) => a / b;
// Function types
let calculation;
calculation = add;
//# sourceMappingURL=03-function.js.map