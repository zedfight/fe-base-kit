import {DateKit} from "../../src/common/DateKit";

test("Days Before Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(DateKit.daysBeforeToday(10, "day-start")).toEqual(new Date(year, month, day - 10, 0, 0, 0));
    expect(DateKit.daysBeforeToday(10, "day-end")).toEqual(new Date(year, month, day - 10, 23, 59, 59));

    expect(() => DateKit.daysBeforeToday(-10, "day-start")).toThrowError();
    expect(() => DateKit.daysBeforeToday(-10, "day-end")).toThrowError();
});

test("Days After Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(DateKit.daysAfterToday(10, "day-end")).toEqual(new Date(year, month, day + 10, 23, 59, 59));
    expect(DateKit.daysAfterToday(10, "day-start")).toEqual(new Date(year, month, day + 10, 0, 0, 0));

    expect(() => DateKit.daysAfterToday(-10, "day-start")).toThrowError();
    expect(() => DateKit.daysAfterToday(-10, "day-end")).toThrowError();
});

test("Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    expect(DateKit.today("day-end")).toEqual(new Date(year, month, day, 23, 59, 59));
    expect(DateKit.today("day-start")).toEqual(new Date(year, month, day, 0, 0, 0));
});

test("Date parse", () => {
    expect(DateKit.parse("")).toBe(null);
    expect(DateKit.parse("2018-12-11")).toEqual(new Date("2018-12-11"));
    expect(DateKit.parse("2018-2-6")).toEqual(new Date(Date.UTC(2018, 1, 6, -8, 0, 0)));
    expect(DateKit.parse("2018/12/11")).toEqual(new Date(Date.UTC(2018, 11, 11, -8, 0, 0)));
});

test("Date Format", () => {
    expect(DateKit.format(null)).toBe("-");
    expect(DateKit.format(null, "with-time")).toBe("-");
    expect(DateKit.format(null, "no-year")).toBe("-");
    expect(DateKit.format(null, "no-year-with-time")).toBe("-");

    const date1 = new Date("2018-02-12 12:12:12");
    expect(DateKit.format(date1)).toBe("2018-02-12");
    expect(DateKit.format(date1, "with-time")).toBe("2018-02-12 12:12:12");
    expect(DateKit.format(date1, "no-year")).toBe("02-12");
    expect(DateKit.format(date1, "no-year-with-time")).toBe("02-12 12:12:12");

    const date2 = new Date("2018-2-2 1:1:1");
    expect(DateKit.format(date2)).toBe("2018-02-02");
    expect(DateKit.format(date2, "with-time")).toBe("2018-02-02 01:01:01");
    expect(DateKit.format(date2, "no-year")).toBe("02-02");
    expect(DateKit.format(date2, "no-year-with-time")).toBe("02-02 01:01:01");
});
