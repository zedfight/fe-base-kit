import {RandomUtil} from "../../src/common/RandomUtil";

test("From Array", () => {
    expect(RandomUtil.fromArray([])).toEqual(null);

    const array = [1, 2, "a", "b"];
    expect(array.includes(RandomUtil.fromArray(array)!)).toBe(true);
});

test("Between Min And Max", () => {
    expect([1, 2, 3, 4, 5].includes(RandomUtil.integerBetween(1, 5))).toBe(true);
});
