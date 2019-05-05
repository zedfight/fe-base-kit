export class ObjectUtil {
    static mapToObject<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): Record<keyof T, V> {
        const newObject = {};
        Object.keys(object).forEach((key, index) => {
            const mappedValue = mapperCallback(key as keyof T & string, object[key], index);
            newObject[key] = mappedValue;
        });

        return newObject as Record<keyof T, V>;
    }

    static mapToArray<T extends object, V>(object: T, mapperCallback: (key: keyof T & string, value: T[keyof T], index: number) => V): V[] {
        const result: V[] = [];
        Object.keys(object).forEach((key, index) => result.push(mapperCallback(key as keyof T & string, object[key], index)));
        return result;
    }

    static isEmpty(object: object): boolean {
        return Object.keys(object).length === 0;
    }

    /**
     * Not applicable to object with function fields
     */
    static deepClone<T extends object>(object: T): T {
        return JSON.parse(JSON.stringify(object));
    }
}
