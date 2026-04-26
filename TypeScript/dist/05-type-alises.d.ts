type Point = {
    x: number;
    y: number;
};
declare let point: Point;
type Id = string | number;
declare let userId: Id;
declare let productId: number;
interface Animal {
    name: string;
}
interface Dog extends Animal {
    breed: string;
}
declare let myDog: Dog;
interface Animal1 {
    name: string;
}
interface Animal1 {
    age: number;
}
declare let dog: Animal1;
interface User {
    name: string;
    age: number;
}
type UserId = string | number;
//# sourceMappingURL=05-type-alises.d.ts.map