export function sum(numbers) {
    return numbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue; }, 0);
}
export function sumByKey(array, key) {
    var sum = 0;
    array.forEach(function (_) {
        if (_[key]) {
            sum = sum + parseFloat(_[key].toString());
        }
    });
    return sum;
}
export function sortByKey(array, key, order) {
    return array.sort(function (a, b) {
        var isLarger = a[key] > b[key];
        return isLarger ? (order === "asc" ? 1 : -1) : order === "asc" ? -1 : 1;
    });
}
export function fillArray(length, generator) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(typeof generator === "function" ? generator(i) : generator);
    }
    return result;
}
// TODO
export function eachArrayByKey(array, mapperCallback) { }
export function eachArray(array, mapperCallback) {
    var result = {};
    array.forEach(function (item, index) {
        var mappedKV = mapperCallback(item, index);
        result[mappedKV[0]] = mappedKV[1];
    });
    return result;
}
export function hasIntersection(a, b) {
    return a.some(function (_) { return b.includes(_); });
}
//# sourceMappingURL=array.js.map