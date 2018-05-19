#pragma once
#include "Operator.hpp"

namespace swift2ts
{

namespace ast
{

class PostfixOperator : public Operator
{
  public:
    PostfixOperator(size_t line, size_t col, std::string text, NodePtr left);
    std::any accept(const ASTVisitor &visitor) const override;
};

using PostfixOperatorPtr = std::shared_ptr<PostfixOperator>;

} // namespace ast

} // namespace swift2ts
