import {ObjectKit} from "../../src/common/ObjectKit";

test("Map To Object", () => {
    expect(ObjectKit.mapToObject({a: 1, b: 2, c: 3}, (key, item, index) => index)).toEqual({a: 0, b: 1, c: 2});
    expect(ObjectKit.mapToObject({a: "a", b: 2, c: 3}, (key, item) => item)).toEqual({a: "a", b: 2, c: 3});
    expect(ObjectKit.mapToObject({a: 1, b: 2, c: 3}, key => key)).toEqual({a: "a", b: "b", c: "c"});
});

test("Map To Array", () => {
    const object = {a: "a", b: "b", 1: "c", 2: "d"};
    expect(ObjectKit.mapToArray(object, key => key)).toEqual(["1", "2", "a", "b"]);
    expect(ObjectKit.mapToArray(object, (key, item) => item)).toEqual(["c", "d", "a", "b"]);
    expect(ObjectKit.mapToArray(object, (key, item, index) => index)).toEqual([0, 1, 2, 3]);
});

test("Check Is Empty", () => {
    expect(ObjectKit.isEmpty({})).toBe(true);
    expect(ObjectKit.isEmpty({a: 1})).toBe(false);
});

test("Deep Clone", () => {
    const object = {
        a: {
            b: {
                c: 1,
            },
        },
    };
    expect(ObjectKit.deepClone(object) === object).toBe(false);
    expect(ObjectKit.deepClone(object).a === object.a).toBe(false);
    expect(ObjectKit.deepClone(object).a.b === object.a.b).toBe(false);
    expect(ObjectKit.deepClone(object).a.b.c === object.a.b.c).toBe(true);
});
