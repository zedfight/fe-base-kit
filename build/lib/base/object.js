export function enumToArray(enumMap) {
    var result = [];
    Object.values(enumMap).forEach(function (key) { return result.push(key); });
    return result;
}
// TODO:
export function eachObjectKey(object, mapperCallback) { }
export function eachObjectValue(object, mapperCallback) {
    var newObject = {};
    Object.keys(object).forEach(function (key, index) {
        var mappedValue = mapperCallback(key, object[key], index);
        newObject[key] = mappedValue;
    });
    return newObject;
}
export function objectToArray(object, mapperCallback) {
    var result = [];
    Object.keys(object).forEach(function (key, index) { return result.push(mapperCallback(key, object[key], index)); });
    return result;
}
export function isEmpty(object) {
    return Object.keys(object).length === 0;
}
/**
 * Not applicable to object with function fields
 */
export function deepClone(object) {
    return JSON.parse(JSON.stringify(object));
}
//# sourceMappingURL=object.js.map