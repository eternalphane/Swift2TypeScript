/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { ListLike, Node } from './Node';

/**
 * Statements node.
 */
@mixin(ListLike)
export class Statements extends Node implements ListLike<Node> {
    public children: Node[];
}

/**
 * Abstract syntax tree.
 */
export class AST extends Statements {
    constructor() {
        super(1, 0);
    }
}
