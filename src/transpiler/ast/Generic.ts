/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { ListLike, Node } from './Node';
import { Type } from './Type';

/**
 * GenericArgumentClause node.
 */
@mixin(ListLike)
export class GenericArgumentClause extends Node implements ListLike<Type> {
    public children: Type[];
}
