import React from "react";
var ReactKit = /** @class */ (function () {
    function ReactKit() {
    }
    ReactKit.joinNodes = function (nodes, separator, innerJoin) {
        if (innerJoin === void 0) { innerJoin = true; }
        // Do not use nodes.reduce, because it fails to handle key(prop) perfectly.
        var joinedNodes = nodes.map(function (_, index) { return (React.createElement(React.Fragment, { key: index },
            _,
            index < nodes.length - 1 && separator)); });
        if (!innerJoin) {
            joinedNodes.unshift(React.createElement(React.Fragment, { key: "__first__" }, separator));
            joinedNodes.push(React.createElement(React.Fragment, { key: "__last__" }, separator));
        }
        return joinedNodes;
    };
    /**
     * For React Native UI, parameters must be Text-based node
     * Currently, only support placeholders {1} {2} in sequence
     *
     * E.g: interpolateTextNode("Dice {1} Prize {2}", <Dice value={6}/>, <Amount value={3.5}/>)
     */
    ReactKit.interpolateNode = function (text) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        var nodes = [];
        text.split(/\{\d+\}/g).forEach(function (_, index) {
            nodes.push(_);
            nodes.push(parameters[index]);
        });
        return nodes;
    };
    return ReactKit;
}());
export { ReactKit };
//# sourceMappingURL=ReactKit.js.map