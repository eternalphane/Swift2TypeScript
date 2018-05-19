#include "ArrayType.hpp"

using namespace swift2ts::ast;

ArrayType::ArrayType(size_t line, size_t col, NodePtr type)
    : Node(line, col), type(type)
{
}

std::any ArrayType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
