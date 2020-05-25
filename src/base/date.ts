type DayStartOrEnd = "day-end" | "day-start";

function getDateRelativeToToday(diffDays: number, type: DayStartOrEnd): Date {
    const today = new Date();
    return type === "day-end" ? new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 23, 59, 59) : new Date(today.getFullYear(), today.getMonth(), today.getDate() + diffDays, 0, 0, 0);
}

export function daysBeforeToday(days: number, type: DayStartOrEnd): Date {
    if (days < 0) {
        throw new Error("Days must be >=0, or use DateUtil.daysAfterToday");
    }
    return getDateRelativeToToday(-days, type);
}

export function daysAfterToday(days: number, type: DayStartOrEnd): Date {
    if (days < 0) {
        throw new Error("Days must be >=0, or use DateUtil.daysBeforeToday");
    }
    return getDateRelativeToToday(days, type);
}

export function today(type: DayStartOrEnd): Date {
    return getDateRelativeToToday(0, type);
}

export function parseTime(date: Date | string | number): number | null {
    switch (typeof date) {
        case "object":
            date instanceof Date ? date.getTime() : null;
        case "string":
            const nextDate = new Date(date);
            return isNaN(nextDate.getTime()) ? null : nextDate.getTime();
        case "number":
            return date as number;
        default:
            return null;
    }
}

interface FormatDateEffectResult {
    segmentation?: string;
    showYear?: boolean;
    showTime?: boolean;
    showTimeZone?: boolean;
}

export function formatDate(date: number, effectResult?: (year: string, month: string, day: string, time: string, timeZone: string, date: number) => string | FormatDateEffectResult): string | null {
    const nextDate = new Date(date);
    if (!isNaN(nextDate.getTime())) {
        const year = nextDate.getFullYear().toString();
        const month = (nextDate.getMonth() + 1).toString().padStart(2, "0");
        const day = nextDate
            .getDate()
            .toString()
            .padStart(2, "0");
        const timeArray = nextDate.toTimeString().split(" ");
        const time = timeArray[0];
        const timeZone = timeArray[1];

        if (typeof effectResult === "function") {
            return effectResult(year, month, day, time, timeZone, date) as string;
        } else {
            const {segmentation = "-", showTimeZone = false, showYear = true, showTime = true} = effectResult || ({} as FormatDateEffectResult);
            return `${showYear ? year + segmentation : ""}${month}${segmentation}${day}  ${showTime ? time : ""}${showTimeZone ? timeZone : ""}`;
        }
    }

    return null;
}
