#include "OptionalType.hpp"

using namespace swift2ts::ast;

OptionalType::OptionalType(size_t line, size_t col, NodePtr type, int kind)
    : Node(line, col), type(type), kind(kind)
{
}

std::any OptionalType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
