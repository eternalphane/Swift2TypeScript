/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Interface } from '../../util';
import { ListLike, Node } from './Node';

/**
 * Abstract syntax tree.
 */
@mixin(ListLike)
export class AST extends Node implements Interface<ListLike<Node>> {
    constructor() {
        super(1, 0);
    }
}
