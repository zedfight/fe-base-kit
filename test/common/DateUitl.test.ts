import {DateUtil} from "../../src/common/DateUtil";

test("Days Before Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(DateUtil.daysBeforeToday(10, "day-start")).toEqual(new Date(year, month, day - 10, 0, 0, 0));
    expect(DateUtil.daysBeforeToday(10, "day-end")).toEqual(new Date(year, month, day - 10, 23, 59, 59));

    expect(() => DateUtil.daysBeforeToday(-10, "day-start")).toThrowError();
    expect(() => DateUtil.daysBeforeToday(-10, "day-end")).toThrowError();
});

test("Days After Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(DateUtil.daysAfterToday(10, "day-end")).toEqual(new Date(year, month, day + 10, 23, 59, 59));
    expect(DateUtil.daysAfterToday(10, "day-start")).toEqual(new Date(year, month, day + 10, 0, 0, 0));

    expect(() => DateUtil.daysAfterToday(-10, "day-start")).toThrowError();
    expect(() => DateUtil.daysAfterToday(-10, "day-end")).toThrowError();
});

test("Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    expect(DateUtil.today("day-end")).toEqual(new Date(year, month, day, 23, 59, 59));
    expect(DateUtil.today("day-start")).toEqual(new Date(year, month, day, 0, 0, 0));
});

test("Date parse", () => {
    expect(DateUtil.parse("")).toBe(null);
    expect(DateUtil.parse("2018-12-11")).toEqual(new Date("2018-12-11"));
    expect(DateUtil.parse("2018-2-6")).toEqual(new Date(Date.UTC(2018, 1, 6, -8, 0, 0)));
    expect(DateUtil.parse("2018/12/11")).toEqual(new Date(Date.UTC(2018, 11, 11, -8, 0, 0)));
});

test("Date Format", () => {
    expect(DateUtil.format(null)).toBe("-");
    expect(DateUtil.format(null, "with-time")).toBe("-");
    expect(DateUtil.format(null, "no-year")).toBe("-");
    expect(DateUtil.format(null, "no-year-with-time")).toBe("-");

    const date1 = new Date("2018-02-12 12:12:12");
    expect(DateUtil.format(date1)).toBe("2018-02-12");
    expect(DateUtil.format(date1, "with-time")).toBe("2018-02-12 12:12:12");
    expect(DateUtil.format(date1, "no-year")).toBe("02-12");
    expect(DateUtil.format(date1, "no-year-with-time")).toBe("02-12 12:12:12");

    const date2 = new Date("2018-2-2 1:1:1");
    expect(DateUtil.format(date2)).toBe("2018-02-02");
    expect(DateUtil.format(date2, "with-time")).toBe("2018-02-02 01:01:01");
    expect(DateUtil.format(date2, "no-year")).toBe("02-02");
    expect(DateUtil.format(date2, "no-year-with-time")).toBe("02-02 01:01:01");
});
