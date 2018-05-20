import { AbstractParseTreeVisitor, ParseTree } from 'antlr4ts/tree';
import { Node } from './ast';
import * as SwiftParser from './generated/SwiftParser';
import { SwiftParserVisitor } from './generated/SwiftParserVisitor';

/**
 * Parser for building Swift AST.
 * @extends {SwiftParserVisitor}
 */
export class ASTBuilderVisitor extends AbstractParseTreeVisitor<Node>
    implements SwiftParserVisitor<Node> {
    public defaultResult(): Node {
        return null;
    }

    public visitProgram(ctx: SwiftParser.ProgramContext): Node {
        return this.visitChildren(ctx);
    }

    public visitIdentifier(ctx: SwiftParser.IdentifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitIdentifierList(ctx: SwiftParser.IdentifierListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLiteral(ctx: SwiftParser.LiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitNumericLiteral(ctx: SwiftParser.NumericLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBooleanLiteral(ctx: SwiftParser.BooleanLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitNilLiteral(ctx: SwiftParser.NilLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitIntegerLiteral(ctx: SwiftParser.IntegerLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStringLiteral(ctx: SwiftParser.StringLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOperator(ctx: SwiftParser.OperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrefixOperator(ctx: SwiftParser.PrefixOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPostfixOperator(ctx: SwiftParser.PostfixOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBinaryOperator(ctx: SwiftParser.BinaryOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGeneralType(ctx: SwiftParser.GeneralTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitImplicitlyUnwrappedOptionalType(
        ctx: SwiftParser.ImplicitlyUnwrappedOptionalTypeContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitArrayType(ctx: SwiftParser.ArrayTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolCompositionTypeAlternative(
        ctx: SwiftParser.ProtocolCompositionTypeAlternativeContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitAnyType(ctx: SwiftParser.AnyTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDictionaryType(ctx: SwiftParser.DictionaryTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOptionalType(ctx: SwiftParser.OptionalTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitParenthesizedType(ctx: SwiftParser.ParenthesizedTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitMetatypeType(ctx: SwiftParser.MetatypeTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionType(ctx: SwiftParser.FunctionTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSelfType(ctx: SwiftParser.SelfTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTupleTypeAlternative(ctx: SwiftParser.TupleTypeAlternativeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypeAnnotation(ctx: SwiftParser.TypeAnnotationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypeIdentifier(ctx: SwiftParser.TypeIdentifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypeName(ctx: SwiftParser.TypeNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTupleType(ctx: SwiftParser.TupleTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTupleTypeElement(ctx: SwiftParser.TupleTypeElementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitElementName(ctx: SwiftParser.ElementNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionTypeArgumentClause(
        ctx: SwiftParser.FunctionTypeArgumentClauseContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionTypeArgumentList(ctx: SwiftParser.FunctionTypeArgumentListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionTypeArgument(ctx: SwiftParser.FunctionTypeArgumentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitArgumentLabel(ctx: SwiftParser.ArgumentLabelContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolCompositionType(ctx: SwiftParser.ProtocolCompositionTypeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypeInheritanceClause(ctx: SwiftParser.TypeInheritanceClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExpression(ctx: SwiftParser.ExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExpressionList(ctx: SwiftParser.ExpressionListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrefixExpression(ctx: SwiftParser.PrefixExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitInOutExpression(ctx: SwiftParser.InOutExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTryOperator(ctx: SwiftParser.TryOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBinaryExpression(ctx: SwiftParser.BinaryExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAssignmentOperator(ctx: SwiftParser.AssignmentOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitConditionalOperator(ctx: SwiftParser.ConditionalOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypeCastingOperator(ctx: SwiftParser.TypeCastingOperatorContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrimaryExpression(ctx: SwiftParser.PrimaryExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLiteralExpression(ctx: SwiftParser.LiteralExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitArrayLiteral(ctx: SwiftParser.ArrayLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDictionaryLiteral(ctx: SwiftParser.DictionaryLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPlaygroundLiteral(ctx: SwiftParser.PlaygroundLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSelfExpression(ctx: SwiftParser.SelfExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSelfMethodExpression(ctx: SwiftParser.SelfMethodExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSelfSubscriptExpression(ctx: SwiftParser.SelfSubscriptExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSelfInitializerExpression(ctx: SwiftParser.SelfInitializerExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSuperclassExpression(ctx: SwiftParser.SuperclassExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSuperclassMethodExpression(
        ctx: SwiftParser.SuperclassMethodExpressionContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitSuperclassSubscriptExpression(
        ctx: SwiftParser.SuperclassSubscriptExpressionContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitSuperclassInitializerExpression(
        ctx: SwiftParser.SuperclassInitializerExpressionContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitClosureExpression(ctx: SwiftParser.ClosureExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClosureSignature(ctx: SwiftParser.ClosureSignatureContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClosureParameterClause(ctx: SwiftParser.ClosureParameterClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClosureParameterList(ctx: SwiftParser.ClosureParameterListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClosureParameter(ctx: SwiftParser.ClosureParameterContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClosureParameterName(ctx: SwiftParser.ClosureParameterNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCaptureList(ctx: SwiftParser.CaptureListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCaptureListItem(ctx: SwiftParser.CaptureListItemContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCaptureSpecifier(ctx: SwiftParser.CaptureSpecifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitImplicitMemberExpression(ctx: SwiftParser.ImplicitMemberExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitParenthesizedExpression(ctx: SwiftParser.ParenthesizedExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTupleExpression(ctx: SwiftParser.TupleExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTupleElement(ctx: SwiftParser.TupleElementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitWildcardExpression(ctx: SwiftParser.WildcardExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitKeyPathExpression(ctx: SwiftParser.KeyPathExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitKeyPathComponent(ctx: SwiftParser.KeyPathComponentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitKeyPathPostfix(ctx: SwiftParser.KeyPathPostfixContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSelectorExpression(ctx: SwiftParser.SelectorExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitKeyPathStringExpression(ctx: SwiftParser.KeyPathStringExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGeneralPostfixExpression(ctx: SwiftParser.GeneralPostfixExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitInitializerExpression(ctx: SwiftParser.InitializerExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSubscriptExpression(ctx: SwiftParser.SubscriptExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitForcedValueExpression(ctx: SwiftParser.ForcedValueExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionCallExpression(ctx: SwiftParser.FunctionCallExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPostfixSelfExpression(ctx: SwiftParser.PostfixSelfExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPostfixOperatorExpression(ctx: SwiftParser.PostfixOperatorExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExplicitMemberExpression(ctx: SwiftParser.ExplicitMemberExpressionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOptionalChainingExpression(
        ctx: SwiftParser.OptionalChainingExpressionContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionCallArgumentClause(
        ctx: SwiftParser.FunctionCallArgumentClauseContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionCallArgumentList(ctx: SwiftParser.FunctionCallArgumentListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionCallArgument(ctx: SwiftParser.FunctionCallArgumentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTrailingClosure(ctx: SwiftParser.TrailingClosureContext): Node {
        return this.visitChildren(ctx);
    }

    public visitArgumentNames(ctx: SwiftParser.ArgumentNamesContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStatement(ctx: SwiftParser.StatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStatements(ctx: SwiftParser.StatementsContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLoopStatement(ctx: SwiftParser.LoopStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitForInStatement(ctx: SwiftParser.ForInStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitWhileStatement(ctx: SwiftParser.WhileStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitConditionList(ctx: SwiftParser.ConditionListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCondition(ctx: SwiftParser.ConditionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCaseCondition(ctx: SwiftParser.CaseConditionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOptionalBindingCondition(ctx: SwiftParser.OptionalBindingConditionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRepeatWhileStatement(ctx: SwiftParser.RepeatWhileStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBranchStatement(ctx: SwiftParser.BranchStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitIfStatement(ctx: SwiftParser.IfStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitElseClause(ctx: SwiftParser.ElseClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGuardStatement(ctx: SwiftParser.GuardStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSwitchStatement(ctx: SwiftParser.SwitchStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSwitchCase(ctx: SwiftParser.SwitchCaseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCaseLabel(ctx: SwiftParser.CaseLabelContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCaseItemList(ctx: SwiftParser.CaseItemListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDefaultLabel(ctx: SwiftParser.DefaultLabelContext): Node {
        return this.visitChildren(ctx);
    }

    public visitWhereClause(ctx: SwiftParser.WhereClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLabeledStatement(ctx: SwiftParser.LabeledStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStatementLabel(ctx: SwiftParser.StatementLabelContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLabelName(ctx: SwiftParser.LabelNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitControlTransferStatement(ctx: SwiftParser.ControlTransferStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBreakStatement(ctx: SwiftParser.BreakStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitContinueStatement(ctx: SwiftParser.ContinueStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFallthroughStatement(ctx: SwiftParser.FallthroughStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitReturnStatement(ctx: SwiftParser.ReturnStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitThrowStatement(ctx: SwiftParser.ThrowStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDeferStatement(ctx: SwiftParser.DeferStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDoStatement(ctx: SwiftParser.DoStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCatchClause(ctx: SwiftParser.CatchClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCompilerControlStatement(ctx: SwiftParser.CompilerControlStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitConditionalCompilationBlock(
        ctx: SwiftParser.ConditionalCompilationBlockContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitIfDirectiveClause(ctx: SwiftParser.IfDirectiveClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitElseifDirectiveClause(ctx: SwiftParser.ElseifDirectiveClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitElseDirectiveClause(ctx: SwiftParser.ElseDirectiveClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCompilationCondition(ctx: SwiftParser.CompilationConditionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPlatformCondition(ctx: SwiftParser.PlatformConditionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOperatingSystem(ctx: SwiftParser.OperatingSystemContext): Node {
        return this.visitChildren(ctx);
    }

    public visitArchitecture(ctx: SwiftParser.ArchitectureContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSwiftVersion(ctx: SwiftParser.SwiftVersionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLineControlStatement(ctx: SwiftParser.LineControlStatementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLineNumber(ctx: SwiftParser.LineNumberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFileName(ctx: SwiftParser.FileNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAvailabilityCondition(ctx: SwiftParser.AvailabilityConditionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAvailabilityArgument(ctx: SwiftParser.AvailabilityArgumentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPlatformName(ctx: SwiftParser.PlatformNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPlatformVersion(ctx: SwiftParser.PlatformVersionContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDeclaration(ctx: SwiftParser.DeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTopLevelDeclaration(ctx: SwiftParser.TopLevelDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitCodeBlock(ctx: SwiftParser.CodeBlockContext): Node {
        return this.visitChildren(ctx);
    }

    public visitImportDeclaration(ctx: SwiftParser.ImportDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitImportKind(ctx: SwiftParser.ImportKindContext): Node {
        return this.visitChildren(ctx);
    }

    public visitImportPath(ctx: SwiftParser.ImportPathContext): Node {
        return this.visitChildren(ctx);
    }

    public visitImportPathIdentifier(ctx: SwiftParser.ImportPathIdentifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitConstantDeclaration(ctx: SwiftParser.ConstantDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPatternInitializerList(ctx: SwiftParser.PatternInitializerListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPatternInitializer(ctx: SwiftParser.PatternInitializerContext): Node {
        return this.visitChildren(ctx);
    }

    public visitInitializer(ctx: SwiftParser.InitializerContext): Node {
        return this.visitChildren(ctx);
    }

    public visitVariableDeclaration(ctx: SwiftParser.VariableDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitVariableDeclarationHead(ctx: SwiftParser.VariableDeclarationHeadContext): Node {
        return this.visitChildren(ctx);
    }

    public visitVariableName(ctx: SwiftParser.VariableNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGetterSetterBlock(ctx: SwiftParser.GetterSetterBlockContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGetterClause(ctx: SwiftParser.GetterClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSetterClause(ctx: SwiftParser.SetterClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSetterName(ctx: SwiftParser.SetterNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGetterSetterKeywordBlock(ctx: SwiftParser.GetterSetterKeywordBlockContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGetterKeywordClause(ctx: SwiftParser.GetterKeywordClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSetterKeywordClause(ctx: SwiftParser.SetterKeywordClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitWillSetDidSetBlock(ctx: SwiftParser.WillSetDidSetBlockContext): Node {
        return this.visitChildren(ctx);
    }

    public visitWillSetClause(ctx: SwiftParser.WillSetClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDidSetClause(ctx: SwiftParser.DidSetClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypealiasDeclaration(ctx: SwiftParser.TypealiasDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypealiasName(ctx: SwiftParser.TypealiasNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTypealiasAssignment(ctx: SwiftParser.TypealiasAssignmentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionDeclaration(ctx: SwiftParser.FunctionDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionHead(ctx: SwiftParser.FunctionHeadContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionName(ctx: SwiftParser.FunctionNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionSignature(ctx: SwiftParser.FunctionSignatureContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionResult(ctx: SwiftParser.FunctionResultContext): Node {
        return this.visitChildren(ctx);
    }

    public visitFunctionBody(ctx: SwiftParser.FunctionBodyContext): Node {
        return this.visitChildren(ctx);
    }

    public visitParameterClause(ctx: SwiftParser.ParameterClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitParameterList(ctx: SwiftParser.ParameterListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitParameter(ctx: SwiftParser.ParameterContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExternalParameterName(ctx: SwiftParser.ExternalParameterNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitLocalParameterName(ctx: SwiftParser.LocalParameterNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDefaultArgumentClause(ctx: SwiftParser.DefaultArgumentClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitEnumDeclaration(ctx: SwiftParser.EnumDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitUnionStyleEnum(ctx: SwiftParser.UnionStyleEnumContext): Node {
        return this.visitChildren(ctx);
    }

    public visitUnionStyleEnumMembers(ctx: SwiftParser.UnionStyleEnumMembersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitUnionStyleEnumMember(ctx: SwiftParser.UnionStyleEnumMemberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitUnionStyleEnumCaseClause(ctx: SwiftParser.UnionStyleEnumCaseClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitUnionStyleEnumCaseList(ctx: SwiftParser.UnionStyleEnumCaseListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitUnionStyleEnumCase(ctx: SwiftParser.UnionStyleEnumCaseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitEnumName(ctx: SwiftParser.EnumNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitEnumCaseName(ctx: SwiftParser.EnumCaseNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueStyleEnum(ctx: SwiftParser.RawValueStyleEnumContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueStyleEnumMembers(ctx: SwiftParser.RawValueStyleEnumMembersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueStyleEnumMember(ctx: SwiftParser.RawValueStyleEnumMemberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueStyleEnumCaseClause(
        ctx: SwiftParser.RawValueStyleEnumCaseClauseContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueStyleEnumCaseList(ctx: SwiftParser.RawValueStyleEnumCaseListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueStyleEnumCase(ctx: SwiftParser.RawValueStyleEnumCaseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueAssignment(ctx: SwiftParser.RawValueAssignmentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRawValueLiteral(ctx: SwiftParser.RawValueLiteralContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStructDeclaration(ctx: SwiftParser.StructDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStructName(ctx: SwiftParser.StructNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStructBody(ctx: SwiftParser.StructBodyContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStructMembers(ctx: SwiftParser.StructMembersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitStructMember(ctx: SwiftParser.StructMemberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClassDeclaration(ctx: SwiftParser.ClassDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClassName(ctx: SwiftParser.ClassNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClassBody(ctx: SwiftParser.ClassBodyContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClassMembers(ctx: SwiftParser.ClassMembersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitClassMember(ctx: SwiftParser.ClassMemberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolDeclaration(ctx: SwiftParser.ProtocolDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolName(ctx: SwiftParser.ProtocolNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolBody(ctx: SwiftParser.ProtocolBodyContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolMembers(ctx: SwiftParser.ProtocolMembersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolMember(ctx: SwiftParser.ProtocolMemberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolMemberDeclatation(ctx: SwiftParser.ProtocolMemberDeclatationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolPropertyDeclaration(
        ctx: SwiftParser.ProtocolPropertyDeclarationContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolMethodDeclaration(ctx: SwiftParser.ProtocolMethodDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolInitializerDeclaration(
        ctx: SwiftParser.ProtocolInitializerDeclarationContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolSubscriptDeclaration(
        ctx: SwiftParser.ProtocolSubscriptDeclarationContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitProtocolAssociatedTypeDeclaration(
        ctx: SwiftParser.ProtocolAssociatedTypeDeclarationContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitInitializerDeclaration(ctx: SwiftParser.InitializerDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitInitializerHead(ctx: SwiftParser.InitializerHeadContext): Node {
        return this.visitChildren(ctx);
    }

    public visitInitializerBody(ctx: SwiftParser.InitializerBodyContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDeinitializerDeclaration(ctx: SwiftParser.DeinitializerDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExtensionDeclaration(ctx: SwiftParser.ExtensionDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExtensionBody(ctx: SwiftParser.ExtensionBodyContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExtensionMembers(ctx: SwiftParser.ExtensionMembersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExtensionMember(ctx: SwiftParser.ExtensionMemberContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSubscriptDeclaration(ctx: SwiftParser.SubscriptDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSubscriptHead(ctx: SwiftParser.SubscriptHeadContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSubscriptResult(ctx: SwiftParser.SubscriptResultContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOperatorDeclaration(ctx: SwiftParser.OperatorDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrefixOperatorDeclaration(ctx: SwiftParser.PrefixOperatorDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPostfixOperatorDeclaration(
        ctx: SwiftParser.PostfixOperatorDeclarationContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitInfixOperatorDeclaration(ctx: SwiftParser.InfixOperatorDeclarationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitInfixOperatorGroup(ctx: SwiftParser.InfixOperatorGroupContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupDeclaration(
        ctx: SwiftParser.PrecedenceGroupDeclarationContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupAttributes(ctx: SwiftParser.PrecedenceGroupAttributesContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupAttribute(ctx: SwiftParser.PrecedenceGroupAttributeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupRelation(ctx: SwiftParser.PrecedenceGroupRelationContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupAssignment(ctx: SwiftParser.PrecedenceGroupAssignmentContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupAssociativity(
        ctx: SwiftParser.PrecedenceGroupAssociativityContext
    ): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupNames(ctx: SwiftParser.PrecedenceGroupNamesContext): Node {
        return this.visitChildren(ctx);
    }

    public visitPrecedenceGroupName(ctx: SwiftParser.PrecedenceGroupNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDeclarationModifier(ctx: SwiftParser.DeclarationModifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitDeclarationModifiers(ctx: SwiftParser.DeclarationModifiersContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAccessLevelModifier(ctx: SwiftParser.AccessLevelModifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitMutationModifier(ctx: SwiftParser.MutationModifierContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAttribute(ctx: SwiftParser.AttributeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAttributeName(ctx: SwiftParser.AttributeNameContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAttributeArgumentClause(ctx: SwiftParser.AttributeArgumentClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAttributes(ctx: SwiftParser.AttributesContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBalancedTokens(ctx: SwiftParser.BalancedTokensContext): Node {
        return this.visitChildren(ctx);
    }

    public visitBalancedToken(ctx: SwiftParser.BalancedTokenContext): Node {
        return this.visitChildren(ctx);
    }

    public visitWildcardPattern(ctx: SwiftParser.WildcardPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitValueBindingPattern(ctx: SwiftParser.ValueBindingPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitIdentifierPattern(ctx: SwiftParser.IdentifierPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTuplePatternAlternative(ctx: SwiftParser.TuplePatternAlternativeContext): Node {
        return this.visitChildren(ctx);
    }

    public visitEnumCasePattern(ctx: SwiftParser.EnumCasePatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitExpressionPattern(ctx: SwiftParser.ExpressionPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitAsPattern(ctx: SwiftParser.AsPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitIsPattern(ctx: SwiftParser.IsPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitOptionalPattern(ctx: SwiftParser.OptionalPatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTuplePattern(ctx: SwiftParser.TuplePatternContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTuplePatternElementList(ctx: SwiftParser.TuplePatternElementListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitTuplePatternElement(ctx: SwiftParser.TuplePatternElementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericParameterClause(ctx: SwiftParser.GenericParameterClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericParameterList(ctx: SwiftParser.GenericParameterListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericParameter(ctx: SwiftParser.GenericParameterContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericWhereClause(ctx: SwiftParser.GenericWhereClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRequirementList(ctx: SwiftParser.RequirementListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitRequirement(ctx: SwiftParser.RequirementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitConformanceRequirement(ctx: SwiftParser.ConformanceRequirementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitSameTypeRequirement(ctx: SwiftParser.SameTypeRequirementContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericArgumentClause(ctx: SwiftParser.GenericArgumentClauseContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericArgumentList(ctx: SwiftParser.GenericArgumentListContext): Node {
        return this.visitChildren(ctx);
    }

    public visitGenericArgument(ctx: SwiftParser.GenericArgumentContext): Node {
        return this.visitChildren(ctx);
    }
}
