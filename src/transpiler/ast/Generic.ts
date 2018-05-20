/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Identifier } from './Expression';
import { Node, ObjectLike } from './Node';
import { Type, TypeIdentifier } from './Type';

/**
 * GenericParameter node.
 */
@mixin(ObjectLike(['name', 'type']))
export class GenericParameter extends Node {
    public name: Identifier;
    public type: Type | null;
}

/**
 * Requirement node.
 */
@mixin(ObjectLike(['left', 'right']))
export class Requirement extends Node {
    public left: TypeIdentifier;
    public kind: 'conformance' | 'same-type';
    public right: Type;

    constructor(line: number, col: number, kind: 'conformance' | 'same-type' = 'conformance') {
        super(line, col);
        this.kind = kind;
    }
}
