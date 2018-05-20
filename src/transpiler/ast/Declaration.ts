/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Attribute } from './Attribute';
import { Node, ObjectLike } from './Node';
import { Type } from './Type';

/**
 * FunctionResult node.
 */
@mixin(ObjectLike(['attributes', 'type']))
export class FunctionResult extends Node {
    public attributes: Attribute[] | null;
    public type: Type;
}
