import {daysBeforeToday, daysAfterToday, parseTime, today} from "../../src/base/date";

test("Days Before Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(daysBeforeToday(10, "day-start")).toEqual(new Date(year, month, day - 10, 0, 0, 0));
    expect(daysBeforeToday(10, "day-end")).toEqual(new Date(year, month, day - 10, 23, 59, 59));

    expect(() => daysBeforeToday(-10, "day-start")).toThrowError();
    expect(() => daysBeforeToday(-10, "day-end")).toThrowError();
});

test("Days After Today", () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    expect(daysAfterToday(10, "day-end")).toEqual(new Date(year, month, day + 10, 23, 59, 59));
    expect(daysAfterToday(10, "day-start")).toEqual(new Date(year, month, day + 10, 0, 0, 0));

    expect(() => daysAfterToday(-10, "day-start")).toThrowError();
    expect(() => daysAfterToday(-10, "day-end")).toThrowError();
});

test("Today", () => {
    const todayDate = new Date();
    const year = todayDate.getFullYear();
    const month = todayDate.getMonth();
    const day = todayDate.getDate();
    expect(today("day-end")).toEqual(new Date(year, month, day, 23, 59, 59));
    expect(today("day-start")).toEqual(new Date(year, month, day, 0, 0, 0));
});

test("Date parse", () => {
    expect(parseTime("")).toBe(null);
    expect(parseTime("2018-12-11")).toEqual(new Date("2018-12-11"));
    expect(parseTime("2018-2-6")).toEqual(new Date(Date.UTC(2018, 1, 6, -8, 0, 0)));
    expect(parseTime("2018/12/11")).toEqual(new Date(Date.UTC(2018, 11, 11, -8, 0, 0)));
});
