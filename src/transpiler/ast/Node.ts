/** @module "transpiler/ast" */

import { Constructor } from '../../util';
import { ASTVisitor } from '../AstVisitor';

/**
 * Node of abstract syntax tree.
 */
export abstract class Node {
    public readonly col: number;
    public readonly line: number;
    protected _children: Node[];

    constructor(line: number, col: number) {
        this.line = line;
        this.col = col;
        this._children = [];
    }

    /**
     * Children nodes.
     */
    public get children(): Node[] {
        return this._children.slice();
    }

    public accept(visitor: ASTVisitor): void {
        let visit: (node: Node) => void = visitor[`visit${this.constructor.name}`];
        visit = undefined === visit ? visitor.visit : visit;
        visit(this);
    }
}

export abstract class ListLike<T extends Node> extends Node {
    public get children(): T[] {
        return this._children as T[];
    }
}

export function ObjectLike(keys: string[]): Constructor<Node> {
    return class extends Node {
        private _init(): this {
            for (const key of keys) {
                this[key] = null;
            }
            return new Proxy(this, {
                set(target: any, key: PropertyKey, value: any, receiver: any): boolean {
                    const result: boolean = Reflect.set(target, key, value, receiver);
                    if (keys.includes(key as string)) {
                        for (const key of keys) {
                            const child: any = target[key];
                            if (Array.isArray(child)) {
                                target._children.splice(target._children.length, 0, ...child);
                            } else if (child instanceof Node) {
                                target._children.push(child);
                            }
                        }
                    }
                    return result;
                }
            });
        }
    };
}
