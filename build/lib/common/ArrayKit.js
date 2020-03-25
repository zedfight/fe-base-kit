var ArrayKit = /** @class */ (function () {
    function ArrayKit() {
    }
    ArrayKit.sum = function (numbers) {
        return numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
    };
    ArrayKit.sumByKey = function (array, key) {
        var sum = 0;
        array.forEach(function (_) {
            if (_[key]) {
                sum = sum + parseFloat(_[key].toString());
            }
        });
        return sum;
    };
    ArrayKit.sortByKey = function (array, key, order) {
        return array.sort(function (a, b) {
            var isLarger = a[key] > b[key];
            return isLarger ? (order === "asc" ? 1 : -1) : order === "asc" ? -1 : 1;
        });
    };
    ArrayKit.generate = function (length, generator) {
        var result = [];
        for (var i = 0; i < length; i++) {
            result.push(typeof generator === "function" ? generator(i) : generator);
        }
        return result;
    };
    ArrayKit.mapToObject = function (array, mapperCallback) {
        var result = {};
        array.forEach(function (item, index) {
            var mappedKV = mapperCallback(item, index);
            result[mappedKV[0]] = mappedKV[1];
        });
        return result;
    };
    ArrayKit.mapFromStringEnum = function (enumMap) {
        var result = [];
        Object.values(enumMap).forEach(function (key) { return result.push(key); });
        return result;
    };
    ArrayKit.hasIntersection = function (a, b) {
        return a.some(function (_) { return b.includes(_); });
    };
    return ArrayKit;
}());
export { ArrayKit };
//# sourceMappingURL=ArrayKit.js.map