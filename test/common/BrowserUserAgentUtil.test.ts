import {BrowserUserAgentUtil} from "../../src/common/BrowserUserAgentUtil";

// Ref: http://www.networkinghowtos.com/howto/common-user-agent-list/

test("Is Mobile", () => {
    expect(BrowserUserAgentUtil.isMobile("Android")).toBeTruthy();
    expect(BrowserUserAgentUtil.isMobile("iPhone")).toBeTruthy();
});

test("Is Ios", () => {
    expect(BrowserUserAgentUtil.isIos("Android")).toBeFalsy();
    expect(BrowserUserAgentUtil.isIos("iPhone")).toBeTruthy();
});

test("Is Android", () => {
    expect(BrowserUserAgentUtil.isAndroid("iPhone")).toBeFalsy();
    expect(BrowserUserAgentUtil.isAndroid("Android")).toBeTruthy();
});
