export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export declare type FunctionType<P, T> = (...arg: P extends Array<infer K> ? K[] : never) => T;
export declare type KeysOfType<T, ExpectedKeyType> = {
    [P in keyof T]: T[P] extends ExpectedKeyType ? P : never;
}[keyof T];
export declare type PickOptional<T> = Pick<T, {
    [K in keyof T]-?: {} extends {
        [P in K]: T[K];
    } ? K : never;
}[keyof T]>;
export interface Dictionary<T> {
    [index: string]: T;
}
export interface NumericDictionary<T> {
    [index: number]: T;
}
