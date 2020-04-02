import {enumToArray, eachObjectValue, objectToArray, isEmpty, deepClone} from "../../src/base/object";

test("Enum To Array", () => {
    enum Enum1 {}
    expect(enumToArray(Enum1)).toEqual([]);

    enum Enum2 {
        A = "A",
        B = "B",
        C = "C",
    }
    expect(enumToArray(Enum2)).toEqual([Enum2.A, Enum2.B, Enum2.C]);
});

test("Map Object Value", () => {
    expect(eachObjectValue({a: 1, b: 2, c: 3}, (key, item, index) => index)).toEqual({a: 0, b: 1, c: 2});
    expect(eachObjectValue({a: "a", b: 2, c: 3}, (key, item) => item)).toEqual({a: "a", b: 2, c: 3});
    expect(eachObjectValue({a: 1, b: 2, c: 3}, key => key)).toEqual({a: "a", b: "b", c: "c"});
});

test("Object To Array", () => {
    const object = {a: "a", b: "b", 1: "c", 2: "d"};
    expect(objectToArray(object, key => key)).toEqual(["1", "2", "a", "b"]);
    expect(objectToArray(object, (key, item) => item)).toEqual(["c", "d", "a", "b"]);
    expect(objectToArray(object, (key, item, index) => index)).toEqual([0, 1, 2, 3]);
});

test("Check Is Empty", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({a: 1})).toBe(false);
});

test("Deep Clone", () => {
    const object = {
        a: {
            b: {
                c: 1,
            },
        },
    };
    expect(deepClone(object) === object).toBe(false);
    expect(deepClone(object).a === object.a).toBe(false);
    expect(deepClone(object).a.b === object.a.b).toBe(false);
    expect(deepClone(object).a.b.c === object.a.b.c).toBe(true);
    expect(deepClone([1, 2, 3])[0] === 1).toBe(true);
});
