/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Attribute } from './Attribute';
import { ListLike, Node, ObjectLike } from './Node';
import { Statement } from './Statement';
import { Type } from './Type';

export abstract class Expression extends Statement {}

/**
 * Identifier node.
 */
export class Identifier extends Expression {
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
    public readonly name: string;

    constructor(line: number, col: number) {
        super(line, col, '_');
    }
}

/**
 * Literal node.
 */
export class Literal extends Expression {
    public value: string | number | boolean | null | undefined;
    public template: [string, Array<[Expression, string]>] | null;

    constructor(
        line: number,
        col: number,
        value: string | number | boolean | null | undefined = null,
        template: [string, Array<[Expression, string]>] | null = null
    ) {
        super(line, col);
        this.value = value;
        this.template = template;
    }

    public get kind(): 'string' | 'number' | 'boolean' | 'template' | 'nil' {
        return this.template
            ? 'template'
            : null === this.value
                ? 'nil'
                : (typeof this.value as any);
    }

    public toString(): string {
        return this.template ? '' : String(this.value);
    }
}

/**
 * Operator node.
 */
@mixin(ObjectLike(['left', 'right']))
export class Operator extends Expression {
    public left: Expression | null;
    public str: string;
    public right: Expression | null;

    constructor(line: number, col: number, str: string = '') {
        super(line, col);
        this.str = str;
    }

    public toString(): string {
        return this.str;
    }
}

/**
 * InOutExpression node.
 */
@mixin(ObjectLike(['expr']))
export class InOutExpression extends Expression {
    public expr: Expression;
}

/**
 * TryOperator node.
 */
@mixin(ObjectLike(['expr']))
export class TryOperator extends Expression {
    public expr: Expression;
    public mark: '?' | '!' | null;

    constructor(line: number, col: number, mark: '?' | '!' | null = null) {
        super(line, col);
        this.mark = mark;
    }
}

/**
 * AssignmentOperator node.
 */
@mixin(ObjectLike(['left', 'right']))
export class AssignmentOperator extends Expression {
    public left: Expression;
    public right: Expression;
}

/**
 * ConditionalOperator node.
 */
@mixin(ObjectLike(['condition', 'falseBranch', 'trueBranch']))
export class ConditionalOperator extends Expression {
    public condition: Expression;
    public falseBranch: Expression;
    public trueBranch: Expression;
}

/**
 * IsTypeOperator node.
 */
@mixin(ObjectLike(['expr', 'type']))
export class IsTypeOperator extends Expression {
    public expr: Expression;
    public type: Type;
}

/**
 * AsTypeOperator node.
 */
@mixin(ObjectLike(['expr', 'type']))
export class AsTypeOperator extends Expression {
    public expr: Expression;
    public mark: '?' | '!' | null;
    public type: Type;

    constructor(line: number, col: number, mark: '?' | '!' | null = null) {
        super(line, col);
        this.mark = mark;
    }
}

/**
 * GenericIdentifier node.
 */
@mixin(ObjectLike(['args[]', 'identifier']))
export class GenericIdentifier extends Expression {
    public args: Type[];
    public identifier: Identifier;
}

/**
 * ArrayLiteral node.
 */
@mixin(ListLike)
export class ArrayLiteral extends Expression {
    [n: number]: Expression;
}

/**
 * DictionaryLiteralElement node.
 */
@mixin(ObjectLike(['key', 'value']))
export class DictionaryLiteralElement extends Node {
    public key: Expression;
    public value: Expression;
}

/**
 * DictionaryLiteral node.
 */
@mixin(ListLike)
export class DictionaryLiteral extends Expression {
    [n: number]: DictionaryLiteralElement;
}

/**
 * FunctionCallArgument node.
 */
@mixin(ObjectLike(['expr', 'label']))
export class FunctionCallArgument extends Node {
    public expr: Expression;
    public label: Identifier | null;
}

/**
 * PlaygroundLiteral node.
 * @todo
 */
export class PlaygroundLiteral extends Expression {
    // TODO
}

