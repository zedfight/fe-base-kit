var ObjectKit = /** @class */ (function () {
    function ObjectKit() {
    }
    ObjectKit.mapToObject = function (object, mapperCallback) {
        var newObject = {};
        Object.keys(object).forEach(function (key, index) {
            var mappedValue = mapperCallback(key, object[key], index);
            newObject[key] = mappedValue;
        });
        return newObject;
    };
    ObjectKit.mapToArray = function (object, mapperCallback) {
        var result = [];
        Object.keys(object).forEach(function (key, index) { return result.push(mapperCallback(key, object[key], index)); });
        return result;
    };
    ObjectKit.isEmpty = function (object) {
        return Object.keys(object).length === 0;
    };
    /**
     * Not applicable to object with function fields
     */
    ObjectKit.deepClone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    return ObjectKit;
}());
export { ObjectKit };
//# sourceMappingURL=ObjectKit.js.map