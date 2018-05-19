#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class ConditionalOperator : public Node
{
  public:
    util::property<NodePtr> condition, trueBranch, falseBranch;

    ConditionalOperator(
        size_t line, size_t col,
        NodePtr condition, NodePtr trueBranch, NodePtr falseBranch
    );
    std::any accept(const ASTVisitor &visitor) const override;
};

using ConditionalOperatorPtr = std::shared_ptr<ConditionalOperator>;

} // namespace ast

} // namespace swift2ts
