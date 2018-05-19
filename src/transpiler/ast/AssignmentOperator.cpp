#include "AssignmentOperator.hpp"

using namespace swift2ts::ast;

AssignmentOperator::AssignmentOperator(size_t line, size_t col, NodePtr left, NodePtr right)
    : Node(line, col),
      left(left), right(right)
{
}

std::any AssignmentOperator::accept(const ASTVisitor &visitor) const
{
    return visitor.visit(*this);
}
