#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class AssignmentOperator : public Node
{
  public:
    util::property<NodePtr> left, right;

    AssignmentOperator(size_t line, size_t col, NodePtr left, NodePtr right);
    std::any accept(const ASTVisitor &visitor) const override;
};

using AssignmentOperatorPtr = std::shared_ptr<AssignmentOperator>;

} // namespace ast

} // namespace swift2ts
