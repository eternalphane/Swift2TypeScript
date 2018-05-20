/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Node, ObjectLike } from './Node';

/**
 * Identifier node.
 */
export class Identifier extends Node {
    public name: string;

    constructor(line: number, col: number, name: string = '') {
        super(line, col);
        this.name = name;
    }

    public toString(): string {
        return this.name;
    }
}

/**
 * Wildcard node.
 */
export class Wildcard extends Identifier {
    public readonly name;

    constructor(line: number, col: number) {
        super(line, col, '_');
    }
}

/**
 * Literal node.
 */
export class Literal extends Node {
    public kind: Literal.Kind;
    public value: string;

    constructor(line: number, col: number, kind: Literal.Kind, value: string = '') {
        super(line, col);
        this.kind = kind;
        this.value = value;
    }

    public toString(): string {
        return this.value;
    }
}

export namespace Literal {
    export const enum Kind {
        boolean,
        nil,
        number,
        string
    }
}

/**
 * Operator node.
 */
@mixin(ObjectLike(['left', 'right']))
export class Operator extends Node {
    public left: Node | null;
    public str: string;
    public right: Node | null;

    constructor(line: number, col: number, str: string = '') {
        super(line, col);
        this.str = str;
    }

    public toString(): string {
        return this.str;
    }
}
