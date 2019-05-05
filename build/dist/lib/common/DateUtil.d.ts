declare type DayStartOrEnd = "day-end" | "day-start";
export declare class DateUtil {
    static daysBeforeToday(days: number, type: DayStartOrEnd): Date;
    static daysAfterToday(days: number, type: DayStartOrEnd): Date;
    static today(type: DayStartOrEnd): Date;
    /**
     * @param text should match YYYY-MM-DD format exactly
     * Otherwise, it returns NULL
     */
    static parse(text: string): Date | null;
    static format(date: Date | null, type?: "default" | "with-time" | "no-year" | "no-year-with-time"): string;
    private static getDateRelativeToToday;
}
export {};
