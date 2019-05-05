import {KeysOfType} from "../type";

export class ArrayUtil {
    static sum(numbers: number[]): number {
        return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    static sumByKey<T>(array: T[], key: KeysOfType<T, number>): number {
        let sum = 0;
        array.forEach(_ => {
            if (_[key]) {
                sum = sum + parseFloat(_[key].toString());
            }
        });
        return sum;
    }

    static sortByKey<T>(array: T[], key: KeysOfType<T, number>, order: "asc" | "desc"): T[] {
        return array.sort((a, b) => {
            const isLarger = a[key] > b[key];
            return isLarger ? (order === "asc" ? 1 : -1) : order === "asc" ? -1 : 1;
        });
    }

    static generate<T>(length: number, generator: T | ((index: number) => T)): T[] {
        const result: T[] = [];
        for (let i = 0; i < length; i++) {
            result.push(typeof generator === "function" ? (generator as (index: number) => T)(i) : generator);
        }
        return result;
    }

    static mapToObject<T, V>(array: T[], mapperCallback: (item: T, index: number) => [string, V]): {[key: string]: V} {
        const result: {[key: string]: V} = {};
        array.forEach((item, index) => {
            const mappedKV = mapperCallback(item, index);
            result[mappedKV[0]] = mappedKV[1];
        });
        return result;
    }

    static mapFromStringEnum<EnumType extends {[P in keyof EnumType]: EnumType[P] & string}>(enumMap: EnumType): string[] {
        const result: string[] = [];
        Object.values(enumMap).forEach(key => result.push(key as string));
        return result;
    }

    static hasIntersection<T>(a: T[], b: T[]): boolean {
        return a.some(_ => b.includes(_));
    }
}
