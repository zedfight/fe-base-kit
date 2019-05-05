var IDGenerator = /** @class */ (function () {
    function IDGenerator() {
    }
    /**
     * Generate a unique ID within application scope
     */
    IDGenerator.next = function () {
        return (IDGenerator.initialValue++).toString(16);
    };
    IDGenerator.initialValue = new Date().getTime();
    return IDGenerator;
}());
export { IDGenerator };
//# sourceMappingURL=IDGenerator.js.map