/** @module "transpiler/ast" */

import { Constructor } from '../../util';
import { ASTVisitor } from '../AstVisitor';

/**
 * Node of abstract syntax tree.
 */
export abstract class Node implements ArrayLike<Node> {
    readonly [n: number]: Node;
    public readonly col: number;
    public readonly line: number;
    protected _children: Node[];

    constructor(line: number, col: number) {
        this.line = line;
        this.col = col;
        this._children = [];
        return new Proxy(this, {
            get(target: Node, key: PropertyKey, receiver: any): any {
                return 'number' === typeof key
                    ? target._children[key < 0 ? key + target.length : key]
                    : Reflect.get(target, key);
            },
            set(target: Node, key: PropertyKey, value: any, receiver: any): boolean {
                return 'number' === typeof key ? false : Reflect.set(target, key, value);
            }
        });
    }

    /**
     * Number of children nodes.
     */
    public get length(): number {
        return this._children.length;
    }

    public accept(visitor: ASTVisitor): void {
        let visit: (node: Node) => void = visitor[`visit${this.constructor.name}`];
        visit = undefined === visit ? visitor.visit : visit;
        visit(this);
    }
}

export abstract class ListLike<T extends Node> extends Node {
    private _init(): Node {
        return new Proxy(this, {
            set(target: ListLike<T>, key: PropertyKey, value: any, receiver: any): boolean {
                return 'number' === typeof key
                    ? key >= target._children.length || key < -target.length
                        ? false
                        : Reflect.set(target._children, key < 0 ? key + target.length : key, value)
                    : Reflect.set(target, key, value);
            }
        });
    }
}

export function ObjectLike(keys: string[]): Constructor<Node> {
    return class ObjectLike extends Node {
        private _init(): Node {
            for (let key of keys) {
                '[]' === key.slice(-2) ? (this[(key = key.slice(0, -2))] = []) : (this[key] = null);
            }
            return new Proxy(this, {
                set(target: ObjectLike, key: PropertyKey, value: any, receiver: any): boolean {
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
