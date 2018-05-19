#pragma once
#include "Node.hpp"

namespace swift2ts
{

namespace ast
{

class AnyType : public Node
{
  public:
    AnyType(size_t line, size_t col);
    std::any accept(const ASTVisitor &visitor) const override;
};

using AnyTypePtr = std::shared_ptr<AnyType>;

} // namespace ast

} // namespace swift2ts
