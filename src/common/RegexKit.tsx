/* Attention:
    1. "M123M321".match(/(?<=M)\d+/g) or "M123M321".match(new RegExp('(?<=M)\\d+', 'g')) are supported in Google Chrome, other browsers are not supported(eg: Safari). Ref: https://github.com/atom/find-and-replace/issues/814
    2. Using `new RegExp`
*/

export class RegexKit {
    static matchDigitalAfterKey(content: string, key: string, ifDistinguishCaseSensitive: boolean = true): string[] | null {
        const matchResult = content.match(new RegExp(`(${key}>?)\\d+`, `g${ifDistinguishCaseSensitive ? "" : "i"}`));
        if (matchResult) {
            return matchResult.map(_ => _.replace(new RegExp(`^${key}`), ""));
        }
        return null;
    }
}
