var DateKit = /** @class */ (function () {
    function DateKit() {
    }
    DateKit.daysBeforeToday = function (days, type) {
        if (days < 0) {
            throw new Error("Days must be >=0, or use DateUtil.daysAfterToday");
        }
        return DateKit.getDateRelativeToToday(-days, type);
    };
    DateKit.daysAfterToday = function (days, type) {
        if (days < 0) {
            throw new Error("Days must be >=0, or use DateUtil.daysBeforeToday");
        }
        return DateKit.getDateRelativeToToday(days, type);
    };
    DateKit.today = function (type) {
        return DateKit.getDateRelativeToToday(0, type);
    };
    /**
     * @param text should match YYYY-MM-DD format exactly
     * Otherwise, it returns NULL
     */
    DateKit.parse = function (text) {
        var date = new Date(text);
        return isNaN(date.getTime()) ? null : date;
    };
    DateKit.format = function (date, type) {
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
    DateKit.getDateRelativeToToday = function (diffDays, type) {
        var today = new Date();
        return type === "day-end" ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 23, 59, 59) : new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 0, 0, 0);
    };
    return DateKit;
}());
export { DateKit };
//# sourceMappingURL=DateKit.js.map