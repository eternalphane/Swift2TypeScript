#include "SelfType.hpp"

using namespace swift2ts::ast;

SelfType::SelfType(size_t line, size_t col)
    : Node(line, col)
{
}

std::any SelfType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
