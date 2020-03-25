import {StorageKit} from "../../src/dom/StorageKit";

describe("Storage Set Then Get", () => {
    const data = {a: 1, b: "b"};
    beforeAll(() => {
        StorageKit.set("key1", "storage");
        StorageKit.set("key2", data);
        StorageKit.set("key3", 666);
        StorageKit.set("key4", () => {
            console.info("aa");
        });
    });

    test("Get Data", () => {
        expect(StorageKit.get("key1")).toBe("storage");
        expect(StorageKit.get("key2")).toEqual(data);

        expect(StorageKit.get("key4")).toEqual(null);
        expect(StorageKit.get("key5", "hello")).toBe("hello");
    });

    test("Set Null", () => {
        StorageKit.set("key1", null);
        expect(StorageKit.get("key1")).toEqual(null);
    });

    afterAll(() => {
        StorageKit.clear();
        expect(StorageKit.get("key1")).toEqual(null);
        expect(StorageKit.get("key2")).toEqual(null);
        expect(StorageKit.get("key3")).toEqual(null);
    });
});
