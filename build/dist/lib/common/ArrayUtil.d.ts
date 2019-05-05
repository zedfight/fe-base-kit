import { KeysOfType } from "../type";
export declare class ArrayUtil {
    static sum(numbers: number[]): number;
    static sumByKey<T>(array: T[], key: KeysOfType<T, number>): number;
    static sortByKey<T>(array: T[], key: KeysOfType<T, number>, order: "asc" | "desc"): T[];
    static generate<T>(length: number, generator: T | ((index: number) => T)): T[];
    static mapToObject<T, V>(array: T[], mapperCallback: (item: T, index: number) => [string, V]): {
        [key: string]: V;
    };
    static mapFromStringEnum<EnumType extends {
        [P in keyof EnumType]: EnumType[P] & string;
    }>(enumMap: EnumType): string[];
    static hasIntersection<T>(a: T[], b: T[]): boolean;
}
