export declare class StorageUtil {
    static set<T>(key: string, data: T | null): void;
    static get<T>(key: string, defaultValue?: T | null): T | null;
    static clear(): void;
}
