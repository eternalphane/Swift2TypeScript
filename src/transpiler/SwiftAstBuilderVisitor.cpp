#include "SwiftAstBuilderVisitor.hpp"
#include "ast/ASTNodes.hpp"
#include "../util/string_util.hpp"

using namespace swift2ts;

const std::string SwiftAstBuilderVisitor::VALID_PRE_OP[] { "+", "-", "!", "~" };

antlrcpp::Any SwiftAstBuilderVisitor::visitAccessLevelModifier(SwiftParser::AccessLevelModifierContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAnyType(SwiftParser::AnyTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitArchitecture(SwiftParser::ArchitectureContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitArgumentLabel(SwiftParser::ArgumentLabelContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitArgumentNames(SwiftParser::ArgumentNamesContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitArrayLiteral(SwiftParser::ArrayLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitArrayType(SwiftParser::ArrayTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAsPattern(SwiftParser::AsPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAssignmentOperator(SwiftParser::AssignmentOperatorContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAttribute(SwiftParser::AttributeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAttributeArgumentClause(SwiftParser::AttributeArgumentClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAttributeName(SwiftParser::AttributeNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAttributes(SwiftParser::AttributesContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAvailabilityArgument(SwiftParser::AvailabilityArgumentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitAvailabilityCondition(SwiftParser::AvailabilityConditionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBalancedToken(SwiftParser::BalancedTokenContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBalancedTokens(SwiftParser::BalancedTokensContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBinaryExpression(SwiftParser::BinaryExpressionContext *ctx)
{
    if (ctx->binaryOperator())
    {
        return std::make_tuple(
            visit(ctx->binaryOperator()).as<ast::BinaryOperatorPtr>(),
            visit(ctx->prefixExpression()).as<ast::NodePtr>()
        );
    }
    else if (ctx->typeCastingOperator())
    {
        return visit(ctx->typeCastingOperator());
    }
    else
    {
        auto line = ctx->start->getLine(), col = ctx->start->getCharPositionInLine();
        auto expr = visit(ctx->prefixExpression()).as<ast::NodePtr>();
        if (ctx->tryOperator())
        {
            auto top = visit(ctx->tryOperator()).as<ast::TryOperatorPtr>();
            top->expr = expr;
            expr = top;
        }
        if (ctx->assignmentOperator())
        {
            return std::make_shared<ast::AssignmentOperator>(line, col, nullptr, expr);
        }
        else
        {
            auto cop = visit(ctx->conditionalOperator()).as<ast::ConditionalOperatorPtr>();
            cop->falseBranch = expr;
            return cop;
        }
    }
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBinaryOperator(SwiftParser::BinaryOperatorContext *ctx)
{
    auto line = ctx->start->getLine(), col = ctx->start->getCharPositionInLine();
    auto text = ctx->start->getText();
    return std::make_shared<ast::BinaryOperator>(line, col, text, nullptr, nullptr);
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBooleanLiteral(SwiftParser::BooleanLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBranchStatement(SwiftParser::BranchStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitBreakStatement(SwiftParser::BreakStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCaptureList(SwiftParser::CaptureListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCaptureListItem(SwiftParser::CaptureListItemContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCaptureSpecifier(SwiftParser::CaptureSpecifierContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCaseCondition(SwiftParser::CaseConditionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCaseItemList(SwiftParser::CaseItemListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCaseLabel(SwiftParser::CaseLabelContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCatchClause(SwiftParser::CatchClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClassBody(SwiftParser::ClassBodyContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClassDeclaration(SwiftParser::ClassDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClassMember(SwiftParser::ClassMemberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClassMembers(SwiftParser::ClassMembersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClassName(SwiftParser::ClassNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClosureExpression(SwiftParser::ClosureExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClosureParameter(SwiftParser::ClosureParameterContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClosureParameterClause(SwiftParser::ClosureParameterClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClosureParameterList(SwiftParser::ClosureParameterListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClosureParameterName(SwiftParser::ClosureParameterNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitClosureSignature(SwiftParser::ClosureSignatureContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCodeBlock(SwiftParser::CodeBlockContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCompilationCondition(SwiftParser::CompilationConditionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCompilerControlStatement(SwiftParser::CompilerControlStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitCondition(SwiftParser::ConditionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitConditionalCompilationBlock(SwiftParser::ConditionalCompilationBlockContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitConditionalOperator(SwiftParser::ConditionalOperatorContext *ctx)
{
    auto line = ctx->start->getLine(), col = ctx->start->getCharPositionInLine();
    auto expr = visit(ctx->expression()).as<ast::NodePtr>();
    return std::make_shared<ast::ConditionalOperator>(line, col, nullptr, expr, nullptr);
}

antlrcpp::Any SwiftAstBuilderVisitor::visitConditionList(SwiftParser::ConditionListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitConformanceRequirement(SwiftParser::ConformanceRequirementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitConstantDeclaration(SwiftParser::ConstantDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitContinueStatement(SwiftParser::ContinueStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitControlTransferStatement(SwiftParser::ControlTransferStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDeclaration(SwiftParser::DeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDeclarationModifier(SwiftParser::DeclarationModifierContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDeclarationModifiers(SwiftParser::DeclarationModifiersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDefaultArgumentClause(SwiftParser::DefaultArgumentClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDefaultLabel(SwiftParser::DefaultLabelContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDeferStatement(SwiftParser::DeferStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDeinitializerDeclaration(SwiftParser::DeinitializerDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDictionaryLiteral(SwiftParser::DictionaryLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDictionaryType(SwiftParser::DictionaryTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDidSetClause(SwiftParser::DidSetClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitDoStatement(SwiftParser::DoStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitElementName(SwiftParser::ElementNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitElseClause(SwiftParser::ElseClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitElseDirectiveClause(SwiftParser::ElseDirectiveClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitElseifDirectiveClause(SwiftParser::ElseifDirectiveClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitEnumCaseName(SwiftParser::EnumCaseNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitEnumCasePattern(SwiftParser::EnumCasePatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitEnumDeclaration(SwiftParser::EnumDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitEnumName(SwiftParser::EnumNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExplicitMemberExpression(SwiftParser::ExplicitMemberExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExpression(SwiftParser::ExpressionContext *ctx)
{
    std::stack<ast::NodePtr> expr_stack;
    std::stack<ast::BinaryOperatorPtr> bop_stack;
    expr_stack.push(std::move(visit(ctx->prefixExpression()).as<ast::NodePtr>()));
    for (auto bexpr : ctx->binaryExpression())
    {
        auto result = visit(bexpr);
        if (bexpr->binaryOperator())
        {
            // binary operator
            // push into stack
            auto&& [bop_n, expr_n] = result.as<std::tuple<ast::BinaryOperatorPtr, ast::NodePtr>>();
            for (auto bop = bop_stack.top();
                 !bop_stack.empty() && _operators.compare(bop->text(), bop_n->text()) >= 0;
                 bop = (bop_stack.pop(), bop_stack.top()))
            {
                bop->right = expr_stack.top();
                expr_stack.pop();
                bop->left = expr_stack.top();
                expr_stack.top() = bop;
            }
            bop_stack.push(bop_n);
            expr_stack.push(expr_n);
        }
        else
        {
            // not binary operator
            // build ast
            for (auto bop = bop_stack.top();
                 !bop_stack.empty();
                 bop = (bop_stack.pop(), bop_stack.top()))
            {
                bop->right = expr_stack.top();
                expr_stack.pop();
                bop->left = expr_stack.top();
                expr_stack.top() = bop;
            }
            if (bexpr->assignmentOperator())
            {
                auto aop = result.as<ast::AssignmentOperatorPtr>();
                aop->left = expr_stack.top();
                expr_stack.top() = aop;
            }
            else if (bexpr->conditionalOperator())
            {
                auto cop = result.as<ast::ConditionalOperatorPtr>();
                cop->condition = expr_stack.top();
                expr_stack.top() = cop;
            }
            else
            {
                auto tcop = result.as<ast::TypeCastingOperatorPtr>();
                tcop->expr = expr_stack.top();
                expr_stack.top() = tcop;
            }
        }
    }
    if (ctx->tryOperator())
    {
        auto try_op = visit(ctx->tryOperator()).as<ast::TryOperatorPtr>();
        try_op->expr = expr_stack.top();
        expr_stack.top() = try_op;
    }
    return expr_stack.top();
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExpressionList(SwiftParser::ExpressionListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExpressionPattern(SwiftParser::ExpressionPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExtensionBody(SwiftParser::ExtensionBodyContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExtensionDeclaration(SwiftParser::ExtensionDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExtensionMember(SwiftParser::ExtensionMemberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExtensionMembers(SwiftParser::ExtensionMembersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitExternalParameterName(SwiftParser::ExternalParameterNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFallthroughStatement(SwiftParser::FallthroughStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFileName(SwiftParser::FileNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitForcedValueExpression(SwiftParser::ForcedValueExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitForInStatement(SwiftParser::ForInStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionBody(SwiftParser::FunctionBodyContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionCallArgument(SwiftParser::FunctionCallArgumentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionCallArgumentClause(SwiftParser::FunctionCallArgumentClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionCallArgumentList(SwiftParser::FunctionCallArgumentListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionCallExpression(SwiftParser::FunctionCallExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionDeclaration(SwiftParser::FunctionDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionHead(SwiftParser::FunctionHeadContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionName(SwiftParser::FunctionNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionResult(SwiftParser::FunctionResultContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionSignature(SwiftParser::FunctionSignatureContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionType(SwiftParser::FunctionTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionTypeArgument(SwiftParser::FunctionTypeArgumentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionTypeArgumentClause(SwiftParser::FunctionTypeArgumentClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitFunctionTypeArgumentList(SwiftParser::FunctionTypeArgumentListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGeneralPostfixExpression(SwiftParser::GeneralPostfixExpressionContext *ctx)
{
    return visit(ctx->primaryExpression());
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGeneralType(SwiftParser::GeneralTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericArgument(SwiftParser::GenericArgumentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericArgumentClause(SwiftParser::GenericArgumentClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericArgumentList(SwiftParser::GenericArgumentListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericParameter(SwiftParser::GenericParameterContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericParameterClause(SwiftParser::GenericParameterClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericParameterList(SwiftParser::GenericParameterListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGenericWhereClause(SwiftParser::GenericWhereClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGetterClause(SwiftParser::GetterClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGetterKeywordClause(SwiftParser::GetterKeywordClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGetterSetterBlock(SwiftParser::GetterSetterBlockContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGetterSetterKeywordBlock(SwiftParser::GetterSetterKeywordBlockContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitGuardStatement(SwiftParser::GuardStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIdentifier(SwiftParser::IdentifierContext *ctx)
{
    auto line = ctx->start->getLine(), col = ctx->start->getCharPositionInLine();
    std::string text;
    if (ctx->QUOTED_IDENTIFIER())
    {
        auto quoted = ctx->QUOTED_IDENTIFIER()->getText();
        text = quoted.substr(1, quoted.size() - 2);
    }
    else
    {
        text = ctx->start->getText();
    }
    return std::make_shared<ast::Identifier>(line, col, std::move(text));
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIdentifierList(SwiftParser::IdentifierListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIdentifierPattern(SwiftParser::IdentifierPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIfDirectiveClause(SwiftParser::IfDirectiveClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIfStatement(SwiftParser::IfStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitImplicitlyUnwrappedOptionalType(SwiftParser::ImplicitlyUnwrappedOptionalTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitImplicitMemberExpression(SwiftParser::ImplicitMemberExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitImportDeclaration(SwiftParser::ImportDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitImportKind(SwiftParser::ImportKindContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitImportPath(SwiftParser::ImportPathContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitImportPathIdentifier(SwiftParser::ImportPathIdentifierContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInfixOperatorDeclaration(SwiftParser::InfixOperatorDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInfixOperatorGroup(SwiftParser::InfixOperatorGroupContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInitializer(SwiftParser::InitializerContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInitializerBody(SwiftParser::InitializerBodyContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInitializerDeclaration(SwiftParser::InitializerDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInitializerExpression(SwiftParser::InitializerExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInitializerHead(SwiftParser::InitializerHeadContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitInOutExpression(SwiftParser::InOutExpressionContext *ctx)
{
    auto line = ctx->start->getLine(), col = ctx->start->getCharPositionInLine();
    return std::make_shared<ast::InOutExpression>(
        line, col,
        visit(ctx->identifier()).as<ast::NodePtr>()
    );
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIntegerLiteral(SwiftParser::IntegerLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitIsPattern(SwiftParser::IsPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitKeyPathComponent(SwiftParser::KeyPathComponentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitKeyPathExpression(SwiftParser::KeyPathExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitKeyPathPostfix(SwiftParser::KeyPathPostfixContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitKeyPathStringExpression(SwiftParser::KeyPathStringExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLabeledStatement(SwiftParser::LabeledStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLabelName(SwiftParser::LabelNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLineControlStatement(SwiftParser::LineControlStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLineNumber(SwiftParser::LineNumberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLiteral(SwiftParser::LiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLiteralExpression(SwiftParser::LiteralExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLocalParameterName(SwiftParser::LocalParameterNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitLoopStatement(SwiftParser::LoopStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitMetatypeType(SwiftParser::MetatypeTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitMutationModifier(SwiftParser::MutationModifierContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitNilLiteral(SwiftParser::NilLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitNumericLiteral(SwiftParser::NumericLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOperatingSystem(SwiftParser::OperatingSystemContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOperator_(SwiftParser::Operator_Context *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOperatorDeclaration(SwiftParser::OperatorDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOptionalBindingCondition(SwiftParser::OptionalBindingConditionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOptionalChainingExpression(SwiftParser::OptionalChainingExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOptionalPattern(SwiftParser::OptionalPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitOptionalType(SwiftParser::OptionalTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitParameter(SwiftParser::ParameterContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitParameterClause(SwiftParser::ParameterClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitParameterList(SwiftParser::ParameterListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitParenthesizedExpression(SwiftParser::ParenthesizedExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPatternInitializer(SwiftParser::PatternInitializerContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPatternInitializerList(SwiftParser::PatternInitializerListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPlatformCondition(SwiftParser::PlatformConditionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPlatformName(SwiftParser::PlatformNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPlatformVersion(SwiftParser::PlatformVersionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPlaygroundLiteral(SwiftParser::PlaygroundLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPostfixOperator(SwiftParser::PostfixOperatorContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPostfixOperatorDeclaration(SwiftParser::PostfixOperatorDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPostfixOperatorExpression(SwiftParser::PostfixOperatorExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPostfixSelfExpression(SwiftParser::PostfixSelfExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupAssignment(SwiftParser::PrecedenceGroupAssignmentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupAssociativity(SwiftParser::PrecedenceGroupAssociativityContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupAttribute(SwiftParser::PrecedenceGroupAttributeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupAttributes(SwiftParser::PrecedenceGroupAttributesContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupDeclaration(SwiftParser::PrecedenceGroupDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupName(SwiftParser::PrecedenceGroupNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupNames(SwiftParser::PrecedenceGroupNamesContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrecedenceGroupRelation(SwiftParser::PrecedenceGroupRelationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrefixExpression(SwiftParser::PrefixExpressionContext *ctx)
{
    if (ctx->inOutExpression())
        return visit(ctx->inOutExpression());
    if (ctx->prefixOperator())
    {
        auto pop = visit(ctx->prefixOperator()).as<ast::PrefixOperatorPtr>();
        pop->right = visit(ctx->postfixExpression()).as<ast::NodePtr>();
        return pop;
    }
    return visit(ctx->postfixExpression());
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrefixOperator(SwiftParser::PrefixOperatorContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrefixOperatorDeclaration(SwiftParser::PrefixOperatorDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitPrimaryExpression(SwiftParser::PrimaryExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProgram(SwiftParser::ProgramContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolAssociatedTypeDeclaration(SwiftParser::ProtocolAssociatedTypeDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolBody(SwiftParser::ProtocolBodyContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolCompositionType(SwiftParser::ProtocolCompositionTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolCompositionTypeAlternative(SwiftParser::ProtocolCompositionTypeAlternativeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolDeclaration(SwiftParser::ProtocolDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolInitializerDeclaration(SwiftParser::ProtocolInitializerDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolMember(SwiftParser::ProtocolMemberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolMemberDeclatation(SwiftParser::ProtocolMemberDeclatationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolMembers(SwiftParser::ProtocolMembersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolMethodDeclaration(SwiftParser::ProtocolMethodDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolName(SwiftParser::ProtocolNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolPropertyDeclaration(SwiftParser::ProtocolPropertyDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitProtocolSubscriptDeclaration(SwiftParser::ProtocolSubscriptDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitQuotedType(SwiftParser::QuotedTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueAssignment(SwiftParser::RawValueAssignmentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueLiteral(SwiftParser::RawValueLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueStyleEnum(SwiftParser::RawValueStyleEnumContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueStyleEnumCase(SwiftParser::RawValueStyleEnumCaseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueStyleEnumCaseClause(SwiftParser::RawValueStyleEnumCaseClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueStyleEnumCaseList(SwiftParser::RawValueStyleEnumCaseListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueStyleEnumMember(SwiftParser::RawValueStyleEnumMemberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRawValueStyleEnumMembers(SwiftParser::RawValueStyleEnumMembersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRepeatWhileStatement(SwiftParser::RepeatWhileStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRequirement(SwiftParser::RequirementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitRequirementList(SwiftParser::RequirementListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitReturnStatement(SwiftParser::ReturnStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSameTypeRequirement(SwiftParser::SameTypeRequirementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSelectorExpression(SwiftParser::SelectorExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSelfExpression(SwiftParser::SelfExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSelfInitializerExpression(SwiftParser::SelfInitializerExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSelfMethodExpression(SwiftParser::SelfMethodExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSelfSubscriptExpression(SwiftParser::SelfSubscriptExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSelfType(SwiftParser::SelfTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSetterClause(SwiftParser::SetterClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSetterKeywordClause(SwiftParser::SetterKeywordClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSetterName(SwiftParser::SetterNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStatement(SwiftParser::StatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStatementLabel(SwiftParser::StatementLabelContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStatements(SwiftParser::StatementsContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStringLiteral(SwiftParser::StringLiteralContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStructBody(SwiftParser::StructBodyContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStructDeclaration(SwiftParser::StructDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStructMember(SwiftParser::StructMemberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStructMembers(SwiftParser::StructMembersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitStructName(SwiftParser::StructNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSubscriptDeclaration(SwiftParser::SubscriptDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSubscriptExpression(SwiftParser::SubscriptExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSubscriptHead(SwiftParser::SubscriptHeadContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSubscriptResult(SwiftParser::SubscriptResultContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSuperclassExpression(SwiftParser::SuperclassExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSuperclassInitializerExpression(SwiftParser::SuperclassInitializerExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSuperclassMethodExpression(SwiftParser::SuperclassMethodExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSuperclassSubscriptExpression(SwiftParser::SuperclassSubscriptExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSwiftVersion(SwiftParser::SwiftVersionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSwitchCase(SwiftParser::SwitchCaseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitSwitchStatement(SwiftParser::SwitchStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitThrowStatement(SwiftParser::ThrowStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTopLevelDeclaration(SwiftParser::TopLevelDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTrailingClosure(SwiftParser::TrailingClosureContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTryOperator(SwiftParser::TryOperatorContext *ctx)
{
    auto line = ctx->start->getLine(), col = ctx->start->getCharPositionInLine();
    int type = ast::TryOperator::none;
    if (ctx->TYPE)
    {
        if (ctx->TYPE->getType() == SwiftParser::QUESTION)
            type = ast::TryOperator::optional;
        else
            type = ast::TryOperator::forced;
    }
    return std::make_shared<ast::TryOperator>(line, col, nullptr, type);
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTupleElement(SwiftParser::TupleElementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTupleExpression(SwiftParser::TupleExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTuplePattern(SwiftParser::TuplePatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTuplePatternAlternative(SwiftParser::TuplePatternAlternativeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTuplePatternElement(SwiftParser::TuplePatternElementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTuplePatternElementList(SwiftParser::TuplePatternElementListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTupleType(SwiftParser::TupleTypeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTupleTypeAlternative(SwiftParser::TupleTypeAlternativeContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTupleTypeElement(SwiftParser::TupleTypeElementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypealiasAssignment(SwiftParser::TypealiasAssignmentContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypealiasDeclaration(SwiftParser::TypealiasDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypealiasName(SwiftParser::TypealiasNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypeAnnotation(SwiftParser::TypeAnnotationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypeCastingOperator(SwiftParser::TypeCastingOperatorContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypeIdentifier(SwiftParser::TypeIdentifierContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypeInheritanceClause(SwiftParser::TypeInheritanceClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitTypeName(SwiftParser::TypeNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitUnionStyleEnum(SwiftParser::UnionStyleEnumContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitUnionStyleEnumCase(SwiftParser::UnionStyleEnumCaseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitUnionStyleEnumCaseClause(SwiftParser::UnionStyleEnumCaseClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitUnionStyleEnumCaseList(SwiftParser::UnionStyleEnumCaseListContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitUnionStyleEnumMember(SwiftParser::UnionStyleEnumMemberContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitUnionStyleEnumMembers(SwiftParser::UnionStyleEnumMembersContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitValueBindingPattern(SwiftParser::ValueBindingPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitVariableDeclaration(SwiftParser::VariableDeclarationContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitVariableDeclarationHead(SwiftParser::VariableDeclarationHeadContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitVariableName(SwiftParser::VariableNameContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitWhereClause(SwiftParser::WhereClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitWhileStatement(SwiftParser::WhileStatementContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitWildcardExpression(SwiftParser::WildcardExpressionContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitWildcardPattern(SwiftParser::WildcardPatternContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitWillSetClause(SwiftParser::WillSetClauseContext *ctx)
{
    return nullptr;
}

antlrcpp::Any SwiftAstBuilderVisitor::visitWillSetDidSetBlock(SwiftParser::WillSetDidSetBlockContext *ctx)
{
    return nullptr;
}
