declare class Person {
    private name;
    protected age: number;
    email: string;
    constructor(name: string, age: number, email: string);
    introduce(): string;
    getter(): string;
    setter(name: string): void;
}
declare class Employee {
    private is;
    name: string;
    protected department: string;
    constructor(is: number, name: string, department: string);
    getDetails(): string;
}
declare let piyush: Employee;
declare let kenil: Person;
declare class Manager extends Employee {
    private teamSize;
    constructor(id: number, name: string, department: string, teamSize: number);
    getTemaInfo(): string;
}
//# sourceMappingURL=09-classes.d.ts.map