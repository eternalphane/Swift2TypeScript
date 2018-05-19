#include "InOutExpression.hpp"

using namespace swift2ts::ast;

InOutExpression::InOutExpression(size_t line, size_t col, NodePtr expr)
    : Node(line, col),
      expr(expr)
{
}

std::any InOutExpression::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
