var DateDOMUtil = /** @class */ (function () {
    function DateDOMUtil() {
    }
    DateDOMUtil.format = function (date, type) {
        if (type === void 0) { type = "with-time"; }
        // Time Part is included as span.time-part, for sake of CSS customization
        if (date !== null) {
            var datePart = date.getFullYear() +
                "-" +
                (date.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                date
                    .getDate()
                    .toString()
                    .padStart(2, "0");
            if (type === "with-time") {
                return "{datePart} {date.toTimeString().split(\" \")[0]}";
            }
            return datePart;
        }
        return "-";
    };
    return DateDOMUtil;
}());
export { DateDOMUtil };
//# sourceMappingURL=DateDOMKit.js.map