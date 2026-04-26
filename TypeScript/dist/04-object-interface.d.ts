interface User {
    name: string;
    age: number;
    email?: string;
    readonly id: number;
}
declare let user: User;
interface Product {
    name: string;
    price: number;
    getDiscount(percentage: number): number;
}
declare let laptop: Product;
//# sourceMappingURL=04-object-interface.d.ts.map