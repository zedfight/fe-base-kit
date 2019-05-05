var BrowserUserAgentUtil = /** @class */ (function () {
    function BrowserUserAgentUtil() {
    }
    BrowserUserAgentUtil.isMobile = function (userAgent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    BrowserUserAgentUtil.isIos = function (userAgent) {
        return /iPhone|iPad|iPod/i.test(userAgent);
    };
    BrowserUserAgentUtil.isAndroid = function (userAgent) {
        return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    return BrowserUserAgentUtil;
}());
export { BrowserUserAgentUtil };
//# sourceMappingURL=BrowserUserAgentUtil.js.map