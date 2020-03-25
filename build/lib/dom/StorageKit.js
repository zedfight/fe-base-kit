var StorageKit = /** @class */ (function () {
    function StorageKit() {
    }
    StorageKit.set = function (key, data) {
        if (data !== null) {
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            localStorage.removeItem(key);
        }
    };
    StorageKit.get = function (key, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        try {
            var data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        }
        catch (e) {
            return defaultValue; // In case fail to parse
        }
    };
    StorageKit.clear = function () {
        localStorage.clear();
    };
    return StorageKit;
}());
export { StorageKit };
//# sourceMappingURL=StorageKit.js.map