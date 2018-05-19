#include "Attribute.hpp"

using namespace swift2ts::ast;

Attribute::Attribute(size_t line, size_t col, IdentifierPtr name)
    : Node(line, col), name(name)
{
}

std::any Attribute::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
