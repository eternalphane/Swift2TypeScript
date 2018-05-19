#include "AnyType.hpp"

using namespace swift2ts::ast;

AnyType::AnyType(size_t line, size_t col)
    : Node(line, col)
{
}

std::any AnyType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
