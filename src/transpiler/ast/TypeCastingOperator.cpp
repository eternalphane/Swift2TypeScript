#include "TypeCastingOperator.hpp"

using namespace swift2ts::ast;

TypeCastingOperator::TypeCastingOperator(
    size_t line, size_t col,
    NodePtr expr, NodePtr type, int kind
) : Node(line, col),
    expr(expr), type(type), kind(kind)
{
}

std::any TypeCastingOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
