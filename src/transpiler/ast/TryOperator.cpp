#include "TryOperator.hpp"

using namespace swift2ts::ast;

TryOperator::TryOperator(size_t line, size_t col, NodePtr expr, int kind)
    : Node(line, col),
      expr(expr), kind(kind)
{
}

std::any TryOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
