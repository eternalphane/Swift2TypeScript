import { override } from '../Decorator';
import * as ast from './ast';

/**
 * Visitor of Swift abstract syntax tree.
 */
export abstract class SwiftASTVisitor {
    /**
     * The default implementation calls {@link ast.Node#accept} on the specified node.
     */
    public visit(node: ast.Node): any {
        return node.accept(this);
    }

    public visitAccessor(node: ast.Accessor): any {
        return null;
    }

    public visitAnyType(node: ast.AnyType): any {
        return null;
    }

    public visitArrayLiteral(node: ast.ArrayLiteral): any {
        return null;
    }

    public visitArrayType(node: ast.ArrayType): any {
        return null;
    }

    public visitAsTypeOperator(node: ast.AsTypeOperator): any {
        return null;
    }

    public visitAsTypePattern(node: ast.AsTypePattern): any {
        return null;
    }

    public visitAssignmentOperator(node: ast.AssignmentOperator): any {
        return null;
    }

    public visitAttribute(node: ast.Attribute): any {
        return null;
    }

    public visitAvailabilityArgument(node: ast.AvailabilityArgument): any {
        return null;
    }

    public visitAvailabilityCondition(node: ast.AvailabilityCondition): any {
        return null;
    }

    public visitBreakStatement(node: ast.BreakStatement): any {
        return null;
    }

    public visitCaptureItem(node: ast.CaptureItem): any {
        return null;
    }

    public visitCaseCondition(node: ast.CaseCondition): any {
        return null;
    }

    public visitCaseItem(node: ast.CaseItem): any {
        return null;
    }

    public visitCatchClause(node: ast.CatchClause): any {
        return null;
    }

    /**
     * The default implementation tranverses the specified node and calls
     * {@link SwiftASTVisitor#visit} on all leaf nodes.
     */
    public visitChildren(node: ast.Node): any {
        if (!node.length) {
            return this.visit(node);
        }
        for (let i = 0; i < node.length; ++i) {
            this.visitChildren(node[i]);
        }
    }

    public visitClassDeclaration(node: ast.ClassLikeDeclaration): any {
        return null;
    }

    public visitClosureExpression(node: ast.ClosureExpression): any {
        return null;
    }

    public visitClosureParameter(node: ast.ClosureParameter): any {
        return null;
    }

    public visitConditionalCompilationBlock(node: ast.ConditionalCompilationBlock): any {
        return null;
    }

    public visitConditionalOperator(node: ast.ConditionalOperator): any {
        return null;
    }

    public visitContinueStatement(node: ast.ContinueStatement): any {
        return null;
    }

    public visitDeferStatement(node: ast.DeferStatement): any {
        return null;
    }

    public visitDeinitializerDeclaration(node: ast.DeinitializerDeclaration): any {
        return null;
    }

    public visitDictionaryLiteral(node: ast.DictionaryLiteral): any {
        return null;
    }

    public visitDictionaryLiteralElement(node: ast.DictionaryLiteralElement): any {
        return null;
    }

    public visitDictionaryType(node: ast.DictionaryType): any {
        return null;
    }

    public visitDirectiveClause(node: ast.DirectiveClause): any {
        return null;
    }

    public visitDoStatement(node: ast.DoStatement): any {
        return null;
    }

    public visitElseClause(node: ast.ElseClause): any {
        return null;
    }

    public visitEnumCase(node: ast.EnumCase): any {
        return null;
    }

    public visitEnumCaseList(node: ast.EnumCaseClause): any {
        return null;
    }

    public visitEnumCasePattern(node: ast.EnumCasePattern): any {
        return null;
    }

    public visitEnumDeclaration(node: ast.EnumDeclaration): any {
        return null;
    }

    public visitExplicitMemberExpression(node: ast.ExplicitMemberExpression): any {
        return null;
    }

    public visitExpressionPattern(node: ast.ExpressionPattern): any {
        return null;
    }

    public visitFallthroughStatement(node: ast.FallthroughStatement): any {
        return null;
    }

    public visitForInStatement(node: ast.ForInStatement): any {
        return null;
    }

    public visitFunctionCallArgument(node: ast.FunctionCallArgument): any {
        return null;
    }

    public visitFunctionCallExpression(node: ast.FunctionCallExpression): any {
        return null;
    }

    public visitFunctionDeclaration(node: ast.FunctionDeclaration): any {
        return null;
    }

    public visitFunctionType(node: ast.FunctionType): any {
        return null;
    }

    public visitFunctionTypeArgument(node: ast.FunctionTypeArgument): any {
        return null;
    }

    public visitGenericIdentifier(node: ast.GenericIdentifier): any {
        return null;
    }

    public visitGenericParameter(node: ast.GenericParameter): any {
        return null;
    }

