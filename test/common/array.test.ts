import {sum, sumByKey, sortByKey, fillArray, eachArray, hasIntersection} from "../../src/base/array";

test("Sum", () => {
    expect(sum([])).toBe(0);
    expect(sum([5])).toBe(5);
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, 1, 2, 0])).toBe(2);
    expect(sum([-1, 1, 2, 0, 10, 10])).toBe(22);
});

test("Sum By Key", () => {
    expect(sumByKey([] as any[], "whatever")).toBe(0);
    expect(sumByKey([{a: 10}], "a")).toBe(10);
    expect(sumByKey([{a: 10, b: ""}, {a: 22, b: ""}], "a")).toBe(32);
    expect(sumByKey([{a: 10, b: ""}, {b: ""}], "a")).toBe(10);
});

test("Sort By Key", () => {
    const array1 = [{a: "string1", b: 10}, {a: "string2", b: 20}, {a: "string3", b: 13}, {a: "string4", b: 18}];
    expect(sortByKey(array1, "b", "desc")).toEqual([{a: "string2", b: 20}, {a: "string4", b: 18}, {a: "string3", b: 13}, {a: "string1", b: 10}]);
    expect(sortByKey(array1, "b", "asc")[0]).toEqual({a: "string1", b: 10});

    const array2 = [{k: 10}, {k: 0}, {k: -5}, {k: 18}];
    expect(sortByKey(array2, "k", "asc")[0]).toEqual({k: -5});
});

test("Fill Array", () => {
    expect(fillArray(0, {})).toEqual([]);

    expect(fillArray(2, {})).toEqual([{}, {}]);

    const generate1 = {a: 1, b: 2};
    expect(fillArray(0, generate1)).toEqual([]);
    expect(fillArray(2, generate1)).toEqual([{a: 1, b: 2}, {a: 1, b: 2}]);

    const generate2 = (index: number) => ({a: index});
    expect(fillArray(0, generate2)).toEqual([]);
    expect(fillArray(2, generate2)).toEqual([{a: 0}, {a: 1}]);
});

test("Map Array", () => {
    expect(eachArray([], (item, index) => [index.toString(), item])).toEqual({});

    const array = [1, 2, "a", "b"];
    expect(eachArray(array, (item, index) => [index.toString(), item])).toEqual({0: 1, 1: 2, 2: "a", 3: "b"});
    expect(eachArray(array, (item, index) => [item.toString(), index])).toEqual({1: 0, 2: 1, a: 2, b: 3});
    expect(eachArray(array, (item, index) => [array[array.length - index - 1].toString(), item])).toEqual({b: 1, a: 2, 2: "a", 1: "b"});
    expect(eachArray(array, (item, index) => [item.toString(), {a: item}])).toEqual({1: {a: 1}, 2: {a: 2}, a: {a: "a"}, b: {a: "b"}});
});

test("Has Intersection", () => {
    expect(hasIntersection([1, 2], [2, 3])).toBe(true);
    expect(hasIntersection([], [2, 3])).toBe(false);
    expect(hasIntersection([1, 2], [])).toBe(false);
    expect(hasIntersection([{a: 1}], [{a: 1}])).toBe(false);
});
