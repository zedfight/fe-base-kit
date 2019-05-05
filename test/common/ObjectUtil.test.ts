import {ObjectUtil} from "../../src/common/ObjectUtil";

test("Map To Object", () => {
    expect(ObjectUtil.mapToObject({a: 1, b: 2, c: 3}, (key, item, index) => index)).toEqual({a: 0, b: 1, c: 2});
    expect(ObjectUtil.mapToObject({a: "a", b: 2, c: 3}, (key, item) => item)).toEqual({a: "a", b: 2, c: 3});
    expect(ObjectUtil.mapToObject({a: 1, b: 2, c: 3}, key => key)).toEqual({a: "a", b: "b", c: "c"});
});

test("Map To Array", () => {
    const object = {a: "a", b: "b", 1: "c", 2: "d"};
    expect(ObjectUtil.mapToArray(object, key => key)).toEqual(["1", "2", "a", "b"]);
    expect(ObjectUtil.mapToArray(object, (key, item) => item)).toEqual(["c", "d", "a", "b"]);
    expect(ObjectUtil.mapToArray(object, (key, item, index) => index)).toEqual([0, 1, 2, 3]);
});

test("Check Is Empty", () => {
    expect(ObjectUtil.isEmpty({})).toBe(true);
    expect(ObjectUtil.isEmpty({a: 1})).toBe(false);
});

test("Deep Clone", () => {
    const object = {
        a: {
            b: {
                c: 1,
            },
        },
    };
    expect(ObjectUtil.deepClone(object) === object).toBe(false);
    expect(ObjectUtil.deepClone(object).a === object.a).toBe(false);
    expect(ObjectUtil.deepClone(object).a.b === object.a.b).toBe(false);
    expect(ObjectUtil.deepClone(object).a.b.c === object.a.b.c).toBe(true);
});
