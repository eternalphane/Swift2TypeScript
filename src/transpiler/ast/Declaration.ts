/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Attribute } from './Attribute';
import { CaptureSpecifier, Expression, Identifier, Literal, Operator } from './Expression';
import { GenericParameter, Requirement } from './Generic';
import { Node, ObjectLike } from './Node';
import { Pattern } from './Pattern';
import { ConditionalCompilationBlock, LineControlStatement, Statement } from './Statement';
import { TupleType, Type, TypeIdentifier } from './Type';

export abstract class Declaration extends Statement {}

/**
 * ImportDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'path[]']))
export class ImportDeclaration extends Declaration {
    public attrs: Attribute[];
    public kind:
        | 'typealias'
        | 'struct'
        | 'class'
        | 'enum'
        | 'protocol'
        | 'let'
        | 'var'
        | 'func'
        | null;
    public path: Array<Identifier | Operator>;

    constructor(
        line: number,
        col: number,
        kind:
            | 'typealias'
            | 'struct'
            | 'class'
            | 'enum'
            | 'protocol'
            | 'let'
            | 'var'
            | 'func'
            | null = null
    ) {
        super(line, col);
        this.kind = kind;
    }
}

/**
 * AccessLevelModifier type.
 */
export type AccessLevelModifier =
    | 'private'
    | 'private(set)'
    | 'fileprivate'
    | 'fileprivate(set)'
    | 'internal'
    | 'internal(set)'
    | 'public'
    | 'public(set)'
    | 'open'
    | 'open(set)';

/**
 * MutationModifier type.
 */
export type MutationModifier = 'mutating' | 'nomutating';

/**
 * DeclarationModifier type.
 */
export type DeclarationModifier =
    | 'class'
    | 'convenience'
    | 'dynamic'
    | 'final'
    | 'infix'
    | 'lazy'
    | 'optional'
    | 'override'
    | 'postfix'
    | 'prefix'
    | 'required'
    | 'static'
    | CaptureSpecifier
    | AccessLevelModifier
    | MutationModifier;

/**
 * Accessor node.
 */
@mixin(ObjectLike(['attrs', 'body', 'kind', 'param']))
export class Accessor extends Node {
    public attrs: Attribute[];
    public body: Statement[];
    public kind: 'get' | 'set' | 'didSet' | 'willSet';
    public modifier: MutationModifier | null;
    public param: Identifier | null;

    constructor(line: number, col: number, modifier: MutationModifier | null = null) {
        super(line, col);
        this.modifier = modifier;
    }
}

/**
 * PatternBinding node.
 */
@mixin(ObjectLike(['accessors[]', 'initializer', 'pattern', 'type']))
export class PatternBinding extends Node {
    public accessors: Accessor[];
    public initializer: Expression | null;
    public pattern: Pattern;
    public type: Type | null;
}

/**
 * VariableDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'bindings[]']))
export class VariableDeclaration extends Declaration {
    public attrs: Attribute[];
    public bindings: PatternBinding[];
    public kind: 'var' | 'let';
    public modifiers: DeclarationModifier[];

    constructor(
        line: number,
        col: number,
        kind: 'var' | 'let' = 'var',
        modifiers: DeclarationModifier[] = []
    ) {
        super(line, col);
        this.kind = kind;
        this.modifiers = modifiers;
    }
}

/**
 * TypealiasDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'name', 'params[]', 'type']))
export class TypealiasDeclaration extends Declaration {
    public attrs: Attribute[];
    public modifier: AccessLevelModifier | null;
    public name: Identifier;
    public params: GenericParameter[];
    public type: Type;

    constructor(line: number, col: number, modifier: AccessLevelModifier | null = null) {
        super(line, col);
        this.modifier = modifier;
    }
}

/**
 * Parameter node.
 */
@mixin(ObjectLike(['attrs[]', 'default', 'label', 'name', 'type']))
export class Parameter extends Node {
    public attrs: Attribute[];
    public default: Expression | null;
    public inout: boolean;
    public label: Identifier | null;
    public name: Identifier;
    public type: Type;
    public variadic: boolean;

    constructor(line: number, col: number, inout: boolean = false, variadic: boolean = false) {
        super(line, col);
        this.inout = inout;
        this.variadic = variadic;
    }
}

/**
 * FunctionDeclaration node.
 */
@mixin(
    ObjectLike(['attrs[]', 'body[]', 'genericParams[]', 'name', 'params[]', 'return', 'where[]'])
)
export class FunctionDeclaration extends Declaration {
    public attrs: Attribute[];
    public body: Statement[];
    public genericParams: GenericParameter[];
    public kind: 'throws' | 'rethrows' | null;
    public modifiers: DeclarationModifier[];
    public name: Identifier | Operator;
    public params: Parameter[];
    public return: Type | null;
    public where: Requirement[];

