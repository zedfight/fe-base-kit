import {UserAgentKit} from "../../src/dom/UserAgentKit";

// Ref: http://www.networkinghowtos.com/howto/common-user-agent-list/

test("Is Mobile", () => {
    expect(UserAgentKit.isMobile("Android")).toBeTruthy();
    expect(UserAgentKit.isMobile("iPhone")).toBeTruthy();
});

test("Is Ios", () => {
    expect(UserAgentKit.isIos("Android")).toBeFalsy();
    expect(UserAgentKit.isIos("iPhone")).toBeTruthy();
});

test("Is Android", () => {
    expect(UserAgentKit.isAndroid("iPhone")).toBeFalsy();
    expect(UserAgentKit.isAndroid("Android")).toBeTruthy();
});
