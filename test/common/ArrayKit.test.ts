import {ArrayKit} from "../../src/common/ArrayKit";

test("Sum", () => {
    expect(ArrayKit.sum([])).toBe(0);
    expect(ArrayKit.sum([5])).toBe(5);
    expect(ArrayKit.sum([1, 2, 3])).toBe(6);
    expect(ArrayKit.sum([-1, 1, 2, 0])).toBe(2);
    expect(ArrayKit.sum([-1, 1, 2, 0, 10, 10])).toBe(22);
});

test("Sum By Key", () => {
    expect(ArrayKit.sumByKey([] as any[], "whatever")).toBe(0);
    expect(ArrayKit.sumByKey([{a: 10}], "a")).toBe(10);
    expect(ArrayKit.sumByKey([{a: 10, b: ""}, {a: 22, b: ""}], "a")).toBe(32);
    expect(ArrayKit.sumByKey([{a: 10, b: ""}, {b: ""}], "a")).toBe(10);
});

test("Sort By Key", () => {
    const array1 = [{a: "string1", b: 10}, {a: "string2", b: 20}, {a: "string3", b: 13}, {a: "string4", b: 18}];
    expect(ArrayKit.sortByKey(array1, "b", "desc")).toEqual([{a: "string2", b: 20}, {a: "string4", b: 18}, {a: "string3", b: 13}, {a: "string1", b: 10}]);
    expect(ArrayKit.sortByKey(array1, "b", "asc")[0]).toEqual({a: "string1", b: 10});

    const array2 = [{k: 10}, {k: 0}, {k: -5}, {k: 18}];
    expect(ArrayKit.sortByKey(array2, "k", "asc")[0]).toEqual({k: -5});
});

test("Generate", () => {
    expect(ArrayKit.generate(0, {})).toEqual([]);

    expect(ArrayKit.generate(2, {})).toEqual([{}, {}]);

    const generate1 = {a: 1, b: 2};
    expect(ArrayKit.generate(0, generate1)).toEqual([]);
    expect(ArrayKit.generate(2, generate1)).toEqual([{a: 1, b: 2}, {a: 1, b: 2}]);

    const generate2 = (index: number) => ({a: index});
    expect(ArrayKit.generate(0, generate2)).toEqual([]);
    expect(ArrayKit.generate(2, generate2)).toEqual([{a: 0}, {a: 1}]);
});

test("Map To Object", () => {
    expect(ArrayKit.mapToObject([], (item, index) => [index.toString(), item])).toEqual({});

    const array = [1, 2, "a", "b"];
    expect(ArrayKit.mapToObject(array, (item, index) => [index.toString(), item])).toEqual({0: 1, 1: 2, 2: "a", 3: "b"});
    expect(ArrayKit.mapToObject(array, (item, index) => [item.toString(), index])).toEqual({1: 0, 2: 1, a: 2, b: 3});
    expect(ArrayKit.mapToObject(array, (item, index) => [array[array.length - index - 1].toString(), item])).toEqual({b: 1, a: 2, 2: "a", 1: "b"});
    expect(ArrayKit.mapToObject(array, (item, index) => [item.toString(), {a: item}])).toEqual({1: {a: 1}, 2: {a: 2}, a: {a: "a"}, b: {a: "b"}});
});

test("Map From String Enum", () => {
    enum Enum1 {}
    expect(ArrayKit.mapFromStringEnum(Enum1)).toEqual([]);

    enum Enum2 {
        A = "A",
        B = "B",
        C = "C",
    }
    expect(ArrayKit.mapFromStringEnum(Enum2)).toEqual([Enum2.A, Enum2.B, Enum2.C]);
});

test("Has Intersection", () => {
    expect(ArrayKit.hasIntersection([1, 2], [2, 3])).toBe(true);
    expect(ArrayKit.hasIntersection([], [2, 3])).toBe(false);
    expect(ArrayKit.hasIntersection([1, 2], [])).toBe(false);
    expect(ArrayKit.hasIntersection([{a: 1}], [{a: 1}])).toBe(false);
});
