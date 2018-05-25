import { ParserRuleContext } from 'antlr4ts';
import { AbstractParseTreeVisitor, ParseTree } from 'antlr4ts/tree';
import * as ast from './ast';
import * as SwiftParser from './generated/SwiftParser';
import { SwiftParserVisitor } from './generated/SwiftParserVisitor';
import { OperatorTable } from './OperatorTable';

function col(ctx: ParserRuleContext): number {
    return ctx.start.charPositionInLine;
}

function line(ctx: ParserRuleContext): number {
    return ctx.start.line;
}

/**
 * Parser for building Swift AST.
 */
export class SwiftASTBuilderVisitor extends AbstractParseTreeVisitor<any>
    implements SwiftParserVisitor<any> {
    private _operators: OperatorTable;

    constructor(operators: OperatorTable = new OperatorTable()) {
        super();
        this._operators = operators;
    }

    public defaultResult(): any {
        return null;
    }

    public visitAccessLevelModifier(
        ctx: SwiftParser.AccessLevelModifierContext
    ): ast.AccessLevelModifier {
        return ctx.text.replace(/\s/g, '') as any;
    }

    public visitAnyType(ctx: SwiftParser.AnyTypeContext): ast.AnyType {
        return new ast.AnyType(line(ctx), col(ctx));
    }

    public visitArgumentNames(ctx: SwiftParser.ArgumentNamesContext): ast.Identifier[] {
        return ctx
            .argumentName()
            .map(
                (nctx) =>
                    nctx.identifier()
                        ? this.visit(nctx.identifier()!)
                        : new ast.Wildcard(line(nctx), col(nctx))
            );
    }

    public visitArrayLiteral(ctx: SwiftParser.ArrayLiteralContext): ast.ArrayLiteral {
        const result = new ast.ArrayLiteral(line(ctx), col(ctx));
        for (const nctx of ctx.expression()) {
            result[result.length] = this.visit(nctx);
        }
        return result;
    }

    public visitArrayType(ctx: SwiftParser.ArrayTypeContext): ast.ArrayType {
        const result = new ast.ArrayType(line(ctx), col(ctx));
        result.type = this.visit(ctx.type());
        return result;
    }

    public visitAsPattern(ctx: SwiftParser.AsPatternContext): ast.AsTypePattern {
        const result = new ast.AsTypePattern(line(ctx), col(ctx));
        result.pattern = this.visit(ctx.pattern());
        result.type = this.visit(ctx.type());
        return result;
    }

    public visitAssignmentOperator(
        ctx: SwiftParser.AssignmentOperatorContext
    ): ast.AssignmentOperator {
        return new ast.AssignmentOperator(line(ctx), col(ctx));
    }

    public visitAttribute(ctx: SwiftParser.AttributeContext): ast.Attribute {
        // TODO: ast.Attribute
        return new ast.Attribute(line(ctx), col(ctx));
    }

    public visitAttributes(ctx: SwiftParser.AttributesContext): ast.Attribute[] {
        return ctx.attribute().map((nctx) => this.visit(nctx));
    }

    public visitAvailabilityCondition(
        ctx: SwiftParser.AvailabilityConditionContext
    ): ast.AvailabilityCondition {
        const result = new ast.AvailabilityCondition(line(ctx), col(ctx));
        for (const nctx of ctx.availabilityArgument()) {
            result[result.length] = new ast.AvailabilityArgument(
                line(nctx),
                col(nctx),
                nctx.platformName() ? (nctx.platformName()!.text as any) : '*',
                nctx.platformVersion()
                    ? nctx
                          .platformVersion()!
                          .text.split('.')
                          .map(Number)
                    : null
            );
        }
        return result;
    }

    public visitBalancedToken(ctx: SwiftParser.BalancedTokenContext): any {
        // TODO: ast.BalancedToken
        return this.visitChildren(ctx);
    }

    public visitBalancedTokens(ctx: SwiftParser.BalancedTokensContext): any {
        // TODO: ast.BalancedToken
        return this.visitChildren(ctx);
    }

    public visitBooleanLiteral(ctx: SwiftParser.BooleanLiteralContext): ast.Literal {
        return new ast.Literal(line(ctx), col(ctx), 'true' === ctx.text);
    }

    public visitBreakStatement(ctx: SwiftParser.BreakStatementContext): ast.BreakStatement {
        const result = new ast.BreakStatement(line(ctx), col(ctx));
        ctx.labelName() && (result.label = this.visit(ctx.labelName()!));
        return result;
    }

    public visitCaptureSpecifier(ctx: SwiftParser.CaptureSpecifierContext): ast.CaptureSpecifier {
        return ctx.text.replace(/\s/g, '') as any;
    }

    public visitCaseCondition(ctx: SwiftParser.CaseConditionContext): ast.CaseCondition {
        const result = new ast.CaseCondition(line(ctx), col(ctx));
        result.pattern = this.visit(ctx.pattern());
        result.initializer = this.visit(ctx.initializer());
        return result;
    }

    public visitClassDeclaration(
        ctx: SwiftParser.ClassDeclarationContext
    ): ast.ClassLikeDeclaration {
        const result = new ast.ClassLikeDeclaration(
            line(ctx),
            col(ctx),
            Boolean(ctx._FINAL),
            'class',
            ctx.accessLevelModifier() ? this.visit(ctx.accessLevelModifier()!) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.name = this.visit(ctx.className().identifier());
        ctx.genericParameterClause() && (result.params = this.visit(ctx.genericParameterClause()!));
        ctx.typeInheritanceClause() && (result.heritage = this.visit(ctx.typeInheritanceClause()!));
        ctx.genericWhereClause() && (result.where = this.visit(ctx.genericWhereClause()!));
        const nctx = ctx.classBody().classMembers();
        nctx &&
            (result.body = nctx
                .classMember()
                .map((nctx) => this.visit(nctx.declaration() || nctx.compilerControlStatement()!)));
        return result;
    }

    public visitClosureExpression(
        ctx: SwiftParser.ClosureExpressionContext
    ): ast.ClosureExpression {
        const result = new ast.ClosureExpression(line(ctx), col(ctx));
        const signature = ctx.closureSignature();
        if (signature) {
            signature.captureList() &&
                (result.captures = signature
                    .captureList()!
                    .captureListItem()
                    .map((nctx) => {
                        const result = new ast.CaptureItem(
                            line(nctx),
                            col(nctx),
                            nctx.captureSpecifier() ? this.visit(nctx.captureSpecifier()!) : null
                        );
                        result.expr = this.visit(nctx.expression());
                        return result;
                    }));
            const clause = signature.closureParameterClause();
            clause &&
                (result.params = clause.closureParameterList()
                    ? clause
                          .closureParameterList()!
                          .closureParameter()
                          .map((nctx) => this.visit(nctx))
                    : clause
                          .identifierList()!
                          .identifier()
                          .map((nctx) => {
                              const result = new ast.ClosureParameter(line(nctx), col(nctx));
                              result.name = this.visit(nctx);
                              return result;
                          }));
            // XXX: SwiftParser.ClosureSignatureContext._THROWS
            result.throws = Boolean(signature._THROWS);
            signature.functionResult() &&
                (result.return = this.visit(signature.functionResult()!.type()));
        }
        ctx.statements() && (result.stmts = this.visit(ctx.statements()!));
        return result;
    }

    public visitCodeBlock(ctx: SwiftParser.CodeBlockContext): ast.Statement[] {
        return ctx.statements() ? this.visit(ctx.statements()!) : [];
    }

    public visitCompilerControlStatement(
        ctx: SwiftParser.CompilerControlStatementContext
    ): ast.ConditionalCompilationBlock | ast.LineControlStatement {
        return this.visit(ctx.conditionalCompilationBlock() || ctx.lineControlStatement()!);
    }

    public visitCondition(ctx: SwiftParser.ConditionContext): ast.Condition {
        if (ctx.expression()) {
            return this.visit(ctx.expression()!);
        }
        if (ctx.availabilityCondition()) {
            return this.visit(ctx.availabilityCondition()!);
        }
        if (ctx.caseCondition()) {
            return this.visit(ctx.caseCondition()!);
        }
        return this.visit(ctx.optionalBindingCondition()!);
    }

    public visitConditionList(ctx: SwiftParser.ConditionListContext): ast.Condition[] {
        return ctx.condition().map((nctx) => this.visit(nctx));
    }

    public visitConditionalCompilationBlock(
        ctx: SwiftParser.ConditionalCompilationBlockContext
    ): ast.ConditionalCompilationBlock {
        // TODO: ast.ConditionalCompilationBlock
        return this.visitChildren(ctx);
    }

    public visitConditionalOperator(
        ctx: SwiftParser.ConditionalOperatorContext
    ): ast.ConditionalOperator {
        const result = new ast.ConditionalOperator(line(ctx), col(ctx));
        result.trueBranch = this.visit(ctx.expression());
        return result;
    }

    public visitConformanceRequirement(
        ctx: SwiftParser.ConformanceRequirementContext
    ): ast.Requirement {
        const result = new ast.Requirement(line(ctx), col(ctx), 'conformance');
        result.left = this.visit(ctx.typeIdentifier(0));
        result.right = this.visit(ctx.protocolCompositionType() || ctx.typeIdentifier(1));
        return result;
    }

    public visitConstantDeclaration(
        ctx: SwiftParser.ConstantDeclarationContext
    ): ast.VariableDeclaration {
        const result = new ast.VariableDeclaration(
            line(ctx),
            col(ctx),
            'let',
            ctx.declarationModifiers() ? this.visit(ctx.declarationModifiers()!) : []
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.bindings = this.visit(ctx.patternInitializerList());
        return result;
    }

    public visitContinueStatement(
        ctx: SwiftParser.ContinueStatementContext
    ): ast.ContinueStatement {
        const result = new ast.ContinueStatement(line(ctx), col(ctx));
        ctx.labelName() && (result.label = this.visit(ctx.labelName()!));
        return result;
    }

    public visitDeclaration(ctx: SwiftParser.DeclarationContext): ast.Declaration {
        if (ctx.importDeclaration()) {
            return this.visit(ctx.importDeclaration()!);
        }
        if (ctx.constantDeclaration()) {
            return this.visit(ctx.constantDeclaration()!);
        }
        if (ctx.variableDeclaration()) {
            return this.visit(ctx.variableDeclaration()!);
        }
        if (ctx.typealiasDeclaration()) {
            return this.visit(ctx.typealiasDeclaration()!);
        }
        if (ctx.functionDeclaration()) {
            return this.visit(ctx.functionDeclaration()!);
        }
        if (ctx.enumDeclaration()) {
            return this.visit(ctx.enumDeclaration()!);
        }
        if (ctx.structDeclaration()) {
            return this.visit(ctx.enumDeclaration()!);
        }
        if (ctx.classDeclaration()) {
            return this.visit(ctx.classDeclaration()!);
        }
        if (ctx.protocolDeclaration()) {
            return this.visit(ctx.protocolDeclaration()!);
        }
        if (ctx.initializerDeclaration()) {
            return this.visit(ctx.initializerDeclaration()!);
        }
        if (ctx.deinitializerDeclaration()) {
            return this.visit(ctx.deinitializerDeclaration()!);
        }
        if (ctx.extensionDeclaration()) {
            return this.visit(ctx.extensionDeclaration()!);
        }
        if (ctx.subscriptDeclaration()) {
            return this.visit(ctx.subscriptDeclaration()!);
        }
        if (ctx.operatorDeclaration()) {
            return this.visit(ctx.operatorDeclaration()!);
        }
        return this.visit(ctx.precedenceGroupDeclaration()!);
    }

    public visitDeclarationModifiers(
        ctx: SwiftParser.DeclarationModifiersContext
    ): ast.DeclarationModifier[] {
        return ctx.declarationModifier().map((nctx) => {
            if (nctx.captureSpecifier()) {
                return this.visit(nctx.captureSpecifier()!);
            }
            if (nctx.accessLevelModifier()) {
                return this.visit(nctx.accessLevelModifier()!);
            }
            if (nctx.mutationModifier()) {
                return this.visit(nctx.mutationModifier()!);
            }
            return nctx.text;
        });
    }

    public visitDeferStatement(ctx: SwiftParser.DeferStatementContext): ast.DeferStatement {
        const result = new ast.DeferStatement(line(ctx), col(ctx));
        result.body = this.visit(ctx.codeBlock());
        return result;
    }

    public visitDeinitializerDeclaration(
        ctx: SwiftParser.DeinitializerDeclarationContext
    ): ast.DeinitializerDeclaration {
        const result = new ast.DeinitializerDeclaration(line(ctx), col(ctx));
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.body = this.visit(ctx.codeBlock());
        return result;
    }

    public visitDictionaryLiteral(
        ctx: SwiftParser.DictionaryLiteralContext
    ): ast.DictionaryLiteral {
        const result = new ast.DictionaryLiteral(line(ctx), col(ctx));
        for (let i = 0; i < ctx._KEYS.length; i++) {
            const elem = new ast.DictionaryLiteralElement(line(ctx), col(ctx));
            elem.key = this.visit(ctx._KEYS[i]);
            elem.value = this.visit(ctx._VALUES[i]);
            result[result.length] = elem;
        }
        return result;
    }

    public visitDictionaryType(ctx: SwiftParser.DictionaryTypeContext): ast.DictionaryType {
        const result = new ast.DictionaryType(line(ctx), col(ctx));
        [result.key, result.value] = [this.visit(ctx._KEY), this.visit(ctx._VALUE)];
        return result;
    }

    public visitDoStatement(ctx: SwiftParser.DoStatementContext): ast.DoStatement {
        const result = new ast.DoStatement(line(ctx), col(ctx));
        result.body = this.visit(ctx.codeBlock());
        result.catchClauses = ctx.catchClause().map((nctx) => {
            const result = new ast.CatchClause(line(nctx), col(nctx));
            nctx.pattern() && (result.pattern = this.visit(nctx.pattern()!));
            nctx.whereClause() && (result.where = this.visit(nctx.whereClause()!));
            result.body = this.visit(nctx.codeBlock());
            return result;
        });
        return result;
    }

    public visitElementName(ctx: SwiftParser.ElementNameContext): ast.Identifier {
        return ctx.identifier()
            ? this.visit(ctx.identifier()!)
            : new ast.Wildcard(line(ctx), col(ctx));
    }

    public visitElseClause(ctx: SwiftParser.ElseClauseContext): ast.ElseClause {
        const result = new ast.ElseClause(line(ctx), col(ctx));
        ctx.codeBlock()
            ? (result.body = this.visit(ctx.codeBlock()!))
            : (result.if = this.visit(ctx.ifStatement()!));
        return result;
    }

    public visitElseDirectiveClause(ctx: SwiftParser.ElseDirectiveClauseContext): any {
        // TODO: ast.ElseDirectiveClause
        return this.visitChildren(ctx);
    }

    public visitElseifDirectiveClause(ctx: SwiftParser.ElseifDirectiveClauseContext): any {
        // TODO: ast.ElseifDirectiveClause
        return this.visitChildren(ctx);
    }

    public visitEnumCasePattern(ctx: SwiftParser.EnumCasePatternContext): ast.EnumCasePattern {
        const result = new ast.EnumCasePattern(line(ctx), col(ctx));
        ctx.typeIdentifier() && (result.enum = this.visit(ctx.typeIdentifier()!));
        result.case = this.visit(ctx.enumCaseName().identifier());
        ctx.tuplePattern() && (result.tuple = this.visit(ctx.tuplePattern()!));
        return result;
    }

    public visitEnumDeclaration(ctx: SwiftParser.EnumDeclarationContext): ast.EnumDeclaration {
        const result = new ast.EnumDeclaration(
            line(ctx),
            col(ctx),
            false,
            ctx.accessLevelModifier() ? this.visit(ctx.accessLevelModifier()!) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        if (ctx.unionStyleEnum()) {
            const nctx = ctx.unionStyleEnum()!;
            // XXX: SwiftParser.UnionStyleEnumContext._INDIRECT
            result.indirect = Boolean(nctx._INDIRECT);
            result.name = this.visit(nctx.enumName().identifier());
            nctx.genericParameterClause() &&
                (result.params = this.visit(nctx.genericParameterClause()!));
            nctx.typeInheritanceClause() &&
                (result.heritage = this.visit(nctx.typeInheritanceClause()!));
            nctx.genericWhereClause() && (result.where = this.visit(nctx.genericWhereClause()!));
            nctx.unionStyleEnumMembers() &&
                (result.members = nctx
                    .unionStyleEnumMembers()!
                    .unionStyleEnumMember()
                    .map((nctx) => {
                        if (nctx.declaration()) {
                            return this.visit(nctx.declaration()!);
                        }
                        if (nctx.compilerControlStatement()) {
                            return this.visit(nctx.compilerControlStatement()!);
                        }
                        const ctx = nctx.unionStyleEnumCaseClause()!;
                        const result = new ast.EnumCaseClause(
                            line(ctx),
                            col(ctx),
                            // XXX: SwiftParser.UnionStyleEnumCaseClauseContext._INDIRECT
                            Boolean(ctx._INDIRECT)
                        );
                        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
                        result.cases = ctx
                            .unionStyleEnumCaseList()
                            .unionStyleEnumCase()
                            .map((nctx) => {
                                const result = new ast.EnumCase(line(nctx), col(nctx));
                                result.name = this.visit(nctx.enumCaseName().identifier());
                                nctx.tupleType() &&
                                    (result.associatedValue = this.visit(nctx.tupleType()!));
                                return result;
                            });
                        return result;
                    }));
            return result;
        }
        const nctx = ctx.rawValueStyleEnum()!;
        result.name = this.visit(nctx.enumName().identifier());
        nctx.genericParameterClause() &&
            (result.params = this.visit(nctx.genericParameterClause()!));
        result.heritage = this.visit(nctx.typeInheritanceClause());
        nctx.genericWhereClause() && (result.where = this.visit(nctx.genericWhereClause()!));
        result.members = nctx
            .rawValueStyleEnumMembers()!
            .rawValueStyleEnumMember()
            .map((nctx) => {
                if (nctx.declaration()) {
                    return this.visit(nctx.declaration()!);
                }
                if (nctx.compilerControlStatement()) {
                    return this.visit(nctx.compilerControlStatement()!);
                }
                const ctx = nctx.rawValueStyleEnumCaseClause()!;
                const result = new ast.EnumCaseClause(line(ctx), col(ctx));
                ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
                result.cases = ctx
                    .rawValueStyleEnumCaseList()
                    .rawValueStyleEnumCase()
                    .map((nctx) => {
                        const result = new ast.EnumCase(line(nctx), col(nctx));
                        result.name = this.visit(nctx.enumCaseName().identifier());
                        if (nctx.rawValueAssignment()) {
                            const ctx = nctx.rawValueAssignment()!.rawValueLiteral();
                            if (ctx.numericLiteral()) {
                                result.rawValue = this.visit(ctx.numericLiteral()!);
                            } else if (ctx.booleanLiteral()) {
                                result.rawValue = this.visit(ctx.booleanLiteral()!);
                            } else {
                                const tk = ctx.STATIC_STRING_LITERAL()!.symbol;
                                result.rawValue = new ast.Literal(
                                    tk.line,
                                    tk.charPositionInLine,
                                    tk.text
                                );
                            }
                        }
                        return result;
                    });
                return result;
            });
        return result;
    }

    public visitExplicitMemberExpression(
        ctx: SwiftParser.ExplicitMemberExpressionContext
    ): ast.ExplicitMemberExpression {
        const result = new ast.ExplicitMemberExpression(line(ctx), col(ctx));
        result.expr = this.visit(ctx.postfixExpression());
        result.member = ctx.identifier()
            ? this.visit(ctx.identifier()!)
            : new ast.Identifier(
                  ctx.DECIMAL_DIGITS()!.symbol.line,
                  ctx.DECIMAL_DIGITS()!.symbol.charPositionInLine,
                  ctx.DECIMAL_DIGITS()!.text
              );
        ctx.genericArgumentClause() && (result.args = this.visit(ctx.genericArgumentClause()!));
        ctx.argumentNames() && (result.labels = this.visit(ctx.argumentNames()!));
        return result;
    }

    public visitExpression(ctx: SwiftParser.ExpressionContext): ast.Expression {
        const ops: ast.Operator[] = [];
        const exprs: ast.Expression[] = [];
        for (const nctx of ctx.binaryExpression()) {
            if (nctx.binaryOperator()) {
                // binary operator
                // push into stack
                const nop: ast.Operator = this.visit(nctx.binaryOperator()!.operator());
                for (
                    let op = ops.slice(-1)[0];
                    ops.length && this._operators.compare(op.str, nop.str) >= 0;
                    op = (ops.pop(), ops.slice(-1)[0])
                ) {
                    op.right = exprs.pop()!;
                    op.left = exprs.pop()!;
                    exprs.push(op);
                }
                exprs.push(this.visit(nctx.prefixExpression()!));
                ops.push(nop);
            } else {
                // not binary operator
                // build ast
                for (let op = ops.slice(-1)[0]; ops.length; op = (ops.pop(), ops.slice(-1)[0])) {
                    op.right = exprs.pop()!;
                    op.left = exprs.pop()!;
                    exprs.push(op);
                }
                let nexpr: ast.Expression;
                if (nctx.typeCastingOperator()) {
                    nexpr = this.visit(nctx.typeCastingOperator()!);
                    (nexpr as ast.IsTypeOperator | ast.AsTypeOperator).expr = exprs.pop()!;
                } else {
                    let pexpr: ast.Expression = this.visit(nctx.prefixExpression()!);
                    if (nctx.typeCastingOperator()) {
                        nexpr = this.visit(nctx.tryOperator()!);
                        (nexpr as ast.TryOperator).expr = pexpr;
                        pexpr = nexpr;
                    }
                    if (nctx.assignmentOperator()) {
                        nexpr = this.visit(nctx.assignmentOperator()!);
                        (nexpr as ast.AssignmentOperator).left = exprs.pop()!;
                        (nexpr as ast.AssignmentOperator).right = pexpr;
                    } else {
                        nexpr = this.visit(nctx.conditionalOperator()!);
                        (nexpr as ast.ConditionalOperator).condition = exprs.pop()!;
                        (nexpr as ast.ConditionalOperator).falseBranch = pexpr;
                    }
                }
                exprs.push(nexpr);
            }
        }
        let result = exprs.pop()!;
        if (ctx.tryOperator()) {
            const top: ast.TryOperator = this.visit(ctx.tryOperator()!);
            top.expr = result;
            result = top;
        }
        return result;
    }

    public visitExpressionList(ctx: SwiftParser.ExpressionListContext): ast.Expression[] {
        return ctx.expression().map((nctx) => this.visit(nctx));
    }

    public visitExpressionPattern(
        ctx: SwiftParser.ExpressionPatternContext
    ): ast.ExpressionPattern {
        const result = new ast.ExpressionPattern(line(ctx), col(ctx));
        result.expr = this.visit(ctx.expression());
        return result;
    }

    public visitExtensionDeclaration(
        ctx: SwiftParser.ExtensionDeclarationContext
    ): ast.ClassLikeDeclaration {
        const result = new ast.ClassLikeDeclaration(
            line(ctx),
            col(ctx),
            false,
            'extension',
            ctx.accessLevelModifier() ? this.visit(ctx.accessLevelModifier()!) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.extension = this.visit(ctx.typeIdentifier());
        ctx.typeInheritanceClause() && (result.heritage = this.visit(ctx.typeInheritanceClause()!));
        ctx.genericWhereClause() && (result.where = this.visit(ctx.genericWhereClause()!));
        const nctx = ctx.extensionBody().extensionMembers();
        nctx &&
            (result.body = nctx
                .extensionMember()
                .map((nctx) => this.visit(nctx.declaration() || nctx.compilerControlStatement()!)));
        return result;
    }

    public visitFallthroughStatement(
        ctx: SwiftParser.FallthroughStatementContext
    ): ast.FallthroughStatement {
        return new ast.FallthroughStatement(line(ctx), col(ctx));
    }

    public visitForInStatement(ctx: SwiftParser.ForInStatementContext): ast.ForInStatement {
        // XXX: SwiftParser.ForInStatementContext._CASE
        const result = new ast.ForInStatement(line(ctx), col(ctx), Boolean(ctx._CASE));
        result.pattern = this.visit(ctx.pattern());
        result.sequence = this.visit(ctx.expression());
        ctx.whereClause() && (result.where = this.visit(ctx.whereClause()!));
        result.body = this.visit(ctx.codeBlock());
        return result;
    }

    public visitForcedValueExpression(
        ctx: SwiftParser.ForcedValueExpressionContext
    ): ast.UnwrappedExpression {
        const result = new ast.UnwrappedExpression(line(ctx), col(ctx), '!');
        result.expr = this.visit(ctx.postfixExpression());
        if (result.expr instanceof ast.UnwrappedExpression && '!' === result.expr.mark) {
            // TODO: add error handler
            throw new Error('Implicitly unwrapped optionals are only allowed at top level');
        }
        return result;
    }

    public visitFunctionCallArgument(
        ctx: SwiftParser.FunctionCallArgumentContext
    ): ast.FunctionCallArgument {
        const result = new ast.FunctionCallArgument(line(ctx), col(ctx));
        ctx.identifier() && (result.label = this.visit(ctx.identifier()!));
        result.expr = this.visit(ctx.expression() || ctx.operator()!);
        return result;
    }

    public visitFunctionCallArgumentList(
        ctx: SwiftParser.FunctionCallArgumentListContext
    ): ast.FunctionCallArgument[] {
        return ctx.functionCallArgument().map((nctx) => this.visit(nctx));
    }

    public visitFunctionCallExpression(
        ctx: SwiftParser.FunctionCallExpressionContext
    ): ast.FunctionCallExpression {
        const result = new ast.FunctionCallExpression(line(ctx), col(ctx));
        result.expr = this.visit(ctx.postfixExpression());
        ctx.functionCallArgumentClause() &&
            ctx.functionCallArgumentClause()!.functionCallArgumentList() &&
            (result.args = this.visit(
                ctx.functionCallArgumentClause()!.functionCallArgumentList()!
            ));
        ctx.trailingClosure() &&
            (result.closure = this.visit(ctx.trailingClosure()!.closureExpression()));
        return result;
    }

    public visitFunctionDeclaration(
        ctx: SwiftParser.FunctionDeclarationContext
    ): ast.FunctionDeclaration {
        const result: ast.FunctionDeclaration = this.visit(ctx.functionHead());
        result.name = this.visit(ctx.functionName().identifier() || ctx.functionName().operator()!);
        ctx.genericParameterClause() &&
            (result.genericParams = this.visit(ctx.genericParameterClause()!));
        [result.params, result.kind, result.return] = this.visit(ctx.functionSignature());
        ctx.genericWhereClause() && (result.where = this.visit(ctx.genericWhereClause()!));
        ctx.functionBody() && (result.body = this.visit(ctx.functionBody()!.codeBlock()));
        return result;
    }

    public visitFunctionHead(ctx: SwiftParser.FunctionHeadContext): any {
        const result = new ast.FunctionDeclaration(
            line(ctx),
            col(ctx),
            null,
            ctx.declarationModifiers() ? this.visit(ctx.declarationModifiers()!) : []
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        return result;
    }

    public visitFunctionSignature(
        ctx: SwiftParser.FunctionSignatureContext
    ): [ast.Parameter[], 'throws' | 'rethrows' | null, ast.Type | null] {
        return [
            this.visit(ctx.parameterClause()),
            ctx._KIND ? (ctx._KIND.text as any) : null,
            ctx.functionResult() ? this.visit(ctx.functionResult()!.type()) : null
        ];
    }

    public visitFunctionType(ctx: SwiftParser.FunctionTypeContext): ast.FunctionType {
        const clause = ctx.functionTypeArgumentClause();
        const result = new ast.FunctionType(
            line(ctx),
            col(ctx),
            // XXX: SwiftParser.FunctionTypeContext._KIND
            ctx._KIND ? (ctx._KIND.text as any) : null,
            // XXX: SwiftParser.FunctionTypeArgumentClauseContext._ELLIPSIS
            Boolean(clause._ELLIPSIS)
        );
        clause.functionTypeArgumentList() &&
            (result.args = clause
                .functionTypeArgumentList()!
                .functionTypeArgument()
                .map((nctx) => this.visit(nctx)));
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.return = this.visit(ctx.type());
        return result;
    }

    public visitFunctionTypeArgument(
        ctx: SwiftParser.FunctionTypeArgumentContext
    ): ast.FunctionTypeArgument {
        // XXX: SwiftParser.FunctionTypeArgumentContext._INOUT
        const result = new ast.FunctionTypeArgument(line(ctx), col(ctx), Boolean(ctx._INOUT));
        ctx.argumentLabel() &&
            ctx.argumentLabel()!.identifier() &&
            (result.label = this.visit(ctx.argumentLabel()!.identifier()!));
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.type = this.visit(ctx.type());
        return result;
    }

    public visitGeneralPostfixExpression(
        ctx: SwiftParser.GeneralPostfixExpressionContext
    ): ast.Expression {
        const nctx = ctx.primaryExpression();
        if (nctx.identifier()) {
            const result = new ast.GenericIdentifier(line(nctx), col(nctx));
            result.identifier = this.visit(nctx.identifier()!);
            nctx.genericArgumentClause() &&
                (result.args = this.visit(nctx.genericArgumentClause()!));
            return result;
        }
        if (nctx.literalExpression()) {
            return this.visit(nctx.literalExpression()!);
        }
        if (nctx.selfExpression()) {
            return this.visit(nctx.selfExpression()!);
        }
        if (nctx.superclassExpression()) {
            return this.visit(nctx.superclassExpression()!);
        }
        if (nctx.closureExpression()) {
            return this.visit(nctx.closureExpression()!);
        }
        if (nctx.parenthesizedExpression()) {
            return this.visit(nctx.parenthesizedExpression()!);
        }
        if (nctx.tupleExpression()) {
            return this.visit(nctx.tupleExpression()!);
        }
        if (nctx.implicitMemberExpression()) {
            return this.visit(nctx.implicitMemberExpression()!);
        }
        if (nctx.wildcardExpression()) {
            return new ast.Wildcard(line(nctx), col(nctx));
        }
        if (nctx.keyPathExpression()) {
            return this.visit(nctx.keyPathExpression()!);
        }
        if (nctx.selectorExpression()) {
            return this.visit(nctx.selectorExpression()!);
        }
        return this.visit(nctx.keyPathStringExpression()!);
    }

    public visitGeneralType(ctx: SwiftParser.GeneralTypeContext): ast.TypeIdentifier {
        return this.visit(ctx.typeIdentifier());
    }

    public visitGenericArgumentClause(ctx: SwiftParser.GenericArgumentClauseContext): ast.Type[] {
        return ctx
            .genericArgumentList()
            .genericArgument()
            .map((nctx) => this.visit(nctx.type()));
    }

    public visitGenericParameterClause(
        ctx: SwiftParser.GenericParameterClauseContext
    ): ast.GenericParameter[] {
        return ctx
            .genericParameterList()
            .genericParameter()
            .map((nctx) => {
                const result = new ast.GenericParameter(line(nctx), col(nctx));
                result.name = this.visit(nctx.typeName().identifier());
                result.type = this.visit(nctx.typeIdentifier() || nctx.protocolCompositionType()!);
                return result;
            });
    }

    public visitGenericWhereClause(ctx: SwiftParser.GenericWhereClauseContext): ast.Requirement[] {
        return ctx
            .requirementList()
            .requirement()
            .map((nctx) =>
                this.visit(nctx.conformanceRequirement() || nctx.sameTypeRequirement()!)
            );
    }

    public visitGetterSetterBlock(ctx: SwiftParser.GetterSetterBlockContext): ast.Accessor[] {
        if (ctx.codeBlock()) {
            const getter = new ast.Accessor(line(ctx), col(ctx));
            getter.body = this.visit(ctx.codeBlock()!);
            return [getter];
        }
        const nctx = ctx.getterClause()!;
        const getter = new ast.Accessor(
            line(nctx),
            col(nctx),
            nctx.mutationModifier() ? this.visit(nctx.mutationModifier()!) : null
        );
        nctx.attributes() && (getter.attrs = this.visit(nctx.attributes()!));
        getter.body = this.visit(nctx.codeBlock());
        if (ctx.setterClause()) {
            const nctx = ctx.setterClause()!;
            const setter = new ast.Accessor(
                line(nctx),
                col(nctx),
                nctx.mutationModifier() ? this.visit(nctx.mutationModifier()!) : null
            );
            nctx.attributes() && (setter.attrs = this.visit(nctx.attributes()!));
            nctx.setterName() && (setter.param = this.visit(nctx.setterName()!));
            setter.body = this.visit(nctx.codeBlock());
            return [getter, setter];
        }
        return [getter];
    }

    public visitGetterSetterKeywordBlock(
        ctx: SwiftParser.GetterSetterKeywordBlockContext
    ): ast.Accessor[] {
        const nctx = ctx.getterKeywordClause()!;
        const getter = new ast.Accessor(
            line(nctx),
            col(nctx),
            nctx.mutationModifier() ? this.visit(nctx.mutationModifier()!) : null
        );
        nctx.attributes() && (getter.attrs = this.visit(nctx.attributes()!));
        if (ctx.setterKeywordClause()) {
            const nctx = ctx.setterKeywordClause()!;
            const setter = new ast.Accessor(
                line(nctx),
                col(nctx),
                nctx.mutationModifier() ? this.visit(nctx.mutationModifier()!) : null
            );
            nctx.attributes() && (setter.attrs = this.visit(nctx.attributes()!));
            return [getter, setter];
        }
        return [getter];
    }

    public visitGuardStatement(ctx: SwiftParser.GuardStatementContext): ast.GuardStatement {
        const result = new ast.GuardStatement(line(ctx), col(ctx));
        result.conditions = this.visit(ctx.conditionList());
        result.body = this.visit(ctx.codeBlock());
        return result;
    }

    public visitIdentifier(ctx: SwiftParser.IdentifierContext): ast.Identifier {
        return new ast.Identifier(
            line(ctx),
            col(ctx),
            ctx.QUOTED_IDENTIFIER() ? ctx.text.slice(1, ctx.text.length - 1) : ctx.text
        );
    }

    public visitIdentifierPattern(
        ctx: SwiftParser.IdentifierPatternContext
    ): ast.IdentifierPattern {
        const result = new ast.IdentifierPattern(line(ctx), col(ctx));
        result.identifier = this.visit(ctx.identifier());
        ctx.typeAnnotation() && (result.type = this.visit(ctx.typeAnnotation()!.type()));
        return result;
    }

    public visitIfDirectiveClause(ctx: SwiftParser.IfDirectiveClauseContext): any {
        // TODO: ast.IfDirectiveClause
        return this.visitChildren(ctx);
    }

    public visitIfStatement(ctx: SwiftParser.IfStatementContext): ast.IfStatement {
        const result = new ast.IfStatement(line(ctx), col(ctx));
        result.conditions = this.visit(ctx.conditionList());
        result.body = this.visit(ctx.conditionList());
        ctx.elseClause() && (result.else = this.visit(ctx.elseClause()!));
        return result;
    }

    public visitImplicitMemberExpression(
        ctx: SwiftParser.ImplicitMemberExpressionContext
    ): ast.ImplicitMemberExpression {
        const result = new ast.ImplicitMemberExpression(line(ctx), col(ctx));
        result.member = this.visit(ctx.identifier());
        return result;
    }

    public visitImplicitlyUnwrappedOptionalType(
        ctx: SwiftParser.ImplicitlyUnwrappedOptionalTypeContext
    ): ast.OptionalType {
        return new ast.OptionalType(line(ctx), col(ctx), '!');
    }

    public visitImportDeclaration(
        ctx: SwiftParser.ImportDeclarationContext
    ): ast.ImportDeclaration {
        const result = new ast.ImportDeclaration(
            line(ctx),
            col(ctx),
            ctx.importKind() ? (ctx.importKind()!.text as any) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.path = ctx
            .importPath()
            .importPathIdentifier()
            .map((nctx) => this.visit(nctx.identifier() || nctx.operator()!));
        return result;
    }

    public visitInOutExpression(ctx: SwiftParser.InOutExpressionContext): ast.InOutExpression {
        const result = new ast.InOutExpression(line(ctx), col(ctx));
        result.expr = this.visit(ctx.identifier());
        return result;
    }

    public visitInitializer(ctx: SwiftParser.InitializerContext): ast.Expression {
        return this.visit(ctx.expression());
    }

    public visitInitializerDeclaration(
        ctx: SwiftParser.InitializerDeclarationContext
    ): ast.InitializerDeclaration {
        const result: ast.InitializerDeclaration = this.visit(ctx.initializerHead());
        ctx.genericParameterClause() &&
            (result.genericParams = this.visit(ctx.genericParameterClause()!));
        result.params = this.visit(ctx.parameterClause());
        result.kind = ctx._KIND ? (ctx._KIND.text as any) : null;
        ctx.genericWhereClause() && (result.where = this.visit(ctx.genericWhereClause()!));
        result.body = this.visit(ctx.initializerBody().codeBlock());
        return result;
    }

    public visitInitializerExpression(
        ctx: SwiftParser.InitializerExpressionContext
    ): ast.ExplicitMemberExpression {
        const result = new ast.ExplicitMemberExpression(line(ctx), col(ctx));
        result.expr = this.visit(ctx.postfixExpression());
        result.member = new ast.Identifier(line(ctx), ctx._INIT.charPositionInLine, 'init');
        ctx.argumentNames() && (result.labels = this.visit(ctx.argumentNames()!));
        return result;
    }

    public visitInitializerHead(
        ctx: SwiftParser.InitializerHeadContext
    ): ast.InitializerDeclaration {
        const result = new ast.InitializerDeclaration(
            line(ctx),
            col(ctx),
            null,
            ctx.declarationModifiers() ? this.visit(ctx.declarationModifiers()!) : []
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        // XXX: SwiftParser.InitializerHeadContext._MARK
        result.mark = ctx._MARK ? (ctx._MARK.text as any) : null;
        return result;
    }

    public visitIsPattern(ctx: SwiftParser.IsPatternContext): ast.IsTypePattern {
        const result = new ast.IsTypePattern(line(ctx), col(ctx));
        result.type = this.visit(ctx.type());
        return result;
    }

    public visitKeyPathComponent(ctx: SwiftParser.KeyPathComponentContext): ast.KeyPathComponent {
        // TODO: ast.KeyPathComponent
        return new ast.KeyPathComponent(line(ctx), col(ctx));
    }

    public visitKeyPathExpression(
        ctx: SwiftParser.KeyPathExpressionContext
    ): ast.KeyPathExpression {
        // TODO: ast.KeyPathExpression
        return new ast.KeyPathExpression(line(ctx), col(ctx));
    }

    public visitKeyPathStringExpression(
        ctx: SwiftParser.KeyPathStringExpressionContext
    ): ast.KeyPathStringExpression {
        const result = new ast.KeyPathStringExpression(line(ctx), col(ctx));
        result.expr = this.visit(ctx.expression());
        return result;
    }

    public visitLabelName(ctx: SwiftParser.LabelNameContext): ast.Identifier {
        return this.visit(ctx.identifier());
    }

    public visitLineControlStatement(
        ctx: SwiftParser.LineControlStatementContext
    ): ast.LineControlStatement {
        // TODO: ast.LineControlStatement
        return this.visitChildren(ctx);
    }

    public visitLiteral(ctx: SwiftParser.LiteralContext): ast.Literal {
        if (ctx.numericLiteral()) {
            return this.visit(ctx.numericLiteral()!);
        }
        if (ctx.stringLiteral()) {
            return this.visit(ctx.stringLiteral()!);
        }
        if (ctx.booleanLiteral()) {
            return this.visit(ctx.booleanLiteral()!);
        }
        return this.visit(ctx.nilLiteral()!);
    }

    public visitLiteralExpression(
        ctx: SwiftParser.LiteralExpressionContext
    ): ast.Literal | ast.ArrayLiteral | ast.DictionaryLiteral | ast.PlaygroundLiteral {
        if (ctx.literal()) {
            return this.visit(ctx.literal()!);
        }
        if (ctx.arrayLiteral()) {
            return this.visit(ctx.arrayLiteral()!);
        }
        if (ctx.dictionaryLiteral()) {
            return this.visit(ctx.dictionaryLiteral()!);
        }
        if (ctx.playgroundLiteral()) {
            return this.visit(ctx.playgroundLiteral()!);
        }
        // FIXME: '#file' | '#line' | '#column' | '#function'
        return new ast.Literal(line(ctx), col(ctx));
    }

    public visitLoopStatement(
        ctx: SwiftParser.LoopStatementContext
    ): ast.ForInStatement | ast.WhileStatement | ast.RepeatWhileStatement {
        if (ctx.forInStatement()) {
            return this.visit(ctx.forInStatement()!);
        }
        if (ctx.whileStatement()) {
            return this.visit(ctx.whileStatement()!);
        }
        return this.visit(ctx.repeatWhileStatement()!);
    }

    public visitMetatypeType(ctx: SwiftParser.MetatypeTypeContext): ast.MetaType {
        const result = new ast.MetaType(line(ctx), col(ctx), ctx._KIND as any);
        result.ofType = this.visit(ctx.type());
        return result;
    }

    public visitMutationModifier(ctx: SwiftParser.MutationModifierContext): ast.MutationModifier {
        return ctx.text as any;
    }

    public visitNilLiteral(ctx: SwiftParser.NilLiteralContext): ast.Literal {
        return new ast.Literal(line(ctx), col(ctx));
    }

    public visitNumericLiteral(ctx: SwiftParser.NumericLiteralContext): ast.Literal {
        let number: number;
        if (ctx.text.startsWith('0x')) {
            const components = ctx.text.split(/[.p]/);
            number = Number(components[0]);
            number =
                undefined !== components[2]
                    ? (number +
                          Number(`0x${components[1]}`) /
                              Number(`0x${10 ** components[1].length}`)) *
                      2 ** Number(components[2])
                    : number * 2 ** Number(components[1]);
        } else {
            number = Number(ctx.text);
        }
        return new ast.Literal(line(ctx), col(ctx), number);
    }

    public visitOperator(ctx: SwiftParser.OperatorContext): ast.Operator {
        return new ast.Operator(line(ctx), col(ctx), ctx.text);
    }

    public visitOperatorDeclaration(ctx: SwiftParser.OperatorDeclarationContext): void {
        const nctx = ctx.infixOperatorDeclaration();
        if (nctx) {
            this._operators.addOperator(
                nctx.operator().text,
                nctx.infixOperatorGroup() && nctx.infixOperatorGroup()!.precedenceGroupName().text
            );
        }
    }

    public visitOptionalBindingCondition(
        ctx: SwiftParser.OptionalBindingConditionContext
    ): ast.OptionalBindingCondition {
        const result = new ast.OptionalBindingCondition(line(ctx), col(ctx), ctx.start.text as any);
        result.pattern = this.visit(ctx.pattern());
        result.initializer = this.visit(ctx.initializer());
        return result;
    }

    public visitOptionalChainingExpression(
        ctx: SwiftParser.OptionalChainingExpressionContext
    ): ast.UnwrappedExpression {
        const result = new ast.UnwrappedExpression(line(ctx), col(ctx), '?');
        result.expr = this.visit(ctx.postfixExpression());
        if (result.expr instanceof ast.UnwrappedExpression && '!' === result.expr.mark) {
            // TODO: add error handler
            throw new Error('Implicitly unwrapped optionals are only allowed at top level');
        }
        return result;
    }

    public visitOptionalPattern(ctx: SwiftParser.OptionalPatternContext): ast.OptionalPattern {
        const result = new ast.OptionalPattern(line(ctx), col(ctx));
        result.pattern = this.visit(ctx.identifier());
        return result;
    }

    public visitOptionalType(ctx: SwiftParser.OptionalTypeContext): ast.OptionalType {
        return new ast.OptionalType(line(ctx), col(ctx), '?');
    }

    public visitParameterClause(ctx: SwiftParser.ParameterClauseContext): ast.Parameter[] {
        return ctx.parameterList()
            ? ctx
                  .parameterList()!
                  .parameter()
                  .map((nctx) => {
                      const result = new ast.Parameter(
                          line(ctx),
                          col(ctx),
                          // XXX: SwiftParser.ParameterContext.typeAnnotation()._INOUT
                          Boolean(nctx.typeAnnotation()._INOUT),
                          // XXX: SwiftParser.ParameterContext._ELLIPSIS
                          Boolean(nctx._ELLIPSIS)
                      );
                      nctx.externalParameterName() &&
                          (result.label = this.visit(nctx.externalParameterName()!));
                      result.name = this.visit(nctx.localParameterName());
                      nctx.typeAnnotation().attributes() &&
                          (result.attrs = this.visit(nctx.typeAnnotation().attributes()!));
                      result.type = this.visit(nctx.typeAnnotation().type());
                      nctx.defaultArgumentClause() &&
                          (result.default = this.visit(nctx.defaultArgumentClause()!.expression()));
                      return result;
                  })
            : [];
    }

    public visitParenthesizedExpression(
        ctx: SwiftParser.ParenthesizedExpressionContext
    ): ast.Expression {
        return this.visit(ctx.expression());
    }

    public visitParenthesizedType(ctx: SwiftParser.ParenthesizedTypeContext): ast.Type {
        return this.visit(ctx.type());
    }

    public visitPatternInitializerList(
        ctx: SwiftParser.PatternInitializerListContext
    ): ast.PatternBinding[] {
        return ctx.patternInitializer().map((nctx) => {
            const result = new ast.PatternBinding(line(nctx), col(nctx));
            result.pattern = this.visit(nctx.pattern());
            nctx.initializer() && (result.initializer = this.visit(nctx.initializer()!));
            return result;
        });
    }

    public visitPlatformCondition(ctx: SwiftParser.PlatformConditionContext): any {
        // TODO: ast.PlatformCondition
        return this.visitChildren(ctx);
    }

    public visitPlaygroundLiteral(
        ctx: SwiftParser.PlaygroundLiteralContext
    ): ast.PlaygroundLiteral {
        // TODO: ast.PlaygroundLiteral
        return new ast.PlaygroundLiteral(line(ctx), col(ctx));
    }

    public visitPostfixOperatorExpression(
        ctx: SwiftParser.PostfixOperatorExpressionContext
    ): ast.Operator {
        const result: ast.Operator = this.visit(ctx.postfixOperator().operator());
        result.left = this.visit(ctx.postfixExpression());
        return result;
    }

    public visitPrecedenceGroupDeclaration(
        ctx: SwiftParser.PrecedenceGroupDeclarationContext
    ): void {
        const name = ctx.precedenceGroupName().text;
        let assignment: boolean = false;
        let associativity: 'left' | 'right' | null = null;
        const higher_than: string[] = [];
        const lower_than: string[] = [];
        if (ctx.precedenceGroupAttributes()) {
            for (const nctx of ctx.precedenceGroupAttributes()!.precedenceGroupAttribute()) {
                if (nctx.precedenceGroupRelation()) {
                    const ctx = nctx.precedenceGroupRelation()!;
                    ('higherThan' === ctx.IDENTIFIER().text ? higher_than : lower_than).push(
                        ...ctx
                            .precedenceGroupNames()
                            .precedenceGroupName()
                            .map((nctx) => nctx.text)
                    );
                } else if (nctx.precedenceGroupAssignment()) {
                    assignment = 'true' === nctx.precedenceGroupAssignment()!.booleanLiteral().text;
                } else {
                    associativity = { left: 'left', right: 'right', none: null }[
                        nctx.precedenceGroupAssociativity()!._VALUE.text!
                    ];
                }
            }
        }
        this._operators.addPrecedenceGroup(
            name,
            assignment,
            associativity,
            higher_than,
            lower_than
        );
    }

    public visitPrefixExpression(ctx: SwiftParser.PrefixExpressionContext): ast.Expression {
        if (ctx.inOutExpression()) {
            return this.visit(ctx.inOutExpression()!);
        }
        const expr: ast.Expression = this.visit(ctx.postfixExpression()!);
        if (ctx.prefixOperator()) {
            const op: ast.Operator = this.visit(ctx.prefixOperator()!.operator());
            op.right = expr;
            return op;
        }
        return expr;
    }

    public visitProgram(ctx: SwiftParser.ProgramContext): ast.Program {
        const program = new ast.Program();
        this.visit(ctx.statements()).forEach((stmt, index) => {
            program[index] = stmt;
        });
        return program;
    }

    public visitProtocolCompositionType(
        ctx: SwiftParser.ProtocolCompositionTypeContext
    ): ast.ProtocolCompositionType {
        const result = new ast.ProtocolCompositionType(line(ctx), col(ctx));
        for (const nctx of ctx.typeIdentifier()) {
            result[result.length] = this.visit(nctx);
        }
        return result;
    }

    public visitProtocolCompositionTypeAlternative(
        ctx: SwiftParser.ProtocolCompositionTypeAlternativeContext
    ): ast.ProtocolCompositionType {
        return this.visit(ctx.protocolCompositionType());
    }

    public visitProtocolDeclaration(
        ctx: SwiftParser.ProtocolDeclarationContext
    ): ast.ClassLikeDeclaration {
        const result = new ast.ClassLikeDeclaration(
            line(ctx),
            col(ctx),
            false,
            'protocol',
            ctx.accessLevelModifier() ? this.visit(ctx.accessLevelModifier()!) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.name = this.visit(ctx.protocolName().identifier());
        ctx.typeInheritanceClause() && (result.heritage = this.visit(ctx.typeInheritanceClause()!));
        ctx.genericWhereClause() && (result.where = this.visit(ctx.genericWhereClause()!));
        const nctx = ctx.protocolBody().protocolMembers();
        nctx &&
            (result.body = nctx.protocolMember().map((nctx) => {
                if (nctx.compilerControlStatement()) {
                    return this.visit(nctx.compilerControlStatement()!);
                }
                const ctx = nctx.protocolMemberDeclaration()!;
                if (ctx.protocolPropertyDeclaration()) {
                    const nctx = ctx.protocolPropertyDeclaration()!;
                    const result: ast.VariableDeclaration = this.visit(
                        nctx.variableDeclarationHead()
                    );
                    const binding = new ast.PatternBinding(
                        line(nctx.variableName()),
                        col(nctx.variableName())
                    );
                    result.bindings[0] = binding;
                    const pattern = new ast.IdentifierPattern(binding.line, binding.col);
                    pattern.identifier = this.visit(nctx.variableName().identifier());
                    binding.pattern = pattern;
                    binding.type = this.visit(nctx.typeAnnotation()!.type());
                    binding.accessors = this.visit(nctx.getterSetterKeywordBlock());
                    return result;
                }
                if (ctx.protocolMethodDeclaration()) {
                    const nctx = ctx.protocolMethodDeclaration()!;
                    const result: ast.FunctionDeclaration = this.visit(nctx.functionHead());
                    result.name = this.visit(
                        nctx.functionName().identifier() || nctx.functionName().operator()!
                    );
                    nctx.genericParameterClause() &&
                        (result.genericParams = this.visit(nctx.genericParameterClause()!));
                    [result.params, result.kind, result.return] = this.visit(
                        nctx.functionSignature()
                    );
                    nctx.genericWhereClause() &&
                        (result.where = this.visit(nctx.genericWhereClause()!));
                    return result;
                }
                if (ctx.protocolInitializerDeclaration()) {
                    const nctx = ctx.protocolInitializerDeclaration()!;
                    const result: ast.InitializerDeclaration = this.visit(nctx.initializerHead());
                    nctx.genericParameterClause() &&
                        (result.genericParams = this.visit(nctx.genericParameterClause()!));
                    result.params = this.visit(nctx.parameterClause());
                    // XXX: SwiftParser.ProtocolInitializerDeclarationContext._KIND
                    result.kind = nctx._KIND ? (nctx._KIND.text as any) : null;
                    nctx.genericWhereClause() &&
                        (result.where = this.visit(nctx.genericWhereClause()!));
                    return result;
                }
                if (ctx.protocolSubscriptDeclaration()) {
                    const nctx = ctx.protocolSubscriptDeclaration()!;
                    const result: ast.SubscriptDeclaration = this.visit(nctx.subscriptHead());
                    result.return = this.visit(nctx.subscriptResult().type());
                    nctx.genericWhereClause() &&
                        (result.where = this.visit(nctx.genericWhereClause()!));
                    result.accessors = this.visit(nctx.getterSetterKeywordBlock());
                    return result;
                }
                if (ctx.protocolAssociatedTypeDeclaration()) {
                    const nctx = ctx.protocolAssociatedTypeDeclaration()!;
                    const result = new ast.ProtocolAssociatedTypeDeclaration(
                        line(ctx),
                        col(ctx),
                        nctx.accessLevelModifier() ? this.visit(nctx.accessLevelModifier()!) : null
                    );
                    nctx.attributes() && (result.attrs = this.visit(nctx.attributes()!));
                    result.name = this.visit(nctx.typealiasName().identifier());
                    nctx.typeInheritanceClause() &&
                        (result.heritage = this.visit(nctx.typeInheritanceClause()!));
                    nctx.typealiasAssignment() &&
                        (result.type = this.visit(nctx.typealiasAssignment()!.type()));
                    nctx.genericWhereClause() &&
                        (result.where = this.visit(nctx.genericWhereClause()!));
                }
                return this.visit(ctx.typealiasDeclaration()!);
            }));
        return result;
    }

    public visitRepeatWhileStatement(
        ctx: SwiftParser.RepeatWhileStatementContext
    ): ast.RepeatWhileStatement {
        const result = new ast.RepeatWhileStatement(line(ctx), col(ctx));
        result.body = this.visit(ctx.codeBlock());
        result.condition = this.visit(ctx.expression());
        return result;
    }

    public visitReturnStatement(ctx: SwiftParser.ReturnStatementContext): ast.ReturnStatement {
        const result = new ast.ReturnStatement(line(ctx), col(ctx));
        ctx.expression() && (result.expr = this.visit(ctx.expression()!));
        return result;
    }

    public visitSameTypeRequirement(ctx: SwiftParser.SameTypeRequirementContext): ast.Requirement {
        const result = new ast.Requirement(line(ctx), col(ctx), 'same-type');
        result.left = this.visit(ctx.typeIdentifier());
        result.right = this.visit(ctx.type());
        return result;
    }

    public visitSelectorExpression(
        ctx: SwiftParser.SelectorExpressionContext
    ): ast.SelectorExpression {
        const label = ctx.functionCallArgument().identifier();
        const result = new ast.SelectorExpression(
            line(ctx),
            col(ctx),
            label ? (label.text as any) : null
        );
        result.expr = this.visit(ctx.functionCallArgument().expression()!);
        return result;
    }

    public visitSelfExpression(ctx: SwiftParser.SelfExpressionContext): ast.SelfExpression {
        // XXX: currently using ExplicitMemberExpression
        return new ast.SelfExpression(line(ctx), col(ctx));
    }

    public visitSelfType(ctx: SwiftParser.SelfTypeContext): ast.SelfType {
        return new ast.SelfType(line(ctx), col(ctx));
    }

    public visitSetterName(ctx: SwiftParser.SetterNameContext): ast.Identifier {
        return this.visit(ctx.identifier());
    }

    public visitStatement(ctx: SwiftParser.StatementContext): ast.Statement {
        if (ctx.expression()) {
            return this.visit(ctx.expression()!);
        }
        if (ctx.declaration()) {
            return this.visit(ctx.declaration()!);
        }
        if (ctx.loopStatement()) {
            return this.visit(ctx.loopStatement()!);
        }
        if (ctx.branchStatement()) {
            const nctx = ctx.branchStatement()!;
            if (nctx.ifStatement()) {
                return this.visit(nctx.ifStatement()!);
            }
            if (nctx.guardStatement()) {
                return this.visit(nctx.guardStatement()!);
            }
            return this.visit(nctx.switchStatement()!);
        }
        if (ctx.labeledStatement()) {
            const nctx = ctx.labeledStatement()!;
            let stmt:
                | ast.ForInStatement
                | ast.WhileStatement
                | ast.RepeatWhileStatement
                | ast.IfStatement
                | ast.SwitchStatement
                | ast.DoStatement;
            if (nctx.loopStatement()) {
                stmt = this.visit(nctx.loopStatement()!);
            } else if (nctx.ifStatement()) {
                stmt = this.visit(nctx.ifStatement()!);
            } else if (nctx.switchStatement()) {
                stmt = this.visit(nctx.switchStatement()!);
            } else {
                stmt = this.visit(nctx.doStatement()!);
            }
            stmt.label = this.visit(nctx.statementLabel().labelName());
            return stmt;
        }
        if (ctx.controlTransferStatement()) {
            const nctx = ctx.controlTransferStatement()!;
            if (nctx.breakStatement()) {
                return this.visit(nctx.breakStatement()!);
            }
            if (nctx.continueStatement()) {
                return this.visit(nctx.continueStatement()!);
            }
            if (nctx.fallthroughStatement()) {
                return this.visit(nctx.fallthroughStatement()!);
            }
            if (nctx.returnStatement()) {
                return this.visit(nctx.returnStatement()!);
            }
            return this.visit(nctx.throwStatement()!);
        }
        if (ctx.deferStatement()) {
            return this.visit(ctx.deferStatement()!);
        }
        if (ctx.doStatement()) {
            return this.visit(ctx.doStatement()!);
        }
        return this.visit(ctx.compilerControlStatement()!);
    }

    public visitStatements(ctx: SwiftParser.StatementsContext): ast.Statement[] {
        return ctx.statement().map((nctx) => this.visit(nctx));
    }

    public visitStringLiteral(ctx: SwiftParser.StringLiteralContext): ast.Literal {
        const result = new ast.Literal(line(ctx), col(ctx));
        const text = ctx.text.slice(1, ctx.text.length - 1);
        if (ctx.STATIC_STRING_LITERAL()) {
            result.value = text;
        } else {
            // TODO: implement interpolated string literal
        }
        return result;
    }

    public visitStructDeclaration(
        ctx: SwiftParser.StructDeclarationContext
    ): ast.ClassLikeDeclaration {
        const result = new ast.ClassLikeDeclaration(
            line(ctx),
            col(ctx),
            false,
            'struct',
            ctx.accessLevelModifier() ? this.visit(ctx.accessLevelModifier()!) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.name = this.visit(ctx.structName().identifier());
        ctx.genericParameterClause() && (result.params = this.visit(ctx.genericParameterClause()!));
        ctx.typeInheritanceClause() && (result.heritage = this.visit(ctx.typeInheritanceClause()!));
        ctx.genericWhereClause() && (result.where = this.visit(ctx.genericWhereClause()!));
        const nctx = ctx.structBody().structMembers();
        nctx &&
            (result.body = nctx
                .structMember()
                .map((nctx) => this.visit(nctx.declaration() || nctx.compilerControlStatement()!)));
        return result;
    }

    public visitSubscriptDeclaration(
        ctx: SwiftParser.SubscriptDeclarationContext
    ): ast.SubscriptDeclaration {
        const result: ast.SubscriptDeclaration = this.visit(ctx.subscriptHead());
        result.return = this.visit(ctx.subscriptResult().type());
        ctx.genericWhereClause() && (result.genericParams = this.visit(ctx.genericWhereClause()!));
        result.accessors = this.visit(ctx.getterSetterBlock() || ctx.getterSetterKeywordBlock()!);
        return result;
    }

    public visitSubscriptExpression(
        ctx: SwiftParser.SubscriptExpressionContext
    ): ast.SubscriptExpression {
        const result = new ast.SubscriptExpression(line(ctx), col(ctx));
        result.expr = this.visit(ctx.postfixExpression());
        result.args = this.visit(ctx.functionCallArgumentList());
        return result;
    }

    public visitSubscriptHead(ctx: SwiftParser.SubscriptHeadContext): ast.SubscriptDeclaration {
        const result = new ast.SubscriptDeclaration(
            line(ctx),
            col(ctx),
            ctx.declarationModifiers() ? this.visit(ctx.declarationModifiers()!) : []
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        ctx.genericParameterClause() &&
            (result.genericParams = this.visit(ctx.genericParameterClause()!));
        result.params = this.visit(ctx.parameterClause());
        return result;
    }

    public visitSuperclassExpression(
        ctx: SwiftParser.SuperclassExpressionContext
    ): ast.SuperclassExpression {
        // XXX: currently using ExplicitMemberExpression
        return new ast.SuperclassExpression(line(ctx), col(ctx));
    }

    public visitSwitchStatement(ctx: SwiftParser.SwitchStatementContext): ast.SwitchStatement {
        const result = new ast.SwitchStatement(line(ctx), col(ctx));
        result.condition = this.visit(ctx.expression());
        result.cases = ctx.switchCase().map((nctx) => {
            const result = new ast.SwitchCase(line(nctx), col(nctx));
            nctx.caseLabel() &&
                (result.caseItems = ((ctx) => {
                    const result: ast.CaseItem[] = [];
                    for (let nctx: typeof ctx | undefined = ctx; nctx; nctx = nctx.caseItemList()) {
                        const item = new ast.CaseItem(line(nctx), col(nctx));
                        item.pattern = this.visit(nctx.pattern());
                        nctx.whereClause() && (item.where = this.visit(nctx.whereClause()!));
                        result.push(item);
                    }
                    return result;
                })(nctx.caseLabel()!.caseItemList()));
            result.stmts = this.visit(nctx.statements());
            return result;
        });
        return result;
    }

    public visitThrowStatement(ctx: SwiftParser.ThrowStatementContext): ast.ThrowStatement {
        const result = new ast.ThrowStatement(line(ctx), col(ctx));
        result.expr = this.visit(ctx.expression());
        return result;
    }

    public visitTryOperator(ctx: SwiftParser.TryOperatorContext): ast.TryOperator {
        // XXX: SwiftParser.TryOperatorContext._MARK
        return new ast.TryOperator(line(ctx), col(ctx), ctx._MARK ? (ctx._MARK.text as any) : null);
    }

    public visitTupleExpression(ctx: SwiftParser.TupleExpressionContext): ast.TupleExpression {
        const result = new ast.TupleExpression(line(ctx), col(ctx));
        for (const nctx of ctx.tupleElement()) {
            const elem = new ast.TupleElement(line(nctx), col(nctx));
            nctx.identifier() && (elem.label = this.visit(nctx.identifier()!));
            elem.expr = this.visit(nctx.expression());
            result[result.length] = elem;
        }
        return result;
    }

    public visitTuplePattern(ctx: SwiftParser.TuplePatternContext): ast.TuplePattern {
        const result = new ast.TuplePattern(line(ctx), col(ctx));
        ctx.tuplePatternElementList() &&
            (result.elems = ctx
                .tuplePatternElementList()!
                .tuplePatternElement()
                .map((nctx) => {
                    const result = new ast.TuplePatternElement(line(nctx), col(nctx));
                    nctx.identifier() && (result.label = this.visit(nctx.identifier()!));
                    result.pattern = this.visit(nctx.pattern());
                    return result;
                }));
        return result;
    }

    public visitTuplePatternAlternative(
        ctx: SwiftParser.TuplePatternAlternativeContext
    ): ast.TuplePattern {
        const result = this.visit(ctx.tuplePattern());
        ctx.typeAnnotation() && (result.type = this.visit(ctx.typeAnnotation()!.type()));
        return result;
    }

    public visitTupleType(ctx: SwiftParser.TupleTypeContext): ast.TupleType {
        const result = new ast.TupleType(line(ctx), col(ctx));
        for (const nctx of ctx.tupleTypeElement()) {
            result[result.length] = this.visit(nctx);
        }
        return result;
    }

    public visitTupleTypeAlternative(ctx: SwiftParser.TupleTypeAlternativeContext): ast.TupleType {
        return this.visit(ctx.tupleType());
    }

    public visitTupleTypeElement(ctx: SwiftParser.TupleTypeElementContext): ast.TupleTypeElement {
        const result = new ast.TupleTypeElement(line(ctx), col(ctx));
        if (ctx.elementName()) {
            result.name = this.visit(ctx.elementName()!);
            result.type = this.visit(ctx.typeAnnotation()!.type());
        } else {
            result.type = this.visit(ctx.type()!);
        }
        return result;
    }

    public visitTypeCastingOperator(
        ctx: SwiftParser.TypeCastingOperatorContext
    ): ast.IsTypeOperator | ast.AsTypeOperator {
        let result: ast.IsTypeOperator | ast.AsTypeOperator;
        result =
            'is' === ctx.start.text
                ? new ast.IsTypeOperator(line(ctx), col(ctx))
                : new ast.AsTypeOperator(
                      line(ctx),
                      col(ctx),
                      // XXX: SwiftParser.TypeCastingOperatorContext._MARK
                      ctx._MARK ? (ctx._MARK.text as any) : null
                  );
        result.type = this.visit(ctx.type());
        return result;
    }

    public visitTypeIdentifier(ctx: SwiftParser.TypeIdentifierContext): ast.TypeIdentifier {
        const result = new ast.TypeIdentifier(line(ctx), col(ctx));
        for (let nctx: typeof ctx | undefined = ctx; nctx; nctx = nctx.typeIdentifier()) {
            const item = new ast.GenericIdentifier(line(nctx), col(nctx));
            nctx.genericArgumentClause() && (item.args = this.visit(nctx.genericArgumentClause()!));
            item.identifier = this.visit(nctx.typeName().identifier());
            result[result.length] = item;
        }
        return result;
    }

    public visitTypeInheritanceClause(ctx: SwiftParser.TypeInheritanceClauseContext): ast.Type[] {
        return ctx.typeIdentifier().map((nctx) => this.visit(nctx));
    }

    public visitTypealiasDeclaration(
        ctx: SwiftParser.TypealiasDeclarationContext
    ): ast.TypealiasDeclaration {
        const result = new ast.TypealiasDeclaration(
            line(ctx),
            col(ctx),
            ctx.accessLevelModifier() ? this.visit(ctx.accessLevelModifier()!) : null
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        result.name = this.visit(ctx.typealiasName().identifier());
        ctx.genericParameterClause() && (result.params = this.visit(ctx.genericParameterClause()!));
        result.type = this.visit(ctx.typealiasAssignment().type());
        return result;
    }

    public visitValueBindingPattern(
        ctx: SwiftParser.ValueBindingPatternContext
    ): ast.ValueBindingPattern {
        const result = new ast.ValueBindingPattern(line(ctx), col(ctx), ctx._KIND.text as any);
        result.value = this.visit(ctx.pattern());
        return result;
    }

    public visitVariableDeclaration(
        ctx: SwiftParser.VariableDeclarationContext
    ): ast.VariableDeclaration {
        const result: ast.VariableDeclaration = this.visit(ctx.variableDeclarationHead());
        if (ctx.patternInitializerList()) {
            result.bindings = this.visit(ctx.patternInitializerList()!);
            return result;
        }
        const binding = new ast.PatternBinding(line(ctx.variableName()!), col(ctx.variableName()!));
        result.bindings[0] = binding;
        const pattern = new ast.IdentifierPattern(binding.line, binding.col);
        pattern.identifier = this.visit(ctx.variableName()!.identifier());
        binding.pattern = pattern;
        if (ctx.initializer()) {
            binding.initializer = this.visit(ctx.initializer()!);
            binding.accessors = this.visit(ctx.willSetDidSetBlock()!);
            return result;
        }
        binding.type = this.visit(ctx.typeAnnotation()!.type());
        if (ctx.getterSetterBlock()) {
            binding.accessors = this.visit(ctx.getterSetterBlock()!);
            return result;
        }
        if (ctx.getterSetterKeywordBlock()) {
            binding.accessors = this.visit(ctx.getterSetterKeywordBlock()!);
            return result;
        }
        binding.initializer = this.visit(ctx.initializer()!);
        binding.accessors = this.visit(ctx.willSetDidSetBlock()!);
        return result;
    }

    public visitVariableDeclarationHead(
        ctx: SwiftParser.VariableDeclarationHeadContext
    ): ast.VariableDeclaration {
        const result = new ast.VariableDeclaration(
            line(ctx),
            col(ctx),
            'var',
            ctx.declarationModifiers() ? this.visit(ctx.declarationModifiers()!) : []
        );
        ctx.attributes() && (result.attrs = this.visit(ctx.attributes()!));
        return result;
    }

    public visitWhereClause(ctx: SwiftParser.WhereClauseContext): ast.Expression {
        return this.visit(ctx.expression());
    }

    public visitWhileStatement(ctx: SwiftParser.WhileStatementContext): ast.WhileStatement {
        const result = new ast.WhileStatement(line(ctx), col(ctx));
        result.conditions = this.visit(ctx.conditionList());
        result.body = this.visit(ctx.codeBlock());
        return result;
    }

    public visitWildcardPattern(ctx: SwiftParser.WildcardPatternContext): ast.IdentifierPattern {
        const result = new ast.IdentifierPattern(line(ctx), col(ctx));
        result.identifier = new ast.Wildcard(line(ctx), col(ctx));
        ctx.typeAnnotation() && (result.type = this.visit(ctx.typeAnnotation()!.type()));
        return result;
    }

    public visitWillSetDidSetBlock(ctx: SwiftParser.WillSetDidSetBlockContext): ast.Accessor[] {
        const nctx = ctx.willSetClause()!;
        const will = new ast.Accessor(line(nctx), col(nctx));
        nctx.attributes() && (will.attrs = this.visit(nctx.attributes()!));
        nctx.setterName() && (will.param = this.visit(nctx.setterName()!));
        will.body = this.visit(nctx.codeBlock());
        if (ctx.didSetClause()) {
            const nctx = ctx.didSetClause()!;
            const did = new ast.Accessor(line(nctx), col(nctx));
            nctx.attributes() && (did.attrs = this.visit(nctx.attributes()!));
            nctx.setterName() && (did.param = this.visit(nctx.setterName()!));
            did.body = this.visit(nctx.codeBlock());
            return [will, did];
        }
        return [will];
    }
}
