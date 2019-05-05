import {TextUtil} from "../../src/common/TextUtil";

test("Truncate", () => {
    expect(TextUtil.truncate("waiting", 4)).toBe("wait…");
    expect(TextUtil.truncate("waiting", 10)).toBe("waiting");
    expect(TextUtil.truncate("waiting", 4, "~~~")).toBe("wait~~~");
    expect(TextUtil.truncate("waiting", 10, "~~~")).toBe("waiting");
});

test("Format With Comma", () => {
    expect(TextUtil.formatWithComma(null)).toBe("-");
    expect(TextUtil.formatWithComma(NaN)).toBe("-");
    expect(TextUtil.formatWithComma(0)).toBe("0");
    expect(TextUtil.formatWithComma(-145123)).toBe("-145,123");
    expect(TextUtil.formatWithComma(-145123.123)).toBe("-145,123.123");
    expect(TextUtil.formatWithComma(102312)).toBe("102,312");
    expect(TextUtil.formatWithComma(102312.12345)).toBe("102,312.12,345");
});

test("Interpolate", () => {
    expect(TextUtil.interpolate("{1} {2}", "hello", "world")).toBe("hello world");
    expect(TextUtil.interpolate("{2} {3} {1}", "jest", "This", "is")).toBe("This is jest");
    expect(TextUtil.interpolate("{3} {2} {1}", "a", "b", "c")).toBe("c b a");
});
