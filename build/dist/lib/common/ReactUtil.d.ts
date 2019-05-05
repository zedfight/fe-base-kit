import React from "react";
export declare class ReactUtil {
    static joinNodes(nodes: React.ReactNode[], separator: React.ReactNode, innerJoin?: boolean): React.ReactNode;
    /**
     * For React Native UI, parameters must be Text-based node
     * Currently, only support placeholders {1} {2} in sequence
     *
     * E.g: interpolateTextNode("Dice {1} Prize {2}", <Dice value={6}/>, <Amount value={3.5}/>)
     */
    static interpolateNode(text: string, ...parameters: React.ReactNode[]): React.ReactNode;
}
