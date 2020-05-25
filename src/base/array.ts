import {KeysOfType, FunctionType} from "../type";

export function sum(numbers: number[]): number {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export function sumByKey<T>(array: T[], key: KeysOfType<T, number>): number {
    let sum = 0;
    array.forEach(_ => {
        if (_[key]) {
            sum = sum + parseFloat(_[key as number].toString());
        }
    });
    return sum;
}

export function sortByKey<T>(array: T[], key: KeysOfType<T, number>, order: "asc" | "desc"): T[] {
    return array.sort((a, b) => {
        const isLarger = a[key] > b[key];
        return isLarger ? (order === "asc" ? 1 : -1) : order === "asc" ? -1 : 1;
    });
}

export function fillArray<T>(length: number, generator: T | FunctionType<number[], T>): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
        result.push(typeof generator === "function" ? (generator as (index: number) => T)(i) : generator);
    }
    return result;
}

// TODO
export function eachArrayByKey<T, V>(array: T[], mapperCallback: (item: T, index: number) => [string, V]) {}

export function eachArray<T, V>(array: T[], mapperCallback: (item: T, index: number) => [string, V]): {[key: string]: V} {
    const result: {[key: string]: V} = {};
    array.forEach((item, index) => {
        const mappedKV = mapperCallback(item, index);
        result[mappedKV[0]] = mappedKV[1];
    });
    return result;
}

export function hasIntersection<T>(a: T[], b: T[]): boolean {
    return a.some(_ => b.includes(_));
}

export function swapArray<T>(array: T[], a: number, b: number): T[] {
    if (array.length < a || array.length < b) {
        return array;
    } else {
        const result = [...array];
        result[a] = result.splice(b, 1, result[a])[0];
        return result;
    }
}

export function diffArray<T>(a: T[], b: T[]): T[] {
    return a.concat(b).filter(v => !a.includes(v) || !b.includes(v));
}

export function duplicate<T>(array: T[]): T[] {
    return Array.from(new Set(array));
}

// ref:https://blog.csdn.net/qq_31126175/article/details/81485884