    constructor(
        line: number,
        col: number,
        kind: 'throws' | 'rethrows' | null = null,
        modifiers: DeclarationModifier[] = []
    ) {
        super(line, col);
        this.kind = kind;
        this.modifiers = modifiers;
    }
}

/**
 * EnumCase node.
 */
@mixin(ObjectLike(['associatedValue', 'name', 'rawValue']))
export class EnumCase extends Node {
    public associatedValue: TupleType | null;
    public name: Identifier;
    public rawValue: Literal | null;
}

/**
 * EnumCaseClause node.
 */
@mixin(ObjectLike(['attrs[]', 'cases[]']))
export class EnumCaseClause extends Node {
    public attrs: Attribute[];
    public cases: EnumCase[];
    public indirect: boolean;

    constructor(line: number, col: number, indirect: boolean = false) {
        super(line, col);
        this.indirect = indirect;
    }
}

/**
 * EnumMember type.
 */
export type EnumMember =
    | EnumCaseClause
    | Declaration
    | ConditionalCompilationBlock
    | LineControlStatement;

/**
 * EnumDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'heritage[]', 'members[]', 'name', 'params[]', 'where[]']))
export class EnumDeclaration extends Declaration {
    public attrs: Attribute[];
    public heritage: Type[];
    public indirect: boolean;
    public members: EnumMember[];
    public modifier: AccessLevelModifier | null;
    public name: Identifier;
    public params: GenericParameter[];
    public where: Requirement[];

    constructor(
        line: number,
        col: number,
        indirect: boolean = false,
        modifier: AccessLevelModifier | null = null
    ) {
        super(line, col);
        this.indirect = indirect;
        this.modifier = modifier;
    }
}

/**
 * ProtocolAssociatedTypeDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'heritage[]', 'name', 'type', 'where[]']))
export class ProtocolAssociatedTypeDeclaration extends Declaration {
    public attrs: Attribute[];
    public heritage: Type[];
    public modifier: AccessLevelModifier | null;
    public name: Identifier;
    public type: Type | null;
    public where: Requirement[];

    constructor(line: number, col: number, modifier: AccessLevelModifier | null = null) {
        super(line, col);
        this.modifier = modifier;
    }
}

/**
 * ClassLikeMember type.
 */
export type ClassLikeMember = Declaration | ConditionalCompilationBlock | LineControlStatement;

/**
 * ClassLikeDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'body[]', 'extension', 'heritage[]', 'name', 'params[]', 'where[]']))
export class ClassLikeDeclaration extends Declaration {
    public attrs: Attribute[];
    public body: ClassLikeMember[];
    public extension: TypeIdentifier | null;
    public final: boolean;
    public heritage: Type[];
    public kind: 'class' | 'struct' | 'extension' | 'protocol';
    public modifier: AccessLevelModifier | null;
    public name: Identifier | null;
    public params: GenericParameter[];
    public where: Requirement[];

    constructor(
        line: number,
        col: number,
        final: boolean = false,
        kind: 'class' | 'struct' | 'extension' | 'protocol' = 'class',
        modifier: AccessLevelModifier | null = null
    ) {
        super(line, col);
        this.final = final;
        this.kind = kind;
        this.modifier = modifier;
    }
}

/**
 * InitializerDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'body[]', 'genericParams[]', 'params[]', 'where[]']))
export class InitializerDeclaration extends Declaration {
    public attrs: Attribute[];
    public body: Statement[];
    public genericParams: GenericParameter[];
    public kind: 'throws' | 'rethrows' | null;
    public mark: '?' | '!' | null;
    public modifiers: DeclarationModifier[];
    public params: Parameter[];
    public where: Requirement[];

    constructor(
        line: number,
        col: number,
        kind: 'throws' | 'rethrows' | null = null,
        mark: '?' | '!' | null = null,
        modifiers: DeclarationModifier[] = []
    ) {
        super(line, col);
        this.kind = kind;
        this.mark = mark;
        this.modifiers = modifiers;
    }
}

/**
 * DeinitializerDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'body[]']))
export class DeinitializerDeclaration extends Declaration {
    public attrs: Attribute[];
    public body: Statement[];
}

/**
 * SubscriptDeclaration node.
 */
@mixin(ObjectLike(['attrs[]', 'accessors[]', 'genericParams[]', 'params[]', 'return', 'where[]']))
export class SubscriptDeclaration extends Declaration {
    public attrs: Attribute[];
    public accessors: Accessor[];
    public genericParams: GenericParameter[];
    public modifiers: DeclarationModifier[];
    public params: Parameter[];
    public return: Type;
    public where: Requirement[];

    constructor(line: number, col: number, modifiers: DeclarationModifier[] = []) {
        super(line, col);
        this.modifiers = modifiers;
    }
}
