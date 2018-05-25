/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Interface } from '../../util';
import { Expression, Identifier } from './Expression';
import { ListLike, Node, ObjectLike } from './Node';
import { Pattern } from './Pattern';

export abstract class Statement extends Node {}

/**
 * Program node.
 */
@mixin(ListLike)
export class Program extends Node {
    [n: number]: Statement;

    constructor() {
        super(1, 0);
    }
}

/**
 * ForInStatement node.
 */
@mixin(ObjectLike(['body[]', 'label', 'pattern', 'sequence', 'where']))
export class ForInStatement extends Statement {
    public body: Statement[];
    public case: boolean;
    public label: Identifier | null;
    public pattern: Pattern;
    public sequence: Expression;
    public where: Expression | null;

    constructor(line: number, col: number, hasCase: boolean = false) {
        super(line, col);
        this.case = hasCase;
    }
}

/**
 * AvailabilityArgument node.
 */
export class AvailabilityArgument extends Node {
    public platform:
        | '*'
        | 'iOS'
        | 'iOSApplicationExtension'
        | 'macOS'
        | 'macOSApplicationExtension'
        | 'watchOS'
        | 'tvOS';
    public version: number[] | null;

    constructor(
        line: number,
        col: number,
        platform:
            | '*'
            | 'iOS'
            | 'iOSApplicationExtension'
            | 'macOS'
            | 'macOSApplicationExtension'
            | 'watchOS'
            | 'tvOS' = '*',
        version: number[] | null = null
    ) {
        super(line, col);
        this.platform = platform;
        this.version = version;
    }
}

/**
 * AvailabilityCondition node.
 */
@mixin(ListLike)
export class AvailabilityCondition extends Node {
    [n: number]: AvailabilityArgument;
}

/**
 * CaseCondition node.
 */
@mixin(ObjectLike(['initializer', 'pattern']))
export class CaseCondition extends Node {
    public initializer: Expression;
    public pattern: Pattern;
}

/**
 * OptionalBindingCondition node.
 */
@mixin(ObjectLike(['initializer', 'pattern']))
export class OptionalBindingCondition extends Node {
    public initializer: Expression;
    public kind: 'var' | 'let';
    public pattern: Pattern;

    constructor(line: number, col: number, kind: 'var' | 'let' = 'var') {
        super(line, col);
        this.kind = kind;
    }
}

/**
 * Condition type.
 */
export type Condition =
    | Expression
    | AvailabilityCondition
    | CaseCondition
    | OptionalBindingCondition;

/**
 * WhileStatement node.
 */
@mixin(ObjectLike(['body[]', 'conditions[]', 'label']))
export class WhileStatement extends Statement {
    public body: Statement[];
    public conditions: Condition[];
    public label: Identifier | null;
}

/**
 * RepeatWhileStatement node.
 */
@mixin(ObjectLike(['body[]', 'condition', 'label']))
export class RepeatWhileStatement extends Statement {
    public body: Statement[];
    public condition: Expression;
    public label: Identifier | null;
}

/**
 * IfStatement node.
 */
@mixin(ObjectLike(['body[]', 'conditions[]', 'else', 'label']))
export class IfStatement extends Statement {
    public body: Statement[];
    public conditions: Condition[];
    public else: ElseClause | null;
    public label: Identifier | null;
}

/**
 * ElseClause node.
 */
@mixin(ObjectLike(['body[]', 'if']))
export class ElseClause extends Node {
    public body: Statement[];
    public if: IfStatement | null;
}

/**
 * GuardStatement node.
 */
@mixin(ObjectLike(['body[]', 'conditions[]']))
export class GuardStatement extends Statement {
    public body: Statement[];
    public conditions: Condition[];
}

/**
 * CaseItem node.
 */
@mixin(ObjectLike(['pattern', 'where']))
export class CaseItem extends Node {
    public pattern: Pattern;
    public where: Expression | null;
}

/**
 * SwitchCase node.
 */
@mixin(ObjectLike(['caseItems[]', 'stmts[]']))
export class SwitchCase extends Node {
    public caseItems: CaseItem[];
    public stmts: Statement[];
}

/**
 * SwitchStatement node.
 */
@mixin(ObjectLike(['cases[]', 'condition', 'label']))
export class SwitchStatement extends Statement {
    public cases: SwitchCase[];
    public condition: Expression;
    public label: Identifier | null;
}

/**
 * BreakStatement node.
 */
@mixin(ObjectLike(['label']))
export class BreakStatement extends Statement {
    public label: Identifier | null;
}

/**
 * ContinueStatement node.
 */
@mixin(ObjectLike(['label']))
export class ContinueStatement extends Statement {
    public label: Identifier | null;
}

/**
 * FallthroughStatement node.
 */
export class FallthroughStatement extends Statement {}

/**
 * ReturnStatement node.
 */
@mixin(ObjectLike(['expr']))
export class ReturnStatement extends Statement {
    public expr: Expression | null;
}

/**
 * ThrowStatement node.
 */
@mixin(ObjectLike(['expr']))
export class ThrowStatement extends Statement {
    public expr: Expression;
}

/**
 * DeferStatement node.
 */
@mixin(ObjectLike(['body[]']))
export class DeferStatement extends Statement {
    public body: Statement[];
}

/**
 * CatchClause node.
 */
@mixin(ObjectLike(['body[]', 'pattern', 'where']))
export class CatchClause extends Node {
    public body: Statement[];
    public pattern: Pattern | null;
    public where: Expression | null;
}

/**
 * DoStatement node.
 */
@mixin(ObjectLike(['body[]', 'catchClause[]', 'label']))
export class DoStatement extends Statement {
    public body: Statement[];
    public catchClauses: CatchClause[];
    public label: Identifier | null;
}

/**
 * ConditionalCompilationBlock node.
 * @todo
 */
export class ConditionalCompilationBlock extends Statement {
    // TODO
}

/**
 * DirectiveClause node.
 * @todo
 */
export class DirectiveClause extends Node {
    // TODO
}

/**
 * PlatformCondition node.
 * @todo
 */
export class PlatformCondition extends Node {
    // TODO
}

/**
 * LineControlStatement node.
 * @todo
 */
export class LineControlStatement extends Statement {
    // TODO
}
