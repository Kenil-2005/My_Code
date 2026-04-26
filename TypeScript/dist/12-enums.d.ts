declare enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}
declare let dir: Direction;
declare enum Status1 {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
declare let stat: Status1;
declare const enum HttpStatus {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}
declare function handleResponse(status: HttpStatus): void;
//# sourceMappingURL=12-enums.d.ts.map