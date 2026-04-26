"use strict";
// tpes of enum
// 1. Numeric enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let dir = Direction.Right; // Value of Right = 4 (auto-increment from 1)
console.log(Direction[1]); // in Numeric enum we can also do reverse Mapping (this print Up)
// 2. String Enum
var Status1;
(function (Status1) {
    Status1["Pending"] = "PENDING";
    Status1["Approved"] = "APPROVED";
    Status1["Rejected"] = "REJECTED";
})(Status1 || (Status1 = {}));
let stat = Status1.Approved;
function handleResponse(status) {
    if (status === 200 /* HttpStatus.OK */) {
        console.log("Success!");
    }
}
//# sourceMappingURL=12-enums.js.map