type Status = "pending" | "approved" | "rejected";
declare function setStatus(status: Status): void;
interface ColorFul {
    color: string;
}
interface Circle {
    radius: number;
}
type ColorFulCircle = ColorFul & Circle;
declare let myCirlce: ColorFulCircle;
//# sourceMappingURL=06-union-intersection.d.ts.map