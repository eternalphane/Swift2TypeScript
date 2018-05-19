#include "BinaryOperator.hpp"

using namespace swift2ts::ast;

BinaryOperator::BinaryOperator(
    size_t line, size_t col,
    std::string text, NodePtr left, NodePtr right
) : Operator(line, col, std::move(text), left, right)
{
}

std::any BinaryOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
