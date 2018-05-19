#pragma once
#include "Operator.hpp"

namespace swift2ts
{

namespace ast
{

class BinaryOperator : public Operator
{
  public:
    BinaryOperator(
        size_t line, size_t col,
        std::string text, NodePtr left, NodePtr right
    );
    std::any accept(const ASTVisitor &visitor) const override;
};

using BinaryOperatorPtr = std::shared_ptr<BinaryOperator>;

} // namespace ast

} // namespace swift2ts
