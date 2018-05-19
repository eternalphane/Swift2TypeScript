#include "ConditionalOperator.hpp"

using namespace swift2ts::ast;

ConditionalOperator::ConditionalOperator(
    size_t line, size_t col,
    NodePtr condition, NodePtr trueBranch, NodePtr falseBranch
) : Node(line, col),
    condition(condition), trueBranch(trueBranch), falseBranch(falseBranch)
{
}

std::any ConditionalOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