/**
 * SelfExpression node.
 */
export class SelfExpression extends Expression {}

/**
 * SelfExpression node.
 */
export class SuperclassExpression extends Expression {}

/**
 * CaptureSpecifier type.
 */
export type CaptureSpecifier = 'weak' | 'unowned' | 'unowned(safe)' | 'unowned(unsafe)';

/**
 * CaptureItem node.
 */
@mixin(ObjectLike(['expr']))
export class CaptureItem extends Node {
    public expr: Expression;
    public specifier: CaptureSpecifier | null;

    constructor(line: number, col: number, specifier: CaptureSpecifier | null = null) {
        super(line, col);
        this.specifier = specifier;
    }
}

/**
 * ClosureParameter node.
 */
@mixin(ObjectLike(['attrs[]', 'name', 'type']))
export class ClosureParameter extends Node {
    public attrs: Attribute[];
    public inout: boolean;
    public name: Identifier;
    public type: Type | null;
    public variadic: boolean;

    constructor(line: number, col: number, inout: boolean = false, variadic: boolean = false) {
        super(line, col);
        this.inout = inout;
        this.variadic = variadic;
    }
}

/**
 * ClosureExpression node.
 */
@mixin(ObjectLike(['captures[]', 'params[]', 'return', 'stmts[]']))
export class ClosureExpression extends Expression {
    public captures: CaptureItem[];
    public params: ClosureParameter[];
    public return: Type | null;
    public stmts: Statement[];
    public throws: boolean;

    constructor(line: number, col: number, throws: boolean = false) {
        super(line, col);
        this.throws = throws;
    }
}

/**
 * ImplicitMemberExpression node.
 */
@mixin(ObjectLike(['member']))
export class ImplicitMemberExpression extends Expression {
    public member: Identifier;
}

/**
 * TupleElement node.
 */
@mixin(ObjectLike(['expr', 'label']))
export class TupleElement extends Node {
    public expr: Expression;
    public label: Identifier | null;
}

/**
 * TupleExpression node.
 */
@mixin(ListLike)
export class TupleExpression extends Expression {
    [n: number]: TupleElement;
}

/**
 * KeyPathComponent node.
 * @todo
 */
export class KeyPathComponent extends Node {
    // TODO
}

/**
 * KeyPathExpression node.
 * @todo
 */
export class KeyPathExpression extends Expression {
    // TODO
}

/**
 * SelectorExpression node.
 */
@mixin(ObjectLike(['expr']))
export class SelectorExpression extends Expression {
    public expr: Expression;
    public kind: 'getter' | 'setter' | null;

    constructor(line: number, col: number, kind: 'getter' | 'setter' | null = null) {
        super(line, col);
        this.kind = kind;
    }
}

/**
 * KeyPathStringExpression node.
 */
@mixin(ObjectLike(['expr']))
export class KeyPathStringExpression extends Expression {
    public expr: Expression;
}

/**
 * SubscriptExpression node.
 */
@mixin(ObjectLike(['args[]', 'expr']))
export class SubscriptExpression extends Expression {
    public args: FunctionCallArgument[];
    public expr: Expression;
}

/**
 * UnwrappedExpression node.
 */
@mixin(ObjectLike(['expr']))
export class UnwrappedExpression extends Expression {
    public expr: Expression;
    public mark: '?' | '!';

    constructor(line: number, col: number, mark: '?' | '!' = '?') {
        super(line, col);
        this.mark = mark;
    }
}

/**
 * FunctionCallExpression node.
 */
@mixin(ObjectLike(['args[]', 'closure', 'expr']))
export class FunctionCallExpression extends Expression {
    public args: FunctionCallArgument[];
    public closure: ClosureExpression | null;
    public expr: Expression;
}

/**
 * ExplicitMemberExpression node.
 */
@mixin(ObjectLike(['expr', 'labels[]', 'member']))
export class ExplicitMemberExpression extends Expression {
    public args: Type[];
    public expr: Expression;
    public labels: Identifier[];
    public member: Identifier;
}
