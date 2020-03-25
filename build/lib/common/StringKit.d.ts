export declare class TextKit {
    static truncate(text: string, maxLength: number, suffix?: string): string;
    static formatWithComma(value: number | null): string;
    static interpolate(text: string, ...parameters: string[]): string;
}
