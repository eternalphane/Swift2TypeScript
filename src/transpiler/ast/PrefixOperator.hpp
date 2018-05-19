#pragma once
#include "Operator.hpp"
#include <utility>

namespace swift2ts
{

namespace ast
{

class PrefixOperator : public Operator
{
  public:
    PrefixOperator(size_t line, size_t col, std::string text, NodePtr right);
    std::any accept(const ASTVisitor &visitor) const override;
};

using PrefixOperatorPtr = std::shared_ptr<PrefixOperator>;

} // namespace ast

} // namespace swift2ts
