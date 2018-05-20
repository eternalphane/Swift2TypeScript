/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Attributes } from './Attribute';
import { GenericIdentifier } from './Expression';
import { ListLike, Node, ObjectLike } from './Node';
import { Identifier } from './Primitive';

export abstract class Type extends Node {}

/**
 * TypeIdentifier node.
 */
@mixin(ListLike)
export class TypeIdentifier extends Type implements ListLike<GenericIdentifier> {
    public children: GenericIdentifier[];
}

/**
 * ArrayType node.
 */
@mixin(ListLike)
export class ArrayType extends Type implements ListLike<Type> {
    public children: Type[];
}

/**
 * ProtocolCompositionType node.
 */
@mixin(ListLike)
export class ProtocolCompositionType extends Type implements ListLike<TypeIdentifier> {
    public children: TypeIdentifier[];
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
    public attributes: Attributes | null;
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
 * FunctionTypeArgumentClause node.
 */
@mixin(ListLike)
export class FunctionTypeArgumentClause extends Node implements ListLike<FunctionTypeArgument> {
    public children: FunctionTypeArgument[];
    public kind: FunctionTypeArgumentClause.Kind;

    constructor(line: number, col: number, kind: FunctionTypeArgumentClause.Kind) {
        super(line, col);
        this.kind = kind;
    }
}

export namespace FunctionTypeArgumentClause {
    export const enum Kind {
        none,
        variadic
    }
}

/**
 * FunctionType node.
 */
@mixin(ObjectLike(['arguments', 'attributes', 'return']))
export class FunctionType extends Type {
    public arguments: FunctionTypeArgumentClause;
    public attributes: Attributes | null;
    public kind: FunctionType.Kind;
    public return: Type;

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
    public attributes: Attributes | null;
    public name: Identifier | null;
    public type: Type;
}

/**
 * TupleType node.
 */
@mixin(ListLike)
export class TupleType extends Type implements ListLike<TupleTypeElement> {
    public children: TupleTypeElement[];
}

/**
 * TypeInheritanceClause
 */
@mixin(ListLike)
export class TypeInheritanceClause extends Node implements ListLike<TypeIdentifier> {
    public children: TypeIdentifier[];
}
