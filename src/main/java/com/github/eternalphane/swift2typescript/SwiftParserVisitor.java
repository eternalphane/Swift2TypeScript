// Generated from SwiftParser.g4 by ANTLR 4.7
package com.github.eternalphane.swift2typescript;
import org.antlr.v4.runtime.tree.ParseTreeVisitor;

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by {@link SwiftParser}.
 *
 * @param <T> The return type of the visit operation. Use {@link Void} for
 * operations with no return type.
 */
public interface SwiftParserVisitor<T> extends ParseTreeVisitor<T> {
	/**
	 * Visit a parse tree produced by {@link SwiftParser#start}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStart(SwiftParser.StartContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#identifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifier(SwiftParser.IdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#identifierList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierList(SwiftParser.IdentifierListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#literal}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteral(SwiftParser.LiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#numericLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNumericLiteral(SwiftParser.NumericLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#booleanLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBooleanLiteral(SwiftParser.BooleanLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#nilLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitNilLiteral(SwiftParser.NilLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#integerLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIntegerLiteral(SwiftParser.IntegerLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#stringLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStringLiteral(SwiftParser.StringLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#operator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperator(SwiftParser.OperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#operatorHead}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorHead(SwiftParser.OperatorHeadContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#operatorCharacter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorCharacter(SwiftParser.OperatorCharacterContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#dotOperatorHead}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDotOperatorHead(SwiftParser.DotOperatorHeadContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#dotOperatorCharacter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDotOperatorCharacter(SwiftParser.DotOperatorCharacterContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#prefixOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrefixOperator(SwiftParser.PrefixOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#postfixOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPostfixOperator(SwiftParser.PostfixOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#binaryOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBinaryOperator(SwiftParser.BinaryOperatorContext ctx);
	/**
	 * Visit a parse tree produced by the {@code generalType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneralType(SwiftParser.GeneralTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code implicitlyUnwrappedOptionalType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImplicitlyUnwrappedOptionalType(SwiftParser.ImplicitlyUnwrappedOptionalTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code arrayType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayType(SwiftParser.ArrayTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code protocolCompositionTypeAlternative}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolCompositionTypeAlternative(SwiftParser.ProtocolCompositionTypeAlternativeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code anyType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAnyType(SwiftParser.AnyTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code dictionaryType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDictionaryType(SwiftParser.DictionaryTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code optionalType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOptionalType(SwiftParser.OptionalTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code metatypeType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMetatypeType(SwiftParser.MetatypeTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code functionType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionType(SwiftParser.FunctionTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code selfType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelfType(SwiftParser.SelfTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code quotedType}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitQuotedType(SwiftParser.QuotedTypeContext ctx);
	/**
	 * Visit a parse tree produced by the {@code tupleTypeAlternative}
	 * labeled alternative in {@link SwiftParser#type}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleTypeAlternative(SwiftParser.TupleTypeAlternativeContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typeAnnotation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeAnnotation(SwiftParser.TypeAnnotationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typeIdentifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeIdentifier(SwiftParser.TypeIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typeName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeName(SwiftParser.TypeNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tupleType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleType(SwiftParser.TupleTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tupleTypeElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleTypeElement(SwiftParser.TupleTypeElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#elementName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElementName(SwiftParser.ElementNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionTypeArgumentClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionTypeArgumentClause(SwiftParser.FunctionTypeArgumentClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionTypeArgumentList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionTypeArgumentList(SwiftParser.FunctionTypeArgumentListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionTypeArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionTypeArgument(SwiftParser.FunctionTypeArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#argumentLabel}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgumentLabel(SwiftParser.ArgumentLabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolCompositionType}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolCompositionType(SwiftParser.ProtocolCompositionTypeContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typeInheritanceClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeInheritanceClause(SwiftParser.TypeInheritanceClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#expression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpression(SwiftParser.ExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#expressionList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressionList(SwiftParser.ExpressionListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#prefixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrefixExpression(SwiftParser.PrefixExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#inOutExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInOutExpression(SwiftParser.InOutExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tryOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTryOperator(SwiftParser.TryOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#binaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBinaryExpression(SwiftParser.BinaryExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#assignmentOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAssignmentOperator(SwiftParser.AssignmentOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#conditionalOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConditionalOperator(SwiftParser.ConditionalOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typeCastingOperator}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeCastingOperator(SwiftParser.TypeCastingOperatorContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#primaryExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrimaryExpression(SwiftParser.PrimaryExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#literalExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLiteralExpression(SwiftParser.LiteralExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#arrayLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArrayLiteral(SwiftParser.ArrayLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#dictionaryLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDictionaryLiteral(SwiftParser.DictionaryLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#playgroundLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlaygroundLiteral(SwiftParser.PlaygroundLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#selfExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelfExpression(SwiftParser.SelfExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#selfMethodExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelfMethodExpression(SwiftParser.SelfMethodExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#selfSubscriptExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelfSubscriptExpression(SwiftParser.SelfSubscriptExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#selfInitializerExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelfInitializerExpression(SwiftParser.SelfInitializerExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#superclassExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSuperclassExpression(SwiftParser.SuperclassExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#superclassMethodExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSuperclassMethodExpression(SwiftParser.SuperclassMethodExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#superclassSubscriptExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSuperclassSubscriptExpression(SwiftParser.SuperclassSubscriptExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#superclassInitializerExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSuperclassInitializerExpression(SwiftParser.SuperclassInitializerExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#closureExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClosureExpression(SwiftParser.ClosureExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#closureSignature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClosureSignature(SwiftParser.ClosureSignatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#closureParameterClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClosureParameterClause(SwiftParser.ClosureParameterClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#closureParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClosureParameterList(SwiftParser.ClosureParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#closureParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClosureParameter(SwiftParser.ClosureParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#closureParameterName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClosureParameterName(SwiftParser.ClosureParameterNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#captureList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaptureList(SwiftParser.CaptureListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#captureListItem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaptureListItem(SwiftParser.CaptureListItemContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#captureSpecifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaptureSpecifier(SwiftParser.CaptureSpecifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#implicitMemberExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImplicitMemberExpression(SwiftParser.ImplicitMemberExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#parenthesizedExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParenthesizedExpression(SwiftParser.ParenthesizedExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tupleExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleExpression(SwiftParser.TupleExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tupleElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTupleElement(SwiftParser.TupleElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#wildcardExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWildcardExpression(SwiftParser.WildcardExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#keyPathExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyPathExpression(SwiftParser.KeyPathExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#keyPathComponent}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyPathComponent(SwiftParser.KeyPathComponentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#keyPathPostfix}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyPathPostfix(SwiftParser.KeyPathPostfixContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#selectorExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSelectorExpression(SwiftParser.SelectorExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#keyPathStringExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitKeyPathStringExpression(SwiftParser.KeyPathStringExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code generalPostfixExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGeneralPostfixExpression(SwiftParser.GeneralPostfixExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code initializerExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInitializerExpression(SwiftParser.InitializerExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code subscriptExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubscriptExpression(SwiftParser.SubscriptExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code forcedValueExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForcedValueExpression(SwiftParser.ForcedValueExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code functionCallExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCallExpression(SwiftParser.FunctionCallExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code postfixSelfExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPostfixSelfExpression(SwiftParser.PostfixSelfExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code postfixOperatorExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPostfixOperatorExpression(SwiftParser.PostfixOperatorExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code explicitMemberExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExplicitMemberExpression(SwiftParser.ExplicitMemberExpressionContext ctx);
	/**
	 * Visit a parse tree produced by the {@code optionalChainingExpression}
	 * labeled alternative in {@link SwiftParser#postfixExpression}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOptionalChainingExpression(SwiftParser.OptionalChainingExpressionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionCallArgumentClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCallArgumentClause(SwiftParser.FunctionCallArgumentClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionCallArgumentList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCallArgumentList(SwiftParser.FunctionCallArgumentListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionCallArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionCallArgument(SwiftParser.FunctionCallArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#trailingClosure}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTrailingClosure(SwiftParser.TrailingClosureContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#argumentNames}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArgumentNames(SwiftParser.ArgumentNamesContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#statement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatement(SwiftParser.StatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#statements}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatements(SwiftParser.StatementsContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#loopStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLoopStatement(SwiftParser.LoopStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#forInStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitForInStatement(SwiftParser.ForInStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#whileStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhileStatement(SwiftParser.WhileStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#conditionList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConditionList(SwiftParser.ConditionListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#condition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCondition(SwiftParser.ConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#caseCondition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaseCondition(SwiftParser.CaseConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#optionalBindingCondition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOptionalBindingCondition(SwiftParser.OptionalBindingConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#repeatWhileStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRepeatWhileStatement(SwiftParser.RepeatWhileStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#branchStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBranchStatement(SwiftParser.BranchStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#ifStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfStatement(SwiftParser.IfStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#elseClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseClause(SwiftParser.ElseClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#guardStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGuardStatement(SwiftParser.GuardStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#switchStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSwitchStatement(SwiftParser.SwitchStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#switchCase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSwitchCase(SwiftParser.SwitchCaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#caseLabel}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaseLabel(SwiftParser.CaseLabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#caseItemList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCaseItemList(SwiftParser.CaseItemListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#defaultLabel}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDefaultLabel(SwiftParser.DefaultLabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#whereClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWhereClause(SwiftParser.WhereClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#labeledStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLabeledStatement(SwiftParser.LabeledStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#statementLabel}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStatementLabel(SwiftParser.StatementLabelContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#labelName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLabelName(SwiftParser.LabelNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#controlTransferStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitControlTransferStatement(SwiftParser.ControlTransferStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#breakStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBreakStatement(SwiftParser.BreakStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#continueStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitContinueStatement(SwiftParser.ContinueStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#fallthroughStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFallthroughStatement(SwiftParser.FallthroughStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#returnStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitReturnStatement(SwiftParser.ReturnStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#throwStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitThrowStatement(SwiftParser.ThrowStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#deferStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeferStatement(SwiftParser.DeferStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#doStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDoStatement(SwiftParser.DoStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#catchClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCatchClause(SwiftParser.CatchClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#compilerControlStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCompilerControlStatement(SwiftParser.CompilerControlStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#conditionalCompilationBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConditionalCompilationBlock(SwiftParser.ConditionalCompilationBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#ifDirectiveClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIfDirectiveClause(SwiftParser.IfDirectiveClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#elseifDirectiveClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseifDirectiveClause(SwiftParser.ElseifDirectiveClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#elseDirectiveClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitElseDirectiveClause(SwiftParser.ElseDirectiveClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#compilationCondition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCompilationCondition(SwiftParser.CompilationConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#platformCondition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlatformCondition(SwiftParser.PlatformConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#operatingSystem}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatingSystem(SwiftParser.OperatingSystemContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#architecture}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitArchitecture(SwiftParser.ArchitectureContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#swiftVersion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSwiftVersion(SwiftParser.SwiftVersionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#lineControlStatement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLineControlStatement(SwiftParser.LineControlStatementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#lineNumber}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLineNumber(SwiftParser.LineNumberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#fileName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFileName(SwiftParser.FileNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#availabilityCondition}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAvailabilityCondition(SwiftParser.AvailabilityConditionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#availabilityArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAvailabilityArgument(SwiftParser.AvailabilityArgumentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#platformName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlatformName(SwiftParser.PlatformNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#platformVersion}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPlatformVersion(SwiftParser.PlatformVersionContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#declaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclaration(SwiftParser.DeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#topLevelDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTopLevelDeclaration(SwiftParser.TopLevelDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#codeBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitCodeBlock(SwiftParser.CodeBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#importDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportDeclaration(SwiftParser.ImportDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#importKind}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportKind(SwiftParser.ImportKindContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#importPath}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportPath(SwiftParser.ImportPathContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#importPathIdentifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitImportPathIdentifier(SwiftParser.ImportPathIdentifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#constantDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConstantDeclaration(SwiftParser.ConstantDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#patternInitializerList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternInitializerList(SwiftParser.PatternInitializerListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#patternInitializer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPatternInitializer(SwiftParser.PatternInitializerContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#initializer}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInitializer(SwiftParser.InitializerContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#variableDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableDeclaration(SwiftParser.VariableDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#variableDeclarationHead}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableDeclarationHead(SwiftParser.VariableDeclarationHeadContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#variableName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitVariableName(SwiftParser.VariableNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#getterSetterBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetterSetterBlock(SwiftParser.GetterSetterBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#getterClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetterClause(SwiftParser.GetterClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#setterClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetterClause(SwiftParser.SetterClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#setterName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetterName(SwiftParser.SetterNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#getterSetterKeywordBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetterSetterKeywordBlock(SwiftParser.GetterSetterKeywordBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#getterKeywordClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGetterKeywordClause(SwiftParser.GetterKeywordClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#setterKeywordClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSetterKeywordClause(SwiftParser.SetterKeywordClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#willSetDidSetBlock}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWillSetDidSetBlock(SwiftParser.WillSetDidSetBlockContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#willSetClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWillSetClause(SwiftParser.WillSetClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#didSetClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDidSetClause(SwiftParser.DidSetClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typealiasDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypealiasDeclaration(SwiftParser.TypealiasDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typealiasName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypealiasName(SwiftParser.TypealiasNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typealiasAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypealiasAssignment(SwiftParser.TypealiasAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionDeclaration(SwiftParser.FunctionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionHead}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionHead(SwiftParser.FunctionHeadContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionName(SwiftParser.FunctionNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionSignature}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionSignature(SwiftParser.FunctionSignatureContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionResult}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionResult(SwiftParser.FunctionResultContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#functionBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitFunctionBody(SwiftParser.FunctionBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#parameterClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameterClause(SwiftParser.ParameterClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#parameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameterList(SwiftParser.ParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#parameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitParameter(SwiftParser.ParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#externalParameterName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExternalParameterName(SwiftParser.ExternalParameterNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#localParameterName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitLocalParameterName(SwiftParser.LocalParameterNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#defaultArgumentClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDefaultArgumentClause(SwiftParser.DefaultArgumentClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#enumDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumDeclaration(SwiftParser.EnumDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#unionStyleEnum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnionStyleEnum(SwiftParser.UnionStyleEnumContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#unionStyleEnumMembers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnionStyleEnumMembers(SwiftParser.UnionStyleEnumMembersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#unionStyleEnumMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnionStyleEnumMember(SwiftParser.UnionStyleEnumMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#unionStyleEnumCaseClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnionStyleEnumCaseClause(SwiftParser.UnionStyleEnumCaseClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#unionStyleEnumCaseList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnionStyleEnumCaseList(SwiftParser.UnionStyleEnumCaseListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#unionStyleEnumCase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitUnionStyleEnumCase(SwiftParser.UnionStyleEnumCaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#enumName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumName(SwiftParser.EnumNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#enumCaseName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumCaseName(SwiftParser.EnumCaseNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueStyleEnum}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueStyleEnum(SwiftParser.RawValueStyleEnumContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueStyleEnumMembers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueStyleEnumMembers(SwiftParser.RawValueStyleEnumMembersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueStyleEnumMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueStyleEnumMember(SwiftParser.RawValueStyleEnumMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueStyleEnumCaseClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueStyleEnumCaseClause(SwiftParser.RawValueStyleEnumCaseClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueStyleEnumCaseList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueStyleEnumCaseList(SwiftParser.RawValueStyleEnumCaseListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueStyleEnumCase}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueStyleEnumCase(SwiftParser.RawValueStyleEnumCaseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueAssignment(SwiftParser.RawValueAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#rawValueLiteral}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRawValueLiteral(SwiftParser.RawValueLiteralContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#structDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStructDeclaration(SwiftParser.StructDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#structName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStructName(SwiftParser.StructNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#structBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStructBody(SwiftParser.StructBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#structMembers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStructMembers(SwiftParser.StructMembersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#structMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitStructMember(SwiftParser.StructMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#classDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassDeclaration(SwiftParser.ClassDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#className}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassName(SwiftParser.ClassNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#classBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassBody(SwiftParser.ClassBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#classMembers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassMembers(SwiftParser.ClassMembersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#classMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitClassMember(SwiftParser.ClassMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolDeclaration(SwiftParser.ProtocolDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolName(SwiftParser.ProtocolNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolBody(SwiftParser.ProtocolBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolMembers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolMembers(SwiftParser.ProtocolMembersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolMember(SwiftParser.ProtocolMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolMemberDeclatation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolMemberDeclatation(SwiftParser.ProtocolMemberDeclatationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolPropertyDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolPropertyDeclaration(SwiftParser.ProtocolPropertyDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolMethodDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolMethodDeclaration(SwiftParser.ProtocolMethodDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolInitializerDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolInitializerDeclaration(SwiftParser.ProtocolInitializerDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolSubscriptDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolSubscriptDeclaration(SwiftParser.ProtocolSubscriptDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#protocolAssociatedTypeDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitProtocolAssociatedTypeDeclaration(SwiftParser.ProtocolAssociatedTypeDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#initializerDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInitializerDeclaration(SwiftParser.InitializerDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#initializerHead}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInitializerHead(SwiftParser.InitializerHeadContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#initializerBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInitializerBody(SwiftParser.InitializerBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#deinitializerDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeinitializerDeclaration(SwiftParser.DeinitializerDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#extensionDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExtensionDeclaration(SwiftParser.ExtensionDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#extensionBody}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExtensionBody(SwiftParser.ExtensionBodyContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#extensionMembers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExtensionMembers(SwiftParser.ExtensionMembersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#extensionMember}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExtensionMember(SwiftParser.ExtensionMemberContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#subscriptDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubscriptDeclaration(SwiftParser.SubscriptDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#subscriptHead}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubscriptHead(SwiftParser.SubscriptHeadContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#subscriptResult}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSubscriptResult(SwiftParser.SubscriptResultContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#operatorDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOperatorDeclaration(SwiftParser.OperatorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#prefixOperatorDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrefixOperatorDeclaration(SwiftParser.PrefixOperatorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#postfixOperatorDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPostfixOperatorDeclaration(SwiftParser.PostfixOperatorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#infixOperatorDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInfixOperatorDeclaration(SwiftParser.InfixOperatorDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#infixOperatorGroup}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitInfixOperatorGroup(SwiftParser.InfixOperatorGroupContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupDeclaration}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupDeclaration(SwiftParser.PrecedenceGroupDeclarationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupAttributes}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupAttributes(SwiftParser.PrecedenceGroupAttributesContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupAttribute}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupAttribute(SwiftParser.PrecedenceGroupAttributeContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupRelation}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupRelation(SwiftParser.PrecedenceGroupRelationContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupAssignment}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupAssignment(SwiftParser.PrecedenceGroupAssignmentContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupAssociativity}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupAssociativity(SwiftParser.PrecedenceGroupAssociativityContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupNames}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupNames(SwiftParser.PrecedenceGroupNamesContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#precedenceGroupName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPrecedenceGroupName(SwiftParser.PrecedenceGroupNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#declarationModifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclarationModifier(SwiftParser.DeclarationModifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#declarationModifiers}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitDeclarationModifiers(SwiftParser.DeclarationModifiersContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#accessLevelModifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAccessLevelModifier(SwiftParser.AccessLevelModifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#mutationModifier}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitMutationModifier(SwiftParser.MutationModifierContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#attribute}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAttribute(SwiftParser.AttributeContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#attributeName}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAttributeName(SwiftParser.AttributeNameContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#attributeArgumentClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAttributeArgumentClause(SwiftParser.AttributeArgumentClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#attributes}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAttributes(SwiftParser.AttributesContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#balancedTokens}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBalancedTokens(SwiftParser.BalancedTokensContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#balancedToken}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitBalancedToken(SwiftParser.BalancedTokenContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#pattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitPattern(SwiftParser.PatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#wildcardPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitWildcardPattern(SwiftParser.WildcardPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#identifierPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIdentifierPattern(SwiftParser.IdentifierPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#valueBindingPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitValueBindingPattern(SwiftParser.ValueBindingPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tuplePattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTuplePattern(SwiftParser.TuplePatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tuplePatternElementList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTuplePatternElementList(SwiftParser.TuplePatternElementListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#tuplePatternElement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTuplePatternElement(SwiftParser.TuplePatternElementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#enumCasePattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitEnumCasePattern(SwiftParser.EnumCasePatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#optionalPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitOptionalPattern(SwiftParser.OptionalPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#typeCastingPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitTypeCastingPattern(SwiftParser.TypeCastingPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#isPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitIsPattern(SwiftParser.IsPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#asPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitAsPattern(SwiftParser.AsPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#expressionPattern}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitExpressionPattern(SwiftParser.ExpressionPatternContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericParameterClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericParameterClause(SwiftParser.GenericParameterClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericParameterList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericParameterList(SwiftParser.GenericParameterListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericParameter}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericParameter(SwiftParser.GenericParameterContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericWhereClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericWhereClause(SwiftParser.GenericWhereClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#requirementList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRequirementList(SwiftParser.RequirementListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#requirement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitRequirement(SwiftParser.RequirementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#conformanceRequirement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitConformanceRequirement(SwiftParser.ConformanceRequirementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#sameTypeRequirement}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitSameTypeRequirement(SwiftParser.SameTypeRequirementContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericArgumentClause}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericArgumentClause(SwiftParser.GenericArgumentClauseContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericArgumentList}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericArgumentList(SwiftParser.GenericArgumentListContext ctx);
	/**
	 * Visit a parse tree produced by {@link SwiftParser#genericArgument}.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	T visitGenericArgument(SwiftParser.GenericArgumentContext ctx);
}