#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class TryOperator : public Node
{
  public:
    enum { none, optional, forced };

    util::property<NodePtr> expr;
    util::property<int> kind;

    TryOperator(size_t line, size_t col, NodePtr expr, int kind);
    std::any accept(const ASTVisitor &visitor) const override;
};

using TryOperatorPtr = std::shared_ptr<TryOperator>;

} // namespace ast

} // namespace swift2ts
