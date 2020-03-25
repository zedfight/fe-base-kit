import {TextKit} from "../../src/common/StringKit";

test("Truncate", () => {
    expect(TextKit.truncate("waiting", 4)).toBe("wait…");
    expect(TextKit.truncate("waiting", 10)).toBe("waiting");
    expect(TextKit.truncate("waiting", 4, "~~~")).toBe("wait~~~");
    expect(TextKit.truncate("waiting", 10, "~~~")).toBe("waiting");
});

test("Format With Comma", () => {
    expect(TextKit.formatWithComma(null)).toBe("-");
    expect(TextKit.formatWithComma(NaN)).toBe("-");
    expect(TextKit.formatWithComma(0)).toBe("0");
    expect(TextKit.formatWithComma(-145123)).toBe("-145,123");
    expect(TextKit.formatWithComma(-145123.123)).toBe("-145,123.123");
    expect(TextKit.formatWithComma(102312)).toBe("102,312");
    expect(TextKit.formatWithComma(102312.12345)).toBe("102,312.12,345");
});

test("Interpolate", () => {
    expect(TextKit.interpolate("{1} {2}", "hello", "world")).toBe("hello world");
    expect(TextKit.interpolate("{2} {3} {1}", "jest", "This", "is")).toBe("This is jest");
    expect(TextKit.interpolate("{3} {2} {1}", "a", "b", "c")).toBe("c b a");
});
