"use strict";
var DocumentKit = /** @class */ (function () {
    function DocumentKit() {
    }
    DocumentKit.copy = function (value, callback) {
        var target = document.createElement("input");
        target.style.opacity = "0";
        target.value = value;
        document.body.appendChild(target);
        target.select();
        document.execCommand("copy");
        target.remove();
        if (callback) {
            callback(value);
        }
    };
    return DocumentKit;
}());
//# sourceMappingURL=DocumentKit.js.map