/** @module "transpiler/ast" */

import { mixin } from '../../Decorator';
import { Interface } from '../../util';
import { Expression, Identifier } from './Expression';
import { ListLike, Node, ObjectLike } from './Node';
import { Pattern } from './Pattern';

/**
 * Abstract syntax tree.
 */
@mixin(ListLike)
export class AST extends Node {
    [n: number]: Node;

    constructor() {
        super(1, 0);
    }
}

/**
 * ForInStatement node.
 */
@mixin(ObjectLike(['body[]', 'label', 'pattern', 'sequence', 'where']))
export class ForInStatement extends Node {
    public body: Node[];
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
 * @todo
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
    public version: [number, number, number] | null;

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
        version: [number, number, number] | null = null
    ) {
        super(line, col);
        this.platform = platform;
        this.version = version;
    }
}

/**
 * AvailabilityCondition node.
 * @todo
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
    public kind: 'let' | 'var';
    public pattern: Pattern;

    constructor(line: number, col: number, kind: 'let' | 'var' = 'let') {
        super(line, col);
        this.kind = kind;
    }
}

/**
 * ConditionList node.
 */
@mixin(ListLike)
export class ConditionList extends Node {
    [n: number]: Expression | AvailabilityCondition | CaseCondition | OptionalBindingCondition;
}

/**
 * WhileStatement node.
 */
@mixin(ObjectLike(['body[]', 'conditions', 'label']))
export class WhileStatement extends Node {
    public body: Node[];
    public conditions: ConditionList;
    public label: Identifier | null;
}

/**
 * RepeatWhileStatement node.
 */
@mixin(ObjectLike(['body[]', 'condition', 'label']))
export class RepeatWhileStatement extends Node {
    public body: Node[];
    public condition: Expression;
    public label: Identifier | null;
}

/**
 * IfStatement node.
 */
@mixin(ObjectLike(['body[]', 'condition', 'else', 'label']))
export class IfStatement extends Node {
    public body: Node[];
    public conditions: ConditionList;
    public else: ElseClause | null;
    public label: Identifier | null;
}

/**
 * ElseClause node.
 */
@mixin(ObjectLike(['body', 'if']))
export class ElseClause extends Node {
    public body: Node[];
    public if: IfStatement | null;
}

/**
 * GuardStatement node.
 */
@mixin(ObjectLike(['body[]', 'conditions']))
export class GuardStatement extends Node {
    public body: Node[];
    public conditions: ConditionList;
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
    public stmts: Node[];
}

/**
 * SwitchStatement node.
 */
@mixin(ObjectLike(['cases[]', 'expr', 'label']))
export class SwitchStatement extends Node {
    public cases: SwitchCase[];
    public expr: Expression;
    public label: Identifier | null;
}

/**
 * BreakStatement node.
 */
@mixin(ObjectLike(['label']))
export class BreakStatement extends Node {
    public label: Identifier | null;
}

/**
 * ContinueStatement node.
 */
@mixin(ObjectLike(['label']))
export class ContinueStatement extends Node {
    public label: Identifier | null;
}

/**
 * FallthroughStatement node.
 */
export class FallthroughStatement extends Node {}

/**
 * ReturnStatement node.
 */
@mixin(ObjectLike(['expr']))
export class ReturnStatement extends Node {
    public expr: Expression | null;
}

/**
 * ThrowStatement node.
 */
@mixin(ObjectLike(['expr']))
export class ThrowStatement extends Node {
    public expr: Expression;
}

/**
 * DeferStatement node.
 */
@mixin(ObjectLike(['body[]']))
export class DeferStatement extends Node {
    public body: Node[];
}

/**
 * CatchClause node.
 */
@mixin(ObjectLike(['body[]', 'pattern', 'where']))
export class CatchClause extends Node {
    public body: Node[];
    public pattern: Pattern | null;
    public where: Expression | null;
}

/**
 * DoStatement node.
 */
@mixin(ObjectLike(['body[]', 'catchClause[]']))
export class DoStatement extends Node {
    public body: Node[];
    public catchClauses: CatchClause[];
}

/**
 * ConditionalCompilationBlock node.
 * @todo
 */
export class ConditionalCompilationBlock extends Node {
    // todo
}

/**
 * DirectiveClause node.
 * @todo
 */
export class DirectiveClause extends Node {
    // todo
}

/**
 * PlatformCondition node.
 * @todo
 */
export class PlatformCondition extends Node {
    // todo
}

/**
 * LineControlStatement node.
 * @todo
 */
export class LineControlStatement extends Node {
    // todo
}
