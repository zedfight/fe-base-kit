var StorageUtil = /** @class */ (function () {
    function StorageUtil() {
    }
    StorageUtil.set = function (key, data) {
        if (data !== null) {
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            localStorage.removeItem(key);
        }
    };
    StorageUtil.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        try {
            var data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        }
        catch (e) {
            return defaultValue; // In case fail to parse
        }
    };
    StorageUtil.clear = function () {
        localStorage.clear();
    };
    return StorageUtil;
}());
export { StorageUtil };
//# sourceMappingURL=StorageUtil.js.map