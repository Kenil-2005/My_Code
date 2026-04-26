declare function identity1(arg: any): any;
declare let option1: any;
declare let option2: any;
declare function identity2<MyType>(arg: MyType): MyType;
declare let option3: string;
declare let option4: number;
declare function getFirstElement<T>(arr: T[]): T | undefined;
declare let myNum: number | undefined;
declare let myName: string | undefined;
interface KeyValuePair<K, V> {
    key: {
        name: string;
        myKey: K;
    };
    value: V;
}
declare let stringNumberPair: KeyValuePair<string, number>;
declare class DataStorage<T> {
    private data;
    addItem(item: T): void;
    removeItem(item: T): void;
    getItem(): T[];
}
declare let textStorage: DataStorage<string>;
interface Lengthwise {
    length: number;
}
declare function logLength<T extends Lengthwise>(arg: T): T;
//# sourceMappingURL=10-generics.d.ts.map