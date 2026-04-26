"use strict";
// Type Assertions
let someValue = "Subscribe to RoadsideCoder";
// let legth:number = someValue.length; // can access the property of string because the variable is unknown.
let strLength = someValue.length; // we have to change it's type
let strlength2 = someValue.length;
// Type Gaurds
function processValue(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toLocaleString);
    }
}
// instance of type Gaurd
class Dog1 {
    bark() {
        console.log("woof!");
    }
}
class Cat {
    meow() {
        console.log("Meow!");
    }
}
function makeSound(animal) {
    if (animal instanceof Dog1) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
//# sourceMappingURL=08-type-assertions-guards.js.map