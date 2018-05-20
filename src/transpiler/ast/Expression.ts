/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { FunctionResult } from './Declaration';
import { ListLike, Node, ObjectLike } from './Node';
import { Identifier } from './Primitive';
import { Type, TypeAnnotation } from './Type';

/**
 * InOutExpression node.
 */
@mixin(ObjectLike(['identifier']))
export class InOutExpression extends Node {
    public identifier: Identifier;
}

/**
 * TryOperator node.
 */
@mixin(ObjectLike(['expr']))
export class TryOperator extends Node {
    public expr: Node;
}

/**
 * AssignmentOperator node.
 */
@mixin(ObjectLike(['left', 'right']))
export class AssignmentOperator extends Node {
    public left: Node;
    public right: Node;
}

/**
 * ConditionalOperator node.
 */
@mixin(ObjectLike(['condition', 'falseBranch', 'trueBranch']))
export class ConditionalOperator extends Node {
    public condition: Node;
    public falseBranch: Node;
    public trueBranch: Node;
}

/**
 * TypeCastingOperator node.
 */
@mixin(ObjectLike(['type']))
export class TypeCastingOperator extends Node {
    public kind: TypeCastingOperator.Kind;
    public type: Type;

    constructor(line: number, col: number, kind: TypeCastingOperator.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace TypeCastingOperator {
    export const enum Kind {
        none,
        boolean,
        forced,
        optional
    }
}

/**
 * GenericIdentifier node.
 */
@mixin(ObjectLike(['arguments', 'identifier']))
export class GenericIdentifier extends Node {
    public arguments: Type[] | null;
    public identifier: Identifier;
}

/**
 * ArrayLiteral node.
 */
@mixin(ListLike)
export class ArrayLiteral extends Node {
    [n: number]: Node;
}

/**
 * DictionaryLiteralElement node.
 */
@mixin(ObjectLike(['key', 'value']))
export class DictionaryLiteralElement extends Node {
    public key: Node;
    public value: Node;
}

/**
 * DictionaryLiteral node.
 */
@mixin(ListLike)
export class DictionaryLiteral extends Node {
    [n: number]: DictionaryLiteralElement;
}

/**
 * FunctionCallArgument node.
 */
@mixin(ObjectLike(['expr', 'label']))
export class FunctionCallArgument extends Node {
    public expr: Node;
    public label: Identifier | null;
}

/**
 * PlaygroundLiteral node.
 * @todo
 */
export class PlaygroundLiteral extends Node {
    // todo
}

/**
 * SelfExpression node.
 */
export class SelfExpression extends Node {}

/**
 * SelfExpression node.
 */
export class SuperclassExpression extends Node {}

/**
 * CaptureListItem node.
 */
@mixin(ObjectLike(['expr']))
export class CaptureListItem extends Node {
    public expr: Node;
    public kind: CaptureListItem.Kind;

    constructor(line: number, col: number, kind: CaptureListItem.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace CaptureListItem {
    export const enum Kind {
        none,
        unowned,
        unowned_safe,
        unowned_unsafe
    }
}

/**
 * ClosureParameter node.
 */
@mixin(ObjectLike(['name', 'typeAnnotation']))
export class ClosureParameter extends Node {
    public kind: ClosureParameter.Kind;
    public name: Identifier;
    public typeAnnotation: TypeAnnotation | null;

    constructor(line: number, col: number, kind: ClosureParameter.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace ClosureParameter {
    export const enum Kind {
        none,
        variadic
    }
}

/**
 * ClosureSignature node.
 */
@mixin(ObjectLike(['captures', 'parameters', 'result']))
export class ClosureSignature extends Node {
    public captures: CaptureListItem[] | null;
    public kind: ClosureSignature.Kind;
    public parameters: ClosureParameter[] | null;
    public result: FunctionResult | null;
}

export namespace ClosureSignature {
    export const enum Kind {
        none,
        throws
    }
}

/**
 * ClosureExpression node.
 */
@mixin(ObjectLike(['signature', 'statements']))
export class ClosureExpression extends Node {
    public signature: ClosureSignature | null;
    public statements: Node[] | null;
}

/**
 * ImplicitMemberExpression node.
 */
@mixin(ObjectLike(['member']))
export class ImplicitMemberExpression extends Node {
    public member: Identifier;
}

/**
 * TupleElement node.
 */
@mixin(ObjectLike(['expr', 'label']))
export class TupleElement extends Node {
    public expr: Node;
    public label: Identifier | null;
}

/**
 * TupleExpression node.
 */
@mixin(ListLike)
export class TupleExpression extends Node {
    [n: number]: TupleElement;
}

/**
 * KeyPathComponent node.
 * @todo
 */
export class KeyPathComponent extends Node {
    // todo
}

/**
 * KeyPathExpression node.
 * @todo
 */
export class KeyPathExpression extends Node {
    // todo
}

/**
 * SelectorExpression node.
 */
@mixin(ObjectLike(['expr']))
export class SelectorExpression extends Node {
    public expr: Node;
    public kind: SelectorExpression.Kind;

    constructor(line: number, col: number, kind: SelectorExpression.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace SelectorExpression {
    export const enum Kind {
        method,
        getter,
        setter
    }
}

/**
 * KeyPathStringExpression node.
 */
@mixin(ObjectLike(['expr']))
export class KeyPathStringExpression extends Node {
    public expr: Node;
}

/**
 * SubscriptExpression node.
 */
@mixin(ObjectLike(['arguments', 'expr']))
export class SubscriptExpression extends Node {
    public arguments: FunctionCallArgument[];
    public expr: Node;
}

/**
 * UnwrappedExpression node.
 */
@mixin(ObjectLike(['expr']))
export class UnwrappedExpression extends Node {
    public expr: Node;
    public kind: UnwrappedExpression.Kind;

    constructor(line: number, col: number, kind: UnwrappedExpression.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace UnwrappedExpression {
    export const enum Kind {
        forced,
        optional
    }
}

/**
 * FunctionCallExpression node.
 */
@mixin(ObjectLike(['arguments', 'expr', 'closure']))
export class FunctionCallExpression extends Node {
    public arguments: FunctionCallArgument[] | null;
    public expr: Node;
    public closure: ClosureExpression | null;
}

/**
 * ExplicitMemberExpression node.
 */
@mixin(ObjectLike(['expr', 'labels', 'member']))
export class ExplicitMemberExpression extends Node {
    public expr: Node;
    public labels: Identifier[] | null;
    public member: GenericIdentifier;
}
