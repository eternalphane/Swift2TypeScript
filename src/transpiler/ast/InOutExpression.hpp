#pragma once
#include "Identifier.hpp"

namespace swift2ts
{

namespace ast
{

class InOutExpression : public Node
{
  public:
    util::property<NodePtr> expr;

    InOutExpression(size_t line, size_t col, NodePtr expr);
    std::any accept(const ASTVisitor &visitor) const override;
};

using InOutExpressionPtr = std::shared_ptr<InOutExpression>;

} // namespace ast

} // namespace swift2ts
