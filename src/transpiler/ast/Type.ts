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
    public kind: MetaType.Kind;
    public ofType: Type;

    constructor(line: number, col: number, kind: MetaType.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace MetaType {
    export const enum Kind {
        type,
        protocol
    }
}

/**
 * TypeAnnotation node.
 */
@mixin(ObjectLike(['attributes', 'type']))
export class TypeAnnotation extends Node {
    public attributes: Attribute[] | null;
    public kind: TypeAnnotation.Kind;
    public type: Type;

    constructor(line: number, col: number, kind: TypeAnnotation.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace TypeAnnotation {
    export const enum Kind {
        none,
        inout
    }
}

/**
 * FunctionTypeArgument node.
 */
@mixin(ObjectLike(['label', 'typeAnnotation']))
export class FunctionTypeArgument extends Node {
    public label: Identifier | null;
    public typeAnnotation: TypeAnnotation;
}

/**
 * FunctionType node.
 */
@mixin(ObjectLike(['arguments', 'attributes', 'return']))
export class FunctionType extends Type {
    public arguments: FunctionTypeArgument[];
    public attributes: Attribute[] | null;
    public kind: FunctionType.Kind;
    public return: Type;
    public variadic: boolean;

    constructor(line: number, col: number, kind: FunctionType.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace FunctionType {
    export const enum Kind {
        none,
        throws,
        rethrows
    }
}

/**
 * SelfType node.
 */
export class SelfType extends Type {}

/**
 * TupleTypeElement node.
 */
@mixin(ObjectLike(['attributes', 'name', 'type']))
export class TupleTypeElement extends Node {
    public attributes: Attribute[] | null;
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
 * TypeInheritanceClause
 */
@mixin(ListLike)
export class TypeInheritanceClause extends Node {
    [n: number]: TypeIdentifier;
}
