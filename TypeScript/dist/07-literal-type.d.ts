declare let direction: "North" | "South" | "East" | "West";
declare let dice: 1 | 2 | 3 | 4 | 5 | 6;
type SuccessResponse = {
    status: "success";
    data: any;
};
type ErrorResponse = {
    status: "error";
    message: string;
};
type APIResponse = SuccessResponse | ErrorResponse;
//# sourceMappingURL=07-literal-type.d.ts.map