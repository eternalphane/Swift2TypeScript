#include "PrefixOperator.hpp"

using namespace swift2ts::ast;

PrefixOperator::PrefixOperator(
    size_t line, size_t col,
    std::string text, NodePtr right
) : Operator(line, col, std::move(text), nullptr, right)
{
}

std::any PrefixOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
