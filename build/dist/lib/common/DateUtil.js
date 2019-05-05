var DateUtil = /** @class */ (function () {
    function DateUtil() {
    }
    DateUtil.daysBeforeToday = function (days, type) {
        if (days < 0) {
            throw new Error("Days must be >=0, or use DateUtil.daysAfterToday");
        }
        return DateUtil.getDateRelativeToToday(-days, type);
    };
    DateUtil.daysAfterToday = function (days, type) {
        if (days < 0) {
            throw new Error("Days must be >=0, or use DateUtil.daysBeforeToday");
        }
        return DateUtil.getDateRelativeToToday(days, type);
    };
    DateUtil.today = function (type) {
        return DateUtil.getDateRelativeToToday(0, type);
    };
    /**
     * @param text should match YYYY-MM-DD format exactly
     * Otherwise, it returns NULL
     */
    DateUtil.parse = function (text) {
        var date = new Date(text);
        return isNaN(date.getTime()) ? null : date;
    };
    DateUtil.format = function (date, type) {
        if (type === void 0) { type = "default"; }
        if (date !== null) {
            var year = date.getFullYear();
            var monthAndDate = (date.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                date
                    .getDate()
                    .toString()
                    .padStart(2, "0");
            switch (type) {
                case "default":
                    return year + "-" + monthAndDate;
                case "with-time":
                    return year + "-" + monthAndDate + " " + date.toTimeString().split(" ")[0];
                case "no-year":
                    return monthAndDate;
                case "no-year-with-time":
                    return monthAndDate + " " + date.toTimeString().split(" ")[0];
            }
        }
        return "-";
    };
    DateUtil.getDateRelativeToToday = function (diffDays, type) {
        var today = new Date();
        return type === "day-end" ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 23, 59, 59) : new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 0, 0, 0);
    };
    return DateUtil;
}());
export { DateUtil };
//# sourceMappingURL=DateUtil.js.map