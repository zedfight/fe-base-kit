var UserAgentKit = /** @class */ (function () {
    function UserAgentKit() {
    }
    UserAgentKit.isMobile = function (userAgent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    UserAgentKit.isIos = function (userAgent) {
        return /iPhone|iPad|iPod/i.test(userAgent);
    };
    UserAgentKit.isAndroid = function (userAgent) {
        return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    };
    return UserAgentKit;
}());
export { UserAgentKit };
//# sourceMappingURL=UserAgentKit.js.map