export function enumToArray<EnumType extends {[P in keyof EnumType]: EnumType[P] & string}>(enumMap: EnumType): string[] {
    const result: string[] = [];
    Object.values(enumMap).forEach(key => result.push(key as string));
    return result;
}

// TODO:
export function eachObjectKey<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V) {}

export function eachObjectValue<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): Record<keyof T, V> {
    const newObject = {};
    Object.keys(object).forEach((key, index) => {
        const mappedValue = mapperCallback(key as keyof T & string, object[key], index);
        newObject[key] = mappedValue;
    });

    return newObject as Record<keyof T, V>;
}

export function objectToArray<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): V[] {
    const result: V[] = [];
    Object.keys(object).forEach((key, index) => result.push(mapperCallback(key as keyof T & string, object[key], index)));
    return result;
}

export function isEmpty(object: object): boolean {
    return Object.keys(object).length === 0;
}

/**
 * Not applicable to object with function fields
 */
export function deepClone<T>(object: T): T {
    return JSON.parse(JSON.stringify(object));
}
