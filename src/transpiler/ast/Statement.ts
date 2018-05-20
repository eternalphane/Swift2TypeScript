/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Interface } from '../../util';
import { ListLike, Node, ObjectLike } from './Node';
import { Pattern } from './Pattern';

/**
 * Abstract syntax tree.
 */
@mixin(ListLike)
export class AST extends Node {
    [n: number]: Node;

    constructor() {
        super(1, 0);
    }
}

/**
 * ForInStatement node.
 */
@mixin(ObjectLike([]))
export class ForInStatement extends Node {
    public case: boolean;
    public pattern: Pattern;
    public sequence: Node;
}
