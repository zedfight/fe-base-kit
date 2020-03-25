export class RandomKit {
    static fromArray<T>(array: T[]): T | null {
        const length = array.length;
        return length > 0 ? array[Math.floor(Math.random() * length)] : null;
    }

    static integerBetween(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
