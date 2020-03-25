import {RandomKit} from "../../src/common/RandomKit";

test("From Array", () => {
    expect(RandomKit.fromArray([])).toEqual(null);

    const array = [1, 2, "a", "b"];
    expect(array.includes(RandomKit.fromArray(array)!)).toBe(true);
});

test("Between Min And Max", () => {
    expect([1, 2, 3, 4, 5].includes(RandomKit.integerBetween(1, 5))).toBe(true);
});
