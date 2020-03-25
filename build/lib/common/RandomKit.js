var RandomKit = /** @class */ (function () {
    function RandomKit() {
    }
    RandomKit.fromArray = function (array) {
        var length = array.length;
        return length > 0 ? array[Math.floor(Math.random() * length)] : null;
    };
    RandomKit.integerBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return RandomKit;
}());
export { RandomKit };
//# sourceMappingURL=RandomKit.js.map