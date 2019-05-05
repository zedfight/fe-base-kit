var TextUtil = /** @class */ (function () {
    function TextUtil() {
    }
    TextUtil.truncate = function (text, maxLength, suffix) {
        if (suffix === void 0) { suffix = "…"; }
        return text.length > maxLength ? text.substr(0, maxLength) + suffix : text;
    };
    TextUtil.formatWithComma = function (value) {
        return value !== null && !isNaN(value) ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-";
    };
    TextUtil.interpolate = function (text) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var result = text;
        for (var i = 0; i < parameters.length; i++) {
            result = result.replace("{" + (i + 1) + "}", parameters[i]);
        }
        return result;
    };
    return TextUtil;
}());
export { TextUtil };
//# sourceMappingURL=TextUtil.js.map