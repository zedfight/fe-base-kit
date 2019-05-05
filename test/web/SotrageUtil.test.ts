import {StorageUtil} from "../../src/web/StorageUtil";

describe("Storage Set Then Get", () => {
    const data = {a: 1, b: "b"};
    beforeAll(() => {
        StorageUtil.set("key1", "storage");
        StorageUtil.set("key2", data);
        StorageUtil.set("key3", 666);
        StorageUtil.set("key4", () => {
            console.info("aa");
        });
    });

    test("Get Data", () => {
        expect(StorageUtil.get("key1")).toBe("storage");
        expect(StorageUtil.get("key2")).toEqual(data);

        expect(StorageUtil.get("key4")).toEqual(null);
        expect(StorageUtil.get("key5", "hello")).toBe("hello");
    });

    test("Set Null", () => {
        StorageUtil.set("key1", null);
        expect(StorageUtil.get("key1")).toEqual(null);
    });

    afterAll(() => {
        StorageUtil.clear();
        expect(StorageUtil.get("key1")).toEqual(null);
        expect(StorageUtil.get("key2")).toEqual(null);
        expect(StorageUtil.get("key3")).toEqual(null);
    });
});
