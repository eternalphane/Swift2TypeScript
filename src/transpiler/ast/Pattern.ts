/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Expression, Identifier } from './Expression';
import { ListLike, Node, ObjectLike } from './Node';
import { Type, TypeIdentifier } from './Type';

export abstract class Pattern extends Node {}

/**
 * ValueBindingPattern node.
 */
@mixin(ObjectLike(['value']))
export class ValueBindingPattern extends Pattern {
    public kind: 'var' | 'let';
    public value: Pattern;

    constructor(line: number, col: number, kind: 'var' | 'let' = 'var') {
        super(line, col);
        this.kind = kind;
    }
}

/**
 * IdentifierPattern node.
 */
@mixin(ObjectLike(['identifier', 'type']))
export class IdentifierPattern extends Pattern {
    public identifier: Identifier;
    public type: Type | null;
}

/**
 * TuplePatternElement node.
 */
@mixin(ObjectLike(['label', 'pattern']))
export class TuplePatternElement extends Node {
    public label: Identifier | null;
    public pattern: Pattern;
}

/**
 * TuplePattern node.
 */
@mixin(ListLike)
export class TuplePattern extends Pattern {
    [n: number]: TuplePatternElement;
}

/**
 * EnumCasePattern node.
 */
@mixin(ObjectLike(['case', 'enum', 'tuple']))
export class EnumCasePattern extends Pattern {
    public case: Identifier;
    public enum: TypeIdentifier | null;
    public tuple: TuplePattern;
}

/**
 * IsTypePattern node.
 */
@mixin(ObjectLike(['type']))
export class IsTypePattern extends Pattern {
    public type: Type;
}

/**
 * AsTypePattern node.
 */
@mixin(ObjectLike(['pattern', 'type']))
export class AsTypePattern extends Pattern {
    public pattern: Pattern;
    public type: Type;
}

/**
 * OptionalPattern node.
 */
@mixin(ObjectLike(['pattern']))
export class OptionalPattern extends Pattern {
    public pattern: Pattern;
}

/**
 * ExpressionPattern node.
 */
@mixin(ObjectLike(['expr']))
export class ExpressionPattern extends Pattern {
    public expr: Expression;
}
