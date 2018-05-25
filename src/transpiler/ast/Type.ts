/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Interface } from '../../util';
import { Attribute } from './Attribute';
import { GenericIdentifier, Identifier } from './Expression';
import { ListLike, Node, ObjectLike } from './Node';

export abstract class Type extends Node {}

/**
 * TypeIdentifier node.
 */
@mixin(ListLike)
export class TypeIdentifier extends Type {
    [n: number]: GenericIdentifier;
}

/**
 * ArrayType node.
 */
@mixin(ObjectLike(['type']))
export class ArrayType extends Type {
    public type: Type;
}

/**
 * ProtocolCompositionType node.
 */
@mixin(ListLike)
export class ProtocolCompositionType extends Type {
    [n: number]: TypeIdentifier;
}

/**
 * AnyType node.
 */
export class AnyType extends Type {}

/**
 * DictionaryType node.
 */
@mixin(ObjectLike(['key', 'value']))
export class DictionaryType extends Type {
    public key: Type;
    public value: Type;
}

/**
 * MetaType node.
 */
@mixin(ObjectLike(['ofType']))
export class MetaType extends Type {
    public kind: 'type' | 'protocol';
    public ofType: Type;

    constructor(line: number, col: number, kind: 'type' | 'protocol' = 'type') {
        super(line, col);
        this.kind = kind;
    }
}

/**
 * FunctionTypeArgument node.
 */
@mixin(ObjectLike(['attrs[]', 'label', 'type']))
export class FunctionTypeArgument extends Node {
    public attrs: Attribute[];
    public inout: boolean;
    public label: Identifier | null;
    public type: Type;

    constructor(line: number, col: number, inout: boolean) {
        super(line, col);
        this.inout = inout;
    }
}

/**
 * FunctionType node.
 */
@mixin(ObjectLike(['args[]', 'attrs[]', 'return']))
export class FunctionType extends Type {
    public args: FunctionTypeArgument[];
    public attrs: Attribute[];
    public kind: 'throws' | 'rethrows' | null;
    public return: Type;
    public variadic: boolean;

    constructor(
        line: number,
        col: number,
        kind: 'throws' | 'rethrows' | null = null,
        variadic: boolean = false
    ) {
        super(line, col);
        this.kind = kind;
        this.variadic = variadic;
    }
}

/**
 * SelfType node.
 */
export class SelfType extends Type {}

/**
 * TupleTypeElement node.
 */
@mixin(ObjectLike(['name', 'type']))
export class TupleTypeElement extends Node {
    public name: Identifier | null;
    public type: Type;
}

/**
 * TupleType node.
 */
@mixin(ListLike)
export class TupleType extends Type {
    [n: number]: TupleTypeElement;
}

/**
 * OptionalType node.
 */
@mixin(ObjectLike(['type']))
export class OptionalType extends Type {
    public mark: '?' | '!';
    public type: Type;

    constructor(line: number, col: number, mark: '?' | '!' = '?') {
        super(line, col);
        this.mark = mark;
    }
}
