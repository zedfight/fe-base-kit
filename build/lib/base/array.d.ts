import { KeysOfType, FunctionType } from "../type";
export declare function sum(numbers: number[]): number;
export declare function sumByKey<T>(array: T[], key: KeysOfType<T, number>): number;
export declare function sortByKey<T>(array: T[], key: KeysOfType<T, number>, order: "asc" | "desc"): T[];
export declare function fillArray<T>(length: number, generator: T | FunctionType<number[], T>): T[];
export declare function eachArrayByKey<T, V>(array: T[], mapperCallback: (item: T, index: number) => [string, V]): void;
export declare function eachArray<T, V>(array: T[], mapperCallback: (item: T, index: number) => [string, V]): {
    [key: string]: V;
};
export declare function hasIntersection<T>(a: T[], b: T[]): boolean;
