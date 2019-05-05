export class BrowserUserAgentUtil {
    static isMobile(userAgent: string): boolean {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }

    static isIos(userAgent: string): boolean {
        return /iPhone|iPad|iPod/i.test(userAgent);
    }

    static isAndroid(userAgent: string): boolean {
        return /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    }
}
