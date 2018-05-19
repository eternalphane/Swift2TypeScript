#include "FunctionType.hpp"

using namespace swift2ts::ast;

FunctionType::FunctionType(size_t line, size_t col, bool variadic, int kind, NodePtr returnType)
    : Node(line, col), variadic(variadic), kind(kind), returnType(returnType)
{
}

std::any FunctionType::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
