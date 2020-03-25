export declare class ObjectKit {
    static mapToObject<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): Record<keyof T, V>;
    static mapToArray<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): V[];
    static isEmpty(object: object): boolean;
    /**
     * Not applicable to object with function fields
     */
    static deepClone<T extends object>(object: T): T;
}