    public visitGuardStatement(node: ast.GuardStatement): any {
        return null;
    }

    public visitIdentifier(node: ast.Identifier): any {
        return null;
    }

    public visitIdentifierPattern(node: ast.IdentifierPattern): any {
        return null;
    }

    public visitIfStatement(node: ast.IfStatement): any {
        return null;
    }

    public visitImplicitMemberExpression(node: ast.ImplicitMemberExpression): any {
        return null;
    }

    public visitImportDeclaration(node: ast.ImportDeclaration): any {
        return null;
    }

    public visitInOutExpression(node: ast.InOutExpression): any {
        return null;
    }

    public visitInitializerDeclaration(node: ast.InitializerDeclaration): any {
        return null;
    }

    public visitIsTypeOperator(node: ast.IsTypeOperator): any {
        return null;
    }

    public visitIsTypePattern(node: ast.IsTypePattern): any {
        return null;
    }

    public visitKeyPathComponent(node: ast.KeyPathComponent): any {
        return null;
    }

    public visitKeyPathExpression(node: ast.KeyPathExpression): any {
        return null;
    }

    public visitKeyPathStringExpression(node: ast.KeyPathStringExpression): any {
        return null;
    }

    public visitLineControlStatement(node: ast.LineControlStatement): any {
        return null;
    }

    public visitLiteral(node: ast.Literal): any {
        return null;
    }

    public visitMetaType(node: ast.MetaType): any {
        return null;
    }

    public visitOperator(node: ast.Operator): any {
        return null;
    }

    public visitOptionalBindingCondition(node: ast.OptionalBindingCondition): any {
        return null;
    }

    public visitOptionalPattern(node: ast.OptionalPattern): any {
        return null;
    }

    public visitOptionalType(node: ast.OptionalType): any {
        return null;
    }

    public visitParameter(node: ast.Parameter): any {
        return null;
    }

    public visitPatternBinding(node: ast.PatternBinding): any {
        return null;
    }

    public visitPlatformCondition(node: ast.PlatformCondition): any {
        return null;
    }

    public visitPlaygroundLiteral(node: ast.PlaygroundLiteral): any {
        return null;
    }

    public visitProgram(node: ast.Program): any {
        return null;
    }

    public visitProtocolAssociatedTypeDeclaration(
        node: ast.ProtocolAssociatedTypeDeclaration
    ): any {
        return null;
    }

    public visitProtocolCompositionType(node: ast.ProtocolCompositionType): any {
        return null;
    }

    public visitRepeatWhileStatement(node: ast.RepeatWhileStatement): any {
        return null;
    }

    public visitRequirement(node: ast.Requirement): any {
        return null;
    }

    public visitReturnStatement(node: ast.ReturnStatement): any {
        return null;
    }

    public visitSelectorExpression(node: ast.SelectorExpression): any {
        return null;
    }

    public visitSelfExpression(node: ast.SelfExpression): any {
        return null;
    }

    public visitSelfType(node: ast.SelfType): any {
        return null;
    }

    public visitSubscriptDeclaration(node: ast.SubscriptDeclaration): any {
        return null;
    }

    public visitSubscriptExpression(node: ast.SubscriptExpression): any {
        return null;
    }

    public visitSuperclassExpression(node: ast.SuperclassExpression): any {
        return null;
    }

    public visitSwitchCase(node: ast.SwitchCase): any {
        return null;
    }

    public visitSwitchStatement(node: ast.SwitchStatement): any {
        return null;
    }

    public visitThrowStatement(node: ast.ThrowStatement): any {
        return null;
    }

    public visitTryOperator(node: ast.TryOperator): any {
        return null;
    }

    public visitTupleElement(node: ast.TupleElement): any {
        return null;
    }

    public visitTupleExpression(node: ast.TupleExpression): any {
        return null;
    }

    public visitTuplePattern(node: ast.TuplePattern): any {
        return null;
    }

    public visitTuplePatternElement(node: ast.TuplePatternElement): any {
        return null;
    }

    public visitTupleType(node: ast.TupleType): any {
        return null;
    }

    public visitTupleTypeElement(node: ast.TupleTypeElement): any {
        return null;
    }

    public visitTypeIdentifier(node: ast.TypeIdentifier): any {
        return null;
    }

    public visitTypealiasDeclaration(node: ast.TypealiasDeclaration): any {
        return null;
    }

    public visitUnwrappedExpression(node: ast.UnwrappedExpression): any {
        return null;
    }

    public visitValueBindingPattern(node: ast.ValueBindingPattern): any {
        return null;
    }

    public visitVariableDeclaration(node: ast.VariableDeclaration): any {
        return null;
    }

    public visitWhileStatement(node: ast.WhileStatement): any {
        return null;
    }

    public visitWildcard(node: ast.Wildcard): any {
        return null;
    }
}
