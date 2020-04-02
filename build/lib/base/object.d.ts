export declare function enumToArray<EnumType extends {
    [P in keyof EnumType]: EnumType[P] & string;
}>(enumMap: EnumType): string[];
export declare function eachObjectKey<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): void;
export declare function eachObjectValue<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): Record<keyof T, V>;
export declare function objectToArray<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): V[];
export declare function isEmpty(object: object): boolean;
/**
 * Not applicable to object with function fields
 */
export declare function deepClone<T>(object: T): T;
