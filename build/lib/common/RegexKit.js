/* Attention:
    1. "M123M321".match(/(?<=M)\d+/g) or "M123M321".match(new RegExp('(?<=M)\\d+', 'g')) are supported in Google Chrome, other browsers are not supported(eg: Safari). Ref: https://github.com/atom/find-and-replace/issues/814
    2. Using `new RegExp`
*/
var RegexKit = /** @class */ (function () {
    function RegexKit() {
    }
    RegexKit.matchDigitalAfterKey = function (content, key, ifDistinguishCaseSensitive) {
        if (ifDistinguishCaseSensitive === void 0) { ifDistinguishCaseSensitive = true; }
        var matchResult = content.match(new RegExp("(" + key + ">?)\\d+", "g" + (ifDistinguishCaseSensitive ? "" : "i")));
        if (matchResult) {
            return matchResult.map(function (_) { return _.replace(new RegExp("^" + key), ""); });
        }
        return null;
    };
    return RegexKit;
}());
export { RegexKit };
//# sourceMappingURL=RegexKit.js.map