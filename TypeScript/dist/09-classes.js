"use strict";
class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
    getter() {
        return this.name;
    }
    setter(name) {
        this.name = name;
    }
}
// similare way to writen in sort
class Employee {
    constructor(is, name, department) {
        this.is = is;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let piyush = new Employee(101, "Piyush", "Enginnering");
console.log(piyush.getDetails());
let kenil = new Person("Kenil", 21, "hello@world.com");
console.log(kenil.introduce());
console.log(kenil.getter());
kenil.setter("kenil");
console.log(kenil.getter());
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTemaInfo() {
        return `${this.name} manages ${this.teamSize} people`;
    }
}
//# sourceMappingURL=09-classes.js.map