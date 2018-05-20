/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { ListLike, Node } from './Node';

/**
 * Attribute node.
 * @todo
 */
export class Attribute extends Node {
    // todo
}

/**
 * Attributes node.
 */
@mixin(ListLike)
export class Attributes extends Node implements ListLike<Attribute> {
    public children: Attribute[];
}
