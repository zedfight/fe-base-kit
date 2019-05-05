type DayStartOrEnd = "day-end" | "day-start";

export class DateUtil {
    static daysBeforeToday(days: number, type: DayStartOrEnd): Date {
        if (days < 0) {
            throw new Error("Days must be >=0, or use DateUtil.daysAfterToday");
        }
        return DateUtil.getDateRelativeToToday(-days, type);
    }

    static daysAfterToday(days: number, type: DayStartOrEnd): Date {
        if (days < 0) {
            throw new Error("Days must be >=0, or use DateUtil.daysBeforeToday");
        }
        return DateUtil.getDateRelativeToToday(days, type);
    }

    static today(type: DayStartOrEnd): Date {
        return DateUtil.getDateRelativeToToday(0, type);
    }

    /**
     * @param text should match YYYY-MM-DD format exactly
     * Otherwise, it returns NULL
     */
    static parse(text: string): Date | null {
        const date = new Date(text);
        return isNaN(date.getTime()) ? null : date;
    }

    static format(date: Date | null, type: "default" | "with-time" | "no-year" | "no-year-with-time" = "default"): string {
        if (date !== null) {
            const year = date.getFullYear();
            const monthAndDate =
                (date.getMonth() + 1).toString().padStart(2, "0") +
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
    }

    private static getDateRelativeToToday(diffDays: number, type: DayStartOrEnd): Date {
        const today = new Date();
        return type === "day-end" ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 23, 59, 59) : new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 0, 0, 0);
    }
}
