import { __read } from "tslib";
var TextKit = /** @class */ (function () {
    function TextKit() {
    }
    TextKit.truncate = function (text, maxLength, suffix) {
        if (suffix === void 0) { suffix = "…"; }
        return text.length > maxLength ? text.substr(0, maxLength) + suffix : text;
    };
    TextKit.formatWithComma = function (value) {
        return value !== null && !isNaN(value) ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-";
    };
    TextKit.interpolate = function (text) {
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
    TextKit.getCookies = function (cookieString) {
        if (!cookieString) {
            return {};
        }
        var cookieList = cookieString.split(";");
        var cookies = {};
        cookieList.forEach(function (_) {
            var _a = __read(_.split("="), 2), key = _a[0], value = _a[1];
            cookies[key.trim()] = value.trim();
        });
        return cookies;
    };
    return TextKit;
}());
export { TextKit };
//# sourceMappingURL=StringKit.js.map