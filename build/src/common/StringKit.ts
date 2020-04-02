import {Dictionary} from "../type";

export class TextKit {
    static truncate(text: string, maxLength: number, suffix: string = "…") {
        return text.length > maxLength ? text.substr(0, maxLength) + suffix : text;
    }

    static formatWithComma(value: number | null): string {
        return value !== null && !isNaN(value) ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "-";
    }

    static interpolate(text: string, ...parameters: string[]): string {
        let result = text;
        for (let i = 0; i < parameters.length; i++) {
            result = result.replace(`{${i + 1}}`, parameters[i]);
        }
        return result;
    }

    static getCookies(cookieString: string): Dictionary<string> {
        if (!cookieString) {
            return {};
        }
        const cookieList = cookieString.split(";");
        const cookies = {};
        cookieList.forEach(_ => {
            const [key, value] = _.split("=");
            cookies[key.trim()] = value.trim();
        });
        return cookies;
    }
}
