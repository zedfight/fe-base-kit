var ObjectUtil = /** @class */ (function () {
    function ObjectUtil() {
    }
    ObjectUtil.mapToObject = function (object, mapperCallback) {
        var newObject = {};
        Object.keys(object).forEach(function (key, index) {
            var mappedValue = mapperCallback(key, object[key], index);
            newObject[key] = mappedValue;
        });
        return newObject;
    };
    ObjectUtil.mapToArray = function (object, mapperCallback) {
        var result = [];
        Object.keys(object).forEach(function (key, index) { return result.push(mapperCallback(key, object[key], index)); });
        return result;
    };
    ObjectUtil.isEmpty = function (object) {
        return Object.keys(object).length === 0;
    };
    /**
     * Not applicable to object with function fields
     */
    ObjectUtil.deepClone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    return ObjectUtil;
}());
export { ObjectUtil };
//# sourceMappingURL=ObjectUtil.js.map