import React from "react";

export class ReactKit {
    static joinNodes(nodes: React.ReactNode[], separator: React.ReactNode, innerJoin: boolean = true): React.ReactNode {
        // Do not use nodes.reduce, because it fails to handle key(prop) perfectly.
        const joinedNodes: React.ReactNode[] = nodes.map((_, index) => (
            <React.Fragment key={index}>
                {_}
                {index < nodes.length - 1 && separator}
            </React.Fragment>
        ));
        if (!innerJoin) {
            joinedNodes.unshift(<React.Fragment key="__first__">{separator}</React.Fragment>);
            joinedNodes.push(<React.Fragment key="__last__">{separator}</React.Fragment>);
        }
        return joinedNodes;
    }

    /**
     * For React Native UI, parameters must be Text-based node
     * Currently, only support placeholders {1} {2} in sequence
     *
     * E.g: interpolateTextNode("Dice {1} Prize {2}", <Dice value={6}/>, <Amount value={3.5}/>)
     */
    static interpolateNode(text: string, ...parameters: React.ReactNode[]): React.ReactNode {
        const nodes: React.ReactNode[] = [];
        text.split(/\{\d+\}/g).forEach((_, index) => {
            nodes.push(_);
            nodes.push(parameters[index]);
        });
        return nodes;
    }
}
