export class IDGenerator {
    private static initialValue = new Date().getTime();

    /**
     * Generate a unique ID within application scope
     */
    static next(): string {
        return (IDGenerator.initialValue++).toString(16);
    }
}
