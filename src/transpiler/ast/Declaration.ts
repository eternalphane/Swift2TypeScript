/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Attributes } from './Attribute';
import { Node, ObjectLike } from './Node';
import { Type } from './Type';

/**
 * FunctionResult node.
 */
@mixin(ObjectLike(['attributes', 'type']))
export class FunctionResult extends Node {
    public attributes: Attributes | null;
    public type: Type;
}
