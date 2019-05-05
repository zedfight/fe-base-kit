var RandomUtil = /** @class */ (function () {
    function RandomUtil() {
    }
    RandomUtil.fromArray = function (array) {
        var length = array.length;
        return length > 0 ? array[Math.floor(Math.random() * length)] : null;
    };
    RandomUtil.integerBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return RandomUtil;
}());
export { RandomUtil };
//# sourceMappingURL=RandomUtil.js.map