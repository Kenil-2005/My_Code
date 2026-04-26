"use strict";
// Generics in TypeScript 
// Because of any type its child variable also any type
function identity1(arg) {
    return arg;
}
let option1 = identity1("hello"); // this is type any
let option2 = identity1(100);
// We use generics
function identity2(arg) {
    return arg;
}
// We also can explicitly provide type to it
let option3 = identity2("hello"); // now this is string type
let option4 = identity2(100); // and This is number type
// Generics in array 
function getFirstElement(arr) {
    return arr[0];
}
let myNum = getFirstElement([1, 2, 3, 4, 5]);
let myName = getFirstElement(["kenil", "Harsh", "divya"]);
let stringNumberPair = {
    key: {
        name: "kenil",
        myKey: "hello",
    },
    value: 43,
};
// Generics in class
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data = this.data.filter((i) => i !== item);
    }
    getItem() {
        return [...this.data];
    }
}
let textStorage = new DataStorage();
textStorage.addItem("hello");
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
logLength("hello"); // valide
logLength([1, 2, 3, 4]); // valide
// logLength(123) // inValid because the parameter have no length method
//# sourceMappingURL=10-generics.js.map