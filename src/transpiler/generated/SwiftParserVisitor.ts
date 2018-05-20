// Generated from ./grammar/SwiftParser.g4 by ANTLR 4.6-SNAPSHOT


import {
    WS, OP_LWS, OP_RWS, testLN, isPreOp, isBinOp, isPostOp, isStatementStarting
} from '../SwiftHelper';


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { GeneralPostfixExpressionContext } from './SwiftParser';
import { InitializerExpressionContext } from './SwiftParser';
import { SubscriptExpressionContext } from './SwiftParser';
import { ForcedValueExpressionContext } from './SwiftParser';
import { FunctionCallExpressionContext } from './SwiftParser';
import { PostfixSelfExpressionContext } from './SwiftParser';
import { PostfixOperatorExpressionContext } from './SwiftParser';
import { ExplicitMemberExpressionContext } from './SwiftParser';
import { OptionalChainingExpressionContext } from './SwiftParser';
import { GeneralTypeContext } from './SwiftParser';
import { ImplicitlyUnwrappedOptionalTypeContext } from './SwiftParser';
import { ArrayTypeContext } from './SwiftParser';
import { ProtocolCompositionTypeAlternativeContext } from './SwiftParser';
import { AnyTypeContext } from './SwiftParser';
import { DictionaryTypeContext } from './SwiftParser';
import { OptionalTypeContext } from './SwiftParser';
import { ParenthesizedTypeContext } from './SwiftParser';
import { MetatypeTypeContext } from './SwiftParser';
import { FunctionTypeContext } from './SwiftParser';
import { SelfTypeContext } from './SwiftParser';
import { TupleTypeAlternativeContext } from './SwiftParser';
import { WildcardPatternContext } from './SwiftParser';
import { ValueBindingPatternContext } from './SwiftParser';
import { IdentifierPatternContext } from './SwiftParser';
import { TuplePatternAlternativeContext } from './SwiftParser';
import { EnumCasePatternContext } from './SwiftParser';
import { AsPatternContext } from './SwiftParser';
import { ExpressionPatternContext } from './SwiftParser';
import { IsPatternContext } from './SwiftParser';
import { OptionalPatternContext } from './SwiftParser';
import { ProgramContext } from './SwiftParser';
import { IdentifierContext } from './SwiftParser';
import { IdentifierListContext } from './SwiftParser';
import { LiteralContext } from './SwiftParser';
import { NumericLiteralContext } from './SwiftParser';
import { BooleanLiteralContext } from './SwiftParser';
import { NilLiteralContext } from './SwiftParser';
import { IntegerLiteralContext } from './SwiftParser';
import { StringLiteralContext } from './SwiftParser';
import { OperatorContext } from './SwiftParser';
import { PrefixOperatorContext } from './SwiftParser';
import { PostfixOperatorContext } from './SwiftParser';
import { BinaryOperatorContext } from './SwiftParser';
import { TypeContext } from './SwiftParser';
import { TypeAnnotationContext } from './SwiftParser';
import { TypeIdentifierContext } from './SwiftParser';
import { TypeNameContext } from './SwiftParser';
import { TupleTypeContext } from './SwiftParser';
import { TupleTypeElementContext } from './SwiftParser';
import { ElementNameContext } from './SwiftParser';
import { FunctionTypeArgumentClauseContext } from './SwiftParser';
import { FunctionTypeArgumentListContext } from './SwiftParser';
import { FunctionTypeArgumentContext } from './SwiftParser';
import { ArgumentLabelContext } from './SwiftParser';
import { ProtocolCompositionTypeContext } from './SwiftParser';
import { TypeInheritanceClauseContext } from './SwiftParser';
import { ExpressionContext } from './SwiftParser';
import { ExpressionListContext } from './SwiftParser';
import { PrefixExpressionContext } from './SwiftParser';
import { InOutExpressionContext } from './SwiftParser';
import { TryOperatorContext } from './SwiftParser';
import { BinaryExpressionContext } from './SwiftParser';
import { AssignmentOperatorContext } from './SwiftParser';
import { ConditionalOperatorContext } from './SwiftParser';
import { TypeCastingOperatorContext } from './SwiftParser';
import { PrimaryExpressionContext } from './SwiftParser';
import { LiteralExpressionContext } from './SwiftParser';
import { ArrayLiteralContext } from './SwiftParser';
import { DictionaryLiteralContext } from './SwiftParser';
import { PlaygroundLiteralContext } from './SwiftParser';
import { SelfExpressionContext } from './SwiftParser';
import { SelfMethodExpressionContext } from './SwiftParser';
import { SelfSubscriptExpressionContext } from './SwiftParser';
import { SelfInitializerExpressionContext } from './SwiftParser';
import { SuperclassExpressionContext } from './SwiftParser';
import { SuperclassMethodExpressionContext } from './SwiftParser';
import { SuperclassSubscriptExpressionContext } from './SwiftParser';
import { SuperclassInitializerExpressionContext } from './SwiftParser';
import { ClosureExpressionContext } from './SwiftParser';
import { ClosureSignatureContext } from './SwiftParser';
import { ClosureParameterClauseContext } from './SwiftParser';
import { ClosureParameterListContext } from './SwiftParser';
import { ClosureParameterContext } from './SwiftParser';
import { ClosureParameterNameContext } from './SwiftParser';
import { CaptureListContext } from './SwiftParser';
import { CaptureListItemContext } from './SwiftParser';
import { CaptureSpecifierContext } from './SwiftParser';
import { ImplicitMemberExpressionContext } from './SwiftParser';
import { ParenthesizedExpressionContext } from './SwiftParser';
import { TupleExpressionContext } from './SwiftParser';
import { TupleElementContext } from './SwiftParser';
import { WildcardExpressionContext } from './SwiftParser';
import { KeyPathExpressionContext } from './SwiftParser';
import { KeyPathComponentContext } from './SwiftParser';
import { KeyPathPostfixContext } from './SwiftParser';
import { SelectorExpressionContext } from './SwiftParser';
import { KeyPathStringExpressionContext } from './SwiftParser';
import { PostfixExpressionContext } from './SwiftParser';
import { FunctionCallArgumentClauseContext } from './SwiftParser';
import { FunctionCallArgumentListContext } from './SwiftParser';
import { FunctionCallArgumentContext } from './SwiftParser';
import { TrailingClosureContext } from './SwiftParser';
import { ArgumentNamesContext } from './SwiftParser';
import { StatementContext } from './SwiftParser';
import { StatementsContext } from './SwiftParser';
import { LoopStatementContext } from './SwiftParser';
import { ForInStatementContext } from './SwiftParser';
import { WhileStatementContext } from './SwiftParser';
import { ConditionListContext } from './SwiftParser';
import { ConditionContext } from './SwiftParser';
import { CaseConditionContext } from './SwiftParser';
import { OptionalBindingConditionContext } from './SwiftParser';
import { RepeatWhileStatementContext } from './SwiftParser';
import { BranchStatementContext } from './SwiftParser';
import { IfStatementContext } from './SwiftParser';
import { ElseClauseContext } from './SwiftParser';
import { GuardStatementContext } from './SwiftParser';
import { SwitchStatementContext } from './SwiftParser';
import { SwitchCaseContext } from './SwiftParser';
import { CaseLabelContext } from './SwiftParser';
import { CaseItemListContext } from './SwiftParser';
import { DefaultLabelContext } from './SwiftParser';
import { WhereClauseContext } from './SwiftParser';
import { LabeledStatementContext } from './SwiftParser';
import { StatementLabelContext } from './SwiftParser';
import { LabelNameContext } from './SwiftParser';
import { ControlTransferStatementContext } from './SwiftParser';
import { BreakStatementContext } from './SwiftParser';
import { ContinueStatementContext } from './SwiftParser';
import { FallthroughStatementContext } from './SwiftParser';
import { ReturnStatementContext } from './SwiftParser';
import { ThrowStatementContext } from './SwiftParser';
import { DeferStatementContext } from './SwiftParser';
import { DoStatementContext } from './SwiftParser';
import { CatchClauseContext } from './SwiftParser';
import { CompilerControlStatementContext } from './SwiftParser';
import { ConditionalCompilationBlockContext } from './SwiftParser';
import { IfDirectiveClauseContext } from './SwiftParser';
import { ElseifDirectiveClauseContext } from './SwiftParser';
import { ElseDirectiveClauseContext } from './SwiftParser';
import { CompilationConditionContext } from './SwiftParser';
import { PlatformConditionContext } from './SwiftParser';
import { OperatingSystemContext } from './SwiftParser';
import { ArchitectureContext } from './SwiftParser';
import { SwiftVersionContext } from './SwiftParser';
import { LineControlStatementContext } from './SwiftParser';
import { LineNumberContext } from './SwiftParser';
import { FileNameContext } from './SwiftParser';
import { AvailabilityConditionContext } from './SwiftParser';
import { AvailabilityArgumentContext } from './SwiftParser';
import { PlatformNameContext } from './SwiftParser';
import { PlatformVersionContext } from './SwiftParser';
import { DeclarationContext } from './SwiftParser';
import { TopLevelDeclarationContext } from './SwiftParser';
import { CodeBlockContext } from './SwiftParser';
import { ImportDeclarationContext } from './SwiftParser';
import { ImportKindContext } from './SwiftParser';
import { ImportPathContext } from './SwiftParser';
import { ImportPathIdentifierContext } from './SwiftParser';
import { ConstantDeclarationContext } from './SwiftParser';
import { PatternInitializerListContext } from './SwiftParser';
import { PatternInitializerContext } from './SwiftParser';
import { InitializerContext } from './SwiftParser';
import { VariableDeclarationContext } from './SwiftParser';
import { VariableDeclarationHeadContext } from './SwiftParser';
import { VariableNameContext } from './SwiftParser';
import { GetterSetterBlockContext } from './SwiftParser';
import { GetterClauseContext } from './SwiftParser';
import { SetterClauseContext } from './SwiftParser';
import { SetterNameContext } from './SwiftParser';
import { GetterSetterKeywordBlockContext } from './SwiftParser';
import { GetterKeywordClauseContext } from './SwiftParser';
import { SetterKeywordClauseContext } from './SwiftParser';
import { WillSetDidSetBlockContext } from './SwiftParser';
import { WillSetClauseContext } from './SwiftParser';
import { DidSetClauseContext } from './SwiftParser';
import { TypealiasDeclarationContext } from './SwiftParser';
import { TypealiasNameContext } from './SwiftParser';
import { TypealiasAssignmentContext } from './SwiftParser';
import { FunctionDeclarationContext } from './SwiftParser';
import { FunctionHeadContext } from './SwiftParser';
import { FunctionNameContext } from './SwiftParser';
import { FunctionSignatureContext } from './SwiftParser';
import { FunctionResultContext } from './SwiftParser';
import { FunctionBodyContext } from './SwiftParser';
import { ParameterClauseContext } from './SwiftParser';
import { ParameterListContext } from './SwiftParser';
import { ParameterContext } from './SwiftParser';
import { ExternalParameterNameContext } from './SwiftParser';
import { LocalParameterNameContext } from './SwiftParser';
import { DefaultArgumentClauseContext } from './SwiftParser';
import { EnumDeclarationContext } from './SwiftParser';
import { UnionStyleEnumContext } from './SwiftParser';
import { UnionStyleEnumMembersContext } from './SwiftParser';
import { UnionStyleEnumMemberContext } from './SwiftParser';
import { UnionStyleEnumCaseClauseContext } from './SwiftParser';
import { UnionStyleEnumCaseListContext } from './SwiftParser';
import { UnionStyleEnumCaseContext } from './SwiftParser';
import { EnumNameContext } from './SwiftParser';
import { EnumCaseNameContext } from './SwiftParser';
import { RawValueStyleEnumContext } from './SwiftParser';
import { RawValueStyleEnumMembersContext } from './SwiftParser';
import { RawValueStyleEnumMemberContext } from './SwiftParser';
import { RawValueStyleEnumCaseClauseContext } from './SwiftParser';
import { RawValueStyleEnumCaseListContext } from './SwiftParser';
import { RawValueStyleEnumCaseContext } from './SwiftParser';
import { RawValueAssignmentContext } from './SwiftParser';
import { RawValueLiteralContext } from './SwiftParser';
import { StructDeclarationContext } from './SwiftParser';
import { StructNameContext } from './SwiftParser';
import { StructBodyContext } from './SwiftParser';
import { StructMembersContext } from './SwiftParser';
import { StructMemberContext } from './SwiftParser';
import { ClassDeclarationContext } from './SwiftParser';
import { ClassNameContext } from './SwiftParser';
import { ClassBodyContext } from './SwiftParser';
import { ClassMembersContext } from './SwiftParser';
import { ClassMemberContext } from './SwiftParser';
import { ProtocolDeclarationContext } from './SwiftParser';
import { ProtocolNameContext } from './SwiftParser';
import { ProtocolBodyContext } from './SwiftParser';
import { ProtocolMembersContext } from './SwiftParser';
import { ProtocolMemberContext } from './SwiftParser';
import { ProtocolMemberDeclarationContext } from './SwiftParser';
import { ProtocolPropertyDeclarationContext } from './SwiftParser';
import { ProtocolMethodDeclarationContext } from './SwiftParser';
import { ProtocolInitializerDeclarationContext } from './SwiftParser';
import { ProtocolSubscriptDeclarationContext } from './SwiftParser';
import { ProtocolAssociatedTypeDeclarationContext } from './SwiftParser';
import { InitializerDeclarationContext } from './SwiftParser';
import { InitializerHeadContext } from './SwiftParser';
import { InitializerBodyContext } from './SwiftParser';
import { DeinitializerDeclarationContext } from './SwiftParser';
import { ExtensionDeclarationContext } from './SwiftParser';
import { ExtensionBodyContext } from './SwiftParser';
import { ExtensionMembersContext } from './SwiftParser';
import { ExtensionMemberContext } from './SwiftParser';
import { SubscriptDeclarationContext } from './SwiftParser';
import { SubscriptHeadContext } from './SwiftParser';
import { SubscriptResultContext } from './SwiftParser';
import { OperatorDeclarationContext } from './SwiftParser';
import { PrefixOperatorDeclarationContext } from './SwiftParser';
import { PostfixOperatorDeclarationContext } from './SwiftParser';
import { InfixOperatorDeclarationContext } from './SwiftParser';
import { InfixOperatorGroupContext } from './SwiftParser';
import { PrecedenceGroupDeclarationContext } from './SwiftParser';
import { PrecedenceGroupAttributesContext } from './SwiftParser';
import { PrecedenceGroupAttributeContext } from './SwiftParser';
import { PrecedenceGroupRelationContext } from './SwiftParser';
import { PrecedenceGroupAssignmentContext } from './SwiftParser';
import { PrecedenceGroupAssociativityContext } from './SwiftParser';
import { PrecedenceGroupNamesContext } from './SwiftParser';
import { PrecedenceGroupNameContext } from './SwiftParser';
import { DeclarationModifierContext } from './SwiftParser';
import { DeclarationModifiersContext } from './SwiftParser';
import { AccessLevelModifierContext } from './SwiftParser';
import { MutationModifierContext } from './SwiftParser';
import { AttributeContext } from './SwiftParser';
import { AttributeNameContext } from './SwiftParser';
import { AttributeArgumentClauseContext } from './SwiftParser';
import { AttributesContext } from './SwiftParser';
import { BalancedTokensContext } from './SwiftParser';
import { BalancedTokenContext } from './SwiftParser';
import { PatternContext } from './SwiftParser';
import { TuplePatternContext } from './SwiftParser';
import { TuplePatternElementListContext } from './SwiftParser';
import { TuplePatternElementContext } from './SwiftParser';
import { GenericParameterClauseContext } from './SwiftParser';
import { GenericParameterListContext } from './SwiftParser';
import { GenericParameterContext } from './SwiftParser';
import { GenericWhereClauseContext } from './SwiftParser';
import { RequirementListContext } from './SwiftParser';
import { RequirementContext } from './SwiftParser';
import { ConformanceRequirementContext } from './SwiftParser';
import { SameTypeRequirementContext } from './SwiftParser';
import { GenericArgumentClauseContext } from './SwiftParser';
import { GenericArgumentListContext } from './SwiftParser';
import { GenericArgumentContext } from './SwiftParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SwiftParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SwiftParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `generalPostfixExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralPostfixExpression?: (ctx: GeneralPostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `initializerExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerExpression?: (ctx: InitializerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `subscriptExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptExpression?: (ctx: SubscriptExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `forcedValueExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForcedValueExpression?: (ctx: ForcedValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `postfixSelfExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixSelfExpression?: (ctx: PostfixSelfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `postfixOperatorExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixOperatorExpression?: (ctx: PostfixOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `explicitMemberExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitMemberExpression?: (ctx: ExplicitMemberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionalChainingExpression`
	 * labeled alternative in `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalChainingExpression?: (ctx: OptionalChainingExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `generalType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGeneralType?: (ctx: GeneralTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `implicitlyUnwrappedOptionalType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitlyUnwrappedOptionalType?: (ctx: ImplicitlyUnwrappedOptionalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `arrayType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `protocolCompositionTypeAlternative`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolCompositionTypeAlternative?: (ctx: ProtocolCompositionTypeAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `anyType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnyType?: (ctx: AnyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `dictionaryType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryType?: (ctx: DictionaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionalType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalType?: (ctx: OptionalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `metatypeType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMetatypeType?: (ctx: MetatypeTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionType?: (ctx: FunctionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `selfType`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfType?: (ctx: SelfTypeContext) => Result;

	/**
	 * Visit a parse tree produced by the `tupleTypeAlternative`
	 * labeled alternative in `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeAlternative?: (ctx: TupleTypeAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `wildcardPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardPattern?: (ctx: WildcardPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueBindingPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueBindingPattern?: (ctx: ValueBindingPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierPattern?: (ctx: IdentifierPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `tuplePatternAlternative`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePatternAlternative?: (ctx: TuplePatternAlternativeContext) => Result;

	/**
	 * Visit a parse tree produced by the `enumCasePattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumCasePattern?: (ctx: EnumCasePatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `asPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsPattern?: (ctx: AsPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionPattern?: (ctx: ExpressionPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `isPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsPattern?: (ctx: IsPatternContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionalPattern`
	 * labeled alternative in `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalPattern?: (ctx: OptionalPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.identifierList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierList?: (ctx: IdentifierListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.numericLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.nilLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNilLiteral?: (ctx: NilLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.integerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperator?: (ctx: OperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.prefixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixOperator?: (ctx: PrefixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.postfixOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixOperator?: (ctx: PostfixOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.binaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOperator?: (ctx: BinaryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typeAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnotation?: (ctx: TypeAnnotationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typeIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeIdentifier?: (ctx: TypeIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tupleTypeElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeElement?: (ctx: TupleTypeElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.elementName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementName?: (ctx: ElementNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionTypeArgumentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeArgumentClause?: (ctx: FunctionTypeArgumentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionTypeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeArgumentList?: (ctx: FunctionTypeArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionTypeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionTypeArgument?: (ctx: FunctionTypeArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.argumentLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentLabel?: (ctx: ArgumentLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolCompositionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolCompositionType?: (ctx: ProtocolCompositionTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typeInheritanceClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInheritanceClause?: (ctx: TypeInheritanceClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.prefixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixExpression?: (ctx: PrefixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.inOutExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInOutExpression?: (ctx: InOutExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryOperator?: (ctx: TryOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.binaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpression?: (ctx: BinaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.conditionalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOperator?: (ctx: ConditionalOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typeCastingOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeCastingOperator?: (ctx: TypeCastingOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.literalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.arrayLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayLiteral?: (ctx: ArrayLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.dictionaryLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryLiteral?: (ctx: DictionaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.playgroundLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlaygroundLiteral?: (ctx: PlaygroundLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.selfExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfExpression?: (ctx: SelfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.selfMethodExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfMethodExpression?: (ctx: SelfMethodExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.selfSubscriptExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfSubscriptExpression?: (ctx: SelfSubscriptExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.selfInitializerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelfInitializerExpression?: (ctx: SelfInitializerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.superclassExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclassExpression?: (ctx: SuperclassExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.superclassMethodExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclassMethodExpression?: (ctx: SuperclassMethodExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.superclassSubscriptExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclassSubscriptExpression?: (ctx: SuperclassSubscriptExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.superclassInitializerExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclassInitializerExpression?: (ctx: SuperclassInitializerExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.closureExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureExpression?: (ctx: ClosureExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.closureSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureSignature?: (ctx: ClosureSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.closureParameterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureParameterClause?: (ctx: ClosureParameterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.closureParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureParameterList?: (ctx: ClosureParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.closureParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureParameter?: (ctx: ClosureParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.closureParameterName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClosureParameterName?: (ctx: ClosureParameterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.captureList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaptureList?: (ctx: CaptureListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.captureListItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaptureListItem?: (ctx: CaptureListItemContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.captureSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaptureSpecifier?: (ctx: CaptureSpecifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.implicitMemberExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitMemberExpression?: (ctx: ImplicitMemberExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tupleExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExpression?: (ctx: TupleExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tupleElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleElement?: (ctx: TupleElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.wildcardExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardExpression?: (ctx: WildcardExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.keyPathExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyPathExpression?: (ctx: KeyPathExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.keyPathComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyPathComponent?: (ctx: KeyPathComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.keyPathPostfix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyPathPostfix?: (ctx: KeyPathPostfixContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.selectorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectorExpression?: (ctx: SelectorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.keyPathStringExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyPathStringExpression?: (ctx: KeyPathStringExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionCallArgumentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallArgumentClause?: (ctx: FunctionCallArgumentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionCallArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallArgumentList?: (ctx: FunctionCallArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionCallArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallArgument?: (ctx: FunctionCallArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.trailingClosure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailingClosure?: (ctx: TrailingClosureContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.argumentNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentNames?: (ctx: ArgumentNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.loopStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopStatement?: (ctx: LoopStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.forInStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInStatement?: (ctx: ForInStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.conditionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionList?: (ctx: ConditionListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.caseCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondition?: (ctx: CaseConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.optionalBindingCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalBindingCondition?: (ctx: OptionalBindingConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.repeatWhileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatWhileStatement?: (ctx: RepeatWhileStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.branchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBranchStatement?: (ctx: BranchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.elseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseClause?: (ctx: ElseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.guardStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGuardStatement?: (ctx: GuardStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.switchCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchCase?: (ctx: SwitchCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.caseLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseLabel?: (ctx: CaseLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.caseItemList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseItemList?: (ctx: CaseItemListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.defaultLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultLabel?: (ctx: DefaultLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.whereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereClause?: (ctx: WhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.labeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.statementLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementLabel?: (ctx: StatementLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.labelName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelName?: (ctx: LabelNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.controlTransferStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlTransferStatement?: (ctx: ControlTransferStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.fallthroughStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFallthroughStatement?: (ctx: FallthroughStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.deferStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeferStatement?: (ctx: DeferStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.compilerControlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilerControlStatement?: (ctx: CompilerControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.conditionalCompilationBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalCompilationBlock?: (ctx: ConditionalCompilationBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.ifDirectiveClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfDirectiveClause?: (ctx: IfDirectiveClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.elseifDirectiveClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseifDirectiveClause?: (ctx: ElseifDirectiveClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.elseDirectiveClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseDirectiveClause?: (ctx: ElseDirectiveClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.compilationCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationCondition?: (ctx: CompilationConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.platformCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlatformCondition?: (ctx: PlatformConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.operatingSystem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatingSystem?: (ctx: OperatingSystemContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.architecture`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArchitecture?: (ctx: ArchitectureContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.swiftVersion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwiftVersion?: (ctx: SwiftVersionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.lineControlStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineControlStatement?: (ctx: LineControlStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.lineNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineNumber?: (ctx: LineNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.fileName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFileName?: (ctx: FileNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.availabilityCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAvailabilityCondition?: (ctx: AvailabilityConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.availabilityArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAvailabilityArgument?: (ctx: AvailabilityArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.platformName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlatformName?: (ctx: PlatformNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.platformVersion`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlatformVersion?: (ctx: PlatformVersionContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.topLevelDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTopLevelDeclaration?: (ctx: TopLevelDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.codeBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeBlock?: (ctx: CodeBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.importKind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportKind?: (ctx: ImportKindContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.importPath`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportPath?: (ctx: ImportPathContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.importPathIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportPathIdentifier?: (ctx: ImportPathIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.patternInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInitializerList?: (ctx: PatternInitializerListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.patternInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInitializer?: (ctx: PatternInitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.initializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializer?: (ctx: InitializerContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.variableDeclarationHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarationHead?: (ctx: VariableDeclarationHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.getterSetterBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterSetterBlock?: (ctx: GetterSetterBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.getterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterClause?: (ctx: GetterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.setterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetterClause?: (ctx: SetterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.setterName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetterName?: (ctx: SetterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.getterSetterKeywordBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterSetterKeywordBlock?: (ctx: GetterSetterKeywordBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.getterKeywordClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetterKeywordClause?: (ctx: GetterKeywordClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.setterKeywordClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetterKeywordClause?: (ctx: SetterKeywordClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.willSetDidSetBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWillSetDidSetBlock?: (ctx: WillSetDidSetBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.willSetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWillSetClause?: (ctx: WillSetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.didSetClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDidSetClause?: (ctx: DidSetClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typealiasDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealiasDeclaration?: (ctx: TypealiasDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typealiasName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealiasName?: (ctx: TypealiasNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.typealiasAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypealiasAssignment?: (ctx: TypealiasAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionHead?: (ctx: FunctionHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionName?: (ctx: FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSignature?: (ctx: FunctionSignatureContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionResult`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionResult?: (ctx: FunctionResultContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.functionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionBody?: (ctx: FunctionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.parameterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterClause?: (ctx: ParameterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.externalParameterName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternalParameterName?: (ctx: ExternalParameterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.localParameterName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalParameterName?: (ctx: LocalParameterNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.defaultArgumentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultArgumentClause?: (ctx: DefaultArgumentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.unionStyleEnum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStyleEnum?: (ctx: UnionStyleEnumContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.unionStyleEnumMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStyleEnumMembers?: (ctx: UnionStyleEnumMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.unionStyleEnumMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStyleEnumMember?: (ctx: UnionStyleEnumMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.unionStyleEnumCaseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStyleEnumCaseClause?: (ctx: UnionStyleEnumCaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.unionStyleEnumCaseList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStyleEnumCaseList?: (ctx: UnionStyleEnumCaseListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.unionStyleEnumCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnionStyleEnumCase?: (ctx: UnionStyleEnumCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.enumName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumName?: (ctx: EnumNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.enumCaseName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumCaseName?: (ctx: EnumCaseNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueStyleEnum`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueStyleEnum?: (ctx: RawValueStyleEnumContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueStyleEnumMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueStyleEnumMembers?: (ctx: RawValueStyleEnumMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueStyleEnumMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueStyleEnumMember?: (ctx: RawValueStyleEnumMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueStyleEnumCaseClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueStyleEnumCaseClause?: (ctx: RawValueStyleEnumCaseClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueStyleEnumCaseList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueStyleEnumCaseList?: (ctx: RawValueStyleEnumCaseListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueStyleEnumCase`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueStyleEnumCase?: (ctx: RawValueStyleEnumCaseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueAssignment?: (ctx: RawValueAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.rawValueLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRawValueLiteral?: (ctx: RawValueLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.structDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructDeclaration?: (ctx: StructDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.structName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructName?: (ctx: StructNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.structBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBody?: (ctx: StructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.structMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMembers?: (ctx: StructMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.structMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructMember?: (ctx: StructMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.className`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassName?: (ctx: ClassNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.classMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMembers?: (ctx: ClassMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.classMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMember?: (ctx: ClassMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolDeclaration?: (ctx: ProtocolDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolName?: (ctx: ProtocolNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolBody?: (ctx: ProtocolBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolMembers?: (ctx: ProtocolMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolMember?: (ctx: ProtocolMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolMemberDeclaration?: (ctx: ProtocolMemberDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolPropertyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolPropertyDeclaration?: (ctx: ProtocolPropertyDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolMethodDeclaration?: (ctx: ProtocolMethodDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolInitializerDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolInitializerDeclaration?: (ctx: ProtocolInitializerDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolSubscriptDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolSubscriptDeclaration?: (ctx: ProtocolSubscriptDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.protocolAssociatedTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProtocolAssociatedTypeDeclaration?: (ctx: ProtocolAssociatedTypeDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.initializerDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerDeclaration?: (ctx: InitializerDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.initializerHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerHead?: (ctx: InitializerHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.initializerBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitializerBody?: (ctx: InitializerBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.deinitializerDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeinitializerDeclaration?: (ctx: DeinitializerDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.extensionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionDeclaration?: (ctx: ExtensionDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.extensionBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionBody?: (ctx: ExtensionBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.extensionMembers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionMembers?: (ctx: ExtensionMembersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.extensionMember`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtensionMember?: (ctx: ExtensionMemberContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.subscriptDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptDeclaration?: (ctx: SubscriptDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.subscriptHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptHead?: (ctx: SubscriptHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.subscriptResult`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptResult?: (ctx: SubscriptResultContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.operatorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOperatorDeclaration?: (ctx: OperatorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.prefixOperatorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefixOperatorDeclaration?: (ctx: PrefixOperatorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.postfixOperatorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixOperatorDeclaration?: (ctx: PostfixOperatorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.infixOperatorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixOperatorDeclaration?: (ctx: InfixOperatorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.infixOperatorGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixOperatorGroup?: (ctx: InfixOperatorGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupDeclaration?: (ctx: PrecedenceGroupDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupAttributes?: (ctx: PrecedenceGroupAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupAttribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupAttribute?: (ctx: PrecedenceGroupAttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupRelation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupRelation?: (ctx: PrecedenceGroupRelationContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupAssignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupAssignment?: (ctx: PrecedenceGroupAssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupAssociativity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupAssociativity?: (ctx: PrecedenceGroupAssociativityContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupNames`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupNames?: (ctx: PrecedenceGroupNamesContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.precedenceGroupName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrecedenceGroupName?: (ctx: PrecedenceGroupNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.declarationModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationModifier?: (ctx: DeclarationModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.declarationModifiers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationModifiers?: (ctx: DeclarationModifiersContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.accessLevelModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAccessLevelModifier?: (ctx: AccessLevelModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.mutationModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMutationModifier?: (ctx: MutationModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribute?: (ctx: AttributeContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.attributeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeName?: (ctx: AttributeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.attributeArgumentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeArgumentClause?: (ctx: AttributeArgumentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.attributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributes?: (ctx: AttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.balancedTokens`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalancedTokens?: (ctx: BalancedTokensContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.balancedToken`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBalancedToken?: (ctx: BalancedTokenContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tuplePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePattern?: (ctx: TuplePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tuplePatternElementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePatternElementList?: (ctx: TuplePatternElementListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.tuplePatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePatternElement?: (ctx: TuplePatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericParameterClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericParameterClause?: (ctx: GenericParameterClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericParameterList?: (ctx: GenericParameterListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericParameter?: (ctx: GenericParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericWhereClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericWhereClause?: (ctx: GenericWhereClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.requirementList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirementList?: (ctx: RequirementListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.requirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequirement?: (ctx: RequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.conformanceRequirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConformanceRequirement?: (ctx: ConformanceRequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.sameTypeRequirement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSameTypeRequirement?: (ctx: SameTypeRequirementContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericArgumentClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgumentClause?: (ctx: GenericArgumentClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgumentList?: (ctx: GenericArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `SwiftParser.genericArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericArgument?: (ctx: GenericArgumentContext) => Result;
}

