#include "PostfixOperator.hpp"

using namespace swift2ts::ast;

PostfixOperator::PostfixOperator(
    size_t line, size_t col,
    std::string text, NodePtr left
) : Operator(line, col, std::move(text), left, nullptr)
{
}

std::any PostfixOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
